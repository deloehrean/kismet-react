import { RouteObject } from 'react-router-dom';

export type RoutePathDefinition = RouteObject & {
  title: string;
  path: string;
  subtitle?: string;
  nav?: boolean;
  color?: 'olive' | 'dusk' | 'aqua' | 'rust' | 'plum';
  startIcon?: string;
  endIcon?: string;
  tree?: string;
  parent?: string;
  children?: RoutePathDefinition[];
  protected?: boolean;
};
