import { Column } from 'src/components';
import { processRoutes } from 'src/lib/routes/processRoutes';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

import { mapDefinitionToMenu } from './mapDefinitionToMenu';
import { mapDefinitionToTabs } from './mapDefinitionToTabs';

export interface NavMenuProps {
  variant: 'sidebar-nav' | 'appbar-nav' | 'process-nav';
  routes: RoutePathDefinition[];
}

const NavMenu = ({ routes, variant }: NavMenuProps) => {
  const renderSidebarNav = mapDefinitionToMenu(routes);
  const renderAppbarNav = mapDefinitionToTabs(routes);
  const renderProcessNav = mapDefinitionToMenu(processRoutes);

  const renderNav =
    // eslint-disable-next-line no-nested-ternary
    variant === 'sidebar-nav'
      ? renderSidebarNav
      : variant === 'appbar-nav'
        ? renderAppbarNav
        : renderProcessNav;

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
