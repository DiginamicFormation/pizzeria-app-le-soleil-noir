export default class panierService {

    constructor(apiUrl, $http) {
        this.apiUrl = apiUrl;
        this.$http = $http;
        // this.pizzasList = []
        this.pizzasList = [1, 5, 7, 2, 3]
    }

    findPizzaByPizzaId(pizzaId) {
        return this.$http.get(this.apiUrl.pizzas + "/" + pizzaId)
            .then(response => {
                return response.data;
            }, response => { });
    }

}