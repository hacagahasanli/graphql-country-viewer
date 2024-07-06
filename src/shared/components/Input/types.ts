import BaseSizes from '@shared/constants/BaseSizes';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>  {
  size?: BaseSizes;
}
