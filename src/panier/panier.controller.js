export default class panierCtrl {

    constructor(apiUrls, panierService) {
        this.apiUrls = apiUrls
        this.panierService = panierService
        this.pizzaPanier = []
    }

    $onInit() {
        // localStorage.removeItem('panierSave');
        if (localStorage.getItem('panierSave') == null) {
            console.log(this.panierService.pizzasList)
            this.panierService.pizzasList.forEach((idPizza, quantite) => {
                this.panierService.findPizzaByPizzaId(idPizza)
                    .then(pizza => {

                        if (quantite == 0) pizza.nbQuantite = 1
                        else pizza.nbQuantite = quantite

                        this.pizzaPanier.push(pizza)
                        this.save()
                    })
            });
        } else {
            this.pizzaPanier = JSON.parse(localStorage['panierSave'])
            this.total()
        }
    }


    save() {
        localStorage['panierSave'] = JSON.stringify(this.pizzaPanier);
        this.total()
    }

    suppr(item){
        // this.panierService.pizzasList
    }

    plus(item) {
        item.nbQuantite++
        this.save()
    }

    moins(item) {
        item.nbQuantite--
        this.save()
    }

    total() {
        this.listPizza = JSON.parse(localStorage['panierSave'])
        this.totalPanier = 0
        this.listPizza.forEach(pizza => {
            this.totalPanier += pizza.prix * pizza.nbQuantite
        });
    }

}