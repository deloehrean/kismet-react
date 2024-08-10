import { PathMatch, matchPath } from 'react-router-dom';

// https://github.com/remix-run/react-router/blob/f16c5490dfa75f15dcfb86d2a981a7c58a9d1a33/packages/react-router/index.tsx#L1369
const joinPaths = (paths: string[]): string => paths.join('/').replace(/\/\/+/g, '/');

export function concatPaths(parent: string, current: string) {
  return joinPaths([parent, current]);
}

//isActive logic from NavLink: https://github.com/remix-run/react-router/blob/7668662895337af01f0a8eb22788e0e6b2f5e344/packages/react-router-dom/index.tsx#L324
export function isPathActiveForLocation(pathName: string, locationPathname: string) {
  return (
    locationPathname === pathName ||
    (locationPathname.startsWith(pathName) && locationPathname.charAt(pathName.length) === '/')
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//use matchPath to resolve params on the path: https://github.com/remix-run/react-router/issues/5870#issuecomment-394194338
export function matchPatternInPath(
  pathPattern: string,
  locationPathname: string,
  requireExactMatch: boolean = false,
): PathMatch<string> | null {
  return matchPath(
    {
      path: pathPattern,
      end: requireExactMatch,
    },
    locationPathname,
  );
}
