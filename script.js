//variabile contenete la stringa in cui è scritta la difficoltà



//funzione per creare griglia

function stampagriglia (){
    let difficoltàScelta = document.getElementById('sceltaDifficoltà').selectedIndex
    console.log(difficoltàScelta)
    let numeroColonne 
    let colonnePerRiga 
    if (difficoltàScelta === 0){
        numeroColonne = 100
        } else if (difficoltàScelta == 1) {
            numeroColonne = 81
        } else {
            numeroColonne = 49
        }
    let quadro = document.getElementById('app');
    quadro.innerHTML = ''
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    let cols = creaColonne(numeroColonne);
    row.innerHTML = cols
    quadro.append(row)
    cols.addEventListener('click', cambiaColore)
}

//funzione per creare colonne 
function creaColonne (numeroColonne){
    let col = ''
    for (i=1; i <= numeroColonne; i++){
        col += `<div class='col stileCol'>${i}</div>
        `
    }
    return col
}

//funzione per cambiare colore al quadratino
function cambiaColore() {
    cols.classList.add('bluecolor')
}
