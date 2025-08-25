import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const CarouselTitle = styled.h1`
    color: var(--brand-primary-brand-color-primary-pure, #003986);
    text-align: center;
    font-family: "Radio Canada";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%
    height: 75px;
    margin-top: 60px;
`;

export const CarouselSubtitle = styled.p`
    color: var(--black-color-pure, #323232);
    text-align: center;
    margin: 50px;
    font-family: "Radio Canada";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 10px 0;
`;

export const Card = styled.div`
    display: flex;
    width: 191px;
    height: 218px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border-radius: 20px;
    background: var(--brand-primary-brand-color-primary-medium, #002C66);
`;

export const CardIcon = styled.image`
    display: flex;
    width: 80px;
    height: 80px;
    padding: 11.667px;
    justify-content: center;
    align-items: center;
    gap: 11.667px;
    flex-shrink: 0;
`;

export const CardDescription = styled.p`
    display: flex;
    justify-content: center; 
    align-items: center;     
    text-align: center;
    gap: 10px;
    color: #8BB8FF;
    width: 100%;             
    height: 100%;
`;

