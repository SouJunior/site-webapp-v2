import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Button from '@components/.global/button';
import Text from '@components/.global/text';
import { ArrowButton } from '@components/carousel/carousel.styles';
import {
  Card,
  CardImg,
  CarouselWrapper,
  Dots,
  Dot,
  InfoCard,
  InnerWrapper,
  ScrollContainer,
  TextHoraTag,
  TextInfoCard,
  Title,
  ArrowsContainer,
} from './styles';

export interface Item {
  img: string;
  title: string;
  date: Date;
  link: string;
}

interface CarouselProps {
  items: Item[];
}

function NewsAndEventsCarousel({ items }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 431px)').matches,
  );

  const totalPages = isMobile ? items.length : Math.min(2, items.length);

  const checkScroll = useCallback(() => {
    const container = containerRef.current;

    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(':scope > div > div'),
    );

    if (cards.length === 0) {
      setCurrentPage(0);
      return;
    }

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll <= 0) {
      setCurrentPage(0);
      return;
    }

    if (isMobile) {
      const containerRect = container.getBoundingClientRect();

      const activeIndex = cards.findIndex((card) => {
        const rect = card.getBoundingClientRect();

        return (
          rect.left >= containerRect.left - 5 && rect.left < containerRect.right
        );
      });

      setCurrentPage(activeIndex >= 0 ? activeIndex : 0);
    } else {
      const page = Math.round(
        (container.scrollLeft / maxScroll) * (totalPages - 1),
      );

      setCurrentPage(page);
    }
  }, [isMobile, totalPages]);

  useEffect(() => {
    checkScroll();

    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, items]);

  const goToPage = (page: number) => {
    const container = containerRef.current;

    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(':scope > div > div'),
    );

    const targetPage = Math.max(0, Math.min(page, totalPages - 1));

    const targetCard = cards[targetPage];

    if (!targetCard) return;

    if (window.matchMedia('(max-width: 431px)').matches) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = targetCard.getBoundingClientRect();

      const offset =
        cardRect.left -
        containerRect.left -
        (container.clientWidth - targetCard.offsetWidth) / 2;

      container.scrollTo({
        left: container.scrollLeft + offset,
        behavior: 'smooth',
      });
    } else {
      const maxScroll = container.scrollWidth - container.clientWidth;

      container.scrollTo({
        left: totalPages > 1 ? (targetPage / (totalPages - 1)) * maxScroll : 0,
        behavior: 'smooth',
      });
    }

    setCurrentPage(targetPage);
  };

  const scroll = (direction: 'next' | 'prev') => {
    goToPage(direction === 'next' ? currentPage + 1 : currentPage - 1);
  };

  return (
    <CarouselWrapper>
      <ArrowsContainer>
        <ArrowButton
          onClick={() => scroll('prev')}
          disabled={currentPage === 0}
          aria-label="Ver itens anteriores"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>

        <ScrollContainer ref={containerRef} onScroll={checkScroll}>
          <InnerWrapper>
            {items.map((item, index) => (
              <Card key={`${item.title}-${index}`}>
                <CardImg src={item.img} alt={item.title} />

                <InfoCard>
                  <Title>{item.title}</Title>

                  <TextInfoCard>
                    <Text marginBlock={5} size={16} color="#666666">
                      {new Date(item.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Text>

                    <TextHoraTag>
                      <Text size={14} marginBlock={0}>
                        {`${new Date(item.date).getHours()}h`}
                      </Text>

                      <Text
                        size={14}
                        marginBlock={0}
                        weight={700}
                        color="#3C7EF9"
                      >
                        AO VIVO
                      </Text>
                    </TextHoraTag>
                  </TextInfoCard>

                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(item.link, '_blank', 'noopener,noreferrer')
                    }
                  >
                    Confira
                  </Button>
                </InfoCard>
              </Card>
            ))}
          </InnerWrapper>
        </ScrollContainer>

        <ArrowButton
          onClick={() => scroll('next')}
          disabled={currentPage >= totalPages - 1}
          aria-label="Ver próximos itens"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>
      </ArrowsContainer>

      {totalPages > 1 && (
        <Dots>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Dot
              key={index}
              $active={index === currentPage}
              onClick={() => goToPage(index)}
              aria-label={`Ir para página ${index + 1}`}
              aria-current={index === currentPage ? 'true' : undefined}
            />
          ))}
        </Dots>
      )}
    </CarouselWrapper>
  );
}

export { NewsAndEventsCarousel };
