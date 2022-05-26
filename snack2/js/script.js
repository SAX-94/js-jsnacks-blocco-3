const numIns = parseInt(prompt("Inserisci un numero"));
const arrayGen = []

/* //  In base a N inserito dall'utente, creo N array */


while (arrayGen.length < numIns) {
    // creo nuovo array 
    const nuovoArr = []
    // aggiungo nuovo array alla lista di array generati
    while (nuovoArr.length < 10) {
        // Creo u  numero radom da 1 a 100
        const numRandom = Math.floor(Math.random() * 100) + 1;
        // Controllo che il numero non si giàprente nell'array
        if (!nuovoArr.includes(numRandom)) {
            // Se il numero non è presente nell'array lo aggiungo
            nuovoArr.push(numRandom);
        }
    }
    // Aggiungo Il nuovo array dentro la li sta di array generati
    arrayGen.push(nuovoArr);
}

console.log(arrayGen)