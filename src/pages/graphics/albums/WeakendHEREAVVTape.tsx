import React from 'react';

import cn from 'clsx';

import WeakendHEREAVVTapeFace from 'src/assets/images/albums/weakend/weakend-hereavv-tape-face.png';
import WeakendHEREAVVTapeInsertOut from 'src/assets/images/albums/weakend/weakend-hereavv-tape-insert-in.jpg';
import WeakendHEREAVVTapeInsertIn from 'src/assets/images/albums/weakend/weakend-hereavv-tape-insert-out.jpg';

import s from './AlbumsPage.module.scss';

function WeakendHEREAVVTape() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['tape-face'])}>
        <picture>
          <img src={WeakendHEREAVVTapeFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={WeakendHEREAVVTapeInsertOut} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.lonelyboi)}>
        <picture>
          <img src={WeakendHEREAVVTapeInsertIn} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default WeakendHEREAVVTape;
