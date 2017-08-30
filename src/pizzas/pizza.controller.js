
export default class PizzaController {

    constructor(PizzaService, panierService) {
        this.PizzaService = PizzaService;
        this.panierService = panierService;

        this.pizzas = this.PizzaService.findAll();
    }
    
    $onInit () {
        this.findAllCategoriesDistinct();
        this.findAllCategories();
    }

    update(cat) {
        this.filterCat = {
            categorie : cat
        }
    }

    findAllCategoriesDistinct() {
        return this.PizzaService.findAllCategoriesDistinct().then(response => {
            this.categories = response;
        });
    }

    findAllCategories() {
        return this.PizzaService.findAllCategories().then(response => {
            this.categoriesAll = response;
        });
    }

    nbCategories(categorie) {
        return this.categoriesAll.filter(c => c == categorie).length;
    }
    
    ajoutPanier(pizzaId) {
        this.panierService.ajoutPanier(pizzaId);
    }

    retirerPanier(pizzaId) {
        this.panierService.retirerPanier(pizzaId);
    }

    nbPizzasPanierById(pizzaId) {
        return this.panierService.getPizzasList().filter(p => p.id == pizzaId).length;
    }
}