import React from 'react';

import cn from 'clsx';

import WoodwardCdBookletIn from 'src/assets/images/albums/woodward/woodward-cd-booklet-in.jpg';
import WoodwardCdBookletOut from 'src/assets/images/albums/woodward/woodward-cd-booklet-out.jpg';
import WoodwardCdCoverBack from 'src/assets/images/albums/woodward/woodward-cd-cover-back.jpg';
import WoodwardCdCoverFront from 'src/assets/images/albums/woodward/woodward-cd-cover-front.jpg';
import WoodwardCdFace from 'src/assets/images/albums/woodward/woodward-cd-face-520.png';
import WoodwardCdTrayIn from 'src/assets/images/albums/woodward/woodward-cd-tray-in.jpg';

import s from './AlbumsPage.module.scss';

function WoodwardAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={WoodwardCdCoverFront} alt="" className="img-responsive" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={WoodwardCdFace} alt="" className="img-responsive" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-only'])}>
        <picture>
          <img src={WoodwardCdCoverBack} alt="" className="img-responsive" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.longboi1)}>
        <picture>
          <img src={WoodwardCdBookletOut} alt="" className="img-responsive" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.longboi2)}>
        <picture>
          <img src={WoodwardCdBookletIn} alt="" className="img-responsive" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default WoodwardAlbum;
