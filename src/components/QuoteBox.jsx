import { Button } from "antd";
import React from "react";

const QuoteBox = ({ handleTheme, randomQuote, randomColor, getRandom, change }) => {
  const colorObj = {
    color: randomColor,
  };

  const colorBack = {
    background: randomColor,
  };

  return (
    <article className={`card ${handleTheme}`} style={colorObj}>
      <p className="card_quote">{randomQuote.quote}</p>
      <h1 className="card_author">{randomQuote.author}</h1>
      <button
        style={colorBack}
        className="card_btn"
        onClick={() => {
          getRandom();
          change();
        }}
        >
        &#62;
      </button>
    </article>
  );
};

export default QuoteBox;
