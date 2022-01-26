const pet = {
  type: "pig",
  colour: "#ff0000",
  age: 0,
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
petDetail.innerHTML = `
<h4>${petType}</h4>
<p>${petColour}</p>
<p>${isPetFriendly}</p>
`;
