import React from 'react';

import cn from 'clsx';

import {
  Container,
  Divider,
  FooterStyles as s,
  Typography,
  LinkStyled,
  ThemeToggle,
} from 'src/components';

export interface FooterProps {
  color: string;
}
const Footer = ({ color }: FooterProps) => {
  return (
    <footer className={cn(s.root, s[`${color}`])}>
      <nav className={s.links}>
        <ul>
          <li>
            <LinkStyled to={'mailto: andrew@kismet-ux.com'}>
              <Typography variant={'caption'}>andrew@kismet-ux.com</Typography>
            </LinkStyled>
          </li>
          <Divider direction={'vertical'} />
          <li>
            <LinkStyled to={'tel: 1-313-354-2265'}>
              <Typography variant={'caption'}>(313) 354-2265</Typography>
            </LinkStyled>
          </li>
        </ul>
      </nav>
      <Container>
        <Typography variant={'caption'}>© 2024 Kismet</Typography>{' '}
      </Container>
      <Container>
        <ThemeToggle />
      </Container>
    </footer>
  );
};

export default Footer;
