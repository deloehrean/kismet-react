import React from 'react';

import cn from 'clsx';

import WeakendTDTapeFace from 'src/assets/images/albums/weakend/weakend-tornado-days-tape-face.png';
import WeakendTDTapeInsertOut from 'src/assets/images/albums/weakend/weakend-tornado-days-tape-insert-in.jpg';
import WeakendTDTapeInsertIn from 'src/assets/images/albums/weakend/weakend-tornado-days-tape-insert-out.jpg';

import s from './AlbumsPage.module.scss';

function WeakendTDTape() {
  return (
    <React.Fragment>
      <div className={cn(s['graphic-item'], s['tape-face'])}>
        <picture>
          <img src={WeakendTDTapeFace} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s['album-cover'])}>
        <picture>
          <img src={WeakendTDTapeInsertOut} alt="" />
        </picture>
      </div>
      <div className={cn(s['graphic-item'], s.lonelyboi)}>
        <picture>
          <img src={WeakendTDTapeInsertIn} alt="" />
        </picture>
      </div>
    </React.Fragment>
  );
}

export default WeakendTDTape;
