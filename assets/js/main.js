//dichiarazione Button
ar Genera = document.getElementById('genera');
var Annulla = document.getElementById('annulla');
//button Genera
Genera.addEventListener("click", function () {
    // Dichiarazione variabili Form Input
    var NomeCognome, kmPercorsi, fasciaEta;
    // Selezione variabili form Input
    NomeCognome = document.getElementById('nome-cognome');
    kmPercorsi = document.getElementById('km');
    fasciaEta = document.getElementById('fascia');

    // Dichiarazione variabili Form 
    var nomeCompleto, km, fascia;

    // Selezione variabili Form
    nomeCompleto = NomeCognome.value;
    km = kmPercorsi.value;
    fascia = fasciaEta.value;

    //visualizza variabili
    console.log(nomeCompleto, km, fascia);

    //Calcoli per Biglietto 
    var offerta, costo;
    offerta = document.getElementById('offerta');
    var biglietto = km * 0.21;
    if (fascia == "minorenne") {
        costo = biglietto - (biglietto * 0.2) + "€";
        offerta = "Sconto Minorenni";
    } else if (fascia == "over65") {
        costo = biglietto - (biglietto * 0.4) + "€";
        offerta = "Sconto over65";
    } else {
        costo = biglietto + "€";
        offerta = "Nessuno sconto";
    }

    // Dichiarazione variabili biglietto 
    var elNome, elSconto, elCarrozza, elCodice, elCosto;
    // Dati biglietto

    elNome = document.getElementById('nome-cognome');
    elSconto = document.getElementById('offerta');
    elCarrozza = document.getElementById('carrozza');
    elCodice = document.getElementById('codice-cp');
    elCosto = document.getElementById('costo');

    // Generatore numeri casuali per Carrozza e Codice
    var numeroCarrozza = Math.floor(Math.random() * 9) + 1 ; 
    var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000 ;

    // Inserimento dati del biglietto
    elNome.innerHTML = nomeCompleto;
    elSconto.innerHTML = offerta;
    elCarrozza.innerHTML = numeroCarrozza;
    elCodice.innerHTML = codiceCp;
    elCosto.innerHTML = costo;
})
  
// Button Annulla
Annulla.addEventListener("click", function () {
    document.getElementById('biglietto mt-50').style.display = "none";
    // dichiarazione variabili annulla
    var NomeCognome, kmPercorsi; 

    var NomeCognome = document.getElementById('nome-cognome');
    var kmPercorsi = document.getElementById('km');

    NomeCognome.value = "";
    kmPercorsi.value = "";
})