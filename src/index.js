
// import général
import 'bootstrap/dist/css/bootstrap.css';
import angular from "angular"
import ngRoute from "angular-route"
import ngResource from "angular-resource";

// import des services
import apiUrls from "./utils/apiUrls.service"
import PizzaService from "./pizzas/pizza.service"

// import des components
import pizzaComponent from "./pizzas/pizza.component"

angular.module('pizzeriaApp', ["ngRoute", "ngResource"])
    .component("pizzaComponent", pizzaComponent)
    .constant("apiUrls", apiUrls)
    .service("PizzaService", PizzaService)
    .filter('capitalize', function() { // https://gist.github.com/paulakreuger/b2af1958f3d67f46447e
        return function(input) {
            if (input != null) {
                input = input.toLowerCase();
            }
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    })
    .config(($routeProvider) => {
        $routeProvider.
            when('/pizzas', {
                template: "<pizza-component></pizza-component>"
            })
            .otherwise({
                redirectTo: '/pizzas'
            })
    })