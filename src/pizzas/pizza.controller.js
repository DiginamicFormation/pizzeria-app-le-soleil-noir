
export default class PizzaController {

    constructor(PizzaService) {
        this.PizzaService = PizzaService;

        this.pizzas = this.PizzaService.findAll();

        this.categories = this.findAllCategories();

    }

    update(cat) {
        this.filterCat = {
            categorie : cat
        }
    }

    findAllCategories() {
        return ["fromage", "viande", "poisson"];
    }
    
}