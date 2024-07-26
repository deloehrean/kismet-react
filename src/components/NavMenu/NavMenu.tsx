import { Container, Column } from 'src/components';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

import { mapDefinitionToMenu } from './mapDefinitionToMenu';

export interface NavMenuProps {
  routes: RoutePathDefinition[];
}

const NavMenu = ({ routes }: NavMenuProps) => {
  const renderLinks = mapDefinitionToMenu(routes);
  // const renderTrackingLinks = mapDefinitionToMenu(
  //   routes.filter(route => route.tree === 'tracking'),
  // );

  return (
    <Container>
      <Column gap={2}>{renderLinks}</Column>
    </Container>
  );
};
export default NavMenu;
