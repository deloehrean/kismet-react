/**
 * Combine paths
 *
 * @param {string} parent
 * @param {string} child
 * @returns {string}
 */
export const combinePaths = (parent: string, child: string): string =>
  `${parent.replace(/\/$/, '')}/${child.replace(/^\//, '')}`;

/**
 * Recursively build paths for each navigation item
 *
 * @param routes
 * @param {string} parentPath
 * @returns {*}
 */
export const buildPaths = (routes: any[], parentPath: string = ''): any =>
  routes.map(route => {
    const path = combinePaths(parentPath, route.path);

    return {
      ...route,
      path,
      ...(route.routes && { routes: buildPaths(route.routes, path) }),
    };
  });

/**
 * Recursively provide parent reference for each navigation item
 *
 * @param routes
 * @param parentRoute
 * @returns {*}
 */
export const setupParents = (routes, parentRoute = null): any =>
  routes.map((route: any) => {
    const withParent = {
      ...route,
      // @ts-ignore
      ...(parentRoute && { parent: parentRoute }),
    };

    return {
      ...withParent,
      ...(withParent.routes && {
        routes: setupParents(withParent.routes, withParent),
      }),
    };
  });

/**
 * Convert navigation tree into flat array
 *
 * @param routes
 * @returns {any[]}
 */
export const flattenRoutes = (routes: any[]): any[] =>
  routes.map(route => [route.routes ? flattenRoutes(route.routes) : [], route]).flat(Infinity);

/**
 * Combine all the above functions together
 *
 * @param routes
 * @returns {any[]}
 */
export const generateAppRoutes = (routes: any): any[] => {
  return flattenRoutes(setupParents(buildPaths(routes)));
};

/**
 * Provides path from root to the element
 *
 * @param route
 * @returns {any[]}
 */
export const pathTo = (route: { parent: any }): any[] => {
  if (!route.parent) {
    return [route];
  }

  return [...pathTo(route.parent), route];
};

export const isPasswordProtected = () => {
  return document.body.classList.contains('password-protected');
};
