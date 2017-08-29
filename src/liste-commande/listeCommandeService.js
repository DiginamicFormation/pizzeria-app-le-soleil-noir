export default class listeCommandeService{

constructor(apiUrls,$resource){
    this.url = apiUrls.commandes;
    this.commandeResource = $resource(this.url+'/:commandeId', {commandeId:"@id"})
}

findAll(){
        return this.commandes = this.commandeResource.query()
}

}