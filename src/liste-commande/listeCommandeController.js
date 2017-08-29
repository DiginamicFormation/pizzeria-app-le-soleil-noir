export default class ListeCommandeController{


constructor(ListeCommandeService,PizzaService){
    this.listeCommandeService =ListeCommandeService;
    this.pizzaService= PizzaService;
    
}

commandById(id){
    return this.listeCommandeService.findById(id).then(  )
}


}