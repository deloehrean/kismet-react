import React, { FC, useEffect, useState } from 'react';

import cn from 'clsx';

import { ContainerStyles as s } from 'src/components';

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  el?: HTMLElement;
  styled?: boolean;
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  full?: boolean;
  rounded?: boolean | 'extra';
  variant?: 'outline' | 'darkish' | 'green' | 'blue' | 'purple' | 'static';
  elevation?: number;
  onClick?: () => void;
  gap?: number;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  styled,
  direction = 'column',
  align,
  justify,
  full = false,
  rounded,
  elevation,
  variant,
  onClick = undefined,
  gap = 0,
}) => {
  const rootClassName = cn(
    className,
    styled && s.styled,
    s[direction],
    align && s[`align-${align}`],
    justify && s[`justify-${justify}`],
    full && s.full,
    (styled && rounded === 'extra' && s['extra-rounded']) || (rounded && s.rounded),
    styled && variant && s[variant],
    styled && elevation && s[`elevation-${elevation}`],
    gap && s[`gap-${gap}`],
  );

  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState('all 1s ease');

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 500);
    setTimeout(() => {
      setTransition('all .2s ease');
    }, 1500);
  }, []);

  const animateOpacity = {
    opacity,
    transition,
  };

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component
      style={variant === 'static' ? undefined : animateOpacity}
      className={rootClassName}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Container;
