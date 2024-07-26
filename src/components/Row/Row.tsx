import cn from 'clsx';
import React, { FC } from 'react';
import { RowStyles as s } from 'src/components';

interface RowProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  gap?: number;
}

const Column: FC<RowProps> = ({ children, className, el = 'div', gap = '0' }) => {
  const rootClassName = cn(className, s.root, gap && s['gap-' + gap]);

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Column;
