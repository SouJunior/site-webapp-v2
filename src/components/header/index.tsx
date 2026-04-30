import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeaderContainer, NavLinks } from './header.styles';
import Link from '../.global/link';
import type { HeaderProps } from './types';
import logoImage from '../../assets/sj-logo-header.png';
import Logo from '../.global/logo';

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const isAreaPage = location.pathname.startsWith('/area/');

  const isLinkActive = (route?: string) => {
    if (!route) return false;
    if (route.includes('#')) {
      const hash = route.split('#')[1];
      return location.hash === `#${hash}`;
    }
    return location.pathname === route;
  };

  return (
    <HeaderContainer role="banner">
      <div>
        <div>
          <a href="/">
            <Logo
              src={logoImage}
              alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
              role="img"
            />
          </a>
          <NavLinks role="navigation" aria-label="Navegação principal">
            {links[0]?.map((link) => (
              <Link
                key={link.label}
                onClick={link.onClick}
                aria-label={
                  link.ariaLabel || `Navegar para ${t(`links.${link.label}`)}`
                }
                role="menuitem"
                paddingY={8}
                paddingX={12}
                isActive={isLinkActive(link.route)}
              >
                {t(`links.${link.label}`)}
              </Link>
            ))}
          </NavLinks>
        </div>
      </div>

      {isAreaPage && (
        <NavLinks
          role="navigation"
          aria-label="Navegação secundaria"
          style={{ gap: '3.35rem', marginTop: '1.5rem', marginBottom: '1rem' }}
        >
          {links[1]?.map((link) => (
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
              isActive={isLinkActive(link.route)}
            >
              {t(`links.${link.label}`)}
            </Link>
          ))}
        </NavLinks>
      )}
    </HeaderContainer>
  );
};

export default Header;
