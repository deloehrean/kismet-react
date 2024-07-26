import cn from 'clsx';
import React, { FC, useEffect } from 'react';
import { To, useResolvedPath, useMatch } from 'react-router-dom';
import { ListItemStyles as s, Divider, Typography, LinkStyled, Icon, Row } from 'src/components';

interface ListItemProps {
  className?: string;
  title: string;
  subtitle?: string;
  href?: string;
  divider?: boolean;
  dense?: boolean;
  startIcon?: any;
  endIcon?: any;
  expandBtn?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  className,
  title,
  subtitle,
  href,
  divider = false,
  dense = false,
  startIcon,
  endIcon,
  expandBtn = false,
}) => {
  const rootClassName = cn(className, s.root, dense && s.dense);

  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const resolved = useResolvedPath(href ? href : '');
  const match = useMatch({ path: resolved.pathname, end: false });
  const matchEnd = useMatch({ path: resolved.pathname, end: true });

  const collapseToggle = () => {
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  };

  useEffect(() => {
    matchEnd && collapseToggle();
  }, []);

  const renderTitles = (title: string, subtitle: string | undefined) => {
    return (
      <div className={s.content}>
        {startIcon && renderStartIcon(startIcon)}
        <div className={s.titles}>
          {title && (
            <Typography variant={dense ? 'menuPrimaryDense' : 'menuPrimary'}>{title}</Typography>
          )}
          {subtitle && <Typography variant={dense ? 'tooltip' : 'body2'}>{subtitle}</Typography>}
        </div>
        {endIcon && renderEndIcon(endIcon)}
        {expandBtn && renderArrow()}
      </div>
    );
  };

  const renderStartIcon = (startIcon: any) => {
    return <Icon name={startIcon} size={'medium'} />;
  };

  const renderEndIcon = (endIcon: any) => {
    return <Icon name={endIcon} size={'medium'} />;
  };

  const renderLink = (href: To) => {
    return (
      <>
        <LinkStyled to={href} onMouseUp={() => matchEnd && collapseToggle()}>
          {renderTitles(title, subtitle)}
        </LinkStyled>
      </>
    );
  };

  const renderArrow = () => {
    return (
      <button className={cn(s['expand-btn'], isCollapsed && s.isCollapsed)}>
        <Icon name={'chevronDownIcon'} />
      </button>
    );
  };

  return (
    <li
      className={cn(
        rootClassName,
        expandBtn && !match && s.isCollapsed,

        match && s.active,
      )}
    >
      <Row gap={1}>{href ? renderLink(href) : renderTitles(title, subtitle)}</Row>
      {divider && <Divider />}
    </li>
  );
};

export default ListItem;
