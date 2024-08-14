import React, { useState } from 'react';

import cn from 'clsx';

import { Container, Row, Typography } from 'src/components';
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
  // const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [exit, setExit] = useState(false);

  const albums = [
    { content: <AlucardAlbum /> },
    {
      content: <AndrewLoehrAlbum />,
      extra: 'vinyl',
    },
    { content: <RoydenAlbum /> },
    { content: <ElephantomAlbum /> },
    { content: <EightSecondsUpsideDownAlbum /> },
    { content: <AsecondtoolateAlbum /> },
    { content: <WoodwardAlbum /> },
    { content: <ElleAndTheFontsAlbum /> },
    {
      content: <WeakendHEREAVVTape />,
      extra: 'cassette',
    },
    {
      content: <WeakendTDTape />,
      extra: 'cassette',
    },
  ];

  const activeAction = (index, activeIndex) => {
    setExit(false);
    if (activeIndex === index) {
      setActiveIndex(null);
      setExit(true);
      setTimeout(() => {
        setExit(false);
      }, 1000);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = albums.map((album, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={index}>
        <Container
          className={cn(
            s['album-group'],
            active && s.active,
            exit && s.getouttahere,
            album.extra && s[`${album.extra}`],
          )}
          onClick={() => activeAction(index, activeIndex)}
        >
          <div className={s['active-reset']}>
            {album.content}
            <span
              className={s['expand-close']}
              onClick={() => {
                if (activeIndex !== null) {
                  activeAction(null, null);
                }
              }}
            >
              +
            </span>
          </div>
        </Container>
      </React.Fragment>
    );
  });
  return (
    <section id="albums-content" className={s['albums-content']}>
      <Container>
        <Typography variant={'h4'} gutter>
          Album Artwork
        </Typography>
      </Container>

      <Row className={s['content-frame-container']}>{renderedItems}</Row>

      <div
        className={cn(s['album-hires-wrap'], activeIndex !== null && s.active)}
        onClick={() => {
          activeAction(null, null);
        }}
      />
    </section>
  );
}

export default AlbumsPage;
