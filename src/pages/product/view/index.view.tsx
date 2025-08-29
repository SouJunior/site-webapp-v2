import React, { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageDesign from '../../../assets/image-design.png';
import ImageDesign2 from '../../../assets/Image-design2.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';

const ProductView: React.FC = () => {
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
          <Title size={40}>Product</Title>

          <Text size={20} color="#323232" weight={400}>
            A área de Produto é o coração estratégico de muitos times. São
            analisados problemas reais, organização de ideias, validação de
            hipóteses e acompanha a criação de soluções que geram valor para
            quem as usa.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            No nosso voluntariado, a área de Produto está dividida em frentes
            que oferecem espaço para aprendizado, colaboração e crescimento
            prático.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img src={ImageDesign} alt="" />
      </main>

      <section>
        <Title as="h2" textAlign="center" size={32} width={568}>
          Conheça os cargos de Produto que você pode explorar com a gente:
        </Title>

        <Card
          edgeSection
          padding="2rem 1rem"
          width={1042}
          border="1px solid #0056b3"
          imageSrc={ImageDesign2}
          title="APM – Associate Product Management"
          titleAs="h3"
          titleSize={24}
          titleMarginTop={45}
          description="Se você está começando agora, essa frente é ideal para aprender o básico da gestão de produtos na prática. Como APM, você vai:"
          descriptionLineHeight={1.6}
          descriptionSize={16}
          descriptionColor="#000000"
          descriptionWeight={400}
          descriptionWidth={500}
          list={[
            'Ajudar na priorização de tarefas e demandas.',
            'Participar de rituais com o time (como plannings e reviews).',
            'Apoiar em pesquisas com usuários.',
            'Aprender a trabalhar com OKRs, MVPs, e Product Discovery',
          ]}
          listSize={16}
          listColor="#000000"
          listWeight={400}
        />
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar em Produto na SouJunior?"
        list={[
          'Aprenda na prática com pessoas de diferentes áreas.',
          'Participe de entregas reais com impacto no projeto.',
          'Desenvolva habilidades valorizadas no mercado.',
          'Descubra qual frente de Produto mais combina com você.',
          'Construa um portfólio e fortalecer seu LinkedIn com experiência real.',
        ]}
        listSize={20}
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

export default ProductView;
