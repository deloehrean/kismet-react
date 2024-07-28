import React from 'react';

import cn from 'clsx';

import AndrewLoehrPactBooklet from 'src/assets/images/albums/andrew-loehr/andrew-loehr-pact-cd-booklet-out.jpg';
import AndrewLoehrPactCover from 'src/assets/images/albums/andrew-loehr/andrew-loehr-pact-cd-cover.jpg';
import AndrewLoehrPactFace from 'src/assets/images/albums/andrew-loehr/andrew-loehr-pact-cd-face.png';

import s from './AlbumsPage.module.scss';

function AndrewLoehrAlbum() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={AndrewLoehrPactCover} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-face'])}>
        <picture>
          <img src={AndrewLoehrPactFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.lonelyboi)}>
        <picture>
          <img src={AndrewLoehrPactBooklet} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default AndrewLoehrAlbum;
