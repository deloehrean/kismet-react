import React from 'react';

import cn from 'clsx';

import EightMinutesCdCoverBack from 'src/assets/images/albums/eight-minutes/eight-minutes-upside-down-cd-cover-back.jpg';
import EightMinutesCdCoverFront from 'src/assets/images/albums/eight-minutes/eight-minutes-upside-down-cd-cover-front.jpg';
import EightMinutesCdFace from 'src/assets/images/albums/eight-minutes/eight-minutes-upside-down-cd-face.png';

import s from './AlbumsPage.module.scss';

function EightSecondsUpsideDownAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={EightMinutesCdCoverFront} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={EightMinutesCdFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-only'])}>
        <picture>
          <img src={EightMinutesCdCoverBack} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default EightSecondsUpsideDownAlbum;
