import { RouteObject, useRoutes } from 'react-router-dom';

export interface RoutesRendererProps {
  routes: RouteObject[];
}

export function RoutesRenderer({ routes }: RoutesRendererProps) {
  return useRoutes(routes);
}
