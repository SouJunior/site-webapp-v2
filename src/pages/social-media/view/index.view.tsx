import React, { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageSocialMedia from '../../../assets/areas-expertise/social-media.png';
import ImageSocialMedia2 from '../../../assets/areas-expertise/social-media2.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';

const SocialMediaView: React.FC = () => {
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
          <Title size={40}>Social Media</Title>

          <Text size={20} color="#323232" weight={400}>
            A área de Social Media é responsável por dar voz ao projeto nas
            redes sociais, contando histórias, divulgando oportunidades e
            engajando a comunidade com conteúdos que refletem o nosso propósito.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Aqui, a comunicação vai além de likes: ela inspira, educa, atrai
            voluntários e gera impacto real.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img
          src={ImageSocialMedia}
          alt="Ilustração representando a atuação de Produto"
        />
      </main>

      <section>
        <Card
          edgeSection
          padding="2rem 1rem"
          width={1042}
          border="1px solid #0056b3"
          imageSrc={ImageSocialMedia2}
          imageWidth={450}
          title="Criação de Conteúdo – Redação"
          titleAs="h3"
          titleSize={24}
          titleMarginTop={45}
          description={
            <>
              Se você gosta de escrever, pesquisar, traduzir ideias em palavras
              claras e criativas, essa é sua área!
              <br />
              <p style={{ marginBlock: '1.5rem', color: '#0056b3' }}>
                O que você aprende e faz na SouJunior:
              </p>
            </>
          }
          descriptionSize={16}
          descriptionColor="#000000"
          descriptionWeight={400}
          descriptionWidth={500}
          descriptionMarginInline={0}
          list={[
            'Escreve posts para Instagram, LinkedIn e outras redes.',
            'Redige legendas, títulos e copys com foco em engajamento.',
            'Transforma temas complexos (como produto, tech, design) em linguagem acessível.',
            'Participa do calendário editorial e da estratégia de conteúdo.',
            'Aprende sobre tom de voz, storytelling e escrita estratégica.',
            'Recebe feedbacks construtivos para aprimorar seu texto.',
          ]}
          listSize={16}
          listColor="#000000"
          listWeight={400}
          listMarginLeft={28}
        />
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar com Social Media na SouJunior?"
        list={[
          'Vivência com planejamento e execução de estratégias reais.',
          'Aprendizado prático em equipe multidisciplinar.',
          'Acompanhamento de métricas, feedbacks e engajamento.',
          'Construção de portfólio com peças e conteúdos publicados.',
          'Liberdade criativa com orientação e espaço para crescer.',
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

export default SocialMediaView;
