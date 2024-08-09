import React from 'react';

import { Row, LinkStyled, Typography, BreadcrumbsStyles as s, Icon } from 'src/components';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';
import { useActiveRoutePaths } from 'src/lib/routes/useActiveRoutePaths';

export interface BreadcrumbsProps {
  routes: RoutePathDefinition[];
  dividerType?: 'text' | 'icon';
  dividerText?: string;
  iconInstance?: React.ReactNode;
}

const Breadcrumbs = ({
  routes,
  dividerType = 'text',
  dividerText = '/',
  iconInstance = <Icon size="inherit" name="starIcon" />,
}: BreadcrumbsProps) => {
  const activeRoutePaths = useActiveRoutePaths(routes);
  return (
    <Row className={s.root} gap={1}>
      {activeRoutePaths.map((active, index, { length }) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <React.Fragment>
              {dividerType === 'text' ? (
                <Typography variant="subtitle2">{dividerText}</Typography>
              ) : (
                <React.Fragment>{iconInstance}</React.Fragment>
              )}
            </React.Fragment>
          )}
          <React.Fragment>
            {index !== length - 1 ? (
              <Typography variant="subtitle2">
                <LinkStyled to={active.match.pathname}>{active.title}</LinkStyled>
              </Typography>
            ) : (
              <Typography variant="subtitle2">{active.title}</Typography>
            )}
          </React.Fragment>
        </React.Fragment>
      ))}
    </Row>
  );
};
export default Breadcrumbs;
