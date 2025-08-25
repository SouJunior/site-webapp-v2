import React from 'react';

export interface CardProps {
  edgeSection?: boolean;
  marginBlock?: string;
  padding?: string;
  width?: number;
  imageSrc?: string;
  title?: string;
  titleAs?: keyof React.JSX.IntrinsicElements;
  titleSize?: number;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'initial';
  titleWidth?: number;  
  marginTop?: number;  
  subtitle?: string;
  description?: string;
  descriptionLineHeight?: number;
  descriptionSize?: number;
  descriptionColor?: string;
  descriptionWeight?: number;
  descriptionWidth?: number;
  descriptionBlockMargin?: number;
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
