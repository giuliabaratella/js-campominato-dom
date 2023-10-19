"use strict";

campoMinato();

function campoMinato (){
    
    const btn = document.getElementById('button');
    const playground = document.getElementById('playground');
    const alert = document.querySelector('.alert');
    const difficultyBox = document.getElementById('difficulty');
    // aggiungo la costante per le bombe 
    const nBombs = 16;

    btn.addEventListener('click', play);

    function play (){

        alert.innerHTML = '';
        playground.innerHTML = '';
        let nSquare = 0;

        let difficulty = difficultyBox.value ;
        
        if (difficulty === '1'){
            nSquare = 100;
        } else if (difficulty === '2'){
            nSquare = 81;
        } else if (difficulty === '3'){
            nSquare = 49;
        } else {
            alert.innerHTML = 'Attenzione! scegli la difficoltà a cui vuoi giocare.'
        }

        let bombs = createBombs(nSquare);
        console.log (bombs);

        for (let i = 1; i <= nSquare; i++){
            let square = drawSquare(i,nSquare);
            playground.append (square);
        }

        function squareClick() {
            if (!this) return;
            // aggiungo le condizioni in caso la casella contenga una bomba 
            // (se l'array delle bombe include il numero della casella)
            if (bombs.includes(parseInt(this.innerText))){
                this.classList.add('bomb'); 
                this.innerHTML = '<i class="fa-solid fa-bomb fa-beat-fade"></i>';
            } else {
                this.classList.add('active');
            }
            
            console.log(this.innerText);
        }

        function drawSquare(n,numSquare){
        
            const squareWidth = Math.sqrt(numSquare);
            const square = document.createElement('div');
            square.classList.add ('square');
            square.innerText = n;
    
            square.style.width = `calc(100% / ${squareWidth})`;
            square.style.height = square.style.width;
    
            square.addEventListener('click', squareClick);
            return square;
        }
    }

    // creo la funzione per generare le bombe 
    function createBombs(nSquare){
        // creo l'array vuoto 
        let arrayBombs = [];

        // creo un ciclo che crei randomicamente una bomba e la inserisca nell'array
        while (arrayBombs.length < nBombs){
            let bomb = getRndInteger (1, nSquare);
            if (!arrayBombs.includes(bomb)){
                arrayBombs.push(bomb);
            }
        }
        return arrayBombs;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 
}