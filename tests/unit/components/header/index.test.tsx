import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../../src/components/header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('should render correctly', () => {
    const links = [
      [
        { label: 'Sobre nós', to: '/about', onClick: jest.fn() },
        // { label: "Nossas iniciativas", to: "/initiatives", onClick: jest.fn() },
      ],
    ];

    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Header links={links} />
      </MemoryRouter>,
    );
    expect(getByAltText('Sou Junior Logo')).toBeInTheDocument();
    expect(getByText('links.Sobre nós')).toBeInTheDocument();
    // expect(getByText("links.Nossas iniciativas")).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const links = [
      [
        { label: 'aboutUs', onClick: jest.fn() },
        // { label: 'initiatives', onClick: jest.fn() },
      ],
    ];

    const { container } = render(
      <MemoryRouter>
        <Header links={links} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
