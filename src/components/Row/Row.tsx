import React, { FC } from 'react';

import cn from 'clsx';

import { RowStyles as s } from 'src/components';

interface RowProps {
  className?: string;
  children?: React.ReactNode;
  el?: HTMLElement;
  gap?: number;
  breakpoint?: string;
}

const Column: FC<RowProps> = ({ children, className, el = 'div', gap = 0, breakpoint = 'sm' }) => {
  const rootClassName = cn(
    className,
    s.root,
    gap && s[`gap-${gap}`],
    breakpoint && s[`break-${breakpoint}`],
  );

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Column;
