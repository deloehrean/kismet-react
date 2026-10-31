import React, { FC } from 'react';

import cn from 'clsx';

import { ColumnStyles as s } from 'src/components';

interface ColumnProps {
  className?: string;
  children?: React.ReactNode;
  el?: React.ElementType;
  gap?: number;
}

const Column: FC<ColumnProps> = ({ children, className, el = 'div', gap = 0 }) => {
  const rootClassName = cn(className, s.root, gap && s[`gap-${gap}`]);

  const Component = el;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Column;
