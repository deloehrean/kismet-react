import React, { FC, useEffect } from 'react';

import cn from 'clsx';
import { To, useMatch, useResolvedPath } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import { Divider, Icon, LinkStyled, ListItemStyles as s, Row, Typography } from 'src/components';

interface ListItemProps {
  className?: string;
  title: string;
  subtitle?: string;
  href?: string;
  divider?: boolean;
  dense?: boolean;
  color?: 'olive' | 'dusk' | 'aqua' | 'rust' | 'plum' | null;
  startIcon?: any;
  endIcon?: any;
  expandBtn?: boolean;
  disabled?: boolean;
  tooltipContent?: string | undefined;
}

const ListItem: FC<ListItemProps> = ({
  className,
  title,
  subtitle,
  href,
  divider = false,
  dense = false,
  color,
  startIcon,
  endIcon,
  expandBtn = false,
  disabled = false,
  tooltipContent = undefined,
}) => {
  const rootClassName = cn(className, s.root, dense && s.dense, color && s[color]);
  const isPasswordProtected = () => {
    return document.body.classList.contains('password-protected');
  };

  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const resolved = useResolvedPath(href || '');
  const match = useMatch({ path: resolved.pathname, end: false });
  const matchEnd = useMatch({ path: resolved.pathname, end: true });

  const collapseToggle = () => {
    // eslint-disable-next-line no-unused-expressions
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
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
      <React.Fragment>
        <LinkStyled
          to={href}
          onMouseUp={() => matchEnd && collapseToggle()}
          aria-disabled={disabled && isPasswordProtected()}
          data-tooltip-id={'link-tooltip'}
          data-tooltip-content={tooltipContent}
        >
          {renderTitles(title, subtitle)}
        </LinkStyled>
        {tooltipContent ? <Tooltip id={'link-tooltip'} /> : ''}
      </React.Fragment>
    );
  };

  const renderArrow = () => {
    return (
      <button
        aria-label={'down-arrow'}
        type={'button'}
        className={cn(s['expand-btn'], isCollapsed && s.isCollapsed)}
      >
        <Icon name={'chevronDownIcon'} />
      </button>
    );
  };

  return (
    <li
      className={cn(
        rootClassName,
        expandBtn && !match && s.isCollapsed,
        disabled && isPasswordProtected() && s.disabled,
        match && s.active,
      )}
    >
      <Row gap={1}>{href ? renderLink(href) : renderTitles(title, subtitle)}</Row>
      {divider && <Divider />}
    </li>
  );
};

export default ListItem;
