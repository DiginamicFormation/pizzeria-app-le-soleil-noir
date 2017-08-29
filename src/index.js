// import général
import 'bootstrap/dist/css/bootstrap.css';
import angular from "angular"
import ngRoute from "angular-route"
import ngResource from "angular-resource";
import 'angular-ui-bootstrap'

// import des services
import apiUrls from "./utils/apiUrls.service"
import PizzaService from "./pizzas/pizza.service"
import panierService from './panier/panier.service'

// import des components
import pizzaComponent from "./pizzas/pizza.component"
import panierComponent from "./panier/panier.component"
import menuComponent from "./menu/menu.component"
import headerComponent from "./header/header.component"
import footerComponent from "./footer/footer.component"

angular.module('pizzeriaApp', ["ngRoute", "ngResource"])
    .component("pizzaComponent", pizzaComponent)
    .component('panierCmp', panierComponent)
    .component('menuComponent', menuComponent)
    .component('headerComponent', headerComponent)
    .component('footerComponent', footerComponent)
    .constant("apiUrls", apiUrls)
    .service("PizzaService", PizzaService)
    .service(panierService.name, panierService)
    .filter('capitalize', function () { // https://gist.github.com/paulakreuger/b2af1958f3d67f46447e
        return function (input) {
            if (input != null) {
                input = input.toLowerCase();
            }
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    })
    .config(($routeProvider) => {
        $routeProvider.
            when('/pizzas', {
                template: "<pizza-component></pizza-component>"
            })
            .when('/panier', {
                template: '<panier-cmp></panier-cmp>'
            })
            .otherwise({
                redirectTo: '/pizzas'
            })
    })