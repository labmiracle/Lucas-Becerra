const carrito = {
    products: [
        {
            nomb: 'papel higienico',
            unidades: 2,
            precios: 8
        },
        {
            nomb: 'chocolate',
            unidades: 4,
            precio: 2
        }
    ],
    get precioTot() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            total += product.precio * product.unidades; 
        }
        return total;
    }
};
console.log(carrito.precioTot);