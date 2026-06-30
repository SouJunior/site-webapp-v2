import { colorPalette } from '../../../../src/styles/colorPalette';

import styled from 'styled-components';
import BackgroundHero from '@assets/background-hero.webp';

interface ButtonProps {
  $active?: boolean;
}

interface QuestionsAndAnswersProps {
  $active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 583px;
  padding: 94px 70px;
  background-color: ${colorPalette.primaryColor};
  background-image: url(${BackgroundHero});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-top: 1rem;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    height: auto;
    padding: 40px 16px;
  }
`;

export const HomeContent = styled.main`
  display: flex;
  align-items: center;
  gap: 150px;
  width: 1144px;
  max-width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
`;

export const HomeTextContent = styled.div`
  width: 551px;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 430px;
    align-items: center;
  }
`;

export const HomeTitle = styled.h1`
  color: white;
  font-size: 40px;
  line-height: 120%;
  font-weight: 600;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
export const HomeText = styled.p`
  color: white;
  font-size: 18px;
  line-height: 140%;
  font-weight: 400;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

export const HomeMascote = styled.img`
  width: 443px;
  height: 443px;
  flex-shrink: 0;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

export const HomeButton = styled.a`
  width: 127px;
  height: 40px;
  border-radius: 10px;
  color: #003986;
  background-color: #ffffff;
  border-radius: 8px;
  color: #003986;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 40px;

  @media (max-width: 480px) {
    margin-top: 8px;
  }
`;

export const Toothpick = styled.div`
  position: relative;
  width: 1px;
  height: 3.125rem;
  background-color: #666666;
  margin: 1rem 10rem;
`;

export const TestimonialColumn = styled.div`
  margin-inline: auto;
  min-width: 354px;
  padding: 10px;
`;

export const TestimonialCard = styled.article`
  background-color: ${colorPalette.primaryColor};
  border-radius: 24px;
  height: 270px;
  width: 354px;
  padding: 1.5rem;
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const TestimonialAuthor = styled.div`
  margin-top: -2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
`;

export const AreasContainer = styled.div`
  padding: 60px 0 40px 0;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  user-select: none;
  margin-top: 20px;

  @media (max-width: 606px) {
    padding: 20px 0 10px 0;
  }
`;

export const AreasContent = styled.div`
  width: 1144px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const AreasTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 920px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 935px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

export const CustomCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 53px;
  border: 1px solid #002c66;
  border-radius: 24px;
  background-color: #fff;
  max-width: 600px;
`;

export const SectionTitle = styled.h2`
  color: #003986;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.25rem;
  margin-top: 0.625rem;

  @media (max-width: 606px) {
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
`;

export const SectionText = styled.p`
  font-size: 1rem;
  color: #323232;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 606px) {
    width: 100%;
    text-align: start;
    margin-left: 1rem;
  }
`;

export const PapersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 606px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 129px;

  @media (max-width: 606px) {
    width: 100%;
    max-width: 420px;
    height: auto;
    padding: 0 0.5rem;
  }
`;

export const ToothpickPapers = styled.div`
  width: 1px;
  height: 3.125rem;
  background-color: #acacac;
  margin: 1rem 1.5rem;

  @media (max-width: 606px) {
    height: 1px;
    width: 3.125rem;
    margin-top: 2rem;
  }
`;

export const JoinButton = styled.a`
  width: 121px;
  height: 44px;
  border-radius: 10px;
  color: white;
  background-color: #338aff;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 1.56rem;
  margin-bottom: 2rem;

  @media (max-width: 606px) {
    margin-bottom: 1rem;
  }
`;

export const SuporterContainer = styled.div`
  padding: 0 0 40px 0;
  display: flex;
  justify-content: center;
  user-select: none;
  margin-top: 20px;
  background-color: #e6e6e6;

  @media (max-width: 430px) {
    padding: 0 24px 16px 24px;
  }
`;

export const SuporterContent = styled.div`
  width: 674px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const SuporterTitle = styled.h2`
  color: #001633;
  font-size: 48px;
  text-align: center;
  margin-top: 1.87rem;
  line-height: 150%;
  font-weight: 700;

  @media (max-width: 430px) {
    font-size: 28px;
  }
`;

export const FloatingButton = styled.a<{ $stop: boolean }>`
  position: ${({ $stop }) => ($stop ? 'absolute' : 'fixed')};
  right: 74px;
  bottom: 150px;
  width: 245px;
  height: 233px;
  z-index: 999;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Divider = styled.hr<{ size?: 'sm' }>`
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'clamp(279px, 40%, 451px)';
      default:
        return 'clamp(279px, 80%, 600px)';
    }
  }};
  margin-top: 3rem;
  margin-inline: auto;
`;

export const SectionSubtitle = styled.h2`
  color: #001633;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.625rem;
  line-height: 120%;
  font-weight: 500;

  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

export const SectionQuestionsTitle = styled.h2`
  color: #001633;
  font-size: 3rem;
  text-align: center;
  margin-top: 1.87rem;
  line-height: 150%;
  font-weight: 700;

  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: none;
  color: #002c66;
  max-width: 14.68rem;
  min-height: 2.75rem;
  margin: 0 0.25rem;
  padding: 0.25em 1em;

  font-weight: 500;
  font-size: 1rem;
  line-height: 120%;
  font-family: 'Radio Canada', sans-serif;

  border-bottom: 2px solid
    ${({ $active }) => ($active ? '#338aff' : 'transparent')};

  @media (max-width: 430px) {
    max-width: 110px;
    min-height: 73px;
    padding: 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 430px) {
    max-width: 382px;
  }
`;

export const QuestionsAndAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const QuestionsAndAnswers = styled.div<QuestionsAndAnswersProps>`
  display: flex;
  flex-direction: column;
  max-width: 884px;
  padding: 20px 0 10px 10px;
  border-bottom: 1px solid #dedede;
  border-radius: ${({ $active }) => ($active ? '0 0 4px 4px' : '0')};

  @media (max-width: 430px) {
    width: 400px;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 884px;
  gap: 12px;
  padding-right: 15px;

  @media (max-width: 430px) {
    max-width: 400px;
  }
`;

export const Questions = styled.p`
  color: #003986;
  font-size: 1.25rem;
  line-height: 120%;
  font-weight: 500;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

export const Answers = styled.p`
  color: #323232;
  font-size: 1rem;
  text-align: start;
  line-height: 140%;
  font-weight: 400;
  margin-top: 0.6rem;
  padding: 0 20px 10px 10px;

  @media (max-width: 430px) {
    padding-left: 0;
  }
`;

export const DoubtButton = styled.a`
  font-size: 1.5rem;
  color: #001633;
  font-family: 'Radio Canada', sans-serif;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  font-weight: 500;
  line-height: 120%;

  @media (max-width: 430px) {
    font-size: 1.25rem;
  }
`;

export const ParagraphFAQSection = styled.p`
  color: #001633;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.625rem;
  line-height: 120%;
  font-weight: 500;

  @media (max-width: 430px) {
    font-size: 1.25rem;
  }
`;

export const DoubtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  @media (max-width: 430px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
