import React from 'react';
import TextExercicios from '../../shared/exercicios';
// import Header from '../../shared/header';
import HeaderMenu from '../../shared/menu';


function Exercicios() {
    return (
        <div>
            {/* <Header /> */}
            <HeaderMenu />
            <TextExercicios />
        </div>
    );
}

export default Exercicios;