import angular from "angular";
import ngResource from "angular-resource";
import ngRoute from "angular-route";

import bootstrap from "angular-ui-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import apiUrls from "./utils/apiUrls.service";
import LoginCmp from "./comptes/login/login.component";
import LoginService from "./comptes/login/login.service";
import AuthService from "./comptes/login/auth.service";
import NouvCompteCmp from "./comptes/nouvCompte/nouvCompte.component";
import NouvCompteService from "./comptes/nouvCompte/nouvCompte.service";

angular
  .module("pizzeriaApp", ["ngResource", "ngRoute"])
  .component("loginCmp", LoginCmp)
  .service("LoginService", LoginService)
  .service("AuthService", AuthService)
  .component("nouvCompteCmp", NouvCompteCmp)
  .service("NouvCompteService", NouvCompteService)
  .constant("apiUrls", apiUrls)
  .config($routeProvider => {
    $routeProvider
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
