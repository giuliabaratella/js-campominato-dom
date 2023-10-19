# js-campominato-dom
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. <br>
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. <br>
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.  <br>
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. <br>
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). <br>
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. <br>
 <br>
BONUS  <br>
Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:  <br>
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;  <br>
diifficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; <br>
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; <br>
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle. <br> Evitare che si possa cliccare 2 volte sulla stessa cella <br>
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
