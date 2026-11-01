import cn from 'clsx';

import s from './chevron.module.scss';

type ChevronIconProps = {
  direction?: 'right' | 'left' | 'down' | 'up';
};

const ChevronIcon = ({ direction }: ChevronIconProps) => {
  return (
    <svg
      className={cn(s.root, direction && s[`${direction}`])}
      width="12"
      height="25"
      viewBox="0 0 12 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12.5L-3.0085e-06 24.1913L-1.98641e-06 0.808656L12 12.5Z" fill="#CCCCCC" />
    </svg>
  );
};
export default ChevronIcon;
