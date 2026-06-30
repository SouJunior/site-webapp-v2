import React from 'react';
import {
  FooterContainer,
  Nav,
  SocialList,
  Copyright,
  Logo,
  Hr,
  NavContainer,
  ContentWrapper,
} from './footer.styles';
import Link from '../.global/link';
import Image from '../.global/image';
import logoImage from '../../assets/sj-logo-footer.png';
import {
  footerLinks,
  footerLinks2,
  footerLinks3,
  socialLinks,
  copyright,
} from '../../utils/footerLinks';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#3C7EF9',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2.5rem',
      }}
    >
      <FooterContainer>
        <Logo>
          <a href="/">
            <Image
              src={logoImage}
              alt="Sou Junior - Logo da organização que impulsiona carreiras em tecnologia"
              role="img"
            />
          </a>
        </Logo>
        <NavContainer>
          <ContentWrapper>
            <Nav>
              {footerLinks.map((link, index) => {
                const isFirst = index === 0;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    color="#fff"
                    size={index === 0 ? 24 : 16}
                    isFirstLink={isFirst}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </Nav>
            <Nav>
              {footerLinks2 &&
                footerLinks2.map((link, index) => {
                  const isFirst = index === 0;
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      color="#fff"
                      size={index === 0 ? 24 : 16}
                      isFirstLink={isFirst}
                    >
                      {link.label}
                    </Link>
                  );
                })}
            </Nav>
            <Nav>
              {footerLinks3 &&
                footerLinks3.map((link, index) => {
                  const isFirst = index === 0;
                  return (
                    <Link
                      key={link.label}
                      to={link.to}
                      color="#fff"
                      size={index === 0 ? 24 : 16}
                      isFirstLink={isFirst}
                    >
                      {link.label}
                    </Link>
                  );
                })}
            </Nav>
          </ContentWrapper>
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
}

export default Footer;
