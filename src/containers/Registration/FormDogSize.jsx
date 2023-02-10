import React, { useState } from "react";
import dog_size from "..//..//assets/dog_size.png";
import data from "./DogSizeData.js";

const FormDogSize = () => {
  const [dogSizes] = useState(data);
  const [activeQuote, setActiveQuote] = useState("");
  const [activeBorder, setActiveBorder] = useState(0);

  const renderedServices = dogSizes.map((size, index) => {
    const active = index === activeBorder ? "border" : "";
    const onServiceClick = (index) => {
      setActiveBorder(index - 1);
    };

    return (
      <div
        key={size.id}
        onClick={() => setActiveQuote(size.quote) || onServiceClick(size.id)}
        className={`${size.className} ${active}`}
      >
        <img src={dog_size} />
        <p>{size.quote}</p>
      </div>
    );
  });

  return (
    <div className="dog-size-wrapper">
      <h3>Chose your dog's size:</h3>
      <div className="dog-size-containers">{renderedServices}</div>
    </div>
  );
};

export default FormDogSize;
