// import général
import "bootstrap/dist/css/bootstrap.css";
import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource";
import "angular-ui-bootstrap";

// import des services
import apiUrls from "./utils/apiUrls.service";
import PizzaService from "./pizzas/pizza.service";
import panierService from "./panier/panier.service";
import LoginService from "./comptes/login/login.service";
import NouvCompteService from "./comptes/nouvCompte/nouvCompte.service";

// import des components
import pizzaComponent from "./pizzas/pizza.component";
import panierComponent from "./panier/panier.component";
import menuComponent from "./menu/menu.component";
import headerComponent from "./header/header.component";
import footerComponent from "./footer/footer.component";
import LoginCmp from "./comptes/login/login.component";
import NouvCompteCmp from "./comptes/nouvCompte/nouvCompte.component";

angular
  .module("pizzeriaApp", ["ngRoute", "ngResource"])
  .component("pizzaComponent", pizzaComponent)
  .component("panierCmp", panierComponent)
  .component("menuComponent", menuComponent)
  .component("headerComponent", headerComponent)
  .component("footerComponent", footerComponent)
  .component("loginCmp", LoginCmp)
  .component("nouvCompteCmp", NouvCompteCmp)
  .constant("apiUrls", apiUrls)
  .service("LoginService", LoginService)
  .service("NouvCompteService", NouvCompteService)
  .service("PizzaService", PizzaService)
  .service(panierService.name, panierService)
  .filter("capitalize", function() {
    // https://gist.github.com/paulakreuger/b2af1958f3d67f46447e
    return function(input) {
      if (input != null) {
        input = input.toLowerCase();
      }
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
  })
  .config($routeProvider => {
    $routeProvider
      .when("/pizzas", {
        template: "<pizza-component></pizza-component>"
      })
      .when("/panier", {
        template: "<panier-cmp></panier-cmp>"
      })
      .when("/register", {
        template: "<nouv-compte-cmp></nouv-compte-cmp>",
        publicAccess: true
      })
      .when("/login", {
        template: "<login-cmp></login-cmp>",
        publicAccess: true
      })
      .otherwise({
        redirectTo: "/login"
      });
  });
