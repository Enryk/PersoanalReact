import React from "react";
import logo from "./fundo.jpeg";

import  './style.css'

function ImgArticle ()  {
    return (
        <img
          className="imgLogo displayfix"
          src={logo}
          alt="logo"
        />
    );
}

export default ImgArticle;