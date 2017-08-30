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
    if(this.myStyleEmporter == undefined){
        this.myStyleEmporter={border: 'solid 2px blue'}
        this.typelivraison ="emporter"
        this.myStyleLivraison=undefined
    }else{
        this.myStyleEmporter=undefined
        this.selection = undefined
    }
    
}
livraison(){
    if(this.myStyleLivraison == undefined){
        this.myStyleLivraison= {border: 'solid 2px blue'}
        this.typelivraison = "livraison"
        this.myStyleEmporter=undefined
        console.log(this.myStyleLivraison)
    }else{
        this.myStyleLivraison=undefined
        this.selection = undefined
    }
}

}