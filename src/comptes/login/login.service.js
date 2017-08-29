export default class LoginService {
  constructor(apiUrls, $resource) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
    this.compteConnecte;
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
    localStorage.setItem("compteConnecte", JSON.stringify(this.compteConnecte));
    let test = localStorage.getItem("compteConnecte");
    console.log(test);
    return true;
  }

  login(email, motdepasse) {
    this.findAll().$promise.then(response => {
      this.comptes = response;
      this.comptes.forEach(compte => {
        if (compte.email === email && compte.motdepasse === motdepasse) {
          this.compteConnecte = compte;
          this.isAuthenticated();
        }
      });
    });
  }

  findAll() {
    return this.loginResource.query();
  }
}
