import Carousel from 'react-bootstrap/Carousel';
import ImgCarousel from '../../img';

import  './style.css'

function UncontrolledExample() {
  return (
    <Carousel>
        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>O corpo alcança o que a mente acredita.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>A disciplina é a ponte entre metas e realizações.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>A vida não fica mais fácil, mas você vai se tornando mais forte.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>O seu maior projeto deve ser você!</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>Apaixone-se por cuidar de você mesmo.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>Não tem sensação melhor do que se superar a cada dia.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>Não busque ser melhor que os outros, seja melhor do que o seu eu de ontem.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>Todo progresso acontece fora da zona de conforto.</h3>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <ImgCarousel />
            <Carousel.Caption>
                <h3 className='Text-H3'>Boa orientação faz toda a diferença no seu treino. Invista em um personal.</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;