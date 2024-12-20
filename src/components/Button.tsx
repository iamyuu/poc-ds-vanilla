import { button } from './Button.css';
import type { ButtonVariants } from './Button.css';

type ButtonProps = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ color, size, rounded, ...props }: ButtonProps) {
  return <button className={button({ color, size, rounded })} {...props} />;
}
