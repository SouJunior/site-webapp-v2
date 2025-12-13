import React, { useEffect } from 'react';
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from '../../../hooks/useAccessibility';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImgData from '../../../assets/areas-expertise/data.png';
import Img from '../../../assets/areas-expertise/data-carousel/img.png';
import Img2 from '../../../assets/areas-expertise/data-carousel/img2.png';
import Img3 from '../../../assets/areas-expertise/data-carousel/img3.png';
import Card from '../../../components/card';
import Button from '../../../components/.global/button';
import Carousel from '../../../components/carousel';

const DataView: React.FC = () => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  const carouselItems = [
    {
      img: Img,
      title: 'Analytics',
      description: (
        <>
          Quem atua com Analytics ajuda os times a entender
          <br />o que os dados estão dizendo. A pessoa analista pode:
        </>
      ),
      list: [
        'Acompanhar indicadores de desempenho (como engajamento, conversão, etc.).',
        'Criar dashboards e relatórios com insights acionáveis.',
        'Apoiar decisões de Produto, Marketing e outras áreas com dados.',
        'Trabalhar com ferramentas como Google Sheets, Looker Studio, SQL ou Python.',
      ],
    },
    {
      img: Img2,
      title: 'Business Intelligence',
      description: (
        <>
          Na frente de BI, o foco é construir soluções que tragam visibilidade
          <br /> para o negócio como um todo.
          <br /> Aqui, você vai:
        </>
      ),
      hasListMarginLeft: false,
      list: [
        'Criar painéis e relatórios com foco em visão estratégica.',
        'Ajudar a definir e manter KPIs do projeto.',
        'Estruturar bases de dados para facilitar a análise.',
        'Trabalhar na padronização e governança dos dados.',
      ],
    },
    {
      img: Img3,
      title: 'Engenharia de Dados',
      description: (
        <>
          A Engenharia de Dados garante que os dados estejam organizados,
          <br /> acessíveis e prontos para serem usados.
          <br /> Aqui, a pessoa voluntária pode:
        </>
      ),
      list: [
        'Trabalhar na coleta, limpeza e transformação de dados (ETL).',
        'Automatizar fluxos com scripts e ferramentas como Python ou SQL.',
        'Criar pipelines e conectar fontes de dados externas.',
        'Apoiar a estruturação de bancos e armazenamento.',
      ],
    },
  ];

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
        <img
          src={ImgData}
          alt="Ilustração representando a atuação de Produto"
        />
      </main>

      <section style={{ marginBlock: '4rem' }}>
        <Title as="h2" textAlign="center" size={32} width={568}>
          Conheça os cargos de Dados que você pode explorar com a gente:
        </Title>

        <Carousel items={carouselItems} />
      </section>

      <Card
        marginBlock="4rem"
        title="Por que atuar em Dados na SouJunior?"
        titleTextAlign="center"
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
