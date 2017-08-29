export default class NouvCompteService {
  constructor(apiUrls, $resource) {
    this.apiUrls = apiUrls;
    this.$resource = $resource;
    this.compteResource = this.$resource(
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

  addCompte(email, motdepasse, nom, prenom, adresse) {
    let nouvCompte = {
      nom: nom,
      prenom: prenom,
      email: email,
      motdepasse: motdepasse,
      adresse: adresse
    };
    
    this.compteResource.save(nouvCompte);
  }
}
