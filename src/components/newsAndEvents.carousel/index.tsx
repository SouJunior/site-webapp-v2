import Button from '@components/.global/button';
import Text from '@components/.global/text';
import {
  ArrowButton,
  ArrowsContainer,
} from '@components/carousel/carousel.styles';
import { useRef, useState } from 'react';
import {
  Card,
  CardImg,
  CarouselWrapper,
  InfoCard,
  InnerWrapper,
  ScrollContainer,
  TextHoraTag,
  TextInfoCard,
  Title,
} from './styles';

export interface Item {
  img: string;
  title: string;
  date: Date;
  link: string;
}

interface carouselProps {
  items: Item[];
}

function NewsAndEventsCarousel({ items }: carouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: 'next' | 'prev') => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.clientWidth;

    containerRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(checkScroll, 400);
  };

  return (
    <CarouselWrapper>
      <ScrollContainer ref={containerRef} onScroll={checkScroll}>
        <InnerWrapper>
          {items.map((item, index) => (
            <Card key={index}>
              <CardImg src={item.img} alt={item.title} />
              <InfoCard>
                <Title>{item.title}</Title>
                <TextInfoCard>
                  <Text marginBlock={5}>
                    {new Date(item.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Text>
                  <TextHoraTag>
                    <Text marginBlock={0}>
                      {`${new Date(item.date).getHours()}h`}
                    </Text>
                    <Text marginBlock={0} weight={700}>
                      AO VIVO
                    </Text>
                  </TextHoraTag>
                </TextInfoCard>

                <Button
                  variant="outline"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  Confira
                </Button>
              </InfoCard>
            </Card>
          ))}
        </InnerWrapper>
      </ScrollContainer>

      <ArrowsContainer>
        <ArrowButton
          onClick={() => scroll('prev')}
          disabled={!canScrollLeft}
          aria-label="Ver item anterior"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>

        <ArrowButton
          onClick={() => scroll('next')}
          disabled={!canScrollRight}
          aria-label="Ver próximo item"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>
      </ArrowsContainer>
    </CarouselWrapper>
  );
}

export { NewsAndEventsCarousel };
