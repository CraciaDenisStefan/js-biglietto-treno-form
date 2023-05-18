//Creaiamo variabile per generare i valori scelti dal utente con un click
let button = document.getElementById(`genera`);
button.addEventListener(`click`, function(){
    let input_nome = document.getElementById(`nome_cognome`).value;
        console.log(input_nome)
    let input_km = document.getElementById(`km_utente`).value;
        console.log(input_km) 
    let sel_eta = document.getElementById(`eta`).value;
        console.log(sel_eta)   
})
    