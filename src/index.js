import angular from 'angular'
import ngResource from 'angular-resource'
import ngRoute from "angular-route"

import panierComponent from "./panier/panier.component"
import panierService from './panier/panier.service'
import apiUrl from './utils/apiUrl.service'

import "bootstrap/dist/css/bootstrap.css"
import 'angular-ui-bootstrap'

angular.module('pizzeriaApp', ['ngResource', 'ngRoute'])
    .component('panierCmp',panierComponent)
    .constant('apiUrl', apiUrl)
    .service(panierService.name, panierService)
    .config($routeProvider => {
        
        $routeProvider
        .when('/panier', {
            template: '<panier-cmp></panier-cmp>'
        })
        .otherwise({
            redirectTo: '/panier'
        })

    })