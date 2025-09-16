import Subtitle from "../.global/subtitle";
import Title from "../.global/title";
import { CardContainer } from "./card.styles";
import { CardProps } from "./types";
import Image from "../.global/image";
import Text from "../.global/text";
import List from "../.global/list";
import Button from "../.global/button";

const Card: React.FC<CardProps> = ({
  edgeSection,
  flexDirection,
  justifyContent,
  marginBlock,
  marginInline,
  padding,
  width,
  height,
  border,
  backgroundColor,
  onClick,

  imageSrc,
  imageWidth,
  imageHeight,

  title,
  titleAs = "h2",
  titleSize,
  titleWidth,
  titleTextAlign,
  titleMarginTop,
  titleColor,

  subtitle,

  description,
  descriptionLineHeight,
  descriptionSize,
  descriptionColor,
  descriptionWeight,
  descriptionWidth,
  descriptionBlockMargin,
  descriptionAlign,

  titleList,
  titleListAlign,
  titleListSize,
  titleListWeight,

  list,
  listSize,
  listColor,
  listWeight,
  lineHeight,

  buttonText,
  buttonVariant,
}) => {
  return (
    <CardContainer edgeSection={edgeSection} flexDirection={flexDirection} justifyContent={justifyContent} marginBlock={marginBlock} marginInline={marginInline} padding={padding} width={width} height={height} border={border} backgroundColor={backgroundColor}>
      {imageSrc && <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={title ?? ""} role="img" />}

      <div>
        <Title as={titleAs} size={titleSize} width={titleWidth} marginTop={titleMarginTop} color={titleColor} textAlign={titleTextAlign}>
          {title}
        </Title>

        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && (
          <Text
            width={descriptionWidth}
            lineHeight={descriptionLineHeight}
            size={descriptionSize}
            color={descriptionColor}
            weight={descriptionWeight}
            marginBlock={descriptionBlockMargin}
            textAlign={descriptionAlign}
          >
            {description}
          </Text>
        )}

        {titleList && (
          <Text
            size={titleListSize}
            textAlign={titleListAlign}
            weight={titleListWeight}
          >
            {titleList}
          </Text>

        )}

        {list && list.length > 0 && (
          <List
            list={list}
            size={listSize}
            color={listColor}
            weight={listWeight}
            lineHeight={lineHeight}
          />
        )}
        {buttonText && (
          <Button variant={buttonVariant} onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
