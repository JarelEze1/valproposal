import React, { useEffect, useState } from "react";
import { playMusic, redirectToWhatsApp, redirectToSocial } from "./utils";
import Confetti from "react-confetti";
import "./val.css";

const App = () => {
  const [showChoices, setShowChoices] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const music = document.getElementById("background-music");
    setTimeout(() => {
      music.play().catch(() => {
        console.log("Autoplay blocked. Music will play on user interaction.");
      });
    }, 3000); // Play after 3s delay
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    redirectToWhatsApp();

    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="container">
      <audio id="background-music" src="audio/Post_Malone_Psycho.mp3" loop />
      {showConfetti && <Confetti />}
      
      <h1>Will You Be My Valentine? ❤️</h1>
      
      {!showChoices ? (
        <button className="btn" onClick={() => setShowChoices(true)}>
          Click Me
        </button>
      ) : (
        <div className="choice-buttons" style={{ display: "block" }}>
          <button className="choice" onClick={handleYesClick}>
            Yes 💌
          </button>
          <button className="choice" onClick={redirectToSocial}>
            No 😅
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
