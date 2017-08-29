console.log('Bonjour App');

import angular from 'angular'
import ngRoute from 'angular-route'
//template
import listeCommande from './liste-commande/commande_liste.html'
//controler
import listeCommandeController from './liste-commande/listeCommandeController'
//service
import listeCommandeService from './liste-commande/listeCommandeService'
// constant
import apiUrls from './utils/apiUrls.service.js'

import 'bootstrap/dist/css/bootstrap.css'



angular.module('pizzeriaApp', ['ngRoute'])
.component('listeCommande', {
    template: listeCommande,
    controller: listeCommandeController
  })
.service(listeCommandeService.name,listeCommandeService)
.constant(apiUrls.name,apiUrls)
.config(($routeProvider) => {
        $routeProvider.
            when('/commande', {
                template: "<liste-commande></liste-commande>"
            })
            .otherwise({
                redirectTo: '/commande'
            })
    })