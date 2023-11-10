
let kmUser = prompt('Inserire il totale dei km da percorrere');
let agePassenger = prompt("Inserire l'età del passeggero");

let standardPrice = kmUser * 0.21;

if (agePassenger < 18){
    standardPrice = standardPrice - (standardPrice * 0.20);
} else if (agePassenger > 65) {
    standardPrice = standardPrice - (standardPrice * 0.40)
}

document.getElementById('tiket').innerHTML = 'Il prezzo del tuo biglietto è:     ' + standardPrice + '€';







