import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import  './style.css'

const items = [
  {
    id: 1,
    altText: 'O corpo alcança o que a mente acredita.',
    caption: '',
  },
  {
    id: 2,
    altText: 'A disciplina é a ponte entre metas e realizações.',
    caption: '',
  },
  {
    id: 3,
    altText: 'O seu maior projeto deve ser você!',
    caption: '',
  },
  {
    id: 4,
    altText: 'Apaixone-se por cuidar de você mesmo.',
    caption: '',
  },
  {
    id: 5,
    altText: 'Não tem sensação melhor do que se superar a cada dia.',
    caption: '',
  },
  {
    id: 6,
    altText: 'Todo progresso acontece fora da zona de conforto.',
    caption: '',
  },
  {
    id: 7,
    altText: 'Não limite seus desafios, desafie seus limites.',
    caption: '',
  },
  {
    id: 8,
    altText: 'Seja mais forte que suas desculpas.',
    caption: '',
  },
];

function ImagemCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="text-light text-font"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className='custom-tag'>
      
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default ImagemCarousel;