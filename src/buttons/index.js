import React from 'react';
import  './style.css'

function Botao() {
  return (
    <section className="sectionbutton">
        <article className="articlebutton linkPag">
            <div className="btn">
                <button><a className='linkbtn' href="https://wa.me/5535999772226?text=Olá,%20eu%20gostaria%20de%20marcar%20uma%20avaliação%20com%20você.">Exercite em Casa</a></button>
                
                <button><a className='linkbtn' href="https://wa.me/5535999772226?text=Olá,%20eu%20gostaria%20de%20marcar%20uma%20avaliação%20com%20você.">Calcule seu IMC</a></button>
                
                <button><a className='linkbtn' href="https://wa.me/5535999772226?text=Olá,%20eu%20gostaria%20de%20marcar%20uma%20avaliação%20com%20você.">Contactar Personal</a></button>
            </div>
        </article>
    </section>
  );
}

export default Botao;