import React from 'react';
import { TitleContainer } from './title.styles';
import type { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({ children, as = 'h1', ...props }) => {
  return (
    <TitleContainer as={as} {...props}>
      {children}
    </TitleContainer>
  );
};

export default Title;
