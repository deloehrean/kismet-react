import { useLocation } from 'react-router-dom';
import { ActiveRoutePath } from './ActiveRoutePath';
import { mapDefinitionToActivePath } from './mapDefinitionToActivePath';
import { RoutePathDefinition } from './RoutePathDefinition';

export function useActiveRoutePaths(routes: RoutePathDefinition[]): ActiveRoutePath[] {
  const location = useLocation();
  return mapDefinitionToActivePath(routes, location.pathname);
}
