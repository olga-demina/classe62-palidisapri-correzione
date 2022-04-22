// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Chiedo all'utente una parola -> prompt
// const userWord = prompt("Dimmi una parola");
// 
// // 2. verificare se la parola è palindroma
// // function
// 
// const isUserWordPalindrom = isStringPalindrome(userWord);
// console.log(isUserWordPalindrom);
// 
// // 3. OUTPUT: se la parola è palindroma scrivo "è palindroma", altrimenti scrivo "non è plaindroma" -> console.log
// if (isUserWordPalindrom) {
//     console.log("è palindroma");
// } else {
//     console.log("non è palindroma");
// }
// 


// ---------------
// FUNCTIONS
// --------------
/**
 * Description This function checks if a given word is palindrome and gives true if it is or flase otherwise
 * @param {String} stringToCheck -> any string to check if it is palindrome (without spaces) 
 * @returns {Boolean} -> true if is palindrome, flase otherwise 
 */
function isStringPalindrome(stringToCheck) {
    
    // 1. rovesciare la parola
    let reverseString = "";
    // "ciao"[3] -> "o" -> o
    // "ciao"[2] -> "a" -> oa
    // "ciao"[1] -> i -> oai
     // "ciao"[0] -> c -> oaic
                    //4
    for (let i = stringToCheck.length - 1; i >= 0; i--) {
        reverseString += stringToCheck[i];
    }

    // 2. confrontare la parola originale con quella rovesciata
    let isPalindrome = false;
    if (reverseString === stringToCheck) {
        isPalindrome = true;
    }

    return isPalindrome;
}

// Array

const myArray = [1, 2, 3];
console.log(myArray);

myArray.reverse()

console.log(myArray);

const anotherArray = myArray;

let isEqual = myArray === anotherArray; 
console.log(isEqual);