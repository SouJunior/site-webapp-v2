import React, { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import Data from '../../../assets/areas-expertise/data.png';
import Data2 from '../../../assets/areas-expertise/data2.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';

const DataView: React.FC = () => {
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
          <Title size={40}>Dados</Title>

          <Text size={20} color="#323232" weight={400}>
            Na área de Dados, nosso foco é transformar informações em decisões
            estratégicas. Trabalhamos para gerar insights, criar visualizações
            claras, organizar bases de dados e ajudar todas as áreas do projeto
            a tomar decisões com mais inteligência e segurança.
          </Text>
          <Text size={20} color="#323232" weight={400}>
            Se você gosta de números, lógica, organização ou curte encontrar
            padrões e contar histórias com dados, este pode ser o seu espaço.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
        <img src={Data} alt="Ilustração representando a atuação de Produto" />
      </main>

      <section>
        <Title as="h2" textAlign="center" size={32} width={568}>
          Conheça os cargos de Dados que você pode explorar com a gente:
        </Title>

        <Card
          edgeSection
          padding="2rem 1rem"
          width={1042}
          border="1px solid #0056b3"
          imageSrc={Data2}
          title="Analytics"
          titleAs="h3"
          titleSize={24}
          titleMarginTop={45}
          description="Quem atua com Analytics ajuda os times a entender 
            o que os dados estão dizendo. A pessoa analista pode:"
          descriptionSize={16}
          descriptionColor="#000000"
          descriptionWeight={400}
          descriptionWidth={404}
          list={[
            'Acompanhar indicadores de desempenho (como engajamento, conversão, etc.).',
            'Criar dashboards e relatórios com insights acionáveis.',
            'Apoiar decisões de Produto, Marketing e outras áreas com dados.',
            'Trabalhar com ferramentas como Google Sheets, Looker Studio, SQL ou Python.',
          ]}
          listSize={16}
          listColor="#000000"
          listWeight={400}
        />
      </section>

      <Card
        marginBlock="2rem"
        title="Por que atuar com Dados na SouJunior?"
        description="Participar da área de Dados em um projeto voluntário é uma chance
          incrível de aprender e aplicar conhecimentos de forma prática. Você vai:"
        descriptionWidth={688}
        list={[
          'Trabalhar com dados reais e diversos tipos de problemas.',
          'Ajudar diferentes áreas a tomarem decisões com base em evidências.',
          'Desenvolver seu portfólio e experiência com ferramentas do mercado.',
          'Explorar diferentes frentes e entender qual te atrai mais.',
        ]}
        listSize={20}
        listColor="#323232"
        listWeight={400}
        listLineHeight="140%"
        listMarginLeft={22}
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

export default DataView;
