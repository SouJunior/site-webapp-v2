import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';

export const CarouselWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: auto;
  padding: 10px 0 20px;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 431px) {
    overflow-x: auto;
    padding-inline: 0;
    scroll-padding-inline: 0;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 22px;

  @media (max-width: 431px) {
    gap: 24px;
    padding-inline: max(0px, calc((100vw - 354px) / 2));
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  flex: 0 0 368px;
  width: 368px;
  min-width: 368px;
  height: 429px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colorPalette.primaryColor};
  border-radius: 24px;
  background-color: ${colorPalette.backgroundColor};
  overflow: hidden;
  scroll-snap-align: start;
  margin-bottom: 26px;

  @media (max-width: 431px) {
    flex: 0 0 354px;
    width: 354px;
    min-width: 354px;
    max-width: 354px;
    height: 410px;
    margin-bottom: 16px;
    scroll-snap-align: center;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 205px;
`;

export const InfoCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TextHoraTag = styled.div`
  display: flex;
  gap: 1rem;

  p {
    width: fit-content;
    margin: 0px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  color: ${colorPalette.paragraphColor};
  text-align: start;
  font-weight: 500;
  line-height: 136%;
  font-family: 'Funnel Display', sans-serif;
  letter-spacing: 0.15px;
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.button<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  padding: 0;
  border: none;
  border-radius: 50%;

  background-color: ${({ $active }) =>
    $active ? colorPalette.primaryColor : colorPalette.fourthColor};

  cursor: pointer;
  transition: background-color 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${colorPalette.secondaryColor};
    outline-offset: 3px;
  }
`;

export const ArrowsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 431px) {
    display: block;
  }
`;
