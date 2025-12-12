import Button from '../../../components/.global/button';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageBusiness from '../../../assets/image-business.png';
import Card from '../../../components/card';
import IconChat from '../../../assets/icon-chat.png';
import IconTools from '../../../assets/icon-tools.png';
import IconData from '../../../assets/icon-data.png';
import IconSquare from '../../../assets/icon-square.svg';
import IconTarget from '../../../assets/icon-target.png';

const skillList = [
  {
    img: IconChat,
    skill: 'Soft Skills',
    desc: 'Negociação, estratégia e comunicação com organização.',
  },
  {
    img: IconTools,
    skill: 'Ferramentas',
    desc: 'Notion, Google Workspace, Canva, Excel e PowerPoint.',
  },
  {
    img: IconData,
    skill: 'Análise de Dados',
    desc: 'Aprender a medir e apresentar resultados.',
  },
  {
    skill: 'Visão Sistêmica',
    img: IconSquare,
    desc: 'Entender como cada área se conecta para fazer o projeto crescer.',
  },
  {
    img: IconTarget,
    skill: 'Relacionamento',
    desc: 'Aprender a representar uma marca com confiança e clareza.',
  },
];

const BusinessView = () => {
  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de business"
      >
        <section aria-labelledby="business-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Área de Atuação
          </Subtitle>
          <Title id="business-heading" size={40}>
            Business
          </Title>

          <Text size={20} color="#323232" weight={400}>
            A área de Business é responsável por conectar o projeto ao mundo
            externo. Aqui, atuamos com visão estratégica para construir
            parcerias, estruturar a sustentabilidade financeira e fortalecer o
            impacto da SouJunior de forma consistente e colaborativa.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            Se você gosta de pensar soluções, estruturar ideias, fazer conexões
            e aprender sobre modelos de negócio, esse é o seu lugar.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          <div aria-live="polite" aria-atomic="true"></div>
        </section>
        <img src={ImageBusiness} alt="" width={410} height={411} />
      </main>

      <div>
        <Card
          titleMarginTop={60}
          title="O que você aprende e faz em Business na SouJunior"
          titleTextAlign="center"
          description="O time de Business atua em diferentes frentes para garantir que o projeto cresça com propósito e estrutura."
          descriptionTextAlign="center"
          descriptionWidth={998}
          descriptionSize={20}
          descriptionColor="#323232"
          descriptionWeight={400}
          descriptionBlockMargin={28}
          titleList="Algumas atividades comuns aqui na SouJunior:"
          titleListWeight={700}
          titleListAlign="center"
          titleListSize={20}
          list={[
            'Construção de propostas de valor e apresentações institucionais.',
            'Pesquisa e contato com empresas, patrocinadores e parceiros.',
            'Organização de planos de sustentabilidade.',
            'Apoio na estruturação de dados e métricas de impacto do projeto.',
            'Participação em reuniões estratégicas e tomada de decisão.',
            'Organização de processos internos e materiais de apoio à gestão.',
          ]}
          listSize={20}
          listColor="#323232"
          listWeight={400}
          listLineHeight="140%"
        />
      </div>

      <section style={{ margin: '0 auto' }}>
        <Title textAlign="center" size={32} width={500}>
          Ferramentas e habilidades que você desenvolve na SouJunior:
        </Title>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBlock: '4rem',
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
              backgroundColor="#002C66"
              //------------
              imageSrc={img}
              imageWidth={80}
              imageHeight={80}
              //------------
              title={skill}
              titleSize={16}
              titleColor="#8BB8FF"
              titleTextAlign="center"
              // ------------
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
        titleMarginTop={60}
        title="Por que atuar com Business na SouJunior?"
        titleTextAlign="center"
        list={[
          'Colocar em prática conhecimentos de estratégia, comunicação e gestão.',
          'Trabalhar em um ambiente colaborativo com propósito social.',
          'Criar conexões com empresas e profissionais do mercado.',
          'Ter experiências reais que contam no currículo.',
          'Participar de decisões que impactam o futuro da organização.',
        ]}
        listSize={20}
        listColor="#323232"
        listWeight={400}
        listLineHeight="140%"
      />

      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Card
          titleMarginTop={60}
          title="Junte-se a nós e faça parte dessa jornada transformadora!"
          description="Sua contribuição pode ser um passo importante para impulsionar
            carreiras e transformar o futuro de muitos profissionais da área tech."
          descriptionWidth={670}
          descriptionBlockMargin={24}
          buttonText="Faça parte!"
          buttonVariant="primary"
        />
      </div>
    </div>
  );
};

export default BusinessView;
