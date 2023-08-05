const arr1 = [1, 3, 5];
const arr2 = [2, 9];

function ArrayUnico(arr1: number[], arr2: number[]) {
  const arrays = new Set([...arr1, ...arr2]);
  return arrays;
}

const Unico = ArrayUnico(arr1, arr2);
console.log(Unico);