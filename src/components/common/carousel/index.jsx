import { useState } from 'react';
import { SCarousel, SLayout, SArrowLeft, SArrowRight, SArrow, SContainer } from './Carousel.style';

const data = [
  { id: 1, url: 'https://dummyimage.com/1200x480/333/fff&text=1', alt: 1 },
  { id: 2, url: 'https://dummyimage.com/1200x480/333/fff&text=2', alt: 2 },
  { id: 3, url: 'https://dummyimage.com/1200x480/333/fff&text=3', alt: 3 },
];

const Carousel = () => {
  const carouselData = [data.at(-1), ...data, data.at(0)];
  const [isTransition, setIsTransition] = useState(false);
  const [slideIdx, setSlideIdx] = useState(1);

  const handleArrowClick = e => {
    if (isTransition) return;

    setSlideIdx(e.target.id === 'prev' ? slideIdx - 1 : slideIdx + 1);
    setIsTransition(prev => !prev);
  };

  const handleTransitionEnd = () => {
    setIsTransition(false);

    if (slideIdx === 0) setSlideIdx(carouselData.length - 2);
    if (slideIdx === carouselData.length - 1) setSlideIdx(1);
  };

  return (
    <SLayout>
      <SContainer>
        <SCarousel idx={slideIdx} transition={isTransition ? 500 : 0} onTransitionEnd={handleTransitionEnd}>
          {carouselData.map(({ url, id, alt }, idx) => (
            <img key={id + idx} src={url} alt={alt}></img>
          ))}
        </SCarousel>
        <SArrow id="prev" size="8rem" as={SArrowLeft} onClick={handleArrowClick} />
        <SArrow id="next" size="8rem" as={SArrowRight} onClick={handleArrowClick} />
      </SContainer>
    </SLayout>
  );
};

export default Carousel;
