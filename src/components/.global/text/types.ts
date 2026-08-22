import type { ReactNode } from 'react';

export interface TextProps
  extends Omit<React.AllHTMLAttributes<HTMLParagraphElement>, 'size'> {
  children: ReactNode;
  width?: number;
  color?: string;
  size?: number | string;
  weight?: number;
  lineHeight?: number;
  margin?: number;
  fontFamily?: string;
  marginBlock?: number;
  marginInline?: number | string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}
