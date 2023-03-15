import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Loading.css";

const Loading = ({ backgroundObjectPrev, handleTheme, bool }) => {

  const backgroundObjectDark = {
    backgroundColor: 'black'
  };

  return (
    <div style={bool ? backgroundObjectPrev : backgroundObjectDark} className={`divPadre`} id={`${handleTheme}`}>
      <div className="divHijo">
        <Spinner className="spinner" color="primary"></Spinner>;
      </div>
    </div>
  );
};

export default Loading;
