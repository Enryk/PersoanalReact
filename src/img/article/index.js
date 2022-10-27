import React from "react";
import logo from "./fundo.jpeg";

import  './style.css'

function ImgArticle ()  {
    return (
        <img
          className="imgLogo"
          src={logo}
          alt="logo"
        />
    );
}

export default ImgArticle;