import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  align-items: stretch;
  gap: 32px;
  flex-shrink: 0;
  scroll-snap-align: center;

  max-width: 1042px;
  width: 100%;
  height: 434px;

  padding: 30px;

  border: 1px solid #338aff;
  border-radius: 20px;
  background: #fff;

  box-sizing: border-box;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;

    width: 290px;
    min-height: 521px;

    padding: 16px;
    gap: 24px;

    border-radius: 15px;
    border-width: 0.75px;
  }

  @media (max-width: 400px) {
    width: calc(100% - 24px);
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 42%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 440px) {
    width: 100%;
    flex: none;

    img {
      max-width: 253.12px;
    }
  }

  @media (max-width: 400px) {
    img {
      max-width: 220px;
    }
  }
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 440px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;
  leading-trim: NONE;
  line-height: 120%;
  letter-spacing: 0%;
  color: #003986;
  padding-top: 60px;

  @media (max-width: 440px) {
    width: 100%;
    font-size: 18px;
    text-align: left;
    padding-top: 0;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const CardParagraph = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  color: #000000;
  margin: 20px 0;

  @media (max-width: 440px) {
    font-size: 12px;
    margin: 16px 0;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding-left: 24px;

  @media (max-width: 440px) {
    padding-left: 20px;
  }
`;

export const StyledListItem = styled.li`
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  color: #000000;
  margin-bottom: 2px;

  &::marker {
    color: #000;
  }

  @media (max-width: 440px) {
    font-size: 12px;
    line-height: 150%;
  }
`;
