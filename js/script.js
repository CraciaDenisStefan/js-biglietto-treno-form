//Creaiamo variabile per generare i valori scelti dal utente con un click
let button = document.getElementById(`genera`);
button.addEventListener(`click`, function(){
    let input_nome = document.getElementById(`nome_cognome`).value;
        console.log(input_nome)
    let input_km = document.getElementById(`km_utente`).value;
        console.log(input_km) 
    let sel_eta = document.getElementById(`eta`).value;
        console.log(sel_eta)  

    let prezzo_km = (0.21);
    let prezzo = prezzo_km * input_km;
            console.log(prezzo)
            
    if(sel_eta === `Minorenne`) {
        let sconto_20 =  prezzo * 20 / 100 ;
        prezzo = (prezzo - sconto_20);
        console.log(prezzo)
        }else if(sel_eta === `Over 65`) {
        let sconto_40 =  prezzo * 40 / 100 ;
        prezzo = (prezzo - sconto_40);
            console.log(prezzo)
        }

     if(isNaN(input_km) || !isNaN(input_nome))  {
        alert(`I valori da te inseriti non sono accettati!`)
        location.reload()
     }

     if (document.getElementById("nome_cognome").value.length < 6){
        alert(`Numero di carrateri inferiore al minimo !`)  
        location.reload() 
     }
    

    document.getElementById(`nome_passeggero`).innerHTML = input_nome;
    document.getElementById(`tipo_biglietto`).innerHTML = sel_eta;
    document.getElementById(`prezzo_biglietto`).innerHTML = `${(prezzo).toFixed(2)}€`;

    let n_car = Math.floor(Math.random() * 10 +1);
    document.getElementById(`numero_carrozza`).innerHTML = n_car;
    let cp = Math.floor(Math.random() * 10000 +1);
    document.getElementById(`codice_cp`).innerHTML = cp;
    
})
    

