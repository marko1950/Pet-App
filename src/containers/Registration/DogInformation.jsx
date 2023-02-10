import React, { useEffect, useState } from "react";
import unsplash from "./unsplash";
import listOfBreeds from "./DogsBreeds.js";

const DogInformation = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [listOfDogs] = [listOfBreeds];

  useEffect(() => {
    const search = async () => {
      const response = await unsplash.get("/search/photos", {
        params: { query: term },
      });

      setImages(response.data.results);
      console.log(response.data.results);
    };
    if (listOfDogs.includes(term.toLowerCase()))
      if (term && !images.length) {
        const timeoutId = setTimeout(() => {
          search();
        }, 2000);
        return () => {
          clearTimeout(timeoutId);
        };
      } else {
        const timeoutId = setTimeout(() => {
          if (term) {
            search();
          }
        }, 2000);

        return () => {
          clearTimeout(timeoutId);
        };
      }
  }, [term]);

  const items = images.slice(0, 1);
  const IMG = items.map((item) => {
    const { full } = item.urls;
    return <img src={full} />;
  });

  return (
    <div className="dog-form-div_wrapper">
      <div className="dog-form-div">
        <h2>Dog's information</h2>
        <form className="form2">
          <div className="dog-input">
            {" "}
            <label htmlFor="">Dog's name:</label>
            <input
              className="form-input2"
              type="text"
              name="dogs_name"
              placeholder="Dog's name"
            />
          </div>
          <div className="dog-input">
            <label htmlFor="">Dog's breed:</label>
            <input
              className="form-input2"
              type="text"
              name="dogs_breed"
              placeholder="Dog's breed"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <div className="dog-input">
            <label for="ages">Dog's age (years):</label>
            <select id="ages">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
          </div>
        </form>
      </div>
      <div className="dog_right_container">
        <div className="img_wrapper">{IMG}</div>
      </div>
    </div>
  );
};

export default DogInformation;
