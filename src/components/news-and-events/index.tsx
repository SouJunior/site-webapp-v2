import Title from '@components/.global/title';
import { NewsAndEventsCarousel } from '@components/newsAndEvents.carousel';
import type { Item as CarouselNewsEventsItem } from '@components/newsAndEvents.carousel';
import {
  NewsAndEventsContainer,
  NewsAndEventsContent,
  NewsAndEventsHeader,
} from './styles';

import ExperienciaTransformaDia1 from '@assets/news-events/experiencia-que-transforma/dia1.png';
import ExperienciaTransformaDia2 from '@assets/news-events/experiencia-que-transforma/dia2.png';
import ExperienciaTransformaDia3 from '@assets/news-events/experiencia-que-transforma/dia3.png';
import ExperienciaTransformaDia4 from '@assets/news-events/experiencia-que-transforma/dia4.png';

const carouselNewsEvents: CarouselNewsEventsItem[] = [
  {
    img: ExperienciaTransformaDia1,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-04T19:00:00'),
    link: 'https://www.youtube.com/live/HxXPHNXX-T0?si=a22E8gmXUcC1w68L',
  },
  {
    img: ExperienciaTransformaDia2,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-05T19:00:00'),
    link: 'https://www.youtube.com/live/YI_QhYYB2a8?si=3BWJS7HWWqg9-60u',
  },
  {
    img: ExperienciaTransformaDia3,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-06T19:00:00'),
    link: 'https://www.youtube.com/live/tJ3DJvRlL-Q?si=Sqqar6h8vy5cn8Wm',
  },
  {
    img: ExperienciaTransformaDia4,
    title: 'SouJunior 3.0: A Experiência que Transforma',
    date: new Date('2025-08-07T19:00:00'),
    link: 'https://www.youtube.com/live/hdbOPmegXnA?si=GeR21viRfbo1on_I',
  },
];

export default function NewsAndEvents() {
  return (
    <NewsAndEventsContainer
      id="noticias-eventos"
      aria-label="Notícias e Eventos"
    >
      <NewsAndEventsContent>
        <NewsAndEventsHeader>
          <Title
            as="h2"
            color="#1E47AF"
            size={40}
            fontWeight={700}
            textAlign="center"
            marginBottom={0}
            fontFamily="'Funnel Display', sans-serif"
          >
            Notícias e Eventos
          </Title>
        </NewsAndEventsHeader>

        <NewsAndEventsCarousel items={carouselNewsEvents} />
      </NewsAndEventsContent>
    </NewsAndEventsContainer>
  );
}
