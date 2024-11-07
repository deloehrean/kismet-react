import React from 'react';

import cn from 'clsx';
import { generatePath, useMatch, useResolvedPath } from 'react-router-dom';

import { ListItem, NavMenuStyles as s } from 'src/components';
import { concatPaths } from 'src/lib/routes/routeHelpers';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

// eslint-disable-next-line import/prefer-default-export
export function mapDefinitionToMenu(
  definitions: RoutePathDefinition[],
  parent: string = '',
): React.ReactNode {
  return (
    <ul className={cn(parent ? s.list : s.root, s['list-item-expand-wrap'], 'transition-all')}>
      {definitions.map((definition, index) => {
        if (!definition.nav) {
          return undefined;
        }
        const builtPath = concatPaths(parent, definition.path);
        let to: string | undefined;
        try {
          to = generatePath(builtPath);
          // eslint-disable-next-line id-denylist
        } catch (err) {
          /* empty */
        }

        const resolved = useResolvedPath(to || '');
        const match = useMatch({ path: resolved.pathname, end: false });

        return (
          <div className={cn(definition.children && s['list-wrap'], match && s.active)} key={index}>
            {to ? (
              <React.Fragment>
                {definition.element ? (
                  <ListItem
                    key={index}
                    className={cn(definition.children ? s['list-item-expand'] : s['list-item'])}
                    href={to}
                    startIcon={definition.startIcon}
                    endIcon={definition.endIcon}
                    title={definition.title}
                    subtitle={definition.subtitle}
                    expandBtn={!!definition.children}
                  />
                ) : (
                  <ListItem
                    key={index}
                    className={cn(definition.children ? s['list-item-expand'] : s['list-item'])}
                    title={definition.title}
                    startIcon={definition.startIcon}
                    endIcon={definition.endIcon}
                    expandBtn={!!definition.children}
                  />
                )}
                {definition.children
                  ? mapDefinitionToMenu(definition.children, builtPath)
                  : undefined}
              </React.Fragment>
            ) : undefined}
          </div>
        );
      })}
    </ul>
  );
}
