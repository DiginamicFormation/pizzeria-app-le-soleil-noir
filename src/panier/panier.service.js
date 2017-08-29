export default class panierService {

    constructor(apiUrls, $http) {
        this.apiUrls = apiUrls;
        this.$http = $http;
        this.pizzasList = [];
    }

    findPizzaByPizzaId(pizzaId) {
        return this.$http.get(this.apiUrls.pizzas + "/" + pizzaId)
            .then(response => {
                return response.data;
            }, response => { });
    }

    ajoutPanier(pizzaId) {
        this.pizzasList.push(pizzaId);
    }

}