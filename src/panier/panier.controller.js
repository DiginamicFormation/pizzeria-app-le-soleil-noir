export default class panierCtrl {

    constructor(apiUrls, panierService) {
        this.apiUrls = apiUrls
        this.panierService = panierService
        this.pizzaPanier = []
    }

    $onInit() {
        // localStorage.removeItem('panierSave');
        if (localStorage.getItem('panierSave') == null) {
            console.log('if')
            this.panierService.pizzasList.forEach(idPizza => {
                this.panierService.findPizzaByPizzaId(idPizza)
                    .then(pizza => {
                        pizza.nbQuantite = 1
                        this.pizzaPanier.push(pizza)
                        localStorage['panierSave'] = JSON.stringify(this.pizzaPanier);
                        console.log(this.pizzaPanier)
                    })
            });


        } else {
            console.log('else')
            this.pizzaPanier = JSON.parse(localStorage['panierSave'])
            console.log(this.pizzaPanier)
        }
    }


}