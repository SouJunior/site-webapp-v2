import { RouteEnum, RouteEnum2 } from './enums/RouteEnum';

export const createHeaderLinks = (
  navigate: (route: RouteEnum | RouteEnum2) => void,
) => [
  [
    {
      label: 'aboutUs',
      onClick: () => navigate(RouteEnum.ABOUT_US),
      ariaLabel: 'Navegar para a página Sobre Nós',
    },
    {
      label: 'initiatives',
      onClick: () => navigate(RouteEnum.INITIATIVES),
      ariaLabel: 'Navegar para a página Nossas Iniciativas',
    },
    {
      label: 'newsAndEvents',
      onClick: () => navigate(RouteEnum.NEWS_AND_EVENTS),
      ariaLabel: 'Navegar para a página Notícias & Eventos',
    },
    {
      label: 'joinUs',
      onClick: () => navigate(RouteEnum.JOIN_US),
      ariaLabel: 'Navegar para a página Faça Parte',
    },
    {
      label: 'supportUs',
      onClick: () => navigate(RouteEnum.SUPPORT_US),
      ariaLabel: 'Navegar para a página Seja um Apoiador',
    },
  ],
  [
    {
      label: 'business',
      onClick: () => navigate(RouteEnum2.BUSINESS),
      ariaLabel: 'Navegar para a página business',
    },
    {
      label: 'techRecruiter',
      onClick: () => navigate(RouteEnum2.TECH_RECRUITER),
      ariaLabel: 'Navegar para a página tech-recruiter',
    },
    {
      label: 'product',
      onClick: () => navigate(RouteEnum2.PRODUCT),
      ariaLabel: 'Navegar para a página produto',
    },
    {
      label: 'agility',
      onClick: () => navigate(RouteEnum2.AGILITY),
      ariaLabel: 'Navegar para a página agilidade',
    },
    {
      label: 'socialMedia',
      onClick: () => navigate(RouteEnum2.SOCIAL_MEDIA),
      ariaLabel: 'Navegar para a página social-media',
    },
    {
      label: 'uiUxDesign',
      onClick: () => navigate(RouteEnum2.UI_UX_DESIGN),
      ariaLabel: 'Navegar para a página design',
    },
    {
      label: 'frontEnd',
      onClick: () => navigate(RouteEnum2.FRONT_END),
      ariaLabel: 'Navegar para a página front-end',
    },
    {
      label: 'backEnd',
      onClick: () => navigate(RouteEnum2.BACK_END),
      ariaLabel: 'Navegar para a página back-end',
    },
    {
      label: 'data',
      onClick: () => navigate(RouteEnum2.DATA),
      ariaLabel: 'Navegar para a página dados',
    },
    {
      label: 'qA',
      onClick: () => navigate(RouteEnum2.QA),
      ariaLabel: 'Navegar para a página qa',
    },
    {
      label: 'devOps',
      onClick: () => navigate(RouteEnum2.DEV_OPS),
      ariaLabel: 'Navegar para a página dev-ops',
    },
    {
      label: 'home',
      onClick: () => navigate(RouteEnum2.HOME),
      ariaLabel: 'Navegar para a página home',
    },
  ],
];
