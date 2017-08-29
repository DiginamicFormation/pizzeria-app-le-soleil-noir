export default class AuthService {
  constructor($resource, apiUrls) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
    this.loginResource = this.$resource(
      this.apiUrls.user + ":compteId",
      {
        compteId: "@id"
      },
      {
        update: { method: "PUT" },
        query: {
          method: "GET",
          params: { data: "compte" },
          isArray: true
        },
        save: { method: "POST" }
      }
    );
  }

  isAuthenticated() {
    return true;
  }

  login(email, motdepasse, callback) {
    this.loginResource
      .post({ email: email, motdepasse: motdepasse })
      .success(function(response) {
        callback(response);
      });
  }
}
