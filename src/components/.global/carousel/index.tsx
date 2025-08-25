import React from "react";
import { CarouselContainer, CardsWrapper, Card, CardDescription, CardIcon, CarouselTitle, CarouselSubtitle } from "./styles";

interface CarouselProps {
  items: CardItem[];
  subtitle: string;
  title: string;
};

interface CardItem {
  id: number;
  icon: string;
  description: string;
};

const Carousel: React.FC<CarouselProps> = ({ items, title, subtitle }) => {
  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselSubtitle>{subtitle}</CarouselSubtitle>
      <CardsWrapper>
        {items.map((item) => (
          <Card key={item.id}>
            <CardIcon>
              <img src={item.icon} alt="" />
            </CardIcon>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </CardsWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
