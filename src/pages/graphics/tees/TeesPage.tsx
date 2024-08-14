import React from 'react';

import cn from 'clsx';

import { Container, Row, Typography } from 'src/components';
import s from 'src/pages/graphics/tees/TeesPage.module.scss';

const teeDesigns = [
  { tee: '../src/assets/images/tees/a-sundial-map-tee.png' },
  { tee: '../src/assets/images/tees/alucard-black-tee.png' },
  { tee: '../src/assets/images/tees/alucard-red-tee.png' },
  { tee: '../src/assets/images/tees/cinematic-sunrise-rollercoaster-tee.png' },
  { tee: '../src/assets/images/tees/cinematic-sunrise-sun-tee.png' },
  { tee: '../src/assets/images/tees/cinematic-sunrise-tigers-tee.png' },
  { tee: '../src/assets/images/tees/eight-seconds-upside-down-car-gauges-tee.png' },
  { tee: '../src/assets/images/tees/fine-line-dog-thrift-tee.png' },
  { tee: '../src/assets/images/tees/fine-line-gun-girl-tee.png' },
  { tee: '../src/assets/images/tees/fine-line-swirl-tee.png' },
  { tee: '../src/assets/images/tees/hotness-fairy-tee.png' },
  { tee: '../src/assets/images/tees/night-away-words-tee.png' },
  { tee: '../src/assets/images/tees/poppy-pints-tee.png' },
  { tee: '../src/assets/images/tees/rosesdead-bloody-hands-tee.png' },
  { tee: '../src/assets/images/tees/rosesdead-building-tee.png' },
  { tee: '../src/assets/images/tees/royden-buildings-tee.png' },
  { tee: '../src/assets/images/tees/royden-metal-tee.png' },
  { tee: '../src/assets/images/tees/royden-spike-tee.png' },
  { tee: '../src/assets/images/tees/showcase-suicide-tee.png' },
  { tee: '../src/assets/images/tees/skin-thread-skull-tee.png' },
  { tee: '../src/assets/images/tees/skin-thread-tv-tee.png' },
  { tee: '../src/assets/images/tees/skin-thread-unicycle-tee.png' },
  { tee: '../src/assets/images/tees/stop-the-revolution-trex-tee.png' },
  { tee: '../src/assets/images/tees/team-goldie-boombox-tee.png' },
  { tee: '../src/assets/images/tees/weakend-archer-tee.png' },
  { tee: '../src/assets/images/tees/weakend-bronto-tee.png' },
  { tee: '../src/assets/images/tees/weakend-bttf-tee.png' },
  { tee: '../src/assets/images/tees/weakend-burning-house-tee.png' },
  { tee: '../src/assets/images/tees/weakend-butterflies-tee.png' },
  { tee: '../src/assets/images/tees/weakend-circle-girl-tee.png' },
  { tee: '../src/assets/images/tees/weakend-cowboy-tee.png' },
  { tee: '../src/assets/images/tees/weakend-griffins-mess-tee.png' },
  { tee: '../src/assets/images/tees/weakend-gun-dismantle-tee.png' },
  { tee: '../src/assets/images/tees/weakend-ribcage-tee.png' },
  { tee: '../src/assets/images/tees/weakend-swirled-splotches-tee.png' },
  { tee: '../src/assets/images/tees/weakend-voltron-tee.png' },
  { tee: '../src/assets/images/tees/weakend-zombies-tee.png' },
  { tee: '../src/assets/images/tees/whiv-lion-tee.png' },
  { tee: '../src/assets/images/tees/whiv-robot-tee.png' },
];

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const shuffledTees = shuffle(teeDesigns);

const renderedItems = shuffledTees.map((tee, index) => {
  const transforms = [
    'rotateNone',
    'rotateLeftLess',
    'rotateRightLess',
    'rotateLeft',
    'rotateRight',
    'rotateLeftMore',
    'rotateRightMore',
  ];

  const rand = Math.floor(Math.random() * transforms.length);

  return (
    <div className={cn(s['single-tee'], s[`${transforms[rand]}`])} key={index}>
      <img src={tee.tee} alt={index.toString()} />
    </div>
  );
});

function TeesPage() {
  return (
    <section id="tees-content" className={s['albums-content']}>
      <Container>
        <Typography variant={'h4'} gutter>
          Album Artwork
        </Typography>
      </Container>

      <Row className={s['content-frame-container']}>
        <div className={s['tee-wrap']}>{renderedItems}</div>
      </Row>
    </section>
  );
}

export default TeesPage;
