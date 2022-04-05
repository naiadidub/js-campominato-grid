/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


1. al click sul bottone play avvio il gioco

2.avvio il gioco: prendo l'input del livello di gioco dall'utente  setto il livello del gioco 
e a seconda del livello selezionato definisco quanti quadratini devo creare e quante celle per lato avrà la mia griglia

3.creare la griglia di dimensioni uguali a quelle scelte quindi per ogni cella

4. creare la cella ed impostare la classe di base e altezza e larghezza; e ritornare la cella creata

5. al click colorare la cella 

*/
function setLevel(event) {
    //console.log(this);
    //console.log(event.target);
    //event.preventDefault();
    const level = document.getElementById("level").value;
    console.log("livello selezionato: ", level);
    let numSquare;
    switch (level) {
      case "1":
      default:
        numSquare = 100;
        break;
      case "2":
        numSquare = 81;
        break;
      case "3":
        numSquare = 49;
        break;
    }
    let squareperSide = Math.sqrt(numSquare);
    console.log("celle per lato: ", squareperSide);
    generaGriglia(numSquare, squareperSide);
  }
  function generaGriglia(numSquare, squareperSide) {
    console.log("numero di celle totali: ", numSquare);
    const app = document.getElementById("app");
    app.innerHTML = "";
    let row = document.createElement("div");
    row.setAttribute("class", "gridrow");
    for (let i = 1; i <= numSquare; i++) {
      const square = generaCella(i, squareperSide);
      row.append(square);
    }
    app.append(row);
  }
  function generaCella(numSquare, squareperSide) {
    let square = document.createElement("div");
    square.setAttribute("class", "box");
    square.style.width = `calc(100% / ${squareperSide})`;
    square.style.height = `calc(100% / ${squareperSide})`;
    square.classList.add("pointer");
    square.innerHTML = `<span>${numSquare}</span>`;
    square.addEventListener("click", coloraCella);
    return square;
  }
  function coloraCella() {
    //console.log(this);
    this.style.backgroundColor = "#6495ed";
    this.classList.remove("pointer");
    this.removeEventListener("click", coloraCella);
  }
  //document.getElementById("level").addEventListener("change", setLevel);
  document.getElementById("play").addEventListener("click", setLevel);
