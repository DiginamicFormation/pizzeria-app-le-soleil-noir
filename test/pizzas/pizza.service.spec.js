describe('Test du service pizza', () => {
    
        beforeEach(() => {
            angular.mock.module('pizzeriaApp')
        })
        
        it('On vérifie que le service renvoie bien les catégories de pizza', angular.mock.inject((PizzaService) => {

            PizzaService.findAllCategoriesDistinct().then(categories => {
                expect(categories.length).toBe(3)
            })
        }))
    })