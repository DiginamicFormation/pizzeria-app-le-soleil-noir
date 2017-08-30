
export default class PizzaService {

    constructor(apiUrls, $resource) {
        this.apiUrls = apiUrls;
        this.pizzasRes = $resource(apiUrls.pizzas + '/:pizzaId', {pizzaId:"@id"})

        this.pizzas = this.pizzasRes.query();
    }

    findAll() {
        return this.pizzas;
    }

    findAllCategoriesDistinct() {
        return this.pizzas.$promise.then(response => {
           let categories = response.map(p => p.categorie);

           // https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
           // Pour résumer, on récupère uniquement le premier élément que l'on rencontre
           return categories.filter((cat, i, arr) => arr.indexOf(cat) == i);
        })
    }

    findAllCategories() {
        return this.pizzas.$promise.then(response => {
           return response.map(p => p.categorie);
        })
    }
}