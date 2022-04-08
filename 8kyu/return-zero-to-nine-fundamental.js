//Problem
/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.*/

// Program
function switchItUp(number){
    switch(number){
        case 0:
        return "Zero";
        break;
        case 1:
        return "One";
        break;
        case 2:
        return "Two";
        break;
        case 3:
        return "Three";
        break;
        case 4:
        return "Four";
        break;
        case 5:
        return "Five";
        break;
        case 6:
        return "Six";
        break;
        case 7:
        return "Seven";
        break;
        case 8:
        return "Eight";
        break;
        case 9:
        return "Nine";
        break;
        case 10:
        return "Ten";
        break;
        default:
        return "Insert a number from 0 to 10";
    }
  }

//Console testing
console.log(switchItUp(19));
console.log(switchItUp(5));

//Expected output
//"Insert a number from 0 to 10"
//"Five"