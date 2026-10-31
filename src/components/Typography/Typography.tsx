import React from 'react';

import cn from 'clsx';

import { TypographyStyles as s } from 'src/components';

interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'caption'
    | 'code'
    | 'tooltip'
    | 'menuPrimary'
    | 'menuPrimaryDense';
  color?: 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  align?: 'inherit' | 'left' | 'right' | 'center' | 'justify';
  transform?: 'none' | 'lowercase' | 'uppercase' | 'capitalize';
  gutter?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const variantsMapping: Record<NonNullable<TypographyProps['variant']>, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  overline: 'p',
  caption: 'p',
  code: 'p',
  tooltip: 'p',
  menuPrimary: 'p',
  menuPrimaryDense: 'p',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'inherit',
  align = 'inherit',
  transform = 'none',
  gutter = false,
  className,
  children,
  ...props
}) => {
  const Component = variantsMapping[variant];

  return (
    <Component
      className={cn(
        className,
        s.root,
        s[variant],
        s[color],
        s[align],
        s[transform],
        gutter && s.gutter,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
