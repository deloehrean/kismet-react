import React from 'react';

import cn from 'clsx';
import { Outlet } from 'react-router-dom';

import { Row, Typography } from 'src/components';
import s from 'src/pages/graphics/albums/AlbumsPage.module.scss';
import AlucardAlbum from 'src/pages/graphics/albums/AlucardAlbum';
import AndrewLoehrAlbum from 'src/pages/graphics/albums/AndrewLoehrAlbum';
import AsecondtoolateAlbum from 'src/pages/graphics/albums/AsecondtoolateAlbum';
import EightSecondsUpsideDownAlbum from 'src/pages/graphics/albums/EightSecondsUpsideDownAlbum';
import ElephantomAlbum from 'src/pages/graphics/albums/ElephantomAlbum';
import ElleAndTheFontsAlbum from 'src/pages/graphics/albums/ElleAndTheFontsAlbum';
import RoydenAlbum from 'src/pages/graphics/albums/RoydenAlbum';
import WeakendHEREAVVTape from 'src/pages/graphics/albums/WeakendHEREAVVTape';
import WeakendTDTape from 'src/pages/graphics/albums/WeakendTDTape';
import WoodwardAlbum from 'src/pages/graphics/albums/WoodwardAlbum';

function AlbumsPage() {
  return (
    <section id="albums-content" className={s['albums-content']}>
      <Row>
        <h3 className={s['section-heading']}>Album Artwork</h3>
      </Row>
      <Row className={s['content-frame-container']}>
        <div className={s['album-group']}>
          <div className={s['active-reset']}>
            <AlucardAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={cn(s['album-group'], s.vinyl)}>
          <div className={s['active-reset']}>
            <AndrewLoehrAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={s['album-group']}>
          <div className={s['active-reset']}>
            <RoydenAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={s['album-group']}>
          <div className={s['active-reset']}>
            <ElephantomAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={s['album-group']}>
          <div className={s['active-reset']}>
            <EightSecondsUpsideDownAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={s['album-group']}>
          <div className={s['active-reset']}>
            <AsecondtoolateAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={s['album-group']}>
          <div className={s['active-reset']}>
            <WoodwardAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={cn(s['album-group'], s['no-jacket'])}>
          <div className={s['active-reset']}>
            <ElleAndTheFontsAlbum />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={cn(s['album-group'], s.cassette)}>
          <div className={s['active-reset']}>
            <WeakendHEREAVVTape />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
        <div className={cn(s['album-group'], s.cassette)}>
          <div className={s['active-reset']}>
            <WeakendTDTape />
          </div>
          <span className={s['expand-close']}>+</span>
        </div>
      </Row>
      <div className={s['album-hires-wrap']}>
        <span className={s['expand-close']}>+</span>
      </div>
    </section>
  );
}

export default AlbumsPage;
