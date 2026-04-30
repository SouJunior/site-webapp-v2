import ImageMascote from '../../../assets/mascote.png';
import Avatar from '../../../components/.global/avatar';
import Title from '../../../components/.global/title';
import Text from '../../../components/.global/text';
import Card from '../../../components/card';
import Carousel from '../../../components/carousel';
import IconBusiness from '../../../assets/icon-business.png';
import IconTechRecruiter from '../../../assets/icon-techrecruiter.png';
import IconProduct from '../../../assets/icon-produto.png';
import IconAgile from '../../../assets/icon-agil.png';
import IconSocialMedia from '../../../assets/icon-socialmedia.png';
import IconDesigner from '../../../assets/icon-ui.png';
import IconFront from '../../../assets/icon-front.png';
import IconBack from '../../../assets/icon-back.png';
import IconData from '../../../assets/icon-data2.png';
import IconQA from '../../../assets/icon-qa.png';
import IconDevOps from '../../../assets/icon-devops.png';
import SkillsCarousel from '../../../components/skills.carousel';
import type { SkillItem } from '../../../components/skills.carousel';
import IconLabs from '@assets/icon-labs.png';
import IconTalk from '@assets/icon-talk.png';
import type { Item as CarouselNewsEventsItem } from '@components/newsAndEvents.carousel/index';
import { NewsAndEventsCarousel } from '@components/newsAndEvents.carousel/index';
import ExperiaciaTransformaDia1 from '@assets/news-events/experiencia-que-transforma/dia1.png';
import ExperiaciaTransformaDia2 from '@assets/news-events/experiencia-que-transforma/dia2.png';
import ExperiaciaTransformaDia3 from '@assets/news-events/experiencia-que-transforma/dia3.png';
import ExperiaciaTransformaDia4 from '@assets/news-events/experiencia-que-transforma/dia4.png';

import {
  AreasContainer,
  AreasContent,
  AreasTextContent,
  CardsWrapper,
  CarouselContainer,
  CustomCardWrapper,
  HomeButton,
  HomeContainer,
  HomeContent,
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
} from './styles';
import { HOME_TESTIMONIALS } from './testimonialsData';

const carouselItems: SkillItem[] = [
  {
    id: 1,
    img: IconBusiness,
    title: 'Business',
    area: 'business',
  },
  {
    id: 2,
    img: IconTechRecruiter,
    title: 'Tech Recruiter',
    area: 'tech-recruiter',
  },
  {
    id: 3,
    img: IconProduct,
    title: 'Produto',
    area: 'produto',
  },
  {
    id: 4,
    img: IconAgile,
    title: 'Ágil',
    area: 'agilidade',
  },
  {
    id: 5,
    img: IconSocialMedia,
    title: 'Social Media',
    area: 'social-media',
  },
  {
    id: 6,
    img: IconDesigner,
    title: 'UI & UX Designer',
    area: 'design',
  },
  {
    id: 7,
    img: IconFront,
    title: 'Front-end',
    area: 'front-end',
  },
  {
    id: 8,
    img: IconBack,
    title: 'Back-end',
    area: 'back-end',
  },
  {
    id: 9,
    img: IconData,
    title: 'Dados',
    area: 'dados',
  },
  {
    id: 10,
    img: IconQA,
    title: 'QA',
    area: 'qa',
  },
  {
    id: 11,
    img: IconDevOps,
    title: 'DevOps',
    area: 'dev-ops',
  },
];

const carouselNewsEvents: CarouselNewsEventsItem[] = [
  {
    img: ExperiaciaTransformaDia1,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-04T19:00:00'),
    link: 'https://www.youtube.com/live/HxXPHNXX-T0?si=a22E8gmXUcC1w68L',
  },
  {
    img: ExperiaciaTransformaDia2,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-05T19:00:00'),
    link: 'https://www.youtube.com/live/YI_QhYYB2a8?si=3BWJS7HWWqg9-60u',
  },
  {
    img: ExperiaciaTransformaDia3,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-06T19:00:00'),
    link: 'https://www.youtube.com/live/tJ3DJvRlL-Q?si=Sqqar6h8vy5cn8Wm',
  },
  {
    img: ExperiaciaTransformaDia4,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-07T19:00:00'),
    link: 'https://www.youtube.com/live/hdbOPmegXnA?si=GeR21viRfbo1on_I',
  },
];

const HomeView = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeTextContent>
            <Title
              id="home-heading"
              color="white"
              size={40}
              marginBottom="3rem"
            >
              Desenvolva habilidades no mercado Tech
            </Title>

            <Text
              size={18}
              color="white"
              weight={300}
              marginBlock={0}
              lineHeight={1.4}
            >
              Na SouJunior, você trabalha com produtos digitais e adquire
              habilidades valiosas para a sua carreira.
            </Text>

            <Text
              size={18}
              color="white"
              weight={300}
              marginBlock={0}
              lineHeight={1.4}
            >
              Você terá chance de desenvolver suas competências e aprofundar o
              seu conhecimento em áreas de seu interesse, aumentando assim suas
              chances de sucesso na sua trajetória profissional.
            </Text>

            <HomeButton
              href="https://stars.soujunior.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça Parte
            </HomeButton>
          </HomeTextContent>

          <img src={ImageMascote} alt="" width={443} height={443} />
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
          color="#001633"
          size={48}
          width={510}
          fontWeight={700}
          marginBottom={12}
        >
          Sobre a SouJunior
        </Title>

        <Card
          width={879}
          marginBlock="0"
          description={
            <>
              O projeto SouJunior, criado em 1º de julho de 2022 por Wouerner
              Brandão, surgiu da insatisfação com o mercado de tecnologia e da
              falta de oportunidades para iniciantes.
              <p style={{ marginBlock: '1rem' }}>
                Com mais de 120 voluntários, a iniciativa prepara profissionais
                juniores por meio da prática real, construção de produtos e
                vivência do dia a dia de uma empresa tech.{' '}
              </p>
              O projeto conta com mentores experientes que lideram os times e
              oferece um portfólio de produtos para dar visibilidade aos
              juniores, conectando-os a recrutadores e oportunidades. Participar
              da SouJunior proporciona experiência prática, networking, mentoria
              e acesso à primeira oportunidade no mercado.
            </>
          }
          descriptionSize={16}
          descriptionWeight={400}
          descriptionColor="#323232"
        />

        <Title
          as="h3"
          width={244}
          color="#001633"
          size={32}
          fontWeight={600}
          marginTop={8}
          marginBottom={36}
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
          <p
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '2.25rem', fontWeight: 300 }}>10</span>
            <br />
            <span style={{ fontWeight: 600 }}>Participantes</span>
          </p>{' '}
          <Toothpick />
          <p
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '2.25rem', fontWeight: 300 }}>+ 100</span>
            <br />
            <span style={{ fontWeight: 600 }}>Participantes</span>
          </p>{' '}
          <Toothpick />
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2.25rem', fontWeight: 300 }}>+ 30</span>
            <br />
            <span style={{ fontWeight: 600 }}>Participantes</span>
          </p>
        </div>
      </section>

      <AreasContainer>
        <AreasContent>
          <AreasTextContent>
            <Title
              color="#003986"
              size={40}
              textAlign="center"
              marginBottom={20}
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
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Title
            as="h2"
            color="#001633"
            size={48}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
          >
            Depoimentos
          </Title>
          <Text
            as="p"
            color="#001633"
            size={24}
            weight={600}
            lineHeight={1.2}
            textAlign="center"
            marginBlock={12}
          >
            O que falam sobre a SouJunior
          </Text>
        </div>

        <Carousel
          items={HOME_TESTIMONIALS}
          renderItem={(t) => (
            <TestimonialColumn key={t.id}>
              <TestimonialCard>
                <Text
                  as="p"
                  color="#FFFFFF"
                  size={15}
                  weight={400}
                  lineHeight={1.45}
                  marginBlock={0}
                >
                  {t.quote}
                </Text>
              </TestimonialCard>
              <TestimonialAuthor>
                <Avatar src={t.avatarSrc || ''} alt={t.avatarAlt || ''} />
                <Text
                  as="p"
                  color="#323232"
                  size={18}
                  weight={500}
                  marginBlock={10}
                  textAlign="center"
                >
                  {t.name}
                </Text>
                <Text
                  as="p"
                  color="#323232"
                  size={14}
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
                    size={24}
                    color="#002C66"
                    weight={500}
                    textAlign="center"
                  >
                    Júnior
                  </Text>
                  <Text
                    size={16}
                    color="#000000"
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
                    size={24}
                    color="#002C66"
                    weight={500}
                    textAlign="center"
                  >
                    Mentor
                  </Text>
                  <Text
                    size={16}
                    color="#000000"
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
                    size={24}
                    color="#002C66"
                    weight={500}
                    textAlign="center"
                  >
                    Head
                  </Text>
                  <Text
                    size={16}
                    color="#000000"
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
                Participar
              </JoinButton>
            </div>
          </AreasTextContent>
        </AreasContent>
      </AreasContainer>

      <section
        id="nossas-iniciativas"
        aria-label="Nossas iniciativas"
        style={{
          margin: 'auto',
          maxWidth: '1440px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            marginTop: '2.56rem',
          }}
        >
          <Title
            as="h2"
            color="#001633"
            size={48}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
          >
            Nossas iniciativas
          </Title>
        </div>
        <CardsWrapper>
          <CustomCardWrapper>
            <Card
              width={598}
              height={267}
              marginBlock="0"
              title="SouJunior Labs"
              description={
                <>
                  Coloque em prática suas expertises em projetos reais, e ganhe
                  experiência no mercado de trabalho.
                </>
              }
              titleSize={24}
              titleColor="#003986"
              titleListWeight={600}
              descriptionSize={16}
              descriptionWeight={400}
              descriptionColor="#000000"
              imageSrc={IconLabs}
              imageHeight={235}
              imageWidth={235}
              flexDirection="row-reverse"
              buttonText="Acesse"
              buttonVariant="outline"
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform',
                  '_blank',
                )
              }
            />
          </CustomCardWrapper>
          <CustomCardWrapper>
            <Card
              width={598}
              height={267}
              marginBlock="0"
              title="SouJunior Talk"
              description={
                <>
                  Se você está procurando uma maneira de aprimorar seu inglês
                  com pessoas reais, temos uma excelente notícia para você!
                </>
              }
              titleSize={24}
              titleColor="#003986"
              titleListWeight={520}
              descriptionSize={16}
              descriptionWeight={400}
              descriptionColor="#000000"
              imageSrc={IconTalk}
              imageHeight={235}
              imageWidth={235}
              flexDirection="row-reverse"
              buttonText="Acesse"
              buttonVariant="outline"
              onClick={() =>
                window.open('https://discord.com/invite/564CDre9F3', '_blank')
              }
            />
          </CustomCardWrapper>
        </CardsWrapper>
        <hr
          style={{ width: '600px', marginTop: '3rem', marginInline: 'auto' }}
        />
      </section>

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
            color="#001633"
            size={48}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
          >
            Notícias & Eventos
          </Title>
        </div>

        <NewsAndEventsCarousel items={carouselNewsEvents} />

        <hr
          style={{ width: '600px', marginTop: '3rem', marginInline: 'auto' }}
        />
      </section>
    </>
  );
};

export default HomeView;
