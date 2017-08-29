export default class panierCtrl {

    constructor(apiUrls, panierService) {
        this.apiUrls = apiUrls
        this.panierService = panierService
        this.pizzaPanier = []
    }

    $onInit() {
        this.panierService.pizzasList.forEach(idPizza => {
            this.panierService.findPizzaByPizzaId(idPizza)
                .then(pizza => {
                    this.pizzaPanier.push(pizza)
                })
        });
    }
}