import {
  CardContainer,
  ImageContainer,
  Content,
  CardTitle,
  CardParagraph,
  StyledList,
  StyledListItem,
} from './carousel-feature-card.styles';

import type { CarouselItem } from '../carousel';

const CarouselFeatureCard: React.FC<CarouselItem> = ({
  img,
  title,
  description,
  list,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={img} alt={title} />
      </ImageContainer>

      <Content>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{description}</CardParagraph>

        <StyledList>
          {list?.map((item, index) => (
            <StyledListItem key={index}>{item}</StyledListItem>
          ))}
        </StyledList>
      </Content>
    </CardContainer>
  );
};

export default CarouselFeatureCard;
