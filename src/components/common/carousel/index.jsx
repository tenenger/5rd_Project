import { useEffect, useRef, useState } from 'react';
import { SCarousel, SLayout, SArrowLeft, SArrowRight, SArrow, SContainer } from './Carousel.style';

const data = [
  { id: 1, url: 'https://dummyimage.com/1200x480/333/fff&text=1', alt: 1 },
  { id: 2, url: 'https://dummyimage.com/1200x480/333/fff&text=2', alt: 2 },
  { id: 3, url: 'https://dummyimage.com/1200x480/333/fff&text=3', alt: 3 },
];

const Carousel = ({ autoplay = false }) => {
  const carouselData = [data.at(-1), ...data, data.at(0)];
  const [isTransition, setIsTransition] = useState(false);
  const [slideIdx, setSlideIdx] = useState(1);
  const intervalId = useRef(null);

  const handleArrowClick = type => {
    if (isTransition) return;

    setSlideIdx(prev => (type === 'prev' ? prev - 1 : prev + 1));
    setIsTransition(prev => !prev);

    if (!autoplay) return;

    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      handleArrowClick('next');
    }, 5000);
  };

  const handleTransitionEnd = () => {
    setIsTransition(false);

    if (slideIdx === 0) setSlideIdx(carouselData.length - 2);
    if (slideIdx === carouselData.length - 1) setSlideIdx(1);
  };

  const handleMouseEnter = () => {
    if (!autoplay) return;

    clearInterval(intervalId.current);
  };

  const handleMouseLeaver = () => {
    if (!autoplay) return;

    intervalId.current = setInterval(() => {
      handleArrowClick('next');
    }, 5000);
  };

  useEffect(() => {
    if (!autoplay) return;

    intervalId.current = setInterval(() => {
      handleArrowClick('next');
    }, 5000);

    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <SLayout>
      <SContainer>
        <SCarousel
          idx={slideIdx}
          transition={isTransition ? 500 : 0}
          onTransitionEnd={handleTransitionEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeaver}>
          {carouselData.map(({ url, id, alt }, idx) => (
            <img key={id + idx} src={url} alt={alt}></img>
          ))}
        </SCarousel>
        <SArrow size="8rem" as={SArrowLeft} onClick={() => handleArrowClick('prev')} />
        <SArrow size="8rem" as={SArrowRight} onClick={() => handleArrowClick('next')} />
      </SContainer>
    </SLayout>
  );
};

export default Carousel;
