import styled from 'styled-components';
import { colorPalette } from '../../../styles/colorPalette';
import { pxToRem } from '../../../utils/pxToRem';
import type { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-size: ${({ size }) => pxToRem(size || 16)};
  background: ${({ variant }) =>
    !variant || variant === 'secondary'
      ? '#fff'
      : variant === 'tertiary'
        ? 'transparent'
        : colorPalette.primaryColor};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#0056b3')};
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  ${({ variant }) =>
    variant === 'outline' &&
    `
      background: transparent;
      border: 2px solid #3C7EF9;
      border-radius: 8px;
      color: #3C7EF9;
      padding: 0.6rem 1.3rem;
      font-weight: 600;
  `}
`;
