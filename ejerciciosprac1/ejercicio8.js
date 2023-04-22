function suma() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments [i]
    }
    return total;
}

console.log(suma(1, 2, 3));
console.log(suma(2, 4, 6, 8, 10));
console.log(suma(25));