import React from 'react';

import cn from 'clsx';

import ElephantomCdBookletIn from 'src/assets/images/albums/elephantom/elephantom-cd-booklet-inside.jpg';
import ElephantomCdBookletOut from 'src/assets/images/albums/elephantom/elephantom-cd-booklet-outside.jpg';
import ElephantomCdCoverBack from 'src/assets/images/albums/elephantom/elephantom-cd-cover-back.jpg';
import ElephantomCdCoverFront from 'src/assets/images/albums/elephantom/elephantom-cd-cover-front.jpg';
import ElephantomCdFace from 'src/assets/images/albums/elephantom/elephantom-cd-face.png';

import s from './AlbumsPage.module.scss';

function ElephantomAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={ElephantomCdCoverFront} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={ElephantomCdFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-only'])}>
        <picture>
          <img src={ElephantomCdCoverBack} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.shortboi1)}>
        <picture>
          <img src={ElephantomCdBookletOut} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.shortboi2)}>
        <picture>
          <img src={ElephantomCdBookletIn} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default ElephantomAlbum;
