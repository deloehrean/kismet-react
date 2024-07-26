import clsx from 'clsx';
import { DividerStyles as s } from 'src/components';
import { FC } from 'react';

interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  spacing?: boolean;
}

const Divider: FC<DividerProps> = ({ direction = 'horizontal', spacing = false }) => {
  return <hr className={clsx(s.root, direction && s[direction], spacing && s.spacing)} />;
};

export default Divider;
