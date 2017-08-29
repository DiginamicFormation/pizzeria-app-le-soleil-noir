export default class NouvCompteCtrl {
  constructor(NouvCompteService) {
    this.NouvCompteService = NouvCompteService;
  }

  addCompte() {
    this.NouvCompteService.addCompte(this.email, this.motdepasse, this.nom, this.prenom, this.adresse);
    
  }
}
