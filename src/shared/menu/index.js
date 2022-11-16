import React from "react";
import  './style.css';

const HeaderMenu = () => {
    return (
        <div>
            <span className="MenuLabel">VINICIUS ÁVILA PERSONAL TRAINER</span>
            <span>
                <ul className="Menu-ul">
                    <li>Home</li>
                    <li>Calculo IMC</li>
                </ul>
            </span>
        </div>
    );
}

export default HeaderMenu;