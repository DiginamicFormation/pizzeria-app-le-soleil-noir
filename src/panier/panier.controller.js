export default class panierCtrl {

    constructor(apiUrls, panierService) {
        this.apiUrls = apiUrls
        this.panierService = panierService
        this.pizzaPanier = []
    }

    $onInit() {
        this.promotion = 0
        this.active = 0
        // localStorage.removeItem('panierSave');
        if (localStorage.getItem('panierSave') == null || this.panierService.pizzasList.length != this.pizzaPanier.length) {
            console.log(this.panierService.pizzasList)
            this.panierService.pizzasList.forEach((pizzas) => {
                this.panierService.findPizzaByPizzaId(pizzas.id)
                    .then(pizza => {

                        if (pizzas.quantite == 0) pizza.nbQuantite = 1
                        else pizza.nbQuantite = pizzas.quantite

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

    suppr(item) {
        let pizzaList = JSON.parse(localStorage['panierSave'])
        this.pizzaPanier = []
        pizzaList.filter(pizza => {
            // console.log(pizzaList.lenght)
            if (pizza.id != item.id) {
                // console.log(pizza.id + ' je reste')
                this.pizzaPanier.push(pizza)
                this.save()
            }
            // else console.log(pizza.id + ' au revoir')
        })
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
        if (this.active == 1) {
            this.promo()
        }
        this.totalAPayer()
    }

    promo() {
        if (this.code != null || this.code != '') {
            this.promotion = this.totalPanier / 10
            this.totalAPayer()
            this.active = 1
        }
        else {
            this.promotion = 0
            this.totalAPayer()
            this.active = 0
        }
    }

    totalAPayer() {
        this.totalPayer = this.totalPanier - this.promotion
    }

}