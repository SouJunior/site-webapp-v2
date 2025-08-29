import React from 'react';
import { LogoContainer } from './logo.styles';
import type { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({ src, alt, role }) => {
  return <LogoContainer src={src} alt={alt} role={role} />;
};

export default Logo;
