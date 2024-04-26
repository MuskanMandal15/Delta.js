function name() {
  console.log("muskan");
}

name();

function rank() {
  console.log("first");
  console.log("second");
}
rank();

// Loops in function
//printing number from 1 to 5
function print1To5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1To5();

//if-else in function
//check if person is adult or not
function isAdultOrNot() {
  let age = 19;
  if (age >= 18) {
    console.log("person is adult");
  } else {
    console.log("person is not adult");
  }
}
isAdultOrNot();

//Question 1. print a poem
function printingPoem() {
  console.log("twinkle twinkle, little star");
  console.log("how are wonder, what you are");
}
printingPoem();

//Question 2.Create a function to roll a dice & always display the value of the dice (1 to 6)
function rollingDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}
rollingDice();
rollingDice();
rollingDice();
rollingDice();
rollingDice();
rollingDice();
