export default class ListeCommandeController{


constructor(ListeCommandeService,PizzaService,){
    this.listeCommandeService =ListeCommandeService;
    this.pizzaService= PizzaService;
    this.local = JSON.parse(localStorage.getItem('panierSave'))
    
    
}

commandById(id){
    return this.listeCommandeService.findById(id).then(  )
}


}