import { useState } from "react";
import "./App.css";
import quotes from "./json/quotes.json";
import QuoteBox from "./components/QuoteBox";
import Loading from "./components/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Switch } from "antd";
import { Form } from "reactstrap";

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
  
  
  const backgroundObject = {
    backgroundColor: randomColor,
  };

  const backgroundObjectDark = {
    backgroundColor: 'black',
  };
  
  const backgroundObjectPrev = {
    backgroundColor: prevColor,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [bool, setBool] = useState(true);
  const [handleTheme, setHandleTheme] = useState('light');
  

  const handleThemeDark = () => {
    if(bool) {
      setBool(false);
      setHandleTheme('dark');
      console.log(handleTheme);
      console.log('se cambió a falso');
    } else if (!bool) {
      setBool(true);
      console.log(handleTheme);
      setHandleTheme('light');
      console.log('se cambio a verdadero');
    }
  };

  // Esta funcion vuelve a hacer los calculas para encontrar los indices
  const getRandom = () => {
    setRandomColor("#" + randomCol());
    setRandomQuote(quotes[random(quotes)]);
    setPrevColor(randomColor);
  };

  if (loading) {
    return <Loading backgroundObjectPrev={backgroundObjectPrev} handleTheme={handleTheme} bool={bool}/>;
  } else {
    return (
      <div style={bool ? backgroundObject : backgroundObjectDark} className="App" id={`${handleTheme}`}>
        <QuoteBox
          handleTheme={handleTheme}
          randomQuote={randomQuote}
          randomColor={randomColor}
          getRandom={getRandom}
          change={change}
        />
        <Button className={`config ${handleTheme}`} onClick={showModal} style={{position: 'absolute', bottom: '0', right: '0', margin: '15px', height: '50px', width: '50px', padding: '0px !important'}}>
          <svg className="logo" style={{width: '50px', margin: '0px !important', padding: '0px !important'}} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.395 13.428a11.18 11.18 0 0 1 9.49 17.086m-9.49-17.085H9.865A4.356 4.356 0 0 0 5.5 17.796v20.342a4.354 4.354 0 0 0 4.364 4.365h20.342a4.356 4.356 0 0 0 4.368-4.365"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.006 13.429v-3.235h4.262v3.61m3.61 1.698l2.862-2.862l2.595 2.62l-2.862 2.862m2.099 7.847h3.236v-4.262h-3.61"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.498 18.097l2.862-2.862l-2.62-2.594l-2.862 2.861m-5.273 19.07a11.18 11.18 0 0 1-9.489-17.086"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.605 34.571h13.53a4.356 4.356 0 0 0 4.365-4.367V9.862a4.354 4.354 0 0 0-4.364-4.365H17.793a4.356 4.356 0 0 0-4.367 4.365"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.994 34.571v3.235h-4.262v-3.61m-3.61-1.698l-2.861 2.862l-2.595-2.621l2.862-2.862m-2.1-7.846h-3.235v4.262h3.61"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.502 29.903l-2.862 2.862l2.62 2.595l2.862-2.862"/><circle cx="24" cy="24" r="4.14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </Button>
        <Modal className={`mod ${handleTheme}`} title='BIENVENIDO' open={isModalOpen} okText='Aceptar' onOk={handleOk} cancelText='Cancelar' onCancel={handleCancel}>
          <p>Hola, ¿qué tal?, bienvenido a mi aplicacion de notas, en este proyecto puedes visualizar una serie de citas que te ayudarán a motivarte cada vez que lo necesites, sientete libre de mandar un feedback para mejorar esta aplicacion :D</p>
          <p>Aqui tambien puedes configurar algunas cosas de la aplicacion.</p>
          <Switch onClick={handleThemeDark} style={{backgroundColor: 'rgb(180, 180, 180)'}} />
          <p style={{marginTop: '10px', marginBottom: '0'}} >Hecho con ❤️ por Santiago</p>
        </Modal>
      </div>
    );
  }
}

export default App;
