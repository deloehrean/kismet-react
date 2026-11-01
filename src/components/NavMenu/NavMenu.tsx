import { Column } from 'src/components';
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

  const renderNav = variant === 'sidebar-nav' ? renderSidebarNav : renderAppbarNav;

  // const renderTrackingLinks = mapDefinitionToMenu(
  //   routes.filter(route => route.tree === 'graphics'),
  // );

  return (
    <Column gap={2} el={'nav'}>
      {renderNav}
    </Column>
  );
};
export default NavMenu;
