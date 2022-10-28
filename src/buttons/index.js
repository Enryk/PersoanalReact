import React from 'react';
import  './style.css'

function Botao() {
  return (
    <section className="section">
        <header className="linkPag">
            <div className="btn">
                <button><a className='link' href="https://wa.me/5535999772226?text=Olá,%20eu%20gostaria%20de%20marcar%20uma%20avaliação%20com%20você.">Exercite em Casa</a></button>
                
                <button><a className='link' href="https://wa.me/5535999772226?text=Olá,%20eu%20gostaria%20de%20marcar%20uma%20avaliação%20com%20você.">Calcule seu IMC</a></button>
                
                <button><a className='link' href="https://wa.me/5535999772226?text=Olá,%20eu%20gostaria%20de%20marcar%20uma%20avaliação%20com%20você.">Contactar Personal</a></button>
            </div>
        </header>
    </section>
  );
}

export default Botao;