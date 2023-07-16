const { setPrice, addToCart } =  require('../1-8.js');

describe('setPrice()', () => {
    it('Establecer precio art', () => {
        
        const item = {
            name: 'test',
            price: 30,
        };

        const copy = Object.assign({}, item);
    
        const actual = setPrice(item, 50);

        const expected = {
            name: 'test',
            price: 50,
        };
    
        expect(actual).toEqual(expected);
        expect(item).toEqual(copy);
    });
});

describe('addToCart()', () => {
    it('Agregar articulo al carrito', () => {
        
        const originalCart = [];

        const item = {
            name: 'Toy',
            price: 30,
        };

        const copy = originalCart.slice();
        
        const actual = addToCart(originalCart, item);
        const expected = [item];
        
        expect(actual).toEqual(expected);
        expect(originalCart).toEqual(copy);
    });
});    