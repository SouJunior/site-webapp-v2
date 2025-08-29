import React, { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageDesign from '../../../assets/image-design.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';
import communication from '../../../assets/skills/tech-recruiter/communication.svg';
import listening from '../../../assets/skills/tech-recruiter/listening.svg';
import organization from '../../../assets/skills/tech-recruiter/organization.svg';
import watchfulEye from '../../../assets/skills/tech-recruiter/watchful-eye.svg';

const skillList = [
  {
    image: communication,
    skill: 'Comunicação clara',
  },
  {
    image: listening,
    skill: 'Escuta ativa.',
  },
  {
    image: organization,
    skill: 'Organização de processos.',
  },
  {
    image: watchfulEye,
    skill: 'Olhar atento para diversidade e inclusão.',
  },
];

const TechRecruiterView: React.FC = () => {
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
            Áreas de Atuação
          </Subtitle>
          <Title size={40}>Tech Recruiter</Title>

          <Text size={20} color="#323232" weight={400}>
            O Tech Recruiter é a pessoa responsável por conectar talentos com
            oportunidades dentro do projeto. Aqui na SouJunior, esse papel é
            essencial para garantir que tenhamos pessoas alinhadas com os nossos
            valores e com vontade de crescer juntas.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Quem atua nessa área participa da definição dos perfis ideais,
            organiza as etapas do processo seletivo, conduz entrevistas e
            acompanha os candidatos em sua jornada até entrarem no time.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img src={ImageDesign} alt="" />
      </main>

      <section style={{ marginBlock: '4rem 5rem' }}>
        <Title as="h2" textAlign="center" size={32} width={568}>
          Como funciona o processo seletivo?
        </Title>

        <Card
          padding="0rem"
          width={1042}
          description="O processo seletivo é leve, humanizado e feito por pessoas voluntárias."
          descriptionLineHeight={1.6}
          descriptionSize={20}
          descriptionColor="#000000"
          descriptionWeight={400}
          list={[
            'Análise de inscrições.',
            'Conversa inicial (bate-papo para conhecer a pessoa).',
            'Conversa com o líder da área.',
            'Alinhamento de expectativas e cultura do projeto.',
            'Feedback final (positivo ou negativo).',
          ]}
          listSize={16}
          listColor="#000000"
          listWeight={400}
        />
      </section>

      <section style={{ textAlign: 'center' }}>
        <Title textAlign="center" size={32} width={708}>
          O papel do Tech Recruiter é garantir que tudo isso aconteça com
          clareza e empatia
        </Title>
        <Text size={20} color="#323232" weight={400}>
          Além disso, vai desenvolver habilidades como:
        </Text>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBlock: '4rem',
          }}
        >
          {skillList.map(({ skill, image }) => (
            <Card
              key={skill}
              edgeSection
              flexDirection="column"
              justifyContent="flex-start"
              marginInline="0.6rem"
              padding="20px"
              width={191}
              height={218}
              backgroundColor="#002C66"
              imageSrc={image}
              imageWidth={80}
              imageHeight={80}
              title={skill}
              titleSize={16}
              titleWidth={skill === 'Organização de processos.' ? 102 : 151}
              titleColor="#fff"
              titleTextAlign="center"
            />
          ))}
        </div>
      </section>

      <Card
        marginBlock="2rem"
        title="Por que ser Tech Recruiter na SouJunior?"
        list={[
          'Experiência prática para o currículo.',
          'Desenvolvimento de soft skills.',
          'Desenvolva habilidades valorizadas no mercado.',
          'Contato direto com outras áreas.',
          'Apoio de mentores e uma rede de voluntários.',
        ]}
        listSize={16}
        listColor="#323232"
        listWeight={400}
        lineHeight="140%"
      />

      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Card
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
      carreiras e transformar o futuro de muitos profissionais da área
      tech."
          descriptionWidth={670}
          descriptionBlockMargin={24}
          buttonText="Faca parte!"
          buttonVariant="primary"
        />
      </div>
    </div>
  );
};

export default TechRecruiterView;
