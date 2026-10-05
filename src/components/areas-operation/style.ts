import styled from 'styled-components';

import { colorPalette } from '../../styles/colorPalette';

export const AreasContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 658px;
  background-color: ${colorPalette.thirdcolor};

  @media (max-width: 431px) {
    height: 1188px;
    width: 100%;
  }
`;

export const AreasContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const AreasTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 904px;
  margin-bottom: 56px;

  @media (max-width: 431px) {
    width: 366px;
    max-width: 366px;
    margin-bottom: 56px;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 1232px;

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
`;
