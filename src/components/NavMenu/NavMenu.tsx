import { Container, Column } from 'src/components';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';
import { mapDefinitionToMenu } from './mapDefinitionToMenu';

export interface NavMenuProps {
  routes: RoutePathDefinition[];
}

const NavMenu = ({ routes }: NavMenuProps) => {
  const renderLinks = mapDefinitionToMenu(routes.filter(route => !route.tree));
  const renderTrackingLinks = mapDefinitionToMenu(
    routes.filter(route => route.tree === 'tracking'),
  );

  return (
    <Column gap={2}>
      <Container styled rounded variant={'outline'}>
        {renderLinks}
      </Container>
      <Container>{renderTrackingLinks}</Container>
    </Column>
  );
};
export default NavMenu;
