
let numeriIns = [];
let somma = 0;

/* Chiedi all'utente numeri da inserire nell'array finchè la somma resta inferiore a 50. */

do {
    let numero = Number(prompt("Inserisci un numero da 0 a 50"));

    if (!isNaN(numero)) {
        somma += numero;
        if (somma < 50) {
            numeriIns.push(numero)
        }
    }

} while (somma < 50);

console.log(numeriIns)