import Boarding from "..//../assets/Boarding.png";
import House_Sitting from "..//../assets/House_Sitting.png";
import Dog_Walking from "..//../assets/Dog_Walking.png";
import DropIn_Visit from "..//../assets/DropIn_Visit.png";

const services = [
  {
    id: 1,
    image: House_Sitting,
    title: "House Sitting",
    quote:
      "Your sitter takes care of your pets and your home. Your pets will get all the attention they need without leaving home.",
  },
  {
    id: 2,
    image: Dog_Walking,
    title: "Dog Walking",
    quote:
      "Your dog gets a walk around your neighborhood. Perfect for busy days and dogs with extra energy to burn.",
  },
  {
    id: 3,
    image: Boarding,
    title: "Boarding",
    quote:
      "Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a comfortable environment.",
  },
  {
    id: 4,
    title: "Drop-in Visit",
    image: DropIn_Visit,
    quote:
      "Your sitter drops by your home to play with your pets, offer food, and give potty breaks or clean the litter box.",
  },
];

export default services;
