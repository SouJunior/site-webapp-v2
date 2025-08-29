import React from 'react';
import type { FooterProps } from './types';
import {
  FooterContainer,
  Nav,
  SocialList,
  Copyright,
  Logo,
  Hr,
  NavContainer,
} from './footer.styles';
import Link from '../.global/link';
import Image from '../.global/image';
import logoImage from '../../assets/sj-logo-footer.png';

const Footer: React.FC<FooterProps> = ({
  links,
  links2,
  links3,
  socialLinks,
  copyright,
}) => (
  <div
    style={{
      backgroundColor: '#001633',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2.5rem',
    }}
  >
    <FooterContainer>
      <Logo>
        <Image
          src={logoImage}
          alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
          role="img"
        />
      </Logo>
      <NavContainer>
        <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
          <Nav>
            {links.map((link, index) => {
              const isFirst = index === 0;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  color="#fff"
                  size={index === 0 ? 20 : 16}
                  isFistLink={isFirst}
                >
                  {link.label}
                </Link>
              );
            })}
          </Nav>
          <Nav>
            {links2 &&
              links2.map((link, index) => {
                const isFirst = index === 0;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    color="#fff"
                    size={index === 0 ? 20 : 16}
                    isFistLink={isFirst}
                  >
                    {link.label}
                  </Link>
                );
              })}
          </Nav>
          <Nav>
            {links3 &&
              links3.map((link, index) => {
                const isFirst = index === 0;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    color="#fff"
                    size={index === 0 ? 20 : 16}
                    isFistLink={isFirst}
                  >
                    {link.label}
                  </Link>
                );
              })}
          </Nav>
        </div>
      </NavContainer>
      {socialLinks && (
        <SocialList>
          {socialLinks.map((social) => (
            <Link
              key={social.to}
              to={social.to}
              img={true}
              width={24}
              height={24}
            >
              {social.icon}
            </Link>
          ))}
        </SocialList>
      )}

      <Hr />

      {copyright && <Copyright>{copyright}</Copyright>}
    </FooterContainer>
  </div>
);

export default Footer;
