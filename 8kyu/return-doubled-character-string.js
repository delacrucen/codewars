// Problem
/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!*/

// Program
function doubleLetter(str){
    const splited = str.split("");
    const arr = []
    for(let i=0; i<=splited.length-1; i++){
        arr.push(splited[i])
        arr.push(splited[i])
    }
    return arr.join("");
}

// Console testing
console.log(doubleLetter("keyboard"));
console.log(doubleLetter("mouse"));

// Expected output
// "kkeeyybbooaarrdd"
// "mmoouussee"
