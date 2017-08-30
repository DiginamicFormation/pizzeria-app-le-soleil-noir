export default class LoginCtrl {
  constructor(LoginService, $location) {
    this.LoginService = LoginService;
    this.$location = $location;
  }

  login() {
    this.LoginService.login(this.email, this.motdepasse);
    this.$location.path("/pizzas");
  }
}
