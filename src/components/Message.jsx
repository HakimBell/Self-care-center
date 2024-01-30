import meditate from "../assets/meditate.svg";
import React, { useState } from "react";

const affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];

const mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

const Message = () => {
  const [selectedType, setSelectedType] = useState("");
  const [randomMessage, setRandomMessage] = useState("");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleReceiveMessage = () => {
    const messages = selectedType === "affirmation" ? affirmations : mantras;
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  };

  const handleClear = () => {
    setRandomMessage("");
    // setSelectedType("");
  };
  return (
    <>
      <div id="box" className="buttons">
        <div className="radio-buttons">
          <span>
            <input
              type="radio"
              name="choix"
              checked={selectedType === "affirmation"}
              onChange={() => handleTypeChange("affirmation")}
            />
            <label htmlFor="affirmation">Affirmation</label>
          </span>
          <span>
            <input
              type="radio"
              name="choix"
              checked={selectedType === "mantra"}
              onChange={() => handleTypeChange("mantra")}
            />
            <label htmlFor="affirmation">Mantra</label>
          </span>
        </div>
        <div className="submit-button-box">
          <button className="submit-button" onClick={handleReceiveMessage}>
            Receive message
          </button>
        </div>
      </div>
      <div className="box-message">
        {randomMessage ? null : <img src={meditate} alt="" />}
        {<p>{randomMessage}</p>}
      </div>
      <button onClick={handleClear}>Effacer</button>
    </>
  );
};

export default Message;
