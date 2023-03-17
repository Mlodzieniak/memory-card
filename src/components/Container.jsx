/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import propTypes from "prop-types";
import spongebob from "../images/SpongeBob-SquarePants.webp";
import squidward from "../images/SpongeBob-Squidward.webp";
import sandy from "../images/SpongeBob-Sandy.webp";
import plankton from "../images/SpongeBob-Plankton.webp";
import pearl from "../images/SpongeBob-Pearl.webp";
import patrick from "../images/SpongeBob-Patrick.webp";
import puff from "../images/SpongeBob-Mrs-Puff.webp";
import krabs from "../images/SpongeBob-Mr-Krabs.webp";
import karen from "../images/SpongeBob-Karen.webp";
import gary from "../images/SpongeBob-Gary.webp";
import duchman from "../images/Duchman.webp";
import larry from "../images/Larry_11.webp";
import neptun from "../images/King_Neptune.webp";
import perch from "../images/Perch_Perkins.webp";
import grandma from "../images/Grandma.webp";

function Container(props) {
  const { onPick } = props;
  const [store, setStore] = useState([]);
  const [cards, setCards] = useState([
    {
      name: "SpongeBob SquarePants",
      path: spongebob,
    },
    {
      name: "Squidward",
      path: squidward,
    },
    { name: "Sandy", path: sandy },
    {
      name: "Plankton",
      path: plankton,
    },
    { name: "Pearl", path: pearl },
    { name: "Patrick", path: patrick },
    {
      name: "Mrs. Puff",
      path: puff,
    },
    {
      name: "Mr. Krabs",
      path: krabs,
    },
    { name: "Karen", path: karen },
    { name: "Gary", path: gary },
    {
      name: "Larry the Lobster",
      path: larry,
    },
    { name: "Flying Duchman", path: duchman },
    { name: "King Neptune", path: neptun },
    {
      name: "Perch Perkins",
      path: perch,
    },
    {
      name: "Grandma Squarepants",
      path: grandma,
    },
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
    const checkedArr = [...shuffledArray].splice(0, 6);
    const results = [];
    checkedArr.forEach((ele) => {
      results.push(store.includes(ele.name));
    });
    const set = new Set(results);
    if (set.has(false)) {
      return shuffledArray;
    }
    if (store.length === cards.length) {
      return shuffledArray;
    }
    return shuffle(shuffledArray);
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
  };
  useEffect(() => {
    if (store.length === cards.length) {
      onPick(false);
      onPick(true);
      setStore([]);
    }
    setCards(shuffle(cards));
  }, [store]);

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
