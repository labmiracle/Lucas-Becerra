function NumPosArr(arr) {
    let suma = 0;
    if (arr.length === 0) {
        return 0;
    } 
    for (let i = 0; i < arr.length; i++) {
        if (typeof Number(arr[i]) === "number" && Number(arr[i]) > 0) {
           suma += Number(arr[i]);
        }
    }
    return suma;
}

module.exports = { NumPosArr };