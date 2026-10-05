import { SectionTitle, SectionParagraph } from '../../styles/globalStyles';

import {
  AboutUsSection,
  ContentContainer,
  TextContainer,
  ImpactContainer,
  ImpactInformation,
  ImpactItem,
  ImpactValue,
  ImpactLabel,
} from './style';

const AboutUs = () => {
  return (
    <AboutUsSection id="sobre-nos">
      <ContentContainer>
        <SectionTitle>Sobre a SouJunior</SectionTitle>

        <TextContainer>
          <SectionParagraph>
            O projeto SouJunior, criado em 1º de julho de 2022 por Wouerner
            Brandão, surgiu da insatisfação com o mercado de tecnologia e da
            falta de oportunidades para iniciantes.
          </SectionParagraph>

          <SectionParagraph>
            Com mais de 120 voluntários, a iniciativa prepara profissionais
            juniores por meio da prática real, construção de produtos e vivência
            do dia a dia de uma empresa tech.
          </SectionParagraph>

          <SectionParagraph>
            O projeto conta com mentores experientes que lideram os times e
            oferece um portfólio de produtos para dar visibilidade aos juniores,
            conectando-os a recrutadores e oportunidades. Participar da
            SouJunior proporciona experiência prática, networking, mentoria e
            acesso à primeira oportunidade no mercado.
          </SectionParagraph>
        </TextContainer>
        <ImpactContainer>
          <SectionTitle>Nosso Impacto</SectionTitle>

          <ImpactInformation>
            <ImpactItem>
              <ImpactValue>10</ImpactValue>
              <ImpactLabel>Squads Atuantes</ImpactLabel>
            </ImpactItem>

            <ImpactItem>
              <ImpactValue>+100</ImpactValue>
              <ImpactLabel>Voluntários Ativos</ImpactLabel>
            </ImpactItem>

            <ImpactItem>
              <ImpactValue>+30</ImpactValue>
              <ImpactLabel>Apoiadores do Projeto</ImpactLabel>
            </ImpactItem>
          </ImpactInformation>
        </ImpactContainer>
      </ContentContainer>
    </AboutUsSection>
  );
};

export default AboutUs;
