import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';

export const AboutUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  max-height: 801px;

  @media (max-width: 431px) {
    max-height: 1128px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 714px;
  height: 240px;
  margin-bottom: 4rem;
  margin-top: 16px;

  @media (max-width: 431px) {
    width: 350px;
  }
`;

export const ImpactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 431px) {
    margin-top: 160px;
  }
`;

export const ImpactInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 4rem;
  margin-top: 28px;

  @media (max-width: 431px) {
    flex-direction: column;
    align-items: center;
    height: 462px;
    margin: 0 10px;
  }
`;

export const ImpactItem = styled.div`
  display: flex;
  width: 420px;
  height: 89px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 431px) {
    background-color: ${colorPalette.thirdcolor};
    width: 366px;
    height: 108px;
    margin: 0 10px;
    border-radius: 16px;
  }
`;

export const ImpactValue = styled.span`
  font-family: 'Funnel Display', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 117%;
  color: ${colorPalette.secondaryColor};

  @media (max-width: 431px) {
    line-height: 117%;
    font-size: 24px;
  }
`;

export const ImpactLabel = styled.span`
  font-family: 'Funnel Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 200%;
  color: ${colorPalette.paragraphColor};
  text-align: center;
  letter-spacing: 0.4px;

  @media (max-width: 431px) {
    line-height: 175%;
    font-size: 16px;
    letter-spacing: 0.15px;
    font-weight: normal;
  }
`;
