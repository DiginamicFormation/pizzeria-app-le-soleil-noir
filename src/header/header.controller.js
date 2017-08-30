
export default class HeaderController {
    
        constructor(panierService, $rootScope) {
            this.panierService = panierService;
            this.$rootScope = $rootScope;

            this.estConnecte = sessionStorage.getItem("compteConnecte") != null;
            if(this.estConnecte) {
                this.utilisateur = sessionStorage.getItem("compteConnecte");
            }
        }

        $onInit() {
            this.$rootScope.$on('ajoutPanier', (event, data) => {
                this.nbPizzas = this.panierService.nbPizzasPanier()
            });
        }

    }