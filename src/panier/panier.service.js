export default class panierService {

    constructor(apiUrls, $http) {
        this.apiUrls = apiUrls;
        this.$http = $http;
        // this.pizzasList = []
        this.pizzasList = [1, 5, 7, 2, 3]
    }

    findPizzaByPizzaId(pizzaId) {
        return this.$http.get(this.apiUrls.pizzas + "/" + pizzaId)
            .then(response => {
                return response.data;
            }, response => { });
    }

}