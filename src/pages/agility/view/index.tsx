import Button from '../../../components/.global/button';
import Subtitle from '../../../components/.global/subtitle';
import Text from '../../../components/.global/text';
import Title from '../../../components/.global/title';
import ImageAgility from '../../../assets/areas-expertise/agility.png';
import Card from '../../../components/card';
import IconCommunication from '../../../assets/skills/communication.svg';
import IconListening from '../../../assets/skills/listening.svg';
import IconOrganization from '../../../assets/skills/organization.svg';
import IconWatchful from '../../../assets/skills/watchful-eye.svg';

const skillList = [
  {
    img: IconCommunication,
    skill: 'Facilitação de reuniões.',
  },
  {
    img: IconListening,
    skill: 'Organização e visão sistêmica.',
  },
  {
    img: IconOrganization,
    skill: 'Comunicação não-violenta.',
  },
  {
    img: IconWatchful,
    skill: 'Liderança e facilitação.',
  },
];

const AgilityView = () => {
  return (
    <div className="design-page">
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de agilidade"
      >
        <section aria-labelledby="design-heading">
          <Subtitle marginBottom={36} marginTop={16}>
            Área de Atuação
          </Subtitle>
          <Title size={40}>Agilidade</Title>

          <Text size={20} color="#323232" weight={400}>
            A área de Agilidade é responsável por garantir que os times consigam
            trabalhar de forma colaborativa, organizada e com foco em entregar
            valor continuamente.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            No nosso projeto, quem atua como Scrum Master ou Agilista ajuda a
            remover impedimentos, promove uma cultura de melhoria contínua e
            apoia todos os membros a se desenvolverem dentro do processo.
          </Text>

          <Text size={20} color="#323232" weight={400}>
            É o papel de quem cuida do como o trabalho acontece e faz isso com
            muito diálogo, escuta ativa e empatia.
          </Text>

          <Button variant="primary">Faça parte!</Button>

          <div aria-live="polite" aria-atomic="true"></div>
        </section>
        <img src={ImageAgility} alt="" width={410} height={411} />
      </main>

      <div>
        <Card
          titleMarginTop={60}
          title="Como aplicamos agilidade no projeto?"
          titleTextAlign="center"
          description="Aqui, usamos práticas do ágil de forma leve e adaptada
                à realidade do voluntariado. Nossos times podem trabalhar com:"
          descriptionTextAlign="center"
          list={[
            'Scrum, com sprints semanais ou quinzenais.',
            'Kanban, com fluxo contínuo e reuniões pontuais.',
            'Check-ins semanais e eventos de time.',
          ]}
          listSize={20}
          listColor="#323232"
          listWeight={400}
          listLineHeight="140%"
          descriptionWidth={670}
          descriptionBlockMargin={24}
        />
      </div>

      <section style={{ margin: '0 auto' }}>
        <Title textAlign="center" size={32} width={452}>
          A pessoa agilista apoia o time com formato e ritmo de trabalho
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
          }}
        >
          {skillList.map(({ skill, img }) => (
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
            />
          ))}
        </div>
      </section>

      <Card
        titleMarginTop={60}
        title="Por que ser Agilista na SouJunior?"
        titleTextAlign="center"
        list={[
          'Aprender na prática como aplicar agilidade com times reais.',
          'Testar frameworks e adaptar dinâmicas.',
          'Cultura de feedbacks e segurança psicológica.',
          'Desenvolver sua capacidade de liderança e facilitação.',
          'Ter um ambiente seguro para experimentar e errar aprendendo.',
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
          buttonText="Faca parte!"
          buttonVariant="primary"
        />
      </div>
    </div>
  );
};

export default AgilityView;
