import React, { useRef, useState, useEffect } from 'react';
import {
  CarouselContainer,
  CardsWrapper,
  ArrowButton,
  Controls,
  DotsContainer,
  Dot,
} from './carousel.styles';
import Card from '../card';

interface CarouselProps {
  img: string;
  title: string;
  subtitle?: string;
  description?: string | JSX.Element;
  list?: string[];
  hasListMarginLeft?: boolean;
}

const Carousel: React.FC<{ items: CarouselProps[] }> = ({ items }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const getStep = () => {
    const el = wrapperRef.current;
    if (!el || !el.firstElementChild) return 0;
    const firstCard = el.firstElementChild as HTMLElement;
    let step = firstCard.getBoundingClientRect().width;
    if (el.children.length > 1) {
      const secondCard = el.children[1] as HTMLElement;
      const gap = Math.max(
        0,
        secondCard.offsetLeft - firstCard.offsetLeft - step,
      );
      step += gap;
    }
    return step;
  };

  const handleScroll = () => {
    const el = wrapperRef.current;
    if (!el) return;

    // Update active index
    const step = getStep();
    if (step > 0) {
      const newIndex = Math.round(el.scrollLeft / step);
      setActiveIndex(newIndex);
    }

    // For looping behavior, keep arrows enabled when there's more than one item
    const multiple = items.length > 1;
    setCanScrollPrev(multiple);
    setCanScrollNext(multiple);
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    handleScroll(); // Initial check

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items]);

  const scrollToCard = (index: number) => {
    const el = wrapperRef.current;
    if (!el) return;

    const step = getStep();
    const len = items.length;
    if (len === 0) return;
    // wrap index so carousel loops from last->first and first->last
    const targetIndex = ((index % len) + len) % len;

    el.scrollTo({
      left: targetIndex * step,
      behavior: 'smooth',
    });
  };

  const scrollByCard = (direction: 'next' | 'prev') => {
    const delta = direction === 'next' ? 1 : -1;
    scrollToCard(activeIndex + delta);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCard('next');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCard('prev');
    }
  };

  return (
    <CarouselContainer
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <CardsWrapper ref={wrapperRef} role="list">
        {items.map((item, index) => (
          <Card
            justifyContent="flex-start"
            gap="0"
            padding="2rem 1rem"
            marginInline="1.5rem"
            imageSrc={item.img}
            key={index}
            title={item.title}
            titleAs="h3"
            titleSize={24}
            description={item.description}
            descriptionLineHeight={1.6}
            descriptionSize={16}
            descriptionColor="#000000"
            descriptionWeight={400}
            descriptionWidth={500}
            list={item.list}
            listAlignContent="flex-start"
            listSize={16}
            listColor="#000000"
            listWeight={400}
            listMarginLeft={item.hasListMarginLeft ? 0 : 24}
            listMargin="0 0 2.5rem 0"
          />
        ))}
      </CardsWrapper>

      <Controls>
        <ArrowButton
          aria-label="Mostrar anterior"
          onClick={() => scrollByCard('prev')}
          disabled={!canScrollPrev}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#003986"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowButton>

        <ArrowButton
          aria-label="Mostrar próximo"
          onClick={() => scrollByCard('next')}
          disabled={!canScrollNext}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#003986"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowButton>
      </Controls>

      <DotsContainer>
        {items.map((_, index) => (
          <Dot
            key={index}
            isActive={index === activeIndex}
            onClick={() => scrollToCard(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
