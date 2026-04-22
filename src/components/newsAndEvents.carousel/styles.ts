import styled from 'styled-components';

export const ArrowButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px;
  padding: 8px;
  width: auto;
  height: auto;

  svg {
    width: 50px;
    height: 50px;
    stroke: ${(props) => (props.disabled ? '#9CA3AF' : '#001633')};
  }
`;

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

export const ItemWrapper = styled.div`
  flex: 0 0 191px;
  scroll-snap-align: start;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
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
  font-size: 1.25rem;
  color: #000000;
  text-align: start;
  font-weight: 500;
`;
