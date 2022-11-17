import React from "react";
import  './style.css';

const HeaderMenu = () => {
    return (
        <div>
            <span className="MenuLabel">VINICIUS ÁVILA PERSONAL TRAINER</span>
            <div className="div-menu">
                <ul className="Menu-ul">
                    <li>Home</li>
                    <li>Calculo IMC</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;