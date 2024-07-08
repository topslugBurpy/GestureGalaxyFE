import React from "react";
import { Card } from "./Card";
import "./CardView.css";
import { assets } from "../../assets/assets";

const CardView = () => {
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc={assets.angrybirds}
          imgAlt="Card Image 1"
          title="Angry Birds"
          description="Angry Birds is a popular mobile game where players catapult birds to destroy pigs' fortresses."
          buttonText="Play Now"
          link="/rundinoangrybird"
          quitLink="/quitdinoangrybird"
        />
        <Card
          imgSrc={assets.dinogame}
          imgAlt="Card Image 1"
          title="Dino Game"
          description="Dino Game is a simple, offline browser game where players jump over obstacles as a running dinosaur."
          buttonText="Play Now"
          link="/rundinoscript"
          quitLink="/quitdinoscript"
        />
        <Card
          imgSrc={assets.pingpong}
          imgAlt="Card Image 1"
          title="Table Tennis"
          description="Table Tennis is a fast-paced sport where players hit a small ball across a netted table."
          buttonText="Play Now"
          link="/runpingpong"
          quitLink="/quitpingpong"
        />
        <Card
          imgSrc={assets.rockpaperscissor}
          imgAlt="Rock Paper Scissor"
          title="Rock Paper Scissor"
          description="Rock Paper Scissor is a hand game where players choose gestures to beat their opponent's choice."
          buttonText="Play Now"
          link="/runstonner"
          quitLink="/quitstonner"
        />
      </div>
      <div></div>
    </div>
  );
};

export default CardView;
