import React, {Fragment} from "react";
import ImgCalculoIMC from "../img/calculoIMC";

<script src="./calculo.js"></script>


const Calula = () => {
    return (
        <Fragment>
        <section className="section marginTopSection">
            <div className="columns">
                <div className="column">
                    <h1 className="titleIMC title is-3 is-spaced">Calcule seu IMC:</h1>
                    <form action="/" id="formulario" method="post">
                        <label for="peso" className="subtitle is-5">Peso:</label>
                        <input type="text" id="peso" name="peso" minlength="2" maxlength="6" step="0.01" />

                        <label for="altura" class="subtitle is-5">Altura:</label>
                        <input type="text" id="altura" name="altura" minlength="3" maxlength="4" step="0.01" />

                        <button class="buttonIMC" type="submit">Calcular</button>
                    </form>
                </div>
                <div className="column container">
                    <div className="imgIMC">
                        <ImgCalculoIMC />
                    </div>
                </div>
            </div>
        </section>

        <section className="section marginBottomSection">
            <div id="resultado"></div>
        </section>

        
        </Fragment>
    );
}

export default Calula;