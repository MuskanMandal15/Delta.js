// objects and objects literals

let person = {
  name: "muskan",
  age: 22,
  place: "delhi",
  friends: ["preeti", "harshita"],
};

// create an object literal for the properties of thread/twitter post which includes - username, content, likes, reposts, tags

const post = {
  username: "@muskanmandal",
  content: "This is my first post",
  likes: 100,
  reposts: 10,
  tags: ["@harshita", "@preeti"],
};

let prop = "content";
console.log(post[prop]); // we can get what's inside the content key

// getting the values using bracket notation and dot notation
console.log(post["likes"]);
console.log(post.tags);
console.log(post.tags[0]);

// to use teh variables we should use the bracket notation, the dot notation will give us the undefined

const random = {
  1: "a",
  2: "b",
  3: "c",
  true: "d",
  null: "e",
  undefined: "f",
};

// add/update value

const student = {
  name: "shreya",
  age: 33,
  marks: 99.5,
  place: "delhi",
};

student["place"] = "mumbai";
console.log(student);

student.marks = "A";
console.log(student);

student["gender"] = "female";
console.log(student);

delete student.name;
console.log(student);

// objects of objects

const eatables = {
  fruits: {
    name: "apple",
    color: "red",
    price: 100,
  },
  vegetables: {
    name: "potato",
    color: "skin-brown",
    price: 20,
  },
  junkFood: {
    name: "pizza",
    color: "multicolor",
    price: 400,
  },
};

console.log(eatables); //accessing the whole object
console.log(eatables.fruits); // accessing the specific object that is fruits.
console.log(eatables.junkFood.price); //accessing the specific object and it's specific key that is price of junkfood

eatables.vegetables.price = 40;
console.log(eatables.vegetables); //updating the price of potato

//Array of objects
//objects inside an array

const classInfo = [
  { name: "priya", grade: "A", city: "Delhi" },
  { name: "aman", grade: "B", city: "Mumbai" },
  { name: "neha", grade: "C", city: "Kolkata" },
];
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1].grade); //accessing first index's grade
console.log((classInfo[2].name = "muskan")); //updating the value
console.log(classInfo);
console.log((classInfo[1].gender = "male")); //creating new key
console.log(classInfo);

//Math object
//properties
console.log(Math.PI);
console.log(Math.E);

//Methods
//1. Math.abs(n) -abs means(absolute) gives the absolute number even if the number is in negative
console.log(Math.abs(-12.99097));

//2. Math.pow(a,b)- pow means(power) calculates the power like a**b
console.log(Math.pow(2, 5)); //means 5 times 2

//3.Math.floor(n) -gives the round or less or equal value of the number , it round off the smallest, nearest and integer value
console.log(Math.floor(-20.8965)); //gives -21 bcz -21 is smaller than -20.8965, (the bigger the number in negative the smallest it wil become)
console.log(Math.floor(-98)); //gives -98 the exact number
console.log(Math.floor(56.787765)); //gives 56

//4. Math.ceil(n)- opposite of floor
console.log(Math.ceil(90.12121));
console.log(Math.ceil(-99.8709));
console.log(Math.ceil(-98));

//5. Math.random() - gives the random number between 0 and 1 where 1 is exclusive so it will never give 1 and 0 is inclusive
console.log(Math.random());

//Random Integers
//from 1 to 10

let step1 = Math.random();
console.log(step1);

let step2 = step1 * 10; //multiplying by 10 bcz generating numbers from 1 to 10
console.log(step2);

let step3 = Math.floor(step2);
console.log(step3);

let step4 = step3 + 1;
console.log(step4);

//shorthand of this
console.log(Math.floor(Math.random() * 10) + 1);
