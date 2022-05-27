//recupero elemento da html con una funzione globale
const gridContainer = document.querySelector(".grid-container")

//creo una griglia 8*8 con delle celle grandi 50px*50px
//ciclo for per fare le celle che dura 64 (8*8)
//creare un div per ogni singola cella
//appendo la cella al contenitore (grid-container)

//Funzione per fare la griglia
function generaGriglia(xCells, yCells){
    const numeroCelle = xCells * yCells;

    console.log(numeroCelle);
    //aggiungo uno stile in-line per fare un calc per avere una griglia 8*8
    gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;

for (let i = 0; i < numeroCelle; i++){
    //creare div per ogni cella
    const cell = document.createElement("div");
    //aggiungo la classe creata in css al div prima di appenderlo per non appensantire il broswer
    cell.classList.add("cell");
    
    //aggiungo la cella al gridContainer 
    gridContainer.append(cell);
}

}

generaGriglia(8,8);