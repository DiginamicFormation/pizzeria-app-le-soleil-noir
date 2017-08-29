
export default class HeaderController {
    
        constructor(panierService, $rootScope) {
            this.panierService = panierService;
            this.$rootScope = $rootScope;
        }

        $onInit() {
            this.$rootScope.$on('ajoutPanier', (event, data) => {
                this.nbPizzas = this.panierService.nbPizzasPanier()
            });
        }

    }