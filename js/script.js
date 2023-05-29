//FUNZIONE CHE CREA QUADRATI ALL'INTERNO DELLA GRID
function squareElem(){
    let square = document.createElement('div');
    square.classList.add('square')
    return square;
}

//DEFINIZIONE FUNZIONE CHE CREA GRIGLIA DI GIOCO
function createNewGame(){
    const grid = document.getElementById('grid');

    //DIFFICOLTA' GIOCO
    const difficulty = document.getElementById('difficulty').value;

    //SVUOTA GRIGLIA
    grid.innerHTML = '';

    //CREO CASELLE DI GIOCO
    createCells(difficulty);
}

//DEFINIZIONE FUNZIONE CHE CREA CASELLE
function createCells(level){

    let cellsNumber;
    switch(level){
        case 'easy':
            cellsNumber = 100;
            break;
        case 'medium':
            cellsNumber = 81;
            break;
        case 'hard':
            cellsNumber = 49;
            break;
    }
    console.log(cellsNumber)
    //GENERO LE CASELLE NELLA GRIGLIA
    for(let i=0; i< cellsNumber; i++){
        let square = squareElem();
        let cellsPerRow = Math.sqrt(cellsNumber);
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = square.style.width
        square.innerText = i + 1;
        square.addEventListener('click',function(){
            this.classList.add('clicked');

            console.log('Casella n.'+square.innerText)
        })
        grid.append(square);
    }
}

//PULSANTE DI AVVIAMENTO
const button = document.getElementById('start').addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value;
    createNewGame()
})

