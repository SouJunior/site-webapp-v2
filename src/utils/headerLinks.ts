import { RouteEnum, RouteEnum2 } from './enums/RouteEnum';

export const createHeaderLinks = (navigate: (route: RouteEnum) => void) => {
  const handleAnchorClick = (route: string) => {
    const hash = route.includes('#') ? route.split('#')[1] : null;
    const basePath = route.includes('#') ? route.split('#')[0] || '/' : route;

    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(basePath as RouteEnum);
      }
    } else {
      navigate(route as RouteEnum);
    }
  };

  return [
    [
      {
        label: 'aboutUs',
        onClick: () => handleAnchorClick(RouteEnum.ABOUT_US),
        ariaLabel: 'Navegar para a página Sobre Nós',
        route: RouteEnum.ABOUT_US,
      },
      {
        label: 'initiatives',
        onClick: () => handleAnchorClick(RouteEnum.INITIATIVES),
        ariaLabel: 'Navegar para a página Nossas Iniciativas',
        route: RouteEnum.INITIATIVES,
      },
      {
        label: 'newsAndEvents',
        onClick: () => handleAnchorClick(RouteEnum.NEWS_AND_EVENTS),
        ariaLabel: 'Navegar para a página Notícias & Eventos',
        route: RouteEnum.NEWS_AND_EVENTS,
      },
      {
        label: 'joinUs',
        onClick: () => handleAnchorClick(RouteEnum.JOIN_US),
        ariaLabel: 'Navegar para a página Faça Parte',
        route: RouteEnum.JOIN_US,
      },
      {
        label: 'supportUs',
        onClick: () => handleAnchorClick(RouteEnum.SUPPORT_US),
        ariaLabel: 'Navegar para a página Seja um Apoiador',
        route: RouteEnum.SUPPORT_US,
      },
    ],
    [
      {
        label: 'business',
        onClick: () => handleAnchorClick(RouteEnum2.BUSINESS),
        ariaLabel: 'Navegar para a página business',
        route: RouteEnum2.BUSINESS,
      },
      {
        label: 'techRecruiter',
        onClick: () => handleAnchorClick(RouteEnum2.TECH_RECRUITER),
        ariaLabel: 'Navegar para a página tech-recruiter',
        route: RouteEnum2.TECH_RECRUITER,
      },
      {
        label: 'product',
        onClick: () => handleAnchorClick(RouteEnum2.PRODUCT),
        ariaLabel: 'Navegar para a página produto',
        route: RouteEnum2.PRODUCT,
      },
      {
        label: 'agility',
        onClick: () => handleAnchorClick(RouteEnum2.AGILITY),
        ariaLabel: 'Navegar para a página agilidade',
        route: RouteEnum2.AGILITY,
      },
      {
        label: 'socialMedia',
        onClick: () => handleAnchorClick(RouteEnum2.SOCIAL_MEDIA),
        ariaLabel: 'Navegar para a página social-media',
        route: RouteEnum2.SOCIAL_MEDIA,
      },
      {
        label: 'uiUxDesign',
        onClick: () => handleAnchorClick(RouteEnum2.UI_UX_DESIGN),
        ariaLabel: 'Navegar para a página design',
        route: RouteEnum2.UI_UX_DESIGN,
      },
      {
        label: 'frontEnd',
        onClick: () => handleAnchorClick(RouteEnum2.FRONT_END),
        ariaLabel: 'Navegar para a página front-end',
        route: RouteEnum2.FRONT_END,
      },
      {
        label: 'backEnd',
        onClick: () => handleAnchorClick(RouteEnum2.BACK_END),
        ariaLabel: 'Navegar para a página back-end',
        route: RouteEnum2.BACK_END,
      },
      {
        label: 'data',
        onClick: () => handleAnchorClick(RouteEnum2.DATA),
        ariaLabel: 'Navegar para a página dados',
        route: RouteEnum2.DATA,
      },
      {
        label: 'qA',
        onClick: () => handleAnchorClick(RouteEnum2.QA),
        ariaLabel: 'Navegar para a página qa',
        route: RouteEnum2.QA,
      },
      {
        label: 'devOps',
        onClick: () => handleAnchorClick(RouteEnum2.DEV_OPS),
        ariaLabel: 'Navegar para a página dev-ops',
        route: RouteEnum2.DEV_OPS,
      },
    ],
  ];
};
