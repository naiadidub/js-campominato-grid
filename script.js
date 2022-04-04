//variabile contenete la stringa in cui è scritta la difficoltà
let difficoltàScelta = document.getElementById('sceltaDifficoltà').value.toString()


//funzione play per creare griglia
let numeroColonne = 100
let colonnePerRiga = 10
function stampagriglia (){
    let quadratino = document.getElementById('app');
    quadratino.innerHTML = ''
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    let cols = creaColonne(numeroColonne);
    row.innerHTML = cols
    quadratino.append(row)
}

//funzione per creare colonne 
function creaColonne (numeroColonne){
    let col = ''
    for (i=0; i < numeroColonne; i++){
        col += `<div class='col stileCol'>${i}</div>
        `
    }
    return col
}
stampagriglia();