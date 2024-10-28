import React from 'react';

import cn from 'clsx';
import { Outlet } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import { Container, Divider, LinkStyled, Row, Typography } from 'src/components';
import { GraphicsPageStyles as s } from 'src/pages';

function GraphicsPage() {
  return (
    <Container className={s['graphics-panel']}>
      <Row className={cn(s['subnav-container'], s.container)}>
        <LinkStyled to={'/graphics'}>
          <Typography variant={'h1'} className={s['page-title']}>
            Graphic Design
          </Typography>
        </LinkStyled>

        <ul className={s.subnav}>
          <li>
            <LinkStyled to={'/graphics/albums'} className={s['subnav-btn']}>
              Album Artwork
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics/tees'} className={s['subnav-btn']}>
              Tee Shirt Designs
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              to={'/graphics'}
              aria-disabled
              data-tooltip-id={'print-tooltip'}
              className={s['subnav-btn']}
            >
              Print
            </LinkStyled>
            <Tooltip content={'Coming Soon'} place={'bottom'} id={'print-tooltip'} />
          </li>
          <li>
            <LinkStyled
              to={'/graphics'}
              aria-disabled
              data-tooltip-id={'newsletters-tooltip'}
              className={s['subnav-btn']}
            >
              Newsletters
            </LinkStyled>{' '}
            <Tooltip content={'Coming Soon'} place={'bottom'} id={'newsletters-tooltip'} />
          </li>
          <li>
            <LinkStyled
              to={'/graphics'}
              aria-disabled
              data-tooltip-id={'logos-tooltip'}
              className={s['subnav-btn']}
            >
              Logos
            </LinkStyled>
            <Tooltip content={'Coming Soon'} place={'bottom'} id={'logos-tooltip'} />
          </li>
          <li>
            <LinkStyled
              to={'/graphics'}
              aria-disabled
              data-tooltip-id={'advert-tooltip'}
              className={s['subnav-btn']}
            >
              Advertisements
            </LinkStyled>
            <Tooltip content={'Coming Soon'} place={'bottom'} id={'advert-tooltip'} />
          </li>
        </ul>
      </Row>
      <Divider spacing />
      <Outlet />
    </Container>
  );
}

export default GraphicsPage;
