import React, { FC } from 'react';

import {
  AppbarStyles as s,
  Column,
  Container,
  KismetLogo,
  LinkStyled,
  NavMenu,
} from 'src/components';
import { routes } from 'src/lib/routes/routes';

type AppbarProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  breadcrumbs?: boolean;
};

const Appbar: FC<AppbarProps> = () => {
  return (
    <header className={s.root}>
      <Container direction="row" align="center" full>
        <Column className={s.logo}>
          <LinkStyled to={'/'}>
            <KismetLogo />
          </LinkStyled>
        </Column>
        <Column className={s.nav}>
          <NavMenu routes={routes} variant={'appbar-nav'} />
        </Column>
      </Container>
    </header>
  );
};

export default Appbar;
