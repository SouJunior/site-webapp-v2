import { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageRecruiter from '../../../assets/areas-expertise/back-end.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';
import Git from '../../../assets/skills/git.svg';
import Node from '../../../assets/skills/back-end/node.svg';
import TS from '../../../assets/skills/back-end/node.svg';
import PostgreSQL from '../../../assets/skills/back-end/node.svg';
import ORM from '../../../assets/skills/back-end/node.svg';
import Jest from '../../../assets/skills/back-end/node.svg';
import Docker from '../../../assets/skills/back-end/node.svg';

const skillList = [
  {
    image: Node,
    skill: 'Node.js com Express.js',
    desc: 'Uma das stacks usada no projeto.',
  },
  {
    image: TS,
    skill: 'TypeScript',
    desc: 'Para maior segurança e organização do código.',
  },
  {
    image: PostgreSQL,
    skill: 'PostgreSQL, MongoDB',
    desc: 'Para persistência de dados.',
  },
  {
    image: ORM,
    skill: 'Prisma, Sequelize, Mongoose',
    desc: 'Como ORM/ODM.',
  },
  {
    image: Jest,
    skill: 'Jest',
    desc: 'Para testes automatizados.',
  },
  {
    image: Docker,
    skill: 'Docker',
    desc: 'Em algumas integrações e projetos mais avançados.',
  },
  {
    image: Git,
    skill: 'Git + GitHub',
    desc: 'Para versionamento e colaboração.',
  },
];

const BackEndView: React.FC = () => {
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
          <Title size={40}>Back-end</Title>

          <Text size={20} color="#323232" weight={400}>
            Na área de Back-end, você cuida da lógica por trás do que aparece na
            tela. É aqui que moram as regras de negócio, as integrações com
            banco de dados, as rotas das APIs e tudo o que garante que o sistema
            funcione com segurança, escalabilidade e eficiência.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Se você curte lógica, organização, performance e resolver problemas
            que exigem pensamento estruturado, essa pode ser sua área na
            iniciativa.
          </Text>

          <Button variant="primary">Faça parte!</Button>

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
          O que você aprende e faz como Back-end na SouJunior{' '}
        </Title>

        <Card
          padding="0rem"
          //------------
          description={
            <>
              &nbsp; &nbsp; &nbsp; Na SouJunior, a atuação em back-end é voltada
              para aplicações reais, com foco &nbsp; &nbsp; &nbsp; em qualidade
              de código e colaboração com outras áreas como Front-end, Produto e
              QA.
              <br />
              <br />
              Você vai aprender e participar de atividades como:
            </>
          }
          descriptionLineHeight={1.6}
          descriptionSize={20}
          descriptionColor="#000000"
          descriptionWeight={400}
          descriptionWidth={814}
          descriptionTextAlign="center"
          //------------
          list={[
            'Construção e manutenção de APIs REST.',
            'Integração com bancos de dados relacionais e não-relacionais.',
            'Criação de rotas, middlewares e autenticação.',
            'Modelagem de dados e regras de negócio.',
            'Testes de endpoints e cobertura de erros.',
            'Documentação de endpoints e boas práticas de versionamento.',
          ]}
          listSize={20}
          listColor="#000000"
          listWeight={400}
          listMarginTop={16}
          //------------
          paragraph="Tudo isso com revisões de código, apoio de outras pessoas desenvolvedoras e participação em cerimônias do time.."
          paragraphSize={17}
        />
      </section>

      <section style={{ margin: '0 auto' }}>
        <Title textAlign="center" size={32}>
          Tecnologias que usamos e incentivamos a aprender:{' '}
        </Title>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBlock: '4rem',
            width: '60rem',
          }}
        >
          {skillList.map(({ skill, image, desc }) => (
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
              //------------
              imageSrc={image}
              imageWidth={80}
              imageHeight={80}
              //------------
              title={skill}
              titleSize={16}
              titleColor="#8BB8FF"
              titleTextAlign="center"
              //------------
              description={desc}
              descriptionSize={14}
              descriptionColor="#fff"
              descriptionWeight={400}
              descriptionTextAlign="center"
              descriptionWidth={skill === 'Docker' ? 152 : 144}
            />
          ))}
        </div>
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar como Back-end na SouJunior?"
        list={[
          'Aplique o que aprende nos cursos em um ambiente real.',
          'Resolva problemas técnicos com propósito social.',
          'Aprenda a trabalhar em equipe com processos de mercado.',
          'Desenvolva um portfólio técnico com entregas concretas.',
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
          buttonText="Faca parte!"
          buttonVariant="primary"
        />
      </div>
    </div>
  );
};

export default BackEndView;
