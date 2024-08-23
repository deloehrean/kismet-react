import React, { useEffect, useState } from 'react';

import cn from 'clsx';

import { Container, Typography } from 'src/components';
import s from 'src/pages/graphics/tees/TeesPage.module.scss';

const teeDesigns = [
  '../src/assets/images/tees/a-sundial-map-tee.png',
  '../src/assets/images/tees/alucard-black-tee.png',
  '../src/assets/images/tees/alucard-red-tee.png',
  '../src/assets/images/tees/cinematic-sunrise-rollercoaster-tee.png',
  '../src/assets/images/tees/cinematic-sunrise-sun-tee.png',
  '../src/assets/images/tees/cinematic-sunrise-tigers-tee.png',
  '../src/assets/images/tees/eight-seconds-upside-down-car-gauges-tee.png',
  '../src/assets/images/tees/fine-line-dog-thrift-tee.png',
  '../src/assets/images/tees/fine-line-gun-girl-tee.png',
  '../src/assets/images/tees/fine-line-swirl-tee.png',
  '../src/assets/images/tees/hotness-fairy-tee.png',
  '../src/assets/images/tees/night-away-words-tee.png',
  '../src/assets/images/tees/poppy-pints-tee.png',
  '../src/assets/images/tees/rosesdead-bloody-hands-tee.png',
  '../src/assets/images/tees/rosesdead-building-tee.png',
  '../src/assets/images/tees/royden-buildings-tee.png',
  '../src/assets/images/tees/royden-metal-tee.png',
  '../src/assets/images/tees/royden-spike-tee.png',
  '../src/assets/images/tees/showcase-suicide-tee.png',
  '../src/assets/images/tees/skin-thread-skull-tee.png',
  '../src/assets/images/tees/skin-thread-tv-tee.png',
  '../src/assets/images/tees/skin-thread-unicycle-tee.png',
  '../src/assets/images/tees/stop-the-revolution-trex-tee.png',
  '../src/assets/images/tees/team-goldie-boombox-tee.png',
  '../src/assets/images/tees/weakend-archer-tee.png',
  '../src/assets/images/tees/weakend-bronto-tee.png',
  '../src/assets/images/tees/weakend-bttf-tee.png',
  '../src/assets/images/tees/weakend-burning-house-tee.png',
  '../src/assets/images/tees/weakend-butterflies-tee.png',
  '../src/assets/images/tees/weakend-circle-girl-tee.png',
  '../src/assets/images/tees/weakend-cowboy-tee.png',
  '../src/assets/images/tees/weakend-griffins-mess-tee.png',
  '../src/assets/images/tees/weakend-gun-dismantle-tee.png',
  '../src/assets/images/tees/weakend-ribcage-tee.png',
  '../src/assets/images/tees/weakend-swirled-splotches-tee.png',
  '../src/assets/images/tees/weakend-voltron-tee.png',
  '../src/assets/images/tees/weakend-zombies-tee.png',
  '../src/assets/images/tees/whiv-lion-tee.png',
  '../src/assets/images/tees/whiv-robot-tee.png',
];

const transforms = [
  'rotateNone',
  'rotateLeftLess',
  'rotateRightLess',
  'rotateLeft',
  'rotateRight',
  'rotateLeftMore',
  'rotateRightMore',
];

function TeesPage() {
  const [shuffledTees, setShuffledTees] = React.useState([]);
  // const [shuffledTransforms, setShuffledTransforms] = React.useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const shuffledTees: any = shuffle([...teeDesigns]);
    // const shuffledTransforms: any = shuffle([...transforms]);
    setShuffledTees(shuffledTees);
    // setShuffledTransforms(shuffledTransforms);
  }, []);

  // Fisher-Yates shuffle algorithm
  function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  }

  const [hiResTee, setHiResTee] = useState(undefined);

  const activeAction = (index, activeIndex) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      // @ts-ignore
      const currentTeeReplace = shuffledTees[index].replace('-tee.png', '.jpg');

      setActiveIndex(index);
      setHiResTee(currentTeeReplace);
      console.log(index, activeIndex, hiResTee);
    }
  };

  const renderedItems = shuffledTees.map((tee, index) => {
    const active = index === activeIndex ? 'active' : '';

    const rand = Math.floor(Math.random() * transforms.length);

    return (
      <div
        className={cn(s['single-tee'], s[`${transforms[rand]}`], active && s.active)}
        key={index}
        onClick={() => activeAction(index, activeIndex)}
      >
        <img src={tee} alt={index.toString()} />
      </div>
    );
  });

  return (
    <section id="tees-content" className={s['albums-content']}>
      <Container>
        <Typography variant={'h4'} gutter>
          Tee Shirt Designs
        </Typography>
      </Container>

      <Container className={s['content-frame-container']}>
        <div className={s['tee-wrap']}>{renderedItems}</div>
      </Container>

      <div
        className={cn(s['single-tee-hires-wrap'], activeIndex !== null && s.active)}
        onClick={() => {
          activeAction(null, null);
        }}
      >
        <div className={s['expand-close']}>+</div>
        <div className={s['hires-img']}>
          <img src={hiResTee} alt={hiResTee} />
        </div>
      </div>
    </section>
  );
}

export default TeesPage;
