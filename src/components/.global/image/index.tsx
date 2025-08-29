import React from 'react';
import { ImageContainer } from './image.styles';
import type { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({ src, alt, role, width, height }) => {
  return (
    <ImageContainer
      src={src}
      alt={alt}
      role={role}
      width={width}
      height={height}
    />
  );
};

export default Image;
