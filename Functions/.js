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
