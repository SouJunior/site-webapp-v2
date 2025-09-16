import React from "react";
import { CarouselContainer, CardsWrapper, Card, CardDescription, CardIcon, CarouselTitle, CarouselSubtitle, CardTitle } from "./styles";

interface CarouselProps {
  items: CardItem[];
  subtitle?: string;
  title: string;
};

interface CardItem {
  id: number;
  icon: string;
  title: string;
  description?: string;
};

const Carousel: React.FC<CarouselProps> = ({ items, title, subtitle }) => {
  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselSubtitle>{subtitle}</CarouselSubtitle>
      <CardsWrapper>
        {items.map((item) => (
          <Card key={item.id}>
            <CardIcon src={item.icon}></CardIcon>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </CardsWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
