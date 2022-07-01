// Problem
/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
*/

//Program
const correct = (string) => string.split("").map(e => {
  if(e === "5"){
    return "S";
  }else if(e === "0"){
    return "O";
  }else if(e === "1"){
    return "I";
  }else{
    return e;
  }
}).join("");

// Console testing
console.log(correct("L0ND0N"));
console.log(correct("BUDAPE5T"));

// Expected output
// "LONDON"
// "BUDAPEST"