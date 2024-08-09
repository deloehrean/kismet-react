import { Container, Column } from 'src/components';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

import { mapDefinitionToMenu } from './mapDefinitionToMenu';
import { mapDefinitionToTabs } from './mapDefinitionToTabs';

export interface NavMenuProps {
  variant: 'sidebar-nav' | 'appbar-nav';
  routes: RoutePathDefinition[];
}

const NavMenu = ({ routes, variant }: NavMenuProps) => {
  const renderSidebarNav = mapDefinitionToMenu(routes);
  const renderAppbarNav = mapDefinitionToTabs(routes);
  // const renderTrackingLinks = mapDefinitionToMenu(
  //   routes.filter(route => route.tree === 'graphics'),
  // );

  return (
    <Container>
      <Column gap={2} el={'nav'}>
        {variant === 'sidebar-nav' ? renderSidebarNav : renderAppbarNav}
      </Column>
    </Container>
  );
};
export default NavMenu;
