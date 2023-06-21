function myFunction(joyas: string, piedras: string): number {
    let piedraEncontrada = 0;

    for (let i = 0; i < piedras.length; i++) {
        let piedra = piedras[i];
        if (joyas.includes(piedra)) {
            piedraEncontrada++;
        }
    }

    return piedraEncontrada;
}

console.assert(myFunction("aA", "aAAbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);