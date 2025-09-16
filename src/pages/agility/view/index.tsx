import Button from "../../../components/.global/button";
import Subtitle from "../../../components/.global/subtitle";
import Text from "../../../components/.global/text";
import Title from "../../../components/.global/title";
import ImageAgility from "../../../assets/image-agility.png"
import Card from "../../../components/card";
import Carousel from "../../../components/.global/carousel";
import IconChat from "../../../assets/icon-chat.png";
import IconEar from "../../../assets/icon-ear.png";
import IconPage from "../../../assets/icon-page.png";
import IconPuzzle from "../../../assets/icon-puzzle.png";

const carouselItems = [
  { id: 1, title: "Facilitação de runiões.", icon: IconChat },
  { id: 2, title: "Organização e visão sistêmica.", icon: IconEar },
  { id: 3, title: "Comunicação não-violenta.", icon: IconPage },
  { id: 4, title: "Liderança e falicitação.", icon: IconPuzzle }
];

const AgilityView = () => {
    
    return (
        <div className="design-page">

        <main
            className="design-content"
            role="main"
            aria-label="Conteúdo principal da página de agilidade"
        >
            <section aria-labelledby="agility-heading">
            <Subtitle marginBottom={36} marginTop={16}>
                Áreas de Atuação
            </Subtitle>
            <Title id="agility-heading" size={40}>Agilidade</Title>

            <Text size={20} color="#323232" weight={400}>
            A área de Agilidade é responsável por garantir que os times consigam trabalhar de 
            forma colaborativa, organizada e com foco em entregar valor continuamente.
            </Text>

            <Text size={20} color="#323232" weight={400}>
            No nosso projeto, quem atua como Scrum Master ou Agilista ajuda a remover impedimentos, 
            promove uma cultura de melhoria contínua e apoia todos os membros a se desenvolverem dentro do processo.
            </Text>

            <Text size={20} color="#323232" weight={400}>
                É o papel de quem cuida do como o trabalho acontece e faz isso com muito diálogo, escuta ativa e empatia
            </Text>

            <Button variant="primary">Faça parte!</Button>

            <div aria-live="polite" aria-atomic="true">
            </div>
            </section>
            <img src={ImageAgility} alt="" width={410} height={411}/>
        </main>

        <div>
            <Card
                titleMarginTop={60}
                title="Como aplicamos agilidade no projeto"
                titleTextAlign="center" 
                description="Aqui, usamos práticas do ágil de forma leve e adaptada
                à realidade do voluntariado. Nossos times podem trabalhar com:"
                descriptionAlign="center"
                list={[
                    "Scrum, com sprints semanais ou quinzenais.",
                    "Kanban, com fluxo contínuo e reuniões pontuais.",
                    "Check-ins semanais e eventos de time."
                ]}
                listSize={20}
                listColor="#323232"
                listWeight={400}
                lineHeight="140%"
                descriptionWidth={670}
                descriptionBlockMargin={24}
            />  
        </div>
    
        <Carousel 
            title="A pessoa agilista apoia o time com formato e ritmo de trabalho"
            subtitle="Desenvolver habilidades como:"
            items={carouselItems} 
        />
    
        <Card
            titleMarginTop={60}
            title="Por que ser Agilista na SouJunior?"
            titleTextAlign="center"
            list={[
            "Aprender na prática como aplicar agilidade com times reais.",
            "Testar frameworks e adaptar dinâmicas.",
            "Cultura de feedbacks e segurança psicológica.",
            "Desenvolver sua capacidade de liderança e facilitação.",
            "Ter um ambiente seguro para experimentar e errar aprendendo."
            ]}
            listSize={20}
            listColor="#323232"
            listWeight={400}
            lineHeight="140%"
        />

        <div style={{ margin: "auto", textAlign: "center" }}>
            <Card
            titleMarginTop={60}
            title="Junte-se a nós e faça parte dessa jornada transformadora!"
            description="Sua contribuição pode ser um passo importante para impulsionar
            carreiras e transformar o futuro de muitos profissionais da área tech."
            descriptionAlign="center"
            descriptionWidth={670}
            descriptionBlockMargin={24}
            buttonText="Faça parte!"
            buttonVariant="primary"
            />
        </div>
        </div>
    );
};

export default AgilityView;