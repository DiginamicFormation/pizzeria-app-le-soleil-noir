export default class ListeCommandeController{


constructor(ListeCommandeService,PizzaService,){
    this.listeCommandeService =ListeCommandeService;
    this.pizzaService= PizzaService;
    this.local = JSON.parse(localStorage.getItem('panierSave'))    
}

save(){
    let commande = { pizzas:[], utilisateursId:1, typelivraison:this.typelivraison}
    this.local.forEach(p => commande.pizzas.push({
        pizzaId: p.id,
        quantite: p.nbQuantite
    }))
    
    this.listeCommandeService.confirmeCommande(commande);
}

emporter(){
    this.typelivraison ="emporter"
}
livraison(){
    this.typelivraison ="livraison"
}

}