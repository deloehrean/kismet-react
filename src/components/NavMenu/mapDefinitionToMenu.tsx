import cn from 'clsx';
import React from 'react';
import { generatePath, useResolvedPath, useMatch } from 'react-router-dom';
import { Typography, NavMenuStyles as s, ListItem } from 'src/components';
import { concatPaths } from 'src/lib/routes/routeHelpters';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

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
        } catch (err) {}

        const resolved = useResolvedPath(to ? to : '');
        const match = useMatch({ path: resolved.pathname, end: false });

        return (
          <div className={cn(definition.children && s['list-wrap'], match && s.active)} key={index}>
            {to ? (
              <>
                {definition.element ? (
                  <ListItem
                    key={index}
                    className={cn(definition.children ? s['list-item-expand'] : s['list-item'])}
                    href={to}
                    startIcon={definition.startIcon}
                    endIcon={definition.endIcon}
                    dense={!!parent}
                    title={definition.title}
                    subtitle={definition.subtitle}
                    expandBtn={!!definition.children}
                  />
                ) : (
                  <Typography>{definition.title}</Typography>
                )}
                {definition.children
                  ? mapDefinitionToMenu(definition.children, builtPath)
                  : undefined}
              </>
            ) : undefined}
          </div>
        );
      })}
    </ul>
  );
}
