function EncMaxUnosConsec(arreglo) {
    const arreglonum = arreglo.map(Number); 
  
    const result = arreglonum.filter(
      (arreglonum) => arreglonum !== 0 && arreglonum !== 1
    );
    if (result.length !== 0) {
      return -1;
    }
  
    let arrTostr = arreglo.toString();
    let strSinComas = arrTostr.split(",").join("");
    let arrDeUnos = strSinComas.split("0");
    let Result = arrDeUnos.map(myFunction);
  
    function myFunction(num) {
      return num.length;
    }
    return Math.max(...Result);
  }
  
  EncMaxUnosConsec([1, "1", "1", 0, 1, 1, 1, 1, 0, 0, 1]);
  module.exports = { EncMaxUnosConsec };