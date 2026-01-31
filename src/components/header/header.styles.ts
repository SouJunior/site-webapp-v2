import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(24)};
  padding: 1rem 2rem;
  min-height: 60px; /* Ensure adequate touch target height */
  font-weight: 500;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Responsive design */
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border-bottom: 2px solid #000;
    background-color: #fff;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 0.5rem; /* Reduced gap to allow for link padding */
  align-items: center;

  /* Responsive navigation */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
`;

export const Line = styled.hr`
  width: 100%;
  position: absolute;
  top: 4.4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;
