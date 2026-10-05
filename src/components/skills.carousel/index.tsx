import { useRef, useState } from 'react';
import Card from '../card';
import {
  ArrowButton,
  ArrowsContainer,
  CarouselWrapper,
  Dots,
  Dot,
  ItemWrapper,
  ScrollContainer,
} from './styles';
import { Link } from 'react-router-dom';

export interface SkillItem {
  id: number;
  img: string;
  title: string;
  area: string;
}

interface SkillsCarouselProps {
  items: SkillItem[];
}

const CARD_WIDTH = 191;
const GAP = 16;
const CARDS_PER_PAGE = 5;

export default function SkillsCarousel({ items }: SkillsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / CARDS_PER_PAGE);

  const scroll = (direction: 'next' | 'prev') => {
    if (!containerRef.current) return;

    const newPage =
      direction === 'next'
        ? Math.min(currentPage + 1, totalPages - 1)
        : Math.max(currentPage - 1, 0);

    const scrollAmount = (CARD_WIDTH + GAP) * CARDS_PER_PAGE;

    containerRef.current.scrollTo({
      left: newPage * scrollAmount,
      behavior: 'smooth',
    });

    setCurrentPage(newPage);
  };

  const goToPage = (page: number) => {
    if (!containerRef.current) return;

    const scrollAmount = (CARD_WIDTH + GAP) * CARDS_PER_PAGE;

    containerRef.current.scrollTo({
      left: page * scrollAmount,
      behavior: 'smooth',
    });

    setCurrentPage(page);
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

        <ScrollContainer ref={containerRef}>
          {items.map((item) => (
            <ItemWrapper key={item.id}>
              <Link
                to={`/area/${item.area}`}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  edgeSection
                  flexDirection="column"
                  justifyContent="center"
                  padding="24px"
                  height={147}
                  width={191}
                  backgroundColor="#3C7EF9"
                  imageSrc={item.img}
                  imageWidth={61}
                  imageHeight={61}
                  title={item.title}
                  titleSize={16}
                  titleColor="#ffffff"
                  titleTextAlign="center"
                  titleMarginTop="0.5rem"
                  titleMarginBottom="0rem"
                  titleFontWeight={400}
                  titleFontFamily="'Radio Canada', sans-serif"
                />
              </Link>
            </ItemWrapper>
          ))}
        </ScrollContainer>
        <ArrowButton
          onClick={() => scroll('next')}
          disabled={currentPage === totalPages - 1}
          aria-label="Ver próximos itens"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>
      </ArrowsContainer>

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
    </CarouselWrapper>
  );
}
