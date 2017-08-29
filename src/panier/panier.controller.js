export default class panierCtrl {

    constructor(apiUrl, panierService) {
        this.apiUrl = apiUrl
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