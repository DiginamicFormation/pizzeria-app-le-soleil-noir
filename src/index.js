console.log('Bonjour App');

import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import ngResource from 'angular-resource'
import ngRoute from 'angular-route'
//template
import listeCommande from './liste-commande/commande_liste.html'
//controler
import listeCommandeController from './liste-commande/listeCommandeController'
//service
import listeCommandeService from './liste-commande/listeCommandeService'
import PizzaService from "./pizzas/pizza.service"
// constant
import apiUrls from './utils/apiUrls.service.js'


import pizzaComponent from "./pizzas/pizza.component"




angular.module('pizzeriaApp', ['ngResource','ngRoute'])
.component('listeCommande', {
    template: listeCommande,
    controller: listeCommandeController
  })
.component("pizzaComponent", pizzaComponent)
.service(listeCommandeService.name,listeCommandeService)
.service("PizzaService", PizzaService)
.constant('apiUrls',apiUrls)
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
            when('/commande', {
                template: "<liste-commande></liste-commande>"
            }).when('/pizzas', {
                template: "<pizza-component></pizza-component>"
            })
            .otherwise({
                redirectTo: '/commande'
            })
    })