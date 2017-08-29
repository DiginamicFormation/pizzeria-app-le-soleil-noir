export default class ListeCommandeService{

constructor(apiUrls,$resource){
    this.url = apiUrls.commandes;
    this.commandeResource = $resource(this.url+'/:commandeId', {commandeId:"@id"},{
        save: { method: "POST" }
    })
}


findById(id){
    return this.commandeResource.get({commandeId: id })
}

confirmeCommande(commande){
    this.commandeResource.save(commande);
    localStorage.clear();
}



}