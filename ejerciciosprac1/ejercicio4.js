//primera función//
function palabraMasLarga(str) {
  const palabras = str.split('');
  let palabraMasLarga = '';

    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
    }
  }
    return palabraMasLarga;
}

console.log(palabraMasLarga('El muchacho del lago'));

//segunda función//
function PrimeraLetraMayus(str) {
    const palabras = str.split('');
    const palabrasConMayus = palabras.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return palabrasConMayus.join('')
}

console.log(PrimeraLetraMayus('Tres tristes tigres'));