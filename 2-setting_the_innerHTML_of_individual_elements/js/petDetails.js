const pet = {
  type: "pig",
  colour: "#ff0000",
  age: 10,
  isFriendly: false,
  name: "Benny",
};

// 1. Select the pet detail dom element by class

// 3. play with friendly value

// pet.isFriendly === false
// 4.  check pet is friendly or not

// 5. use the colour in a variable
// 2. change the innerHTML of the pet details

const petColour = pet.colour;
const petType = pet.type;
const petAge = pet.age;
const isPetFriendly = pet.isFriendly;

const petDetail = document.querySelector(".pet-detail");
console.log(petDetail);
console.log(petColour);
console.log(petType);
console.log(petAge);
console.log(isPetFriendly);

const petcolour = pet.colour;
const petAges =
  pet.age > 0
    ? pet.age
    : "information about age is not available at the moment";
const PetHeight = pet.height;
const petWeight = pet.weight;

petDetail.innerHTML = `
<h4 style="color:${petcolour}">Type of pet: ${petType}</h4>
<p>Age: ${petAge}</p>
<p>friendly: ${isPetFriendly ? "no" : "yes"} </p>
`;
