import React from 'react';
import { TextContainer } from './text.styles';
import type { TextProps } from './types';

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};

export default Text;
