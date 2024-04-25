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
