import React from 'react';
import { Container, Divider, FooterStyles as s, Typography, LinkStyled } from 'src/components';

const Footer: React.FC = () => {
  return (
    <footer className={s.root}>
      <nav className={s.links}>
        <ul>
          <li>
            <LinkStyled to="/">
              <Typography variant={'caption'}>Privacy Policy</Typography>
            </LinkStyled>
          </li>
          <Divider direction={'vertical'} />
          <li>
            <LinkStyled to="/">
              <Typography variant={'caption'}>Terms of Service</Typography>
            </LinkStyled>
          </li>
          <Divider direction={'vertical'} />
          <li>
            <LinkStyled to="/">
              <Typography variant={'caption'}>Support/Contact Us</Typography>
            </LinkStyled>
          </li>
        </ul>
      </nav>
      <Container>
        <Typography variant={'caption'}>© 2024 HRlogics ACA</Typography>{' '}
      </Container>
    </footer>
  );
};

export default Footer;
