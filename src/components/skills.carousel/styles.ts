import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 431px) {
    display: block;
  }
`;

export const ArrowButton = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  svg {
    stroke: ${colorPalette.secondaryColor};
  }

  @media (max-width: 431px) {
    display: none;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 431px) {
    width: 366px;
    max-width: 366px;
    display: grid;
    grid-template-columns: repeat(2, 171px);
    column-gap: 36px;
    row-gap: 24px;
    padding-right: 20px;
    margin: 0 auto;
    justify-content: center;
    overflow: visible;
    scroll-behavior: auto;
    scroll-snap-type: none;
  }
`;

export const ItemWrapper = styled.div`
  flex: 0 0 191px;
  scroll-snap-align: start;

  @media (max-width: 431px) {
    width: 171px;
    height: 149.2px;
    flex: none;
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: 431px) {
    display: none;
  }
`;

export const Dot = styled.button<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? colorPalette.primaryColor : colorPalette.fourthColor};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
