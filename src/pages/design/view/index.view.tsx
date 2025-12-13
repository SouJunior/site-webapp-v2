import { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageDesign from '../../../assets/areas-expertise/design.png';
import Img from '../../../assets/areas-expertise/design-carousel/img.png';
import Img2 from '../../../assets/areas-expertise/design-carousel/img2.png';
import Img3 from '../../../assets/areas-expertise/design-carousel/img3.png';
import Img4 from '../../../assets/areas-expertise/design-carousel/img4.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';
import Carousel from '../../../components/carousel';

const DesignView: React.FC = () => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  const carouselItems = [
    {
      img: Img,
      title: 'UX - User Experience',
      description: `Aqui, você vai investigar dores e necessidades das pessoas usuárias, mapear jornadas, criar fluxos e wireframes. É uma área muito colaborativa, que conversa com Produto, Tech e Pesquisa.`,
      list: [
        'Criar fluxos e mapas de navegação.',
        'Fazer entrevistas e testes de usabilidade (junto da pesquisa).',
        'Prototipar soluções de forma iterativa.',
        'Garantir acessibilidade e clareza na experiência.',
      ],
    },
    {
      img: Img2,
      title: 'UI - User Interface',
      description: `Aqui, o foco está em criar interfaces lindas, responsivas e consistentes com a identidade do projeto. No time de UI, você vai:`,
      list: [
        'Criar componentes visuais (botões, cards, menus etc.).',
        'Montar telas com base em wireframes.',
        'Cuidar da identidade visual do produto.',
        'Trabalhar com sistemas de design.',
      ],
    },
    {
      img: Img3,
      title: 'UX Research - Pesquisa com Usuário',
      description: `A frente da UX Research é responsável por entender profundamente o comportamento e as necessidades das pessoas usuárias por meio de pesquisa. Aqui você vai:`,
      list: [
        'Conduzir entrevistas e grupos de teste.',
        'Aplicar questionários e organizar dados qualitativos.',
        'Criar relatórios e compartilhar insights com o time de Produto e Design.',
        'Ajudar a validar hipóteses e decisões de design.',
      ],
    },
    {
      img: Img4,
      title: 'Design Ops - Organização e Fluxo do Time',
      description: `Essa frente cuida da parte operacional do time de design. O foco é garantir consistência, produtividade e boa comunicação entre as frentes. Aqui, você pode:`,
      list: [
        'Padronizar processos e rituais do time.',
        'Organizar ferramentas, assets e sistemas de design.',
        'Ajudar na governança e boas práticas do time.',
        'Facilitar integrações com outras áreas (Produto, Tech, etc.).',
      ],
    },
  ];

  // Set page title for screen readers
  useEffect(() => {
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
          <Title size={40}>Design</Title>

          <Text color="#323232" weight={400}>
            Na área de Design, o foco está em criar experiências que sejam
            bonitas, intuitivas e centradas nas pessoas. Aqui, design não é só
            aparência, é sobre resolver problemas, facilitar jornadas e gerar
            conexões reais com quem usa o projeto.
          </Text>

          <Text color="#323232" weight={400}>
            Se você é uma pessoa criativa, curiosa e gosta de pensar em como as
            coisas funcionam para os outros, essa área tem muito a te oferecer.
          </Text>

          <Text color="#323232" weight={400}>
            Dentro do nosso projeto, temos cargos específicos para diferentes
            etapas e perfis do design.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img
          src={ImageDesign}
          alt="Ilustração representando a atuação de design"
        />
      </main>

      <section>
        <Title
          as="h2"
          textAlign="center"
          size={32}
          width={510}
          marginBottom={48}
        >
          Conheça os cargos de Design que você pode explorar com a gente:
        </Title>

        <Carousel items={carouselItems} />
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar com Design na SouJunior?"
        list={[
          'Participar de entregas de verdade, com contexto e propósito.',
          'Trabalhar com pessoas de Produto, Tech, Marketing e Pesquisa.',
          'Desenvolver seu portfólio com segurança e acompanhamento.',
          'Aprender a colaborar, iterar e defender ideias com base em dados.',
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

export default DesignView;
