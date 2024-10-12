import React from 'react';

import cn from 'clsx';
import { generatePath, useMatch, useResolvedPath } from 'react-router-dom';

import { ListItem, NavMenuStyles as s } from 'src/components';
import { concatPaths } from 'src/lib/routes/routeHelpers';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

// eslint-disable-next-line import/prefer-default-export
export function mapDefinitionToTabs(
  definitions: RoutePathDefinition[],
  parent: string = '',
): React.ReactNode {
  return (
    <ul className={cn(s.root, s.tabs, 'transition-all')}>
      {definitions.map((definition, index) => {
        if (!definition.nav) {
          return undefined;
        }
        const builtPath = concatPaths(parent, definition.path);
        let to: string | undefined;
        try {
          to = generatePath(builtPath);
        } catch (err) {
          /* empty */
        }

        const resolved = useResolvedPath(to || '');
        const match = useMatch({ path: resolved.pathname, end: false });

        return (
          <React.Fragment key={index}>
            {to && definition.element ? (
              <ListItem
                key={index}
                className={cn(s.tabs, match && s.active)}
                href={to}
                color={definition.color}
                startIcon={definition.startIcon}
                endIcon={definition.endIcon}
                dense={!!parent}
                title={definition.title}
                subtitle={definition.subtitle}
                disabled={definition.protected}
              />
            ) : undefined}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
