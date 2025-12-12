import { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageQA from '../../../assets/areas-expertise/qa.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';
import CriticalThinking from '../../../assets/skills/qa/critical-thinking.svg';
import Communication from '../../../assets/skills/communication.svg';
import Documentation from '../../../assets/skills/qa/documentation.svg';
import Tests from '../../../assets/skills/qa/tests.svg';
import Feedbacks from '../../../assets/skills/qa/feedbacks.svg';

const skillList = [
  {
    image: CriticalThinking,
    skill: 'Pensamento Crítico',
    desc: 'Análise com atenção aos detalhes.',
  },
  {
    image: Communication,
    skill: 'Comunicação',
    desc: 'Colaboração com equipes multidisciplinares.',
  },
  {
    image: Documentation,
    skill: 'Documentação',
    desc: 'Notion, Jira, Trello e outras ferramentas.',
  },
  {
    image: Tests,
    skill: 'Testes',
    desc: 'A base de qualquer projeto frontend.',
  },
  {
    image: Feedbacks,
    skill: 'Feedbacks',
    desc: 'A base de qualquer projeto frontend.',
  },
];

const QAView: React.FC = () => {
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
          <Title size={40}>Quality Assurance (QA)</Title>

          <Text size={20} color="#323232" weight={400}>
            A área de QA (Quality Assurance) é essencial para garantir que tudo
            o que é desenvolvido funcione bem, sem erros e com a melhor
            experiência possível para quem usa o produto.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Aqui, a gente acredita que qualidade não é responsabilidade só de
            uma pessoa, mas o time de QA é quem puxa essa frente com mais
            profundidade, cuidado e atenção aos detalhes.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Se você gosta de testar, encontrar inconsistências e melhorar
            processos, QA pode ser a sua área.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img
          src={ImageQA}
          alt="Ilustração representando a atuação de Front-end"
        />
      </main>

      <section style={{ marginBlock: '4rem 5rem' }}>
        <Title as="h2" textAlign="center" size={32}>
          O que você faz como QA na SouJunior:
        </Title>

        <Card
          padding="0rem"
          width={1042}
          description={
            <>
              <p style={{ width: '51rem' }}>
                Como pessoa voluntária em QA, você participa de todo o processo
                de garantia de qualidade, desde as primeiras conversas até
                depois que uma funcionalidade vai ao ar.
              </p>
              <p style={{ fontWeight: 'bold', marginBlock: '1rem' }}>
                Algumas das atividades que você pode aprender e colocar em
                prática na SouJunior:
              </p>
            </>
          }
          descriptionLineHeight={1.6}
          descriptionSize={20}
          descriptionColor="#000000"
          descriptionWeight={400}
          descriptionTextAlign="center"
          list={[
            'Criar e executar planos de teste manuais.',
            'Escrever cenários de testes com base em critérios de aceitação.',
            'Participar das cerimônias do time (planning, review, refinamentos).',
            'Validar entregas em diferentes dispositivos e navegadores.',
            'Colaborar com Produto e Tech para prever possíveis erros.',
            'Apoiar na identificação e documentação de bugs.',
          ]}
          listSize={16}
          listColor="#000000"
          listWeight={400}
        />
      </section>

      <section style={{ margin: '0 auto' }}>
        <Title textAlign="center" size={32}>
          O que você aprende atuando como QA na SouJunior?
        </Title>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBlock: '4rem',
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
              descriptionWidth={144}
            />
          ))}
        </div>
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar como QA na SouJunior?"
        list={[
          'Você aprende com entregas reais, em um ambiente colaborativo.',
          'Ganha vivência com times de Produto, Design e Desenvolvimento.',
          'Constrói repertório para entrevistas, portfólio ou estágio.',
          'Descobre se qualidade é uma área que faz sentido pra você.',
          'Participa de um time onde seu olhar faz toda a diferença.',
        ]}
        listSize={20}
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

export default QAView;
