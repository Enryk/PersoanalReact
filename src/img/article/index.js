import React, {Fragment} from "react";
import logo from "./fundo.jpeg";
import imagem1 from "./img1.jpeg";
import imagem2 from "./img2.jpeg";

import  './style.css'

function ImgArticle ()  {
    return (
      <Fragment>
        <div className="imgespace">
      <div>
        <img className="imgLogo" src={logo} alt="logo"/>
      </div>
      <div>
        <img className="img2" src={imagem2} alt="logo"/>
      </div>
      <div>
        <img className="img1" src={imagem1} alt="logo" />
      </div>
      </div>
      </Fragment>

    );
}

export default ImgArticle;