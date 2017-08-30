describe('test service de la liste commande', () => {
    beforeEach(() => {
        angular.mock.module('pizzeriaApp')
    })
    // injection du mock $httpBackend
    it('mock du service $http', angular.mock.inject(($httpBackend, PizzaRemoteService)
        => {
        // définition du comportement attendu de $http
        $httpBackend.when('POST', '/api/pizzas').respond([{ name: 'Pépé', price: 14 }]);
        PizzaRemoteService.findAll().then(pizzas => {
            expect(pizzas.length).toBe(1)
        })
        $httpBackend.flush(); // déclenche les réponses HTTP
    }))
})