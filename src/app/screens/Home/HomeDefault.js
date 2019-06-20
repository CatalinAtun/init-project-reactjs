import React, { Component } from "react";
import { ButtonDefault, MainLogo, Carousel } from "../../components/";
import './style.css';

class HomeDefault extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid home"> 
        <MainLogo />
        <h1>HOME</h1>
        <ButtonDefault name="Iniciar sesión" variantType="link" size="md" />
        <ButtonDefault
          name="Crear cuenta"
          variantType="outline-info"
          size="md"
        />
        <Carousel />
        </div>
      </div>
    );
  }
}

export default HomeDefault;