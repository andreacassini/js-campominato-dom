//FUNZIONE CHE CREA QUADRATI ALL'INTERNO DELLA GRID
function squareElem(){
    let square = document.createElement('div');
    square.classList.add('square')
    return square;
}

const button = document.getElementById('start').addEventListener('click', function(){
    
})
//COLLEGAMENTO GRID NEL DOM
const grid = document.getElementById('grid');

//CICLO PER CREARE LA TABELLA
for(let i=0; i<100; i++){
    let square = squareElem();
    square.innerText = i + 1;
    square.addEventListener('click',function(){
        this.classList.add('clicked');
        console.log('Casella n.'+square.innerText)

    })
    grid.append(square);
}