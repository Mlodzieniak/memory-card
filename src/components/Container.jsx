/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import propTypes from "prop-types";

function Container(props) {
  const { onPick } = props;
  const [store, setStore] = useState([]);
  const [cards, setCards] = useState([
    {
      name: "SpongeBob SquarePants",
      path: "/characters/SpongeBob-SquarePants.webp",
    },
    {
      name: "Squidward",
      path: "../../characters/SpongeBob-Squidward.webp",
    },
    { name: "Sandy", path: "../../characters/SpongeBob-Sandy.webp" },
    { name: "Plankton", path: "../../characters/SpongeBob-Plankton.webp" },
    { name: "Pearl", path: "../../characters/SpongeBob-Pearl.webp" },
    { name: "Patrick", path: "../../characters/SpongeBob-Patrick.webp" },
    { name: "Mrs. Puff", path: "../../characters/SpongeBob-Mrs-Puff.webp" },
    { name: "Mr. Krabs", path: "../../characters/SpongeBob-Mr-Krabs.webp" },
    { name: "Karen", path: "../../characters/SpongeBob-Karen.webp" },
    { name: "Gary", path: "../../characters/SpongeBob-Gary.webp" },
    { name: "Larry the Lobster", path: "../../characters/Larry_11.webp" },
    { name: "Flying Duchman", path: "../../characters/Duchman.webp" },
    { name: "King Neptune", path: "../../characters/King_Neptune.webp" },
    { name: "Perch Perkins", path: "../../characters/Perch_Perkins.webp" },
    { name: "Grandma Squarepants", path: "../../characters/Grandma.webp" },
  ]);
  const shuffle = (array) => {
    const shuffledArray = [...array];

    // Shuffle the copy using the Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  useEffect(() => {
    setCards(shuffle(cards));
  }, []);
  const pick = (char) => {
    if (store.includes(char)) {
      setStore([]);
      onPick(true);
    } else {
      setStore([...store, char]);
      onPick(false);
    }
    setCards(shuffle(cards));
  };

  return (
    <div className="container">
      {cards.slice(0, 6).map((char) => (
        <button
          type="button"
          key={uniqid()}
          className="card"
          onClick={() => pick(char.name)}
        >
          <div className="img-wrapper">
            <img src={char.path} alt={char.name} />
          </div>
          <p className="char-name">{char.name}</p>
        </button>
      ))}
    </div>
  );
}
Container.propTypes = {
  onPick: propTypes.func.isRequired,
};

export default Container;
