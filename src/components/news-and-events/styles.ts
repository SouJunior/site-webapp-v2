import styled from 'styled-components';

export const NewsAndEventsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  box-sizing: border-box;
  height: 796px;
  max-height: 796px;

  @media (max-width: 430px) {
    width: 100%;
    max-height: 693px;
    padding: 64px 32px;
  }
`;

export const NewsAndEventsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  gap: 32px;

  @media (max-width: 430px) {
    width: 100%;
    gap: 32px;
  }
`;

export const NewsAndEventsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  h2 {
    margin: 0;
  }

  @media (max-width: 430px) {
    h2 {
      font-size: 28px;
      line-height: 120%;
      margin-bottom: 16px;
    }
  }
`;
