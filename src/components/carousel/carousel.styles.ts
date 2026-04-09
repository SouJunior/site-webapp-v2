import styled from 'styled-components';

export const CarouselContainer = styled.div`
  padding: 10px 0;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 10px 0;
  width: 92.5%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > * {
    scroll-snap-align: start;
    flex: 1 1 auto;
    max-width: 354px;
    box-sizing: border-box;
  }

  /* hide default scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`;

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
