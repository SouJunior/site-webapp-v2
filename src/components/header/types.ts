export interface HeaderLink {
  onClick: () => void;
  label: string;
  ariaLabel?: string;
  route?: string;
}

export interface HeaderProps {
  links: HeaderLink[][];
}
