import ImageMascote from '../../../assets/mascote.png';
import Title from '../../../components/.global/title';
import Text from '../../../components/.global/text';

import {
  HomeButton,
  HomeContainer,
  HomeContent,
  HomeTextContent,
} from './styles';

const HomeView = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTextContent>
          <Title id="home-heading" color="white" size={40}>
            Desenvolva habilidades no mercado Tech
          </Title>

          <Text size={20} color="white" weight={300}>
            Na SouJunior, você trabalha com produtos digitais e adquire
            habilidades valiosas para a sua carreira.
          </Text>

          <Text size={20} color="white" weight={300}>
            Você terá chance de desenvolver suas competências e aprofundar o seu
            conhecimento em áreas de seu interesse, aumentando assim suas
            chances de sucesso na sua trajetória profissional.
          </Text>

          <HomeButton
            onClick={() =>
              window.open('https://stars.soujunior.tech/', '_blank')
            }
          >
            Faça Parte!
          </HomeButton>
        </HomeTextContent>

        <img src={ImageMascote} alt="" width={443} height={443} />
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeView;
