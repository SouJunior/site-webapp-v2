import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { LinkProps } from './types';

export const StyledLink = styled.a<
  Pick<
    LinkProps,
    | 'color'
    | 'size'
    | 'paddingY'
    | 'paddingX'
    | 'width'
    | 'height'
    | 'isFirstLink'
    | 'isLastLink'
  >
>`
  color: ${({ color }) =>
    color ? color : '#003986'}; /* Darker blue for better contrast */
  text-decoration: none;
  cursor: ${({ isFirstLink }) => (isFirstLink ? 'auto' : 'pointer')};
  font-size: ${({ size = 16 }) => pxToRem(size)};
  font-weight: 500;
  border: ${({ isLastLink }) => (isLastLink ? '2px solid #003986' : 'none')};
  border-radius: 4px;
  padding-block: ${({ paddingY }) => (paddingY ? pxToRem(paddingY) : 'auto')};
  padding-inline: ${({ paddingX }) => (paddingX ? pxToRem(paddingX) : 'auto')};
  transition: all 0.2s ease-in-out;
  position: relative;

  min-height: 16px;
  min-width: 16px;
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: ${({ isFirstLink }) =>
      isFirstLink ? 'none' : 'underline'};
    background-color: ${({ isFirstLink }) =>
      isFirstLink ? 'transparent' : 'rgba(0, 86, 179, 0.1)'};
    color: ${({ isFirstLink }) => (isFirstLink ? '#fff' : '#0056b3')};
  }

  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
    background-color: rgba(0, 86, 179, 0.1);
    text-decoration: underline;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 1px solid currentColor;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
