import React from 'react';

import cn from 'clsx';

import ElleFontsCdCoverFront from 'src/assets/images/albums/elle/elle-and-the-fonts-cd-cover.jpg';
import ElleFontsCdFace from 'src/assets/images/albums/elle/elle-and-the-fonts-cd-face.png';

import s from './AlbumsPage.module.scss';

function ElleAndTheFontsAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={ElleFontsCdCoverFront} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={ElleFontsCdFace} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default ElleAndTheFontsAlbum;
