import React from 'react';

import cn from 'clsx';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

import { LinkStyledStyles as s } from 'src/components';

const LinkStyled: React.FC<LinkProps> = ({ className, to, children, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const disabled = props['aria-disabled'];

  return (
    <Link
      className={cn(s.root, match && s.active, className)}
      to={to}
      {...props}
      onClick={event => disabled && event.preventDefault()}
    >
      {children}
    </Link>
  );
};

export default LinkStyled;
