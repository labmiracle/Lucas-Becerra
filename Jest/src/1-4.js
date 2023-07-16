function sumArrPos(arr) {
    if (!Array.isArray(arr)) {
      return "Ingresar array";
    }
  
    let suma = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const num = Number(arr[i]);
  
      if (!isNaN(num) && num > 0) {
        suma += num;
      }
    }
  
    return suma;
  }

  console.log(sumArrPos(NaN))
  
  module.exports = { sumArrPos };