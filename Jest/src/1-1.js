function fizzBuzz(valor) {
  if (typeof valor !== "number") {
    return "Debe ingresar un número";
  }
  if ((valor % 3 == 0) & (valor % 5 == 0)) {
    return "FizzBuzz";
  } // si el num es div por 3 y 5 devolverá "FizzBuzz"
  if (valor % 3 == 0) {
    return "Fizz"; // si el num es div por 3 devolverá Fizz
  }
  if (valor % 5 == 0) {
    return "Buzz"; // si el num es div por 5 devolverá Buzz
  } else {
    return valor; // si el num no cumple ninguna de las condiciones anteriores devolverá el número
  }
}

module.exports = { fizzBuzz };