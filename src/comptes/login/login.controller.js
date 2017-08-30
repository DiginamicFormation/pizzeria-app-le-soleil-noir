export default class LoginCtrl {
  constructor(LoginService, AuthService, $location) {
    this.LoginService = LoginService;
    this.AuthService = AuthService;
    this.$location = $location;
  }

  login() {
    this.LoginService.login(this.email, this.motdepasse, response => {
      if (response.success) {
        console.log("success");
        this.$location.path("/#!/pizzas");
      } else {
        $scope.error = response.message;
      }
    });
  }
}
