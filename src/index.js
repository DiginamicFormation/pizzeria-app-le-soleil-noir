console.log('Bonjour App');

import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import ngResource from 'angular-resource'
import ngRoute from 'angular-route'
import 'angular-ui-bootstrap'
//template
import listeCommande from './liste-commande/commande_liste.html'
//controler
import listeCommandeController from './liste-commande/listeCommandeController'
//service
import listeCommandeService from './liste-commande/listeCommandeService'
import PizzaService from "./pizzas/pizza.service"
import panierService from './panier/panier.service'
// constant
import apiUrls from './utils/apiUrls.service.js'


import pizzaComponent from "./pizzas/pizza.component"
import panierComponent from "./panier/panier.component"
import menuComponent from "./menu/menu.component"
import headerComponent from "./header/header.component"
import footerComponent from "./footer/footer.component"




angular.module('pizzeriaApp', ['ngRoute','ngResource'])
.component('listeCommande', {
    template: listeCommande,
    controller: listeCommandeController
  })
.component("pizzaComponent", pizzaComponent)
.component('panierCmp', panierComponent)
.component('menuComponent', menuComponent)
.component('headerComponent', headerComponent)
.component('footerComponent', footerComponent)
.service(listeCommandeService.name,listeCommandeService)
.service(panierService.name, panierService)
.service("PizzaService", PizzaService)
.constant('apiUrls',apiUrls)
.filter('capitalize', function() { // https://gist.github.com/paulakreuger/b2af1958f3d67f46447e
        return function(input) {
            if (input != null) {
                input = input.toLowerCase();
            }
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    })
.config(($routeProvider) => {
        $routeProvider.
            when('/commande', {
                template: "<liste-commande></liste-commande>"
            }).when('/pizzas', {
                template: "<pizza-component></pizza-component>"
            })
            .when('/panier', {
                template: '<panier-cmp></panier-cmp>'
            })
            .otherwise({
                redirectTo: '/commande'
            })
    })