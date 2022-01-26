const pet = {
  type: "pig",
  colour: "#ff0000",
  age: 10,
  isFriendly: true,
  name: "Benny",
};

// 1.select header h4

// 2.select the .age class
// 3.select .friendly class

// 4.change the innerHTML of each of them with data from the object

const heading = document.querySelector("h4");

const age = document.querySelector(".age");

const friendlyWrapper = document.querySelector(".friendly");

let friendly;

if (pet.isFriendly) {
  friendly = "this pet is friendly";
} else {
  friendly = "this pet is not friendly";
}

heading.innerHTML = pet.type;
age.innerHTML = pet.age;

// ternary operator
friendlyWrapper.innerHTML = pet.isFriendly
  ? "this pet is friendly"
  : "this pet is not friendly";
