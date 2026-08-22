import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { TextProps } from './types';

export const TextContainer = styled.p<TextProps>`
  width: ${({ width }) => (width ? pxToRem(width) : '100%')};
  font-size: ${({ size = 20 }) =>
    typeof size === 'number' ? pxToRem(size) : size};
  font-weight: ${({ weight = 400 }) => weight};
  /* font-style: regular; */
  line-height: ${({ lineHeight = 1 }) => lineHeight};
  color: ${({ color = '#323232' }) => color};
  margin: 0 auto;
  margin-block: ${({ marginBlock = 16 }) => pxToRem(marginBlock)};
  margin-inline: ${({ marginInline }) =>
    typeof marginInline === 'number' ? pxToRem(marginInline) : marginInline};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
`;
