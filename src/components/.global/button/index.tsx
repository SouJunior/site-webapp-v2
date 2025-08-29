import type { ButtonProps } from './types';
import { StyledButton } from './button.styles';

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
