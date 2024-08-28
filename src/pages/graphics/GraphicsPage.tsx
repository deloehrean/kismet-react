import React from 'react';

import cn from 'clsx';
import { Outlet } from 'react-router-dom';

import { Container, Divider, LinkStyled, Typography } from 'src/components';
import { GraphicsPageStyles as s } from 'src/pages';

function GraphicsPage() {
  return (
    <Container className={s['graphics-panel']}>
      <div className={cn(s['subnav-container'], s.container)}>
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
            <LinkStyled to={'/graphics'} aria-disabled className={s['subnav-btn']}>
              Print
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} aria-disabled className={s['subnav-btn']}>
              Newsletters
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} aria-disabled className={s['subnav-btn']}>
              Logos
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} aria-disabled className={s['subnav-btn']}>
              Advertisements
            </LinkStyled>
          </li>
        </ul>
      </div>
      <Divider spacing />
      <Outlet />
    </Container>
  );
}

export default GraphicsPage;
