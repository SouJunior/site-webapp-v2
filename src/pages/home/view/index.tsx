import { useRef, useEffect, useState } from 'react';
import ImageMascote from '../../../assets/mascote.png';
import Avatar from '../../../components/.global/avatar';
import Title from '../../../components/.global/title';
import Text from '../../../components/.global/text';
import Card from '../../../components/card';
import Carousel from '../../../components/carousel';
import IconTechRecruiter from '../../../assets/icon-techrecruiter.svg';
import IconProduct from '../../../assets/icon-produto.svg';
import IconAgile from '../../../assets/icon-agile.svg';
import IconSocialMedia from '../../../assets/icon-socialmedia.svg';
import IconDesigner from '../../../assets/icon-design.svg';
import IconFront from '../../../assets/icon-front.svg';
import IconBack from '../../../assets/icon-back.svg';
import IconData from '../../../assets/icon-data.svg';
import IconQA from '../../../assets/icon-qa.svg';
import IconDevOps from '../../../assets/icon-devops.svg';
import SkillsCarousel from '../../../components/skills.carousel';
import type { SkillItem } from '../../../components/skills.carousel';
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
  CarouselContainer,
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
  Toothpick,
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

const carouselItems: SkillItem[] = [
  {
    id: 1,
    img: IconAgile,
    title: 'Agilidade',
    area: 'agilidade',
  },
  {
    id: 2,
    img: IconDesigner,
    title: 'Design',
    area: 'design',
  },
  {
    id: 3,
    img: IconData,
    title: 'Dados',
    area: 'dados',
  },
  {
    id: 4,
    img: IconBack,
    title: 'Desenvolvimento Backend',
    area: 'back-end',
  },
  {
    id: 5,
    img: IconFront,
    title: 'Desenvolvimento Frontend',
    area: 'front-end',
  },
  {
    id: 6,
    img: IconSocialMedia,
    title: 'Social Media',
    area: 'social-media',
  },
  {
    id: 7,
    img: IconDevOps,
    title: 'DevOps',
    area: 'dev-ops',
  },
  {
    id: 8,
    img: IconProduct,
    title: 'Produtos',
    area: 'produtos',
  },
  {
    id: 9,
    img: IconQA,
    title: 'QA',
    area: 'qa',
  },
  {
    id: 10,
    img: IconTechRecruiter,
    title: 'Tech Recruiter',
    area: 'tech-recruiter',
  },
];

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

      <section
        id="sobre-nos"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingTop: '3rem',
        }}
      >
        <Title
          as="h2"
          textAlign="center"
          color="#1E47AF"
          size={40}
          width={510}
          fontWeight={700}
          fontFamily="'Funnel Display', sans-serif"
        >
          Sobre a SouJunior
        </Title>

        <Card
          width={900}
          description={
            <>
              <p style={{ lineHeight: '150%' }}>
                O projeto SouJunior, criado em 1º de julho de 2022 por Wouerner
                Brandão, surgiu da insatisfação com o mercado de tecnologia e da
                falta de oportunidades para iniciantes.
              </p>
              <p
                style={{
                  marginBlock: '1rem',
                  lineHeight: '150%',
                }}
              >
                Com mais de 120 voluntários, a iniciativa prepara profissionais
                juniores por meio da prática real, construção de produtos e
                vivência do dia a dia de uma empresa tech.{' '}
              </p>
              <p style={{ lineHeight: '150%' }}>
                O projeto conta com mentores experientes que lideram os times e
                oferece um portfólio de produtos para dar visibilidade aos
                juniores, conectando-os a recrutadores e oportunidades.
                Participar da SouJunior proporciona experiência prática,
                networking, mentoria e acesso à primeira oportunidade no
                mercado.
              </p>
            </>
          }
          descriptionSize={16}
          descriptionWeight={400}
          titleFontFamily="'Funnel Sans', sans-serif"
          descriptionColor="#1A1A1A"
        />

        <Title
          as="h3"
          width={244}
          color="#1E47AF"
          size={32}
          fontWeight={600}
          marginTop={8}
          marginBottom={36}
          fontFamily="'Funnel Display', sans-serif"
        >
          Nosso impacto
        </Title>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '4rem',
          }}
        >
          <div
            style={{
              maxWidth: '309px',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1E47AF',
                  fontFamily: "'Funnel Display', sans-serif",
                }}
              >
                10
              </span>
              <br />
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  fontFamily: "'Funnel Sans', sans-serif",
                }}
              >
                Squads Atuantes
              </span>
            </p>{' '}
          </div>
          <Toothpick />
          <div
            style={{
              maxWidth: '309px',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1E47AF',
                  fontFamily: "'Funnel Display', sans-serif",
                }}
              >
                + 100
              </span>
              <br />
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  fontFamily: "'Funnel Sans', sans-serif",
                }}
              >
                Voluntários Ativos
              </span>
            </p>{' '}
          </div>
          <Toothpick />
          <div
            style={{
              maxWidth: '309px',
            }}
          >
            <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1E47AF',
                  fontFamily: "'Funnel Display', sans-serif",
                }}
              >
                + 30
              </span>
              <br />
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  fontFamily: "'Funnel Sans', sans-serif",
                }}
              >
                Apoiadores do Projeto
              </span>
            </p>
          </div>
        </div>
      </section>

      <AreasContainer>
        <AreasContent>
          <AreasTextContent>
            <Title
              color="#1E47AF"
              size={40}
              textAlign="center"
              marginBottom={20}
              fontFamily="'Funnel Display', sans-serif"
            >
              Áreas de atuação
            </Title>
            <Text size={16} color="#323232" weight={400} marginBlock={0}>
              Aqui na SouJunior, atuam profissionais iniciantes das diversas
              áreas que compõem uma empresa de tecnologia.
            </Text>
            <Text size={16} color="#323232" weight={400} marginBlock={0}>
              Confira abaixo as áreas de atuação que temos em nosso quadro
              atualmente:
            </Text>
          </AreasTextContent>
          <CarouselContainer>
            <SkillsCarousel items={carouselItems} />
          </CarouselContainer>
        </AreasContent>
      </AreasContainer>

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
