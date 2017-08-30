console.log("Bonjour App");

import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import ngResource from 'angular-resource'
import ngRoute from 'angular-route'
import 'angular-ui-bootstrap'

//controler
import listeCommandeController from "./liste-commande/listeCommandeController";
//service
import listeCommandeService from "./liste-commande/listeCommandeService";
import PizzaService from "./pizzas/pizza.service";
import panierService from "./panier/panier.service";
import LoginService from "./comptes/login/login.service";
import NouvCompteService from "./comptes/nouvCompte/nouvCompte.service";
// constant
import apiUrls from "./utils/apiUrls.service.js";

// import des components
import pizzaComponent from "./pizzas/pizza.component";
import panierComponent from "./panier/panier.component";
import menuComponent from "./menu/menu.component";
import headerComponent from "./header/header.component";
import footerComponent from "./footer/footer.component";
import LoginCmp from "./comptes/login/login.component";
import NouvCompteCmp from "./comptes/nouvCompte/nouvCompte.component";
import listeCommande from './liste-commande/listeCommande.component';

angular.module('pizzeriaApp', ['ngRoute', 'ngResource'])
  .component('listeCommande', listeCommande)
  .component("pizzaComponent", pizzaComponent)
  .component('panierCmp', panierComponent)
  .component('menuComponent', menuComponent)
  .component('headerComponent', headerComponent)
  .component('footerComponent', footerComponent)
  .component("loginCmp", LoginCmp)
  .component("nouvCompteCmp", NouvCompteCmp)
  .service("LoginService", LoginService)
  .service("NouvCompteService", NouvCompteService)
  .service(listeCommandeService.name, listeCommandeService)
  .service(panierService.name, panierService)
  .service("PizzaService", PizzaService)
  .constant('apiUrls', apiUrls)
  .filter('capitalize', function () { // https://gist.github.com/paulakreuger/b2af1958f3d67f46447e
    return function (input) {
      if (input != null) {
        input = input.toLowerCase();
      }
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
  })
  .config($routeProvider => {
    $routeProvider
      .when("/pizzas", {
        template: "<pizza-component></pizza-component>"
      })
      .when("/commande", {
        template: "<liste-commande></liste-commande>"
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
        redirectTo: "/pizzas"
      });
  });
