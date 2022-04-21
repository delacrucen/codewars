//Problem
/*Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!*/

// Program
const rps = (p1, p2) => {
  const choice1 = p1.toLowerCase();
  const choice2 = p2.toLowerCase();
  //check player 1 win
  if (choice1 === "rock" && choice2 === "scissors"){
    return "Player 1 won!";
  } else if (choice1 === "paper" && choice2 === "rock"){
    return "Player 1 won!";
  } else if (choice1 === "scissors" && choice2 === "paper"){
    return "Player 1 won!";
  //check player 2 win
  } else if (choice2 === "rock" && choice1 === "scissors"){
    return "Player 2 won!";
  } else if (choice2 === "paper" && choice1 === "rock"){
    return "Player 2 won!";
  } else if (choice2 === "scissors" && choice1 === "paper"){
    return "Player 2 won!";
  //check draw
  } else if (choice1 === choice2){
    return "Draw!";
  //check anything else than rock, paper or scissors
  } else {
    return "Please, choice either rock, paper or scissors"
  }
};

//Console testing
console.log(rps('paper', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'rock'));
console.log(rps('no', 'rock'));

//Expected output
//"Player 1 won!"
//"Player 2 won!"
//"Draw!"
//"Please, choice either rock, paper or scissors"