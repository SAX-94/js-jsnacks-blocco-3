const output = document.querySelector(".page-cont");

let somma = 0;

for (let i = 0; i < 5; i++) {
    const input = parseInt(prompt(`Inserisci il ${i + 1}° numero:`));
    somma += input;
}

output.innerHTML = `<h2>Risultato della somma:</h2>
                    <h1>${somma}</h1>`;