import Carousel from 'react-bootstrap/Carousel';

import  './style.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="custom-tag w-100"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>O corpo alcança o que a mente acredita.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>A disciplina é a ponte entre metas e realizações.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>A vida não fica mais fácil, mas você vai se tornando mais forte.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>O seu maior projeto deve ser você!</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>Apaixone-se por cuidar de você mesmo.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>Não tem sensação melhor do que se superar a cada dia.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>Não busque ser melhor que os outros, seja melhor do que o seu eu de ontem.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="Eighth slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>Todo progresso acontece fora da zona de conforto.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="custom-tag"
          src="https://sketchupbrasil.com/wp-content/uploads/2018/11/teste2.png"
          alt="None slide"
        />
        <Carousel.Caption>
          <h3 className='Text-H3'>Boa orientação faz toda a diferença no seu treino. Invista em um personal.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;