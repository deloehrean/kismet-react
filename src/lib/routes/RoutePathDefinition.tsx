import { RouteObject } from 'react-router-dom';

import type { IconName } from 'src/components/icons/Icon';

export type RoutePathDefinition = RouteObject & {
  title: string;
  path: string;
  subtitle?: string;
  nav?: boolean;
  color?: 'olive' | 'dusk' | 'aqua' | 'rust' | 'plum';
  startIcon?: IconName;
  endIcon?: IconName;
  tree?: string;
  parent?: string;
  children?: RoutePathDefinition[];
  protected?: boolean;
};
