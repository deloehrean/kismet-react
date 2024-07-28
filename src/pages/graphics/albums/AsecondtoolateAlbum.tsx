import React from 'react';

import cn from 'clsx';

import As2lBookletIn from 'src/assets/images/albums/asecondtoolate/asecondtoolate-cd-booklet-in.jpg';
import As2lBookletOut from 'src/assets/images/albums/asecondtoolate/asecondtoolate-cd-booklet-out.jpg';
import As2lCoverBack from 'src/assets/images/albums/asecondtoolate/asecondtoolate-cd-cover-back.jpg';
import As2lCoverFront from 'src/assets/images/albums/asecondtoolate/asecondtoolate-cd-cover-front.jpg';
import As2lCdFace from 'src/assets/images/albums/asecondtoolate/asecondtoolate-cd-face.png';

import s from './AlbumsPage.module.scss';

function AsecondtoolateAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={As2lCoverFront} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={As2lCdFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['tray-only'])}>
        <picture>
          <img src={As2lCoverBack} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.shortboi1)}>
        <picture>
          <img src={As2lBookletOut} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.shortboi2)}>
        <picture>
          <img src={As2lBookletIn} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default AsecondtoolateAlbum;
