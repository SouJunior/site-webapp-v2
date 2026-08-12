import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink } from './link.styles';
import type { LinkProps } from './types';

const Link: React.FC<LinkProps> = ({
  children,
  onClick,
  role = 'button',
  img = false,
  tabIndex = 0,
  to,
  ...props
}) => {
  const isExternalLink = to?.startsWith('http');

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (onClick) {
        event.preventDefault();
        onClick();
      }
    }
  };

  const content = img ? (
    <img
      src={children as string}
      alt={props.ariaLabel}
      style={{ width: '24px', height: '24px' }}
    />
  ) : (
    children
  );

  if (isExternalLink) {
    return (
      <StyledLink
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role={role}
        tabIndex={tabIndex}
        {...props}
      >
        {content}
      </StyledLink>
    );
  }

  return (
    <StyledLink
      as={RouterLink}
      to={to || '#'}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={tabIndex}
      {...props}
    >
      {content}
    </StyledLink>
  );
};

export default Link;
