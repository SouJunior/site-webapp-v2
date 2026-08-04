import styled from 'styled-components';

export const CarouselContainer = styled.div`
  padding: 10px 0;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  overflow: hidden;

  .left {
    position: absolute;
    left: -70px;
    top: 50%;
    transform: translateY(-50%);
  }

  .right {
    position: absolute;
    right: -70px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 440px) {
    padding: 0 12px;
    box-sizing: border-box;
  }
`;

export const ArrowButton = styled.button<{
  disabled?: boolean;
  $side?: 'left' | 'right';
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ $side }) => ($side === 'left' ? 'left: 200px;' : 'right: 200px;')}

  width: 16px;
  height: 16px;

  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 20;

  svg {
    width: 28px;
    height: 28px;
    stroke: #323232;
  }

  @media (max-width: 440px) {
    display: none;
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  @media (max-width: 440px) {
    display: none;
  }
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;

  background: ${({ active }) => (active ? '#338AFF' : '#D9D9D9')};

  cursor: pointer;
`;
