//Problem
/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.*/

// Program
function updateLight(current) {
  const value = current.toLowerCase();
  if (value === "green"){
    return "yellow";
  } else if (value === "yellow") {
    return "red";
  } else if (value === "red") {
    return "green"
  }
}

//Console testing
console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));

//Expected output
//"yellow"
//"red"
//"green"