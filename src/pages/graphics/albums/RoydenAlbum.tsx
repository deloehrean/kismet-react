import React from 'react';

import cn from 'clsx';

import RoydenCdBookletIn from 'src/assets/images/albums/royden/royden-cd-booklet-in.jpg';
import RoydenCdBookletOut from 'src/assets/images/albums/royden/royden-cd-booklet-out.jpg';
import RoydenCdCoverBack from 'src/assets/images/albums/royden/royden-cd-cover-back.jpg';
import RoydenCdCoverFront from 'src/assets/images/albums/royden/royden-cd-cover-front.jpg';
import RoydenCdFace from 'src/assets/images/albums/royden/royden-cd-face-540.png';
import RoydenCdTrayIn from 'src/assets/images/albums/royden/royden-cd-tray-inside.jpg';

import s from './AlbumsPage.module.scss';

function RoydenAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={RoydenCdCoverFront} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={RoydenCdFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-in'])}>
        <picture>
          <img src={RoydenCdTrayIn} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-out'])}>
        <picture>
          <img src={RoydenCdCoverBack} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.medboi1)}>
        <picture>
          <img src={RoydenCdBookletOut} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.medboi2)}>
        <picture>
          <img src={RoydenCdBookletIn} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default RoydenAlbum;
