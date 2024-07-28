import React from 'react';

import cn from 'clsx';
import { Outlet } from 'react-router-dom';

import { Container, Divider, Typography } from 'src/components';

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
            <button type={'button'} className={s['subnav-btn']}>
              Album Artwork
            </button>
          </li>
          <li>
            <button type={'button'} className={s['subnav-btn']} id="tees">
              Tee Shirt Designs
            </button>
          </li>
          <li>
            <button type={'button'} className={s['subnav-btn']} id="print">
              Print
            </button>
          </li>
          <li>
            <button type={'button'} className={s['subnav-btn']} id="news">
              Newsletters
            </button>
          </li>
          <li>
            <button type={'button'} className={s['subnav-btn']} id="logos">
              Logos
            </button>
          </li>
          <li>
            <button type={'button'} className={s['subnav-btn']} id="adverts">
              Advertisements
            </button>
          </li>
        </ul>
      </div>
      <Divider spacing />
      <Outlet />
    </Container>
  );
}

export default GraphicsPage;
