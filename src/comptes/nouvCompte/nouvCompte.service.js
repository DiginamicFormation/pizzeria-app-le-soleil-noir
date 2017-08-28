export default class NouvCompteService {
  constructor(apiUrls, $resource) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
    this.CompteResource = this.$resource(
      this.apiUrls.utilisateurs + ":userId",
      {
        userId: "@id"
      },
      {
        update: { method: "PUT" },
        query: {
          method: "GET",
          params: { data: "user" },
          isArray: true
        }
      }
    );
  }

  addCompte(compte) {}
}

