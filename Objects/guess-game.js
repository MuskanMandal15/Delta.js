let max = prompt("write the max number");
// console.log(max);

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    console.log("you are right!, Congratulations");
    break;
  } else if (guess < random) {
    guess = prompt("hint: your guess was too small, please try again");
  } else {
    guess = prompt("hint: your guess was too large,please try again");
  }
  //  else {
  //   guess = prompt("Your guess is wrong.Please try again");
  // }
}
