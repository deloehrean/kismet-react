import React from 'react';

import cn from 'clsx';

import AlucardCdBookletIn from 'src/assets/images/albums/alucard/alucard-cd-booklet-in.jpg';
import AlucardCdBookletOut from 'src/assets/images/albums/alucard/alucard-cd-booklet-out.jpg';
import AlucardCdCoverBack from 'src/assets/images/albums/alucard/alucard-cd-cover-back.jpg';
import AlucardCoverFront from 'src/assets/images/albums/alucard/alucard-cd-cover-front.jpg';
import AlucardCdFace from 'src/assets/images/albums/alucard/alucard-cd-face.png';
import AlucardCdTrayInside from 'src/assets/images/albums/alucard/alucard-cd-tray-inside.jpg';

import s from './AlbumsPage.module.scss';

function AlucardAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={AlucardCoverFront} alt={''} />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={AlucardCdFace} alt={''} />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-in'])}>
        <picture>
          <img src={AlucardCdTrayInside} alt={''} />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-out'])}>
        <picture>
          <img src={AlucardCdCoverBack} alt={''} />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.longboi1)}>
        <picture>
          <img src={AlucardCdBookletOut} alt={''} />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.longboi2)}>
        <picture>
          <img src={AlucardCdBookletIn} alt={''} />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default AlucardAlbum;
