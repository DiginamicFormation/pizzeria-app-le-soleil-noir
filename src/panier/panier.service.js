export default class panierService {

    constructor(apiUrls, $http, $rootScope) {
        this.apiUrls = apiUrls;
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.pizzasList = [{
            "id":1,
            "quantite":5
        },
        {
            "id":3,
            "quantite":7
        }];
    }

    findPizzaByPizzaId(pizzaId) {
        return this.$http.get(this.apiUrls.pizzas + "/" + pizzaId)
            .then(response => {
                return response.data;
            }, response => { });
    }

    ajoutPanier(pizzaId) {
        this.pizzasList.push(pizzaId);
        this.$rootScope.$emit('ajoutPanier', pizzaId);
    }

    retirerPanier(pizzaId) {
        if(pizzaId > -1) {
            this.pizzasList.splice(pizzaId, 1);
        }
    }

    nbPizzasPanier() {
        return this.pizzasList.length;
    }

    getPizzasList() {
        return this.pizzasList;
    }

}