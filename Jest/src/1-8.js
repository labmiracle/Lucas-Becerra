let cart = [];
 
const item1 = {
    name: "item1",
    price: 0,
}

const item2 = {
    name: "item2",
    price: 0,
}

const item3 = {
    name: "item3",
    price: 0,
}

const setPrice = (item, price) => {

    return Object.assign({}, item, {price});

};

const addToCart = (cart, item) => {

    return [...cart, item];
};

module.exports = { setPrice, addToCart };