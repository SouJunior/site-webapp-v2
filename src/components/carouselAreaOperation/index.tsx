import React, { useRef, useState, useEffect } from 'react';
import {
  CarouselContainer,
  ArrowButton,
  Dots,
  Dot,
  CardWrapper,
} from './carousel.styles';
import CarouselFeatureCard from '@components/carouselFeatureCard';

export interface CarouselItem {
  id?: string | number;
  img?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  list?: string[];
  quote?: string;
  name?: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  renderItem?: (item: CarouselItem, index: number) => React.ReactNode;

  itemWidth?: number;
}

const CarouselAreaOperation: React.FC<CarouselProps> = ({ items }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleScroll = () => {
    const el = wrapperRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 5;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    setCanScrollPrev(!isAtStart);
    setCanScrollNext(!isAtEnd);
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    handleScroll(); // Initial check

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // After mount, verify dimensions because DOM sizing can be delayed
    setTimeout(handleScroll, 100);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  return (
    <CarouselContainer
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <CardWrapper>
        {currentIndex > 0 && (
          <ArrowButton $side="left" onClick={prev} aria-label="Anterior">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" fill="none" strokeWidth="2" />
            </svg>
          </ArrowButton>
        )}

        <CarouselFeatureCard {...items[currentIndex]} />

        <ArrowButton $side="right" onClick={next} aria-label="Próximo">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>
      </CardWrapper>

      <Dots>
        {items.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            aria-label={`Ir para o cartão ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Dots>
    </CarouselContainer>
  );
};

export default CarouselAreaOperation;
