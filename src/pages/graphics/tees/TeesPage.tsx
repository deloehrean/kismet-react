import React, { useEffect, useState } from 'react';

import cn from 'clsx';

import ASundialMap from 'src/assets/images/tees/a-sundial-map-tee.png';
import AlucardBlack from 'src/assets/images/tees/alucard-black-tee.png';
import AlucardRed from 'src/assets/images/tees/alucard-red-tee.png';
import CinematicSunriseRollercoaster from 'src/assets/images/tees/cinematic-sunrise-rollercoaster-tee.png';
import CinematicSunriseSun from 'src/assets/images/tees/cinematic-sunrise-sun-tee.png';
import CinematicSunriseTigers from 'src/assets/images/tees/cinematic-sunrise-tigers-tee.png';
import EightSecondsCar from 'src/assets/images/tees/eight-seconds-upside-down-car-gauges-tee.png';
import FineLineDog from 'src/assets/images/tees/fine-line-dog-thrift-tee.png';
import FineLineGirl from 'src/assets/images/tees/fine-line-gun-girl-tee.png';
import FineLineSwirl from 'src/assets/images/tees/fine-line-swirl-tee.png';
import HotnessFairy from 'src/assets/images/tees/hotness-fairy-tee.png';
import NightAwayWords from 'src/assets/images/tees/night-away-words-tee.png';
import PoppyPints from 'src/assets/images/tees/poppy-pints-tee.png';
import RosesdeadBloodyHands from 'src/assets/images/tees/rosesdead-bloody-hands-tee.png';
import RosesdeadBuilding from 'src/assets/images/tees/rosesdead-building-tee.png';
import RoydenBuildings from 'src/assets/images/tees/royden-buildings-tee.png';
import RoydenMetal from 'src/assets/images/tees/royden-metal-tee.png';
import RoydenSpike from 'src/assets/images/tees/royden-spike-tee.png';
import ShowcaseSuicide from 'src/assets/images/tees/showcase-suicide-tee.png';
import SkinThreadSkull from 'src/assets/images/tees/skin-thread-skull-tee.png';
import SkinThreadTv from 'src/assets/images/tees/skin-thread-tv-tee.png';
import SkinThreadUnicycle from 'src/assets/images/tees/skin-thread-unicycle-tee.png';
import StopRevolutionTrex from 'src/assets/images/tees/stop-the-revolution-trex-tee.png';
import TeamGoldieBoombox from 'src/assets/images/tees/team-goldie-boombox-tee.png';
import WeakendArcher from 'src/assets/images/tees/weakend-archer-tee.png';
import WeakendBronto from 'src/assets/images/tees/weakend-bronto-tee.png';
import WeakendBTTF from 'src/assets/images/tees/weakend-bttf-tee.png';
import WeakendBurningHouse from 'src/assets/images/tees/weakend-burning-house-tee.png';
import WeakendButterflies from 'src/assets/images/tees/weakend-butterflies-tee.png';
import WeakendCircleGirl from 'src/assets/images/tees/weakend-circle-girl-tee.png';
import WeakendCowboy from 'src/assets/images/tees/weakend-cowboy-tee.png';
import WeakendGriffins from 'src/assets/images/tees/weakend-griffins-mess-tee.png';
import WeakendGunDismantle from 'src/assets/images/tees/weakend-gun-dismantle-tee.png';
import WeakendRibcage from 'src/assets/images/tees/weakend-ribcage-tee.png';
import WeakendSwirled from 'src/assets/images/tees/weakend-swirled-splotches-tee.png';
import WeakendVoltron from 'src/assets/images/tees/weakend-voltron-tee.png';
import WeakendZombies from 'src/assets/images/tees/weakend-zombies-tee.png';
import WHIVLion from 'src/assets/images/tees/whiv-lion-tee.png';
import WHIVRobot from 'src/assets/images/tees/whiv-robot-tee.png';
import { Container, Typography } from 'src/components';
import s from 'src/pages/graphics/tees/TeesPage.module.scss';

const teeDesigns = [
  ASundialMap,
  AlucardRed,
  AlucardBlack,
  CinematicSunriseRollercoaster,
  CinematicSunriseSun,
  CinematicSunriseTigers,
  EightSecondsCar,
  FineLineDog,
  FineLineGirl,
  FineLineSwirl,
  HotnessFairy,
  NightAwayWords,
  PoppyPints,
  RosesdeadBloodyHands,
  RosesdeadBuilding,
  RoydenSpike,
  RoydenBuildings,
  RoydenMetal,
  ShowcaseSuicide,
  SkinThreadSkull,
  SkinThreadUnicycle,
  SkinThreadTv,
  StopRevolutionTrex,
  TeamGoldieBoombox,
  WeakendVoltron,
  WeakendButterflies,
  WeakendRibcage,
  WeakendCircleGirl,
  WeakendSwirled,
  WeakendArcher,
  WeakendBronto,
  WeakendBTTF,
  WeakendBurningHouse,
  WeakendCowboy,
  WeakendGriffins,
  WeakendGunDismantle,
  WeakendZombies,
  WHIVLion,
  WHIVRobot,
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
