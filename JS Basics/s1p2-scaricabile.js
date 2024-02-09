/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* datatypes
    1.Stringa, la stringa sono parole o anche numeri che vengono racchiusi dagli apici "", esempio: let nomeVariabile = "ciao" + "29";.
    2.Numero, i numeri rappresentano i valori numerici e si scrivono semplicemente digitando il 23 senza gli apici, puoi fare qualsiasi operazione matematica, tipo: let numero = 2 + 2;. Puoi fare l'addizione (+), sottrazione(-), divisione (/) e modulo (%).
    3.Oggetto, gli oggetti sono dei contenitori che contengono dei valori come negli esempi che ho scritto sopra, per esemio let esempio = { nomeVariabile: "ciao" + "29", let numero: 2 + 2}
    4.Boolean, i boolean sono dei dati che possono farti capire se qualcosa è vero o falso, quindi vengono utilizzati per controllare le condizioni di uno stato, tipo let età = 15; let èMaggiore = età > 18; uscirà scritto falso, detta in modo semplice sono domande che fai al sistema e lui ti risponde vero o falso
    5.Bigint, i Bigint sono utilizzati per far vedere dei numeri interi vermente troppo grandi, tipo: 103812092174147037037012701327505317725107312 e per dichiarare un bigint bisogna mettere la n alla fine del numero, o fare così let numero = BigInt("1267396916539065012564091410")
    6.indefinito, compare indefinito soprattuto quando non diamo un valore alla variabile che abbiamo dichiarato, per esempio: let variabile; condole.log(variabile) risulterà Indefinito  
    7.nullo, questo valore lo diamo noi alla variabile quando vogliamo assicurarci che funziona tutto o per sistemare qualcosa, esempio: let variabile = null
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* sono contenitori di dati, variabili associati a numeri o stringhe */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let one = 12;
let two = 20;
let three = one + two;
console.log(three); 


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

 let x = 12; 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "abdul" 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let somma = x - 4;
console.log(somma); 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";
console.log(name1 == name2);
console.log(name1 == name2.toLowerCase());
