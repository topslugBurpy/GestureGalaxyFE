import React from "react";
import { useState } from "react";

import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  quitLink,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    event.preventDefault();
    setIsClicked(!isClicked);
  };

  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {!isClicked && buttonText && link && (
        <a href={link} className="card-btn" onClick={handleClick}>
          {buttonText}
        </a>
      )}
      {isClicked && (
        <a className="card-btn-quit" onClick={handleClick} href={quitLink}>
          Quit
        </a>
      )}
    </div>
  );
};
