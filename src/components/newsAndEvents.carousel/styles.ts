import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  padding: 10px 0 0 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
`;

export const InnerWrapper = styled.div`
  display: flex;
  gap: 2.1875rem;
`;

export const Card = styled.div`
  flex: 1 0 300px;
  max-width: 354px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #338aff;
  border-radius: 24px;
  background-color: #fff;
  overflow: hidden;
  scroll-snap-align: start;
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
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
  font-size: 1rem;
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
  color: #1a1a1a;
  text-align: start;
  font-weight: 500;
  line-height: 160%;
  fontfamily: 'Funnel Display', sans-serif;
`;
