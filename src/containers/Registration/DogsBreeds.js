const dogBreeds = require("dog-breeds");

console.log(dogBreeds);
const listOfDogs = [];

const pasi = Object.values(dogBreeds);

console.log(pasi);

pasi[0].map((breed) => {
  listOfDogs.push(breed.name.toLowerCase());
});

console.log(listOfDogs);

export default listOfDogs;
