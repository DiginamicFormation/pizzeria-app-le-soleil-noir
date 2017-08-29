
export default class PizzaController {

    constructor(PizzaService, panierService) {
        this.PizzaService = PizzaService;
        this.panierService = panierService;

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
    
    ajoutPanier(pizzaId) {
        this.panierService.ajoutPanier(pizzaId);
    }
}