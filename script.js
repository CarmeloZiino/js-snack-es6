/*
!!!Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

!!!Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


!!!Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b). */




// Snack 1. Soluzione


const biciclette = [
    { nome: "Pinarello Dogma", peso: 6.8 },
    { nome: "Specialized Tarmac", peso: 8.5 },
    { nome: "Cervélo S5", peso: 7.1 },
    { nome: "Trek Emonda", peso: 6.7 },
    { nome: "Cannondale SuperSix", peso: 6.9 },
    { nome: "Carmelo Velox Bike", peso: 5.5 } 
  ];


let biciLeggera = biciclette[0];

for (let i = 1 ; i < biciclette.length ; i++){
if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i]}
}

console.log (`La bici che pesa di meno è la ${biciLeggera.nome}, poichè il suo peso è ${biciLeggera.peso} chili.`)





// Snack 2. Soluzione

const squadreCalcio = [ //Creare un array di oggetti di squadre di calcio.
    { nome: "Juventus", punti: 0, falliSubiti: 0 }, //Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    { nome: "Inter", punti: 0, falliSubiti: 0 }, //Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Lipari", punti: 0, falliSubiti: 0 }
];



squadreCalcio.forEach (squadra =>{
squadra.punti = Math.floor(Math.random()*101);
squadra.falliSubiti = Math.floor(Math.random()*101);
});

console.log(squadreCalcio)


/* Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
e stampiamo tutto in console.*/

const falliSquadre = squadreCalcio.map ( function(squadra) {
    return {nome: squadra.nome,
           falliSubiti: squadra.falliSubiti}
 });

console.log (falliSquadre);


// Snack 3. Soluzione

/*Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b). */

function estraiElementi(array, a, b) {
    return array.slice(a, b);
}

//Test per verificare la funzione:

const mugiwara = ['Rufy', 'Zoro', 'Nami', 'Sanji', 'Usop', 'Chopper', 'Jimbe', 'Brook', 'Francky', 'Robin'];

const risultato = estraiElementi(mugiwara, 2, 4);  

console.log(risultato);  