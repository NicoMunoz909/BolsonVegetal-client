import React from "react";
import "./LoadingPage.css";
import logo from "../../Assets/logo.svg";

const LoadingPage = () => {
  return (
    <div className="loadingPage">
      <p style={{ marginTop: "150px" }}>Cargando base de datos</p>
      <img src={logo} alt="" />
    </div>
  );
};

export default LoadingPage;
