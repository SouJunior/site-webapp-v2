import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

export const CarouselContainer = styled.div`
  padding: 20px;
  position: relative;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 28rem;
  margin: 0 auto;
  padding: 10px 0;
  padding-right: 31rem;
  width: ${pxToRem(1042)};
  border: 1px solid #338aff;
  border-radius: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* hide default scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88%;
  display: flex;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.06);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Dot = styled.button<{ isActive: boolean }>`
  border-radius: 50%;
  border: none;
  margin: 0 3px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#338AFF' : '#ccc')};
  padding: 0;
  transition: background-color 0.3s;
`;
