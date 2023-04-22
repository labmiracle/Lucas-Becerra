function addOnlyNums() {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number' && !isNaN(arguments[i])) {
      total += arguments[i];
    }
  }
  return total;
}

console.log(addOnlyNums(3, 5, 7));
console.log(addOnlyNums(1, '2', 'nine', 3, 7));
console.log(addOnlyNums(5, 'twelve'));