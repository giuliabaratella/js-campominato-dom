"use strict";

campoMinato();

function campoMinato (){
    
    const btn = document.getElementById('button');
    const playground = document.getElementById('playground');
    const myAlert = document.querySelector('.my-alert');
    const difficultyBox = document.getElementById('difficulty');
    // aggiungo la costante per le bombe 
    const nBombs = 16;
    // aggiungo la variabile del punteggio 
    let score = 0;
    const nScore = document.getElementById('n-score');
    nScore.innerHTML = score;
    let maxScore;

    btn.addEventListener('click', play);

    function play (){
        score = 0;
        nScore.innerHTML = 0;
        myAlert.innerHTML = '';
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
            nSquare= 0;
            myAlert.innerHTML = 'Attenzione! scegli la difficoltà a cui vuoi giocare'
        }
        
        if(nSquare !== 0){
            let bombs = createBombs(nSquare);
            console.log (bombs);
    
            for (let i = 1; i <= nSquare; i++){
                let square = drawSquare(i,nSquare);
                playground.append (square);
            }
        }
       

        function squareClick() {
            if (!this) return;
            // faccio in modo che il quadratino non possa essere cliccato più volte 
            this.removeEventListener('click',squareClick);

            // aggiungo le condizioni in caso la casella contenga una bomba 
            // (se l'array delle bombe include il numero della casella)
            if (bombs.includes(parseInt(this.innerText))){
                this.classList.add('bomb'); 
                this.innerHTML = '<i class="fa-solid fa-bomb fa-beat-fade"></i>';
                gameOver(score);
            } else {
                this.classList.add('active');
                score++;
                nScore.innerHTML = score;
                win(score);
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

        // creo la funzione per la vittoria e la sconfitta

        function win (score){
            maxScore = (nSquare - nBombs);
            console.log (maxScore);
            if (score === maxScore){
                alert(`Hai vinto! Il tuo punteggio è ${score}`)
            }
        }

        function gameOver(score) {
            alert(`Hai trovato una bomba, hai perso! Il tuo punteggio è ${score}`)
            const allSquares = document.getElementsByClassName('square');
            // rimuovo il click ad ogni quadratino dopo il game over 
            for (let i = 0; i < allSquares.length; i++){
                let el = allSquares[i];
                el.removeEventListener('click', squareClick);
                if (bombs.includes(parseInt(el.innerHTML))){
                    el.classList.add('bomb');
                    el.innerHTML = '<i class="fa-solid fa-bomb fa-beat-fade"></i>';
                }
            }
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