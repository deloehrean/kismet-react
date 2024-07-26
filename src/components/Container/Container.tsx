import cn from 'clsx';
import React, { FC, useEffect, useState } from 'react';
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
  variant?: 'outline' | 'darkish' | 'green' | 'blue' | 'purple';
  elevation?: number;
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
}) => {
  const rootClassName = cn(
    className,
    styled && s.styled,
    direction && s[direction],
    align && s['align-' + align],
    justify && s['justify-' + justify],
    full && s.full,
    (styled && rounded === 'extra' && s['extra-rounded']) || (rounded && s.rounded),
    styled && variant && s[variant],
    styled && elevation && s['elevation-' + elevation],
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
    opacity: opacity,
    transition: transition,
  };

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component style={animateOpacity} className={rootClassName}>
      {children}
    </Component>
  );
};

export default Container;
