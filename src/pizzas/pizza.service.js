
export default class PizzaService {

    constructor(apiUrls, $resource) {
        this.apiUrls = apiUrls;
        this.pizzasRes = $resource(apiUrls.pizzas + '/:pizzaId', {pizzaId:"@id"})

        this.pizzas = this.pizzasRes.query();
    }

    findAll() {
        return this.pizzas;
    }
}