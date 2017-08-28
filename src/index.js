import angular from "angular";
import ngResource from "angular-resource";
import ngRoute from "angular-route";

import bootstrap from "angular-ui-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import apiUrls from "./utils/apiUrls.service";
import NouvCompteService from "./comptes/nouvCompte/nouvCompte.service";
import NouvCompteCmp from "./comptes/nouvCompte/nouvCompte.component";


angular
  .module("pizzeriaApp", ["ngResource", "ngRoute"])
  .component("nouvCompteCmp", NouvCompteCmp)
  .service("NouvCompteService", NouvCompteService)
  .constant("apiUrls", apiUrls)
  .config($routeProvider => {
    $routeProvider
      .when("/compte", {
        template: "<nouv-compte-cmp></nouv-compte-cmp>"
      })
      .otherwise({
        redirectTo: "/compte"
      });
  });
