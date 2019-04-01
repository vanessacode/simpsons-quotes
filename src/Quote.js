// src/Quote.js
import React from "react";

const Quote = ({ quote, character, image }) => (
  <div>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </div>
);

export default Quote;