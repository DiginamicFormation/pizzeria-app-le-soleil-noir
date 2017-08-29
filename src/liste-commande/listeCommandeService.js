export default class ListeCommandeService{

constructor(apiUrls,$resource){
    this.url = apiUrls.commandes;
    this.commandeResource = $resource(this.url+'/:commandeId', {commandeId:"@id"})
}


findById(id){
    return this.commandeResource.get({commandeId: id })
}

confirmeCommande(){
    
}



}