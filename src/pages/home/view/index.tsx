import { useRef, useEffect, useState } from 'react';
import ImageMascote from '../../../assets/mascote.png';
import Avatar from '../../../components/.global/avatar';
import Title from '../../../components/.global/title';
import Text from '../../../components/.global/text';
import Carousel from '../../../components/carousel';
import type { Item as CarouselNewsEventsItem } from '@components/newsAndEvents.carousel/index';
import { NewsAndEventsCarousel } from '@components/newsAndEvents.carousel/index';
import ExperienciaTransformaDia1 from '@assets/news-events/experiencia-que-transforma/dia1.png';
import ExperienciaTransformaDia2 from '@assets/news-events/experiencia-que-transforma/dia2.png';
import ExperienciaTransformaDia3 from '@assets/news-events/experiencia-que-transforma/dia3.png';
import ExperienciaTransformaDia4 from '@assets/news-events/experiencia-que-transforma/dia4.png';
import IconSuporter from '@assets/icon-suporter.svg';
import BtnSuporter from '@assets/btn-suporter.png';
import Arrow from '../../../assets/arrow.svg';

import {
  QUESTIONS_AND_ANSWERS,
  type QuestionType,
} from './frequentlyAskedQuestionsData';

import {
  AreasContainer,
  AreasContent,
  AreasTextContent,
  HomeButton,
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeParagraph,
  HomeTextContent,
  JoinButton,
  TestimonialAuthor,
  TestimonialCard,
  TestimonialColumn,
  SectionTitle,
  TextContainer,
  SectionText,
  PapersContainer,
  ToothpickPapers,
  SuporterContainer,
  SuporterContent,
  FloatingButton,
  Divider,
  SectionSubtitle,
  Button,
  ButtonsContainer,
  Questions,
  Answers,
  QuestionContainer,
  QuestionsAndAnswersContainer,
  QuestionsAndAnswers,
  DoubtButton,
  DoubtContainer,
  SectionQuestionsTitle,
  ParagraphFAQSection,
  LinkContainer,
  SuporterTitle,
  HomeMascote,
  HomeText,
  TestimonialTitle,
  TestimonialText,
  ContainerTestimonialTitle,
} from './styles';
import { HOME_TESTIMONIALS } from './testimonialsData';
import AboutUs from '@components/about-us';
import Areas from '@components/areas-operation';

const carouselNewsEvents: CarouselNewsEventsItem[] = [
  {
    img: ExperienciaTransformaDia1,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-04T19:00:00'),
    link: 'https://www.youtube.com/live/HxXPHNXX-T0?si=a22E8gmXUcC1w68L',
  },
  {
    img: ExperienciaTransformaDia2,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-05T19:00:00'),
    link: 'https://www.youtube.com/live/YI_QhYYB2a8?si=3BWJS7HWWqg9-60u',
  },
  {
    img: ExperienciaTransformaDia3,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-06T19:00:00'),
    link: 'https://www.youtube.com/live/tJ3DJvRlL-Q?si=Sqqar6h8vy5cn8Wm',
  },
  {
    img: ExperienciaTransformaDia4,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-07T19:00:00'),
    link: 'https://www.youtube.com/live/hdbOPmegXnA?si=GeR21viRfbo1on_I',
  },
];

const HomeView = () => {
  const supporterSentinelRef = useRef<HTMLDivElement>(null);
  const hasPassedRef = useRef(false);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasPassedRef.current = true;
          setStop(true);
        } else if (hasPassedRef.current && entry.boundingClientRect.top > 0) {
          hasPassedRef.current = false;
          setStop(false);
        }
      },
      { root: null, threshold: 0 },
    );

    if (supporterSentinelRef.current) {
      observer.observe(supporterSentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [questionTypes, setQuestionTypes] =
    useState<QuestionType>('instituicao');
  const [openResponse, setOpenResponse] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setOpenResponse((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeTextContent>
            <HomeTitle id="home-heading">
              Transformando potencial em experiência real.
            </HomeTitle>

            <HomeText>
              Da tecnologia ao recrutamento, do design à agilidade, do social
              media ao produto:
            </HomeText>

            <HomeParagraph>
              Na SouJunior, você vivencia experiências reais em squads
              multidisciplinares, aprende com mentores experientes e desenvolve
              habilidades em um ambiente voluntário criado para transformar
              juniores em desbravadores do primeiro SIM.
            </HomeParagraph>

            <HomeButton
              href="https://stars.soujunior.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça Parte
            </HomeButton>
          </HomeTextContent>

          <HomeMascote src={ImageMascote} alt="Mascote do Soujunior" />
        </HomeContent>
      </HomeContainer>

      <AboutUs />
      <Areas />

      <section
        id="depoimentos"
        aria-label="Depoimentos"
        style={{
          margin: '4rem auto 0',
          paddingBottom: '3rem',
          maxWidth: '1220px',
        }}
      >
        <ContainerTestimonialTitle>
          <TestimonialTitle>Depoimentos</TestimonialTitle>
          <TestimonialText>O que falam sobre a SouJunior</TestimonialText>
        </ContainerTestimonialTitle>

        <Carousel
          items={HOME_TESTIMONIALS}
          renderItem={(t) => (
            <TestimonialColumn key={t.id}>
              <TestimonialCard>
                <Text
                  as="p"
                  color="#FFFFFF"
                  size={16}
                  weight={400}
                  lineHeight={1.5}
                  marginBlock={0}
                >
                  {t.quote}
                </Text>
              </TestimonialCard>
              <TestimonialAuthor>
                <Avatar src={t.avatarSrc || ''} alt={t.avatarAlt || ''} />
                <Text
                  as="p"
                  color="#1A1A1A"
                  size={20}
                  weight={500}
                  marginBlock={10}
                  textAlign="center"
                >
                  {t.name}
                </Text>
                <Text
                  as="p"
                  color="#666666"
                  size={16}
                  weight={400}
                  marginBlock={0}
                  textAlign="center"
                >
                  {t.role}
                </Text>
              </TestimonialAuthor>
            </TestimonialColumn>
          )}
        />
      </section>

      <AreasContainer>
        <AreasContent>
          <AreasTextContent>
            <SectionTitle>
              Faça você também parte da nossa comunidade!
            </SectionTitle>

            <SectionText>
              Na SouJunior, há diversas maneiras de participar:
            </SectionText>
            <div
              style={{
                minHeight: '12.31rem',
              }}
            >
              <PapersContainer>
                <TextContainer>
                  <Text
                    size={28}
                    color="#1E47AF"
                    weight={600}
                    textAlign="center"
                  >
                    Júnior
                  </Text>
                  <Text
                    size={16}
                    color="#1A1A1A"
                    weight={400}
                    textAlign="center"
                    marginBlock={0}
                  >
                    Júnior executa tarefas do projeto enquanto aprende na
                    prática e desenvolve habilidades, sempre sob orientação de
                    mentores e heads.
                  </Text>
                </TextContainer>
                <ToothpickPapers />
                <TextContainer>
                  <Text
                    size={28}
                    color="#1E47AF"
                    weight={600}
                    textAlign="center"
                  >
                    Mentor
                  </Text>
                  <Text
                    size={16}
                    color="#1A1A1A"
                    weight={400}
                    textAlign="center"
                    marginBlock={0}
                  >
                    Mentor orienta, tira dúvidas e apoia o crescimento dos
                    juniores dentro de cada área de atuação.
                  </Text>
                </TextContainer>
                <ToothpickPapers />
                <TextContainer>
                  <Text
                    size={28}
                    color="#1E47AF"
                    weight={600}
                    textAlign="center"
                  >
                    Head
                  </Text>
                  <Text
                    size={16}
                    color="#1A1A1A"
                    weight={400}
                    marginBlock={0}
                    textAlign="center"
                  >
                    Head organiza e lidera equipes, toma decisões e garante que
                    tudo funcione bem dentro do projeto.
                  </Text>
                </TextContainer>
              </PapersContainer>
              <JoinButton
                href="https://stars.soujunior.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Participar!
              </JoinButton>
            </div>
          </AreasTextContent>
        </AreasContent>
      </AreasContainer>

      <section
        id="noticias-eventos"
        aria-label="Notícias & Eventos"
        style={{
          margin: 'auto',
          maxWidth: '1000px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            marginTop: '2rem',
          }}
        >
          <Title
            as="h2"
            color="#1E47AF"
            size={40}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
            fontFamily="'Funnel Display', sans-serif"
          >
            Notícias e Eventos
          </Title>
        </div>

        <NewsAndEventsCarousel items={carouselNewsEvents} />
      </section>

      <div style={{ position: 'relative' }}>
        <SuporterContainer id="seja-um-apoiador">
          <SuporterContent>
            <Divider />

            <SuporterTitle>Seja um Apoiador!</SuporterTitle>
            <Text
              size={20}
              color="#1A1A1A"
              weight={500}
              marginBlock={0}
              textAlign="center"
            >
              Com o seu apoio, ampliamos as oportunidades para quem está dando
              os primeiros passos na área de tecnologia.
            </Text>
            <a
              href="/seja-um-apoiador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={IconSuporter}
                alt="Seja um apoiador"
                style={{ width: '95px', cursor: 'pointer', marginTop: '2rem' }}
              />
            </a>
            <Divider size="sm" />
          </SuporterContent>
          <FloatingButton
            $stop={stop}
            href="/seja-um-apoiador"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BtnSuporter} alt="Seja um apoiador" />
          </FloatingButton>
        </SuporterContainer>
        <div ref={supporterSentinelRef} style={{ height: 0 }} />
      </div>

      <section>
        <SectionQuestionsTitle>Perguntas Frequentes</SectionQuestionsTitle>

        <SectionSubtitle>Olá! Como podemos te ajudar?</SectionSubtitle>

        <DoubtContainer>
          <ButtonsContainer>
            <Button
              $active={questionTypes === 'instituicao'}
              onClick={() => setQuestionTypes('instituicao')}
            >
              Instituição
            </Button>

            <Button
              $active={questionTypes === 'voluntario'}
              onClick={() => setQuestionTypes('voluntario')}
            >
              Voluntário
            </Button>

            <Button
              $active={questionTypes === 'mentor'}
              onClick={() => setQuestionTypes('mentor')}
            >
              Mentor | Head | Apoiador
            </Button>
          </ButtonsContainer>

          <QuestionsAndAnswersContainer>
            {QUESTIONS_AND_ANSWERS.filter(
              (item) => item.type === questionTypes,
            ).map((item) => (
              <QuestionsAndAnswers
                key={item.id}
                $active={openResponse.includes(item.id)}
              >
                <QuestionContainer
                  onClick={() => toggleQuestion(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openResponse.includes(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleQuestion(item.id);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <Questions>{item.question}</Questions>

                  <img
                    src={Arrow}
                    alt=""
                    width={24}
                    height={24}
                    style={{
                      transform: openResponse.includes(item.id)
                        ? 'rotate(0deg)'
                        : 'rotate(180deg)',
                      transition: '0.2s',
                    }}
                  />
                </QuestionContainer>

                {openResponse.includes(item.id) && (
                  <Answers>{item.answer}</Answers>
                )}
              </QuestionsAndAnswers>
            ))}
          </QuestionsAndAnswersContainer>

          <LinkContainer>
            <ParagraphFAQSection>
              Não encontrou a sua dúvida?
              <DoubtButton
                href="/FAQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pergunte Aqui!
              </DoubtButton>
            </ParagraphFAQSection>
          </LinkContainer>
        </DoubtContainer>
      </section>
    </>
  );
};

export default HomeView;
