
export default class PizzaController {

    constructor(PizzaService) {
        this.PizzaService = PizzaService;

        this.pizzas = this.PizzaService.findAll();
    }
    
}