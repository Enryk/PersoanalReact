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
    //altText: 'slide 1',
    caption: 'O corpo alcança o que a mente acredita.',
  },
  {
    id: 2,
   //altText: 'slide 2',
    caption: 'A disciplina é a ponte entre metas e realizações.',
  },
  {
    id: 3,
    //altText: 'slide 3',
    caption: 'O seu maior projeto deve ser você!',
  },
  {
    id: 4,
    //altText: 'slide 4',
    caption: 'Apaixone-se por cuidar de você mesmo.',
  },
  {
    id: 5,
    //altText: 'slide 5',
    caption: 'Não tem sensação melhor do que se superar a cada dia.',
  },
  {
    id: 6,
    //altText: 'slide 6',
    caption: 'Todo progresso acontece fora da zona de conforto.',
  },
  {
    id: 7,
    //altText: 'slide 7',
    caption: 'Não limite seus desafios, desafie seus limites.',
  },
  {
    id: 8,
    //altText: 'slide 8',
    caption: 'Seja mais forte que suas desculpas.',
  },
  {
    id: 9,
    altText: 'não pode reclamar do escuro.',
    caption: `Quem não se levanta para acender a luz,`,
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
          className="text-light"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 160px;
              background: black;
            }`}
      </style>
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