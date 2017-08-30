export default class ListeCommandeController{


constructor(ListeCommandeService,PizzaService,$location){
    this.listeCommandeService =ListeCommandeService;
    this.pizzaService= PizzaService;
    this.local = JSON.parse(localStorage.getItem('panierSave'))
    this.$location = $location ; 
    console.log(this.local)
}

save(){
    this.user = JSON.parse(sessionStorage.getItem('compteConnecte'))
    let commande = { pizzas:[], utilisateursId: this.user.id, typelivraison:this.typelivraison}
    this.local.forEach(p => commande.pizzas.push({
        pizzaId: p.id,
        quantite: p.nbQuantite
    }))
    
    this.listeCommandeService.confirmeCommande(commande);
    this.$location.path("/pizzas");
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