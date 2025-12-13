import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';
import type { ListProps } from './types';

export const ListContainer = styled.ul<Omit<ListProps, 'list'>>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: ${({ alignContent = 'center' }) => alignContent};
  width: ${({ width = '100%' }) => width};
  font-size: ${({ size = 20 }) => `${pxToRem(size)}`};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
  margin-top: ${({ marginTop = 0 }) => pxToRem(marginTop)};
  margin-bottom: 1rem;
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft = 6 }) => pxToRem(marginLeft)};
`;
