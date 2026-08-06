import { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '@hooks/useAccessibility';
import Subtitle from '@global/subtitle';
import Text from '@global/text';
import Title from '@global/title';
import ImageRecruiter from '@assets/areas-expertise/front-end.png';
import Card from '@components/card';
import Button from '@global/button';
import Html from '@assets/skills/front-end/html.svg';
import React from '@assets/skills/front-end/react.svg';
import Tailwind from '@assets/skills/front-end/tailwind.svg';
import Figma from '@assets/skills/front-end/figma.svg';
import Git from '@assets/skills/git.svg';
import Api from '@assets/skills/front-end/api.svg';
import { Link } from 'react-router-dom';

const skillList = [
  {
    img: Html,
    skill: 'HTML, CSS, JavaScript',
    desc: 'A base de qualquer projeto front-end.',
  },
  {
    img: React,
    skill: 'React',
    desc: 'Principal framework usado no projeto.',
  },
  {
    img: Tailwind,
    skill: 'Tailwind CSS, Styled Componentes',
    desc: 'Para estilização.',
  },
  {
    img: Figma,
    skill: 'Figma',
    desc: 'Para receber os design do time de UX/UI.',
  },
  {
    img: Git,
    skill: 'Git + GitHub',
    desc: 'Para versionamento e colaboração em código.',
  },
  {
    img: Api,
    skill: 'APIs Rest',
    desc: 'Para consumir dados e interagir com o back-end.',
  },
];

const FrontEndView: React.FC = () => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  // Set page title for screen readers
  useEffect(() => {
    document.title = 'Design System - Sou Junior';

    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Sistema de design da Sou Junior com componentes e diretrizes visuais',
      );
    }

    // Announce page change to screen readers
    announce('Página de Design System carregada');

    // Focus main content for better navigation
    setTimeout(() => {
      focusMainContent();
    }, 100);
  }, [announce, focusMainContent]);

  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de design"
      >
        <section aria-labelledby="design-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Área de Atuação
          </Subtitle>
          <Title size={40}>Front-end</Title>

          <Text size={20} color="#323232" weight={400}>
            A área de Front-end é responsável por transformar ideias e designs
            em telas reais, aquelas que as pessoas usuárias de fato vêem e
            interagem. É aqui que o visual do projeto ganha vida por meio de
            código, garantindo que tudo funcione de forma fluida, acessível e
            responsiva.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Se você gosta de ver o resultado do seu trabalho na prática, tem
            curiosidade por HTML, CSS, JavaScript e frameworks como React, esse
            pode ser o seu lugar.
          </Text>

          <Link to="https://stars.soujunior.tech/">
            <Button variant="primary">Faça parte!</Button>
          </Link>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img
          src={ImageRecruiter}
          alt="Ilustração representando a atuação de Front-end"
        />
      </main>

      <section style={{ marginBlock: '4rem 5rem' }}>
        <Title as="h2" textAlign="center" size={32}>
          O que você aprende e faz no Front-end na SouJunior{' '}
        </Title>

        <Card
          padding="0rem"
          width={1042}
          description="Na SouJunior, você vai colocar a mão na massa e colaborar com pessoas 
            de Produto, Design, QA e Backend para desenvolver interfaces completas."
          descriptionLineHeight={1.6}
          descriptionSize={20}
          descriptionColor="#000000"
          descriptionWeight={400}
          descriptionWidth={686}
          list={[
            'Desenvolver telas com base em protótipos de UI/UX (Figma).',
            'Aplicar boas práticas de responsividade e acessibilidade.',
            'Colaborar em revisões de código com outros devs.',
            'Conectar o frontend com o backend via APIs.',
            'Corrigir bugs e melhorar a experiência do usuário.',
            'Participar das cerimônias ágeis do time (plannings, reviews, etc.).',
          ]}
          listSize={16}
          listColor="#000000"
          listWeight={400}
        />
      </section>

      <section style={{ margin: '0 auto' }}>
        <Title textAlign="center" size={32} width={452}>
          Ferramentas e tecnologias que você pode explorar
        </Title>
        <Text size={20} color="#323232" weight={400} textAlign="center">
          Além disso, vai desenvolver habilidades como:
        </Text>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBlock: '4rem',
            width: '55rem',
          }}
        >
          {skillList.map(({ skill, img, desc }) => (
            <Card
              key={skill}
              edgeSection
              flexDirection="column"
              justifyContent="flex-start"
              marginInline="0.6rem"
              padding="20px"
              width={191}
              height={218}
              backgroundColor="#3C7EF9"
              //------------
              imageSrc={img}
              imageWidth={80}
              imageHeight={80}
              //------------
              title={skill}
              titleSize={16}
              titleColor="#fff"
              titleTextAlign="center"
              //------------
              description={desc}
              descriptionSize={14}
              descriptionColor="#fff"
              descriptionWeight={400}
              descriptionTextAlign="center"
              descriptionWidth={144}
            />
          ))}
        </div>
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar como Front-end na SouJunior?"
        list={[
          'Colocar seus estudos em ação com um produto real.',
          'Aprender a colaborar com times multidisciplinares.',
          'Ganhar experiência com boas práticas de mercado.',
          'Construir seu portfólio com entregas concretas.',
          'Ter mentorias e apoio de pessoas mais experientes da área.',
        ]}
        listSize={16}
        listColor="#323232"
        listWeight={400}
        listLineHeight="140%"
      />

      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Card
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
      carreiras e transformar o futuro de muitos profissionais da área
      tech."
          descriptionWidth={670}
          descriptionBlockMargin={24}
          buttonText="Faça parte!"
          buttonVariant="primary"
          buttonLink="https://stars.soujunior.tech/"
        />
      </div>
    </div>
  );
};

export default FrontEndView;
