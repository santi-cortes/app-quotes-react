import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Loading.css";

const Loading = ({ backgroundObjectPrev }) => {
  return (
    <div style={backgroundObjectPrev} className="divPadre">
      <div className="divHijo">
        <Spinner className="spinner" color="primary"></Spinner>;
      </div>
    </div>
  );
};

export default Loading;
