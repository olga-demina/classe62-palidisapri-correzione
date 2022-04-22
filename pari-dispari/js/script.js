// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. Chiedere all'utente pari o dispari e numero
// Chiedo all'utente pari o dispari, se mi dice un'altra parola, lo richiedo fichè non mi dice pari o dispari

let userChoice;
do {
   userChoice = (prompt("Scegli pari o disapri")).toLowerCase();
} while(userChoice !== "pari" && userChoice !== "dispari")



const userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));

console.log(userChoice, userNumber);

// 2. Generare un numero del computer
const computerNumber = getRndInteger(1,5);
console.log(computerNumber);

// 3. Fare la somma
const resultSum = userNumber + computerNumber;
console.log(resultSum);

// 4. controllare se la somma è pari o dispari
const sumOddEven = evenOrOdd(resultSum);
console.log(sumOddEven);

// 5. Scrivere chi ha vinto
if (sumOddEven === userChoice) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso");
}




// FUNCTIONS
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Description This function checks a given nuber and returns "pari" if it is even or "dispari" if it is odd
 * @param {Number} numberToCheck -> number to check if even or odd
 * @returns {String} -> string "pari" if even or "dispari" if odd
 */
function evenOrOdd(numberToCheck) {
    let isEvenOrOdd = "dispari";
    if (numberToCheck % 2 === 0) {
        isEvenOrOdd = "pari";
    }

    return isEvenOrOdd;
}

