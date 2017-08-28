export default class NouvCompteCtrl {
  constructor(NouvCompteService) {
    this.NouvCompteService = NouvCompteService;
  }

  addCompte() {
    this.NouvCompteService.addCompte();
  }
}
