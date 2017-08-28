
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
    .config(($routeProvider) => {
        $routeProvider.
            when('/pizzas', {
                template: "<pizza-component></pizza-component>"
            })
            .otherwise({
                redirectTo: '/pizzas'
            })
    })