export interface CardProps {
  edgeSection?: boolean;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: string;
  margin?: string;
  marginBlock?: string;
  marginInline?: string;
  padding?: string;
  width?: number;
  height?: number;
  border?: string;
  backgroundColor?: string;

  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;

  title?: string;
  titleAs?: keyof React.JSX.IntrinsicElements;
  titleSize?: number;
  titleTextAlign?: 'left' | 'center' | 'right' | 'justify' | 'initial';
  titleWidth?: number;
  titleMarginTop?: number;
  titleColor?: string;

  subtitle?: string;

  description?: React.ReactNode;
  descriptionLineHeight?: number;
  descriptionSize?: number;
  descriptionColor?: string;
  descriptionWeight?: number;
  descriptionWidth?: number;
  descriptionTextAlign?: 'left' | 'center' | 'right' | 'justify';
  descriptionBlockMargin?: number;
  titleList?: string;
  titleListSize?: number;
  titleListAlign?: 'left' | 'center' | 'right' | 'justify';
  titleListWeight?: number;
  descriptionMarginInline?: number;

  list?: string[];
  listAlignContent?: string;
  listSize?: number;
  listColor?: string;
  listWeight?: number;
  listLineHeight?: string;
  listMargin?: string;
  listMarginLeft?: number;
  listMarginTop?: number;
  hasListMarginLeft?: boolean;

  paragraph?: string;
  paragraphSize?: number;
  paragraphColor?: string;
  paragraphWeight?: number;
  paragraphTextAlign?: 'left' | 'center' | 'right' | 'justify';

  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}
