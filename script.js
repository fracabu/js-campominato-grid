//recupero elemento da html con una funzione globale
const gridContainer = document.querySelector(".grid-container")

//creo una griglia 8*8 con delle celle grandi 50px*50px
//ciclo for per fare le celle che dura 64 (8*8)
//creare un div per ogni singola cella
//appendo la cella al contenitore (grid-container)

//Funzione per generare un numero random che poi con append inserisco in ogni cella
function generateRandomNumber(min, max = 10){
    if (min === undefined || min === null || min < 0){
        return;
    }

    if (max === undefined || max < min +1){

    }
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

//Funzione per generare numeri random senza doppioni
function generateUniqueRandomNumber(min,max,listaNumeriGiaGenerati){
    
    let numeroRandom;

    do {
        numeroRandom = generateRandomNumber(min,max);

    } while(listaNumeriGiaGenerati.includes(numeroRandom));
    return numeroRandom;
}

//Funzione per fare la griglia
function generaGriglia(xCells, yCells){
    const numeroCelle = xCells * yCells;

    console.log(numeroCelle);
    //aggiungo uno stile in-line per fare un calc per avere una griglia 8*8
    gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;
    //variabile dove inserire i numeri generati
    const numeriGenerati =[]

for (let i = 0; i < numeroCelle; i++){
    const randomNumber = generateUniqueRandomNumber(1,100,numeriGenerati);
    numeriGenerati.push (randomNumber);
    //creare div per ogni cella
    const cell = document.createElement("div");
    //aggiungo la classe creata in css al div prima di appenderlo per non appensantire il broswer
    cell.classList.add("cell");
    //aggiungo i numeri random alle celle
    cell.innerHTML = `<span>${randomNumber}</span>`
    //aggiungo la cella al gridContainer 
    gridContainer.append(cell);
}

}

generaGriglia(8,8);