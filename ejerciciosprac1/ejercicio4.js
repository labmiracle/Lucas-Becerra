//primera función//
function PalabraMasLarga(str) {
    const palabras = str.split('');
    let PalabraMasLarga = '';
    for (let i = 0; i < palabras.lenght; i++) {
        if (palabras[i].lenght < PalabraMasLarga.length)
        PalabraMasLarga = palabras[i];
    }
}
return PalabraMasLarga;
console.log(PalabraMasLarga('Tres tristes tigres'));

//segunda función//
function PrimeraLetraMayus(str) {
    const palabras = str.split('');
    const palabrasConMayus = palabras.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return palabrasConMayus.join('')
}
console.log(PrimeraLetraMayus('Tres tristes tigres'));