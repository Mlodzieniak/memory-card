import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function Container() {
  const [cards, setCards] = useState([
    {
      name: "SpongeBob SquarePants",
      path: "/characters/SpongeBob-SquarePants.webp",
    },
    {
      name: "Squidward",
      path: "/characters/SpongeBob-Squidward.webp",
    },
    { name: "Sandy", path: "/characters/SpongeBob-Sandy.webp" },
    { name: "Plankton", path: "/characters/SpongeBob-Plankton.webp" },
    { name: "Pearl", path: "/characters/SpongeBob-Pearl.webp" },
    { name: "Patrick", path: "/characters/SpongeBob-Patrick.webp" },
    { name: "Mrs. Puff", path: "/characters/SpongeBob-Mrs-Puff.webp" },
    { name: "Mr. Krabs", path: "/characters/SpongeBob-Mr-Krabs.webp" },
    { name: "Karen", path: "/characters/SpongeBob-Karen.webp" },
    { name: "Gary", path: "/characters/SpongeBob-Gary.webp" },
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
  const picked = [];
  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  return (
    <div className="container">
      {cards.slice(0, 4).map((char) => (
        <button
          type="button"
          key={uniqid()}
          className="card"
          onClick={() => setCards(shuffle(cards))}
        >
          <img src={char.path} alt={char.name} />
          <p>{char.name}</p>
        </button>
      ))}
    </div>
  );
}

export default Container;
