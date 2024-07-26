import React from 'react';

import {
  KismetLogo,
  SidebarStyles as s,
  ThemeToggle,
  LinkStyled,
  Container,
  Column,
} from 'src/components';
import { NavMenu } from 'src/components/NavMenu';
import { routes } from 'src/lib/routes/routes';

const Sidebar: React.FC = () => {
  return (
    <Column className={s.root} gap={4}>
      <Container className={s.logo}>
        <LinkStyled to="/">
          <KismetLogo />
        </LinkStyled>
      </Container>
      <NavMenu routes={routes} />
      <ThemeToggle />
    </Column>
  );
};

export default Sidebar;
