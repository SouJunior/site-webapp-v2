import React from 'react';
import { StyledLink } from './link.styles';
import type { LinkProps } from './types';

const Link: React.FC<LinkProps> = ({
  children,
  onClick,
  role = 'button',
  img = false,
  tabIndex = 0,
  ...props
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    // Ensure Enter and Space trigger the click action
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <StyledLink
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role}
      tabIndex={tabIndex}
      {...props}
    >
      {img ? (
        <img
          src={children as string}
          alt={props.ariaLabel}
          style={{ width: '24px', height: '24px' }}
        />
      ) : (
        children
      )}
    </StyledLink>
  );
};

export default Link;
