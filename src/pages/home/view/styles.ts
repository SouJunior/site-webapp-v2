import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-width: 100vw;
  height: 583px;
  padding: 94px 70px;
  background-color: #001633;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 150px;
  width: 1144px;
  max-width: 100%;
`;
export const HomeTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 551px;
  flex-shrink: 0;
`;

export const HomeButton = styled.button`
  width: 127px;
  height: 40px;
  border-radius: 10px;
  color: white;
  background-color: #003986;
  border: none;
  cursor: pointer;
`;
