import Button from "../../../components/.global/button";
import Subtitle from "../../../components/.global/subtitle";
import Text from "../../../components/.global/text";
import Title from "../../../components/.global/title";
import ImageBusiness from "../../../assets/image-business.png"
import Card from "../../../components/card";
import Carousel from "../../../components/.global/carousel";
import IconChat from "../../../assets/icon-chat.png";
import IconTools from "../../../assets/icon-tools.png";
import IconData from "../../../assets/icon-data.png";
import IconSquare from "../../../assets/icon-target.png";
import IconTarget from "../../../assets/icon-target.png"

const carouselItems = [
  { id: 1, title: "Soft Skills", description: "Negociação, estratégia e comunicação com organização.", icon: IconChat },
  { id: 2, title: "Ferramentas", description: "Notion, Google Workspace, Canva, Excel e PowerPoint.", icon: IconTools },
  { id: 3, title: "Análise de Dados", description: "Aprender a medir e apresentar resultados.", icon: IconData },
  { id: 4, title: "Visão Sistêmica", description: "Entender como cada área se conecta para fazer o projeto crescer.", icon: IconSquare },
  { id: 5, title: "Relacionamento", description: "Aprender a representar uma marca com confiança e clareza.", icon: IconTarget }
];

const BusinessView = () => {
    
    return (
        <div className="design-page">

        <main
            className="design-content"
            role="main"
            aria-label="Conteúdo principal da página de agilidade"
        >
            <section aria-labelledby="business-heading">
            <Subtitle marginBottom={36} marginTop={16}>
                Áreas de Atuação
            </Subtitle>
            <Title id="business-heading" size={40}>Business</Title>

            <Text size={20} color="#323232" weight={400}>
                A área de Business é responsável por conectar o projeto ao mundo externo. 
                Aqui, atuamos com visão estratégica para construir parcerias, estruturar a sustentabilidade 
                financeira e fortalecer o impacto da SouJunior de forma consistente e colaborativa.
            </Text>

            <Text size={20} color="#323232" weight={400}>
                Se você gosta de pensar soluções, estruturar ideias, fazer conexões e aprender sobre modelos de negócio, esse é o seu lugar.
            </Text>

            <Button variant="primary">Faça parte!</Button>

            <div aria-live="polite" aria-atomic="true">
            </div>
            </section>
            <img src={ImageBusiness} alt="" width={410} height={411}/>
        </main>

        <div>
            <Card
                titleMarginTop={60}
                title="O que você aprende e faz em Business na SouJunior"
                titleTextAlign="center" 
                description="O time de Business atua em diferentes frentes para garantir que o projeto cresça com propósito e estrutura."
                descriptionAlign="center"
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
                    "Construção de propostas de valor e apresentações institucionais.",
                    "Pesquisa e contato com empresas, patrocinadores e parceiros.",
                    "Organização de planos de sustentabilidade.",
                    "Apoio na estruturação de dados e métricas de impacto do projeto.",
                    "Participação em reuniões estratégicas e tomada de decisão.",
                    "Organização de processos internos e materiais de apoio à gestão."
                ]}
                listSize={20}
                listColor="#323232"
                listWeight={400}
                lineHeight="140%"
            />  
        </div>
    
        <Carousel 
            title="Ferramentas e habilidades que você desenvolve na SouJunior:"
            items={carouselItems} 
        />
    
        <Card
            titleMarginTop={60}
            title="Por que atuar com Business na SouJunior?"
            titleTextAlign="center"
            list={[
            "Colocar em prática conhecimentos de estratégia, comunicação e gestão.",
            "Trabalhar em um ambiente colaborativo com propósito social.",
            "Criar conexões com empresas e profissionais do mercado.",
            "Ter experiências reais que contam no currículo.",
            "Participar de decisões que impactam o futuro da organização"
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

export default BusinessView;