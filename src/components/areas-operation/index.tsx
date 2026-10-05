import { SectionTitle, HighlightedParagraph } from '../../styles/globalStyles';
import SkillsCarousel, { type SkillItem } from '../skills.carousel';

import {
  AreasContainer,
  AreasContent,
  AreasTextContent,
  CarouselContainer,
} from './style';

import IconTechRecruiter from '../../assets/icon-techrecruiter.svg';
import IconProduct from '../../assets/icon-produto.svg';
import IconAgile from '../../assets/icon-agile.svg';
import IconSocialMedia from '../../assets/icon-socialmedia.svg';
import IconDesigner from '../../assets/icon-design.svg';
import IconFront from '../../assets/icon-front.svg';
import IconBack from '../../assets/icon-back.svg';
import IconData from '../../assets/icon-data.svg';
import IconQA from '../../assets/icon-qa.svg';
import IconDevOps from '../../assets/icon-devops.svg';

const carouselItems: SkillItem[] = [
  {
    id: 1,
    img: IconAgile,
    title: 'Agilidade',
    area: 'agilidade',
  },
  {
    id: 2,
    img: IconDesigner,
    title: 'Design',
    area: 'design',
  },
  {
    id: 3,
    img: IconData,
    title: 'Dados',
    area: 'dados',
  },
  {
    id: 4,
    img: IconBack,
    title: 'Desenvolvimento Backend',
    area: 'back-end',
  },
  {
    id: 5,
    img: IconFront,
    title: 'Desenvolvimento Frontend',
    area: 'front-end',
  },
  {
    id: 6,
    img: IconSocialMedia,
    title: 'Social Media',
    area: 'social-media',
  },
  {
    id: 7,
    img: IconDevOps,
    title: 'DevOps',
    area: 'dev-ops',
  },
  {
    id: 8,
    img: IconProduct,
    title: 'Produtos',
    area: 'produto',
  },
  {
    id: 9,
    img: IconQA,
    title: 'QA',
    area: 'qa',
  },
  {
    id: 10,
    img: IconTechRecruiter,
    title: 'Tech Recruiter',
    area: 'tech-recruiter',
  },
];

const Areas = () => {
  return (
    <AreasContainer>
      <AreasContent>
        <AreasTextContent>
          <SectionTitle>Áreas de atuação</SectionTitle>

          <HighlightedParagraph>
            Aqui na SouJunior, atuam profissionais iniciantes das diversas áreas
            que compõem uma empresa de tecnologia. Confira abaixo as áreas de
            atuação que temos em nosso quadro atualmente:
          </HighlightedParagraph>
        </AreasTextContent>

        <CarouselContainer>
          <SkillsCarousel items={carouselItems} />
        </CarouselContainer>
      </AreasContent>
    </AreasContainer>
  );
};

export default Areas;
