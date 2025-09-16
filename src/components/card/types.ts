import React from 'react';

export interface CardProps {
  edgeSection?: boolean;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
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

  description?: string;
  descriptionLineHeight?: number;
  descriptionSize?: number;
  descriptionColor?: string;
  descriptionWeight?: number;
  descriptionWidth?: number;
  descriptionBlockMargin?: number;
  titleList?: string;
  titleListSize?: number;
  titleListAlign?: 'left' | 'center' | 'right' | 'justify';
  titleListWeight?: number;
  list?: string[];
  listSize?: number;
  listColor?: string;
  listWeight?: number;
  lineHeight?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  descriptionAlign?: "left" | "center" | "right" | "justify";
}
