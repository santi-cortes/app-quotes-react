import { useState } from "react";
import "./App.css";
import quotes from "./json/quotes.json";
import QuoteBox from "./components/QuoteBox";
import Loading from "./components/Loading";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(false);

  const change = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Esta funcion calcula un  nummero random
  const random = (arr) => Math.floor(Math.random() * arr.length);
  const randomCol = () => Math.floor(Math.random() * 16777215).toString(16);

  // Estas funciones extraen el indice de los arreglos con las citas y colores
  const firstElement = quotes[random(quotes)];
  const [randomQuote, setRandomQuote] = useState(firstElement);

  const firstColor = "#" + randomCol();
  const [randomColor, setRandomColor] = useState(firstColor);
  const [prevColor, setPrevColor] = useState(randomColor);

  console.log(prevColor);

  const backgroundObject = {
    backgroundColor: randomColor,
  };

  const backgroundObjectPrev = {
    backgroundColor: prevColor,
  };

  // Esta funcion vuelve a hacer los calculas para encontrar los indices
  const getRandom = () => {
    setRandomColor("#" + randomCol());
    setRandomQuote(quotes[random(quotes)]);
    setPrevColor(randomColor);
  };

  if (loading) {
    return <Loading backgroundObjectPrev={backgroundObjectPrev} />;
  } else {
    return (
      <div style={backgroundObject} className="App">
        <QuoteBox
          randomQuote={randomQuote}
          randomColor={randomColor}
          getRandom={getRandom}
          change={change}
        />
      </div>
    );
  }
}

export default App;
