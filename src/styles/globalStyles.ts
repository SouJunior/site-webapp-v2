import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import { colorPalette } from './colorPalette';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Radio Canada', sans-serif;
    }
`;

export const SectionTitle = styled.h2`
  width: 510px;
  color: ${colorPalette.secondaryColor};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: 'Funnel Display', sans-serif;
  line-height: 120%;
  letter-spacing: -0.5px;
  margin-bottom: 16px;

  @media (max-width: 431px) {
    font-size: 28px;
  }
`;

export const SectionParagraph = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  font-family: 'Funnel Sans', sans-serif;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 10px 0;

  @media (max-width: 431px) {
    font-size: 16px;
  }
`;

export const HighlightedParagraph = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  font-family: 'Funnel Sans', sans-serif;
  line-height: 200%;
  letter-spacing: 0.4px;

  @media (max-width: 431px) {
    font-size: 16px;
    font-weight: 400;
    font-weight: normal;
    line-height: 175%;
    letter-spacing: 0.15px;
  }
`;
