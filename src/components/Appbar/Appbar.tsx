import React, { FC } from 'react';

import { useRoutes } from 'react-router-dom';

import {
  AppbarStyles as s,
  Column,
  Container,
  Breadcrumbs,
  KismetLogo,
  Typography,
  LinkStyled,
} from 'src/components';
import { routes } from 'src/lib/routes/routes';

type AppbarProps = {
  breadcrumbs?: boolean;
};

const Appbar: FC<AppbarProps> = ({ breadcrumbs }) => {
  return (
    <header className={s.root}>
      <Container direction="row" align="center" full>
        <Column className={s.logo}>
          <LinkStyled to={'/'}>
            <KismetLogo />
          </LinkStyled>
        </Column>
        <nav className={s.nav}>
          <LinkStyled to={'/graphics'}>
            <Typography variant={'subtitle1'}>Graphics</Typography>
          </LinkStyled>
          <LinkStyled to={'/websites'}>
            <Typography variant={'subtitle1'}>Web Dev</Typography>
          </LinkStyled>
          <LinkStyled to={'/branding'}>
            <Typography variant={'subtitle1'}>Branding</Typography>
          </LinkStyled>
          <LinkStyled to={'/ecommerce'}>
            <Typography variant={'subtitle1'}>eCommerce</Typography>
          </LinkStyled>
        </nav>
      </Container>
    </header>
  );
};

export default Appbar;
