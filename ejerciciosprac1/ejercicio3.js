function diasParaCrecer(velocidadCrecimiento, VelocidadDecrecimiento, alturaDeseada) {
    let alturaActual = 0;
    let dias= 0;
    
    while (alturaActual < alturaDeseada) {
        dias++;
        alturaActual += VelocidadDecrecimiento;
        if (alturaActual < alturaDeseada) {
            alturaActual -= velocidadCrecimiento
        }
    }
    return dias;

}
const velocidadCrecimiento = 1;
const VelocidadDecrecimiento = 1;
const alturaDeseada= 5;
const dias = diasParaCrecer(velocidadCrecimiento, VelocidadDecrecimiento, alturaDeseada);
console.log('La planta tardará ${dias} días en crecer hasta ${alturaDeseada} metros.');