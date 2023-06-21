function generateSecretNumber(): string {
    let secretNumber = "";
    for (let i = 0; i < 4; i++) {
        const digit = Math.floor(Math.random() * 7).toString();
        secretNumber += digit;
    }
    return secretNumber;
}

function compareNumbers(secretNumber: string, guess: string): string {
    let hint = "";
    for (let i = 0; i < secretNumber.length; i++) {
        if (secretNumber[i] === guess[i]) {
            hint += "X";
        } else if (secretNumber.includes(guess[i])) {
            hint += "-";
        }
    }
    return hint;
}

function numeroRandom(): string {
    let numeroSecreto = "";
    for (let i = 0; i < 4; i++) {
        const digitos = Math.floor(Math.random() * 7);
        numeroSecreto += digitos;
    }
    return numeroSecreto;
}

function verificacionNumero(
    numeroSecreto: string,
    intentoDeNumero: string
): string {
    let salida = "";
    for (let i = 0; i < numeroSecreto.length; i++) {
        if (numeroSecreto[i] === intentoDeNumero[i]) {
            salida += "x";
        } else if (numeroSecreto.includes(intentoDeNumero[i])) {
            salida += "-";
        } else {
            salida += " ";
        }
    }
    return salida;
}

const numeroSecreto = numeroRandom();
console.log(`El numero secreto es: ${numeroSecreto}`);

const primerIntento = "1334";
const primerPista = verificacionNumero(numeroSecreto, primerIntento);
console.log(`Salida: ${primerPista}`);

const segundoIntento = "4251";
const segundoPista = verificacionNumero(numeroSecreto, segundoIntento);
console.log(`Salida: ${segundoPista}`);

const tercerIntento = "6521";
const tercerPista = verificacionNumero(numeroSecreto, tercerIntento);
console.log(`Salida: ${tercerPista}`);