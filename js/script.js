//FUNZIONE CHE CREA QUADRATI ALL'INTERNO DELLA GRID
function squareElem(){
    let square = document.createElement('div');
    square.classList.add('square')
    return square;
}

//DEFINIZIONE FUNZIONE CHE GENERA NUMERO CASUALE
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//DEFINIZIONE FUNZIONE CHE RIEMPIE L'ARRAY DELLE BOMBE
function fillArrayBombs(arrayBombs, max){

    //VARIABILE DI CONTROLLO
    let check = false;
    let randomNumber;

    //SE LA VARIABILE E' FALSA
    while(check === false){

        //GENERO NUMERO CASUALE COMPRESO TRA 1 E MAX(valore del numero massimo di cells per il livello selezionato)
        randomNumber = generateRandomNumber(1, max)

        //CONTROLLLO SE ARRAY NON INCLUDE IL NUMERO
        if(!arrayBombs.includes(randomNumber)){

            //SE ARRAY NON INCLUDE NUMERO SETTO VARIABILE A true PER USCIRE DA CICLO
            check = true
        }
    }
    return randomNumber;
}

//DEFINIZIONE FUNZIONE CHE CREA GRIGLIA DI GIOCO
function createNewGame(){
    const grid = document.getElementById('grid');
    const arrayBombs = [];
    //DIFFICOLTA' GIOCO
    const difficulty = document.getElementById('difficulty').value;

    //SVUOTA GRIGLIA
    grid.innerHTML = '';

    let cellsNumber;
    switch(difficulty){
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

    //RIEMPIO L'ARRAY CON LE BOMBE
    for(let i = 0; i<16; i++){
        let number = fillArrayBombs(arrayBombs, cellsNumber);
        arrayBombs.push(number);
    }
    console.log(arrayBombs)
    //CREO CASELLE DI GIOCO
    createCells(cellsNumber, arrayBombs);
}

//DEFINIZIONE FUNZIONE CHE CREA CASELLE
function createCells(cells, arrayBombs){

    //NUMERO DI CASELLE NON CONTENENTI BOMBE CLICCATE
    let clickForWin = 0
    //GENERO LE CASELLE NELLA GRIGLIA
    for(let i=0; i< cells; i++){
        let square = squareElem();
        let cellsPerRow = Math.sqrt(cells);
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = square.style.width;
        square.innerText = i + 1;
        square.addEventListener('click',function(){
            //this.classList.add('clicked');
            //console.log('Casella n.'+square.innerText)
            if(!arrayBombs.includes(parseInt(this.innerText))){
                this.classList.add('clicked');
                clickForWin++;
                alert = ('Hai vinto, il tuo punteggio è di:' + clickForWin)
            }
            else{
                this.classList.add('bomb-found');
                let cells = document.querySelectorAll('.square');
                for(let i=0; i<cells.length; i++){
                    cells[i].style.pointerEvents = 'none';
                }
            }
        })
        grid.append(square);
    }
}

//PULSANTE DI AVVIAMENTO
const button = document.getElementById('start').addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value;
    createNewGame()
})

