import React from 'react';

import cn from 'clsx';
import { Outlet } from 'react-router-dom';

import { Container, Divider, LinkStyled, Typography } from 'src/components';

import s from './GraphicsPage.module.scss';

function GraphicsPage() {
  return (
    <Container className={s['graphics-panel']}>
      <div className={cn(s['subnav-container'], s.container)}>
        <Typography variant={'h2'} className={s['page-title']}>
          Graphic Design
        </Typography>
        <ul className={s.subnav}>
          <li>
            <LinkStyled to={'/graphics/albums'} className={s['subnav-btn']}>
              Album Artwork
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics/tees'} className={s['subnav-btn']} id="tees">
              Tee Shirt Designs
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} className={s['subnav-btn']} id="tees">
              Print
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} className={s['subnav-btn']} id="tees">
              Newsletters
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} className={s['subnav-btn']} id="tees">
              Logos
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to={'/graphics'} className={s['subnav-btn']} id="tees">
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
