import cn from 'clsx';
import React from 'react';
import { LinkProps, Link, useMatch, useResolvedPath } from 'react-router-dom';
import { LinkStyledStyles as s } from 'src/components';

const LinkStyled: React.FC<LinkProps> = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={cn(s.root, match && s.active)} to={to} {...props}>
      {children}
    </Link>
  );
};

export default LinkStyled;
