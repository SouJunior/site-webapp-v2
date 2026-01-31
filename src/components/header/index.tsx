import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderContainer, NavLinks } from './header.styles';
import Link from '../.global/link';
import type { HeaderProps } from './types';
import logoImage from '../../assets/sj-logo-header.png';
import Logo from '../.global/logo';

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer role="banner">
      <Logo
        src={logoImage}
        alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
        role="img"
      />
      <NavLinks role="navigation" aria-label="Navegação principal">
        {links[0].map((link) => (
          <Link
            key={link.label}
            onClick={link.onClick}
            aria-label={
              link.ariaLabel || `Navegar para ${t(`links.${link.label}`)}`
            }
            role="menuitem"
            paddingY={8}
            paddingX={12}
            isLastLink={link.label === 'supportUs' && true}
          >
            {t(`links.${link.label}`)}
          </Link>
        ))}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
