const invitati = ["Brad Pitt", "Bill Burr", "Michael Jordan", "Bill Gates"];


const output = document.querySelector(".page-cont");
const nameSurname = prompt("Inserisci nome e cognome:");

let found = false;
let result = `<span class="red">Il tuo nome non è presente nella lista degli invitati.</span>`;

for (let i = 0; i < invitati.length; i++) {
    if (nameSurname === invitati[i]) found = true;
}

if (found) result = `<span class="green">Benvenuto alla festa del grande Gatsby!</span>`;

output.innerHTML = `<h1>${result}</h1>`;