import React from 'react';

import AstlGeneralFinal from 'src/assets/images/graphics/illustrations/astl-general-final.jpg';
import AstlGirlFinal from 'src/assets/images/graphics/illustrations/astl-girl-final.jpg';
import AstlGunmanFinal from 'src/assets/images/graphics/illustrations/astl-gunman-final.jpg';
import AstlLollipopGirl from 'src/assets/images/graphics/illustrations/astl-lollipop-girl.jpg';
import AstlSoldierSketch from 'src/assets/images/graphics/illustrations/astl-soldier-sketch.jpg';
import BoomboxInk from 'src/assets/images/graphics/illustrations/boombox-ink.jpg';
import BoxerSketch from 'src/assets/images/graphics/illustrations/boxer-sketch.jpg';
import DevilAngel from 'src/assets/images/graphics/illustrations/devil-angel.jpg';
import EarlPencil from 'src/assets/images/graphics/illustrations/earl-pencil.jpg';
import EarlV1Color from 'src/assets/images/graphics/illustrations/earl-v1-color.jpg';
import EarlV1Sketch from 'src/assets/images/graphics/illustrations/earl-v1-sketch.jpg';
import EarlV2Color from 'src/assets/images/graphics/illustrations/earl-v2-color.jpg';
import EarlV2Sketch from 'src/assets/images/graphics/illustrations/earl-v2-sketch.jpg';
import FairyInk from 'src/assets/images/graphics/illustrations/fairy-ink.jpg';
import FlosMascot from 'src/assets/images/graphics/illustrations/flos-mascot.jpg';
import FlowerInk from 'src/assets/images/graphics/illustrations/flower-ink.jpg';
import FlowerSketch from 'src/assets/images/graphics/illustrations/flower-sketch.jpg';
import GriffinColor from 'src/assets/images/graphics/illustrations/griffin-color.jpg';
import GriffinInk from 'src/assets/images/graphics/illustrations/griffin-ink.jpg';
import LionInk from 'src/assets/images/graphics/illustrations/lion-ink.jpg';
import RandomBooks from 'src/assets/images/graphics/illustrations/random-books.jpg';
import RobotInk from 'src/assets/images/graphics/illustrations/robot-ink.jpg';
import ScreechingGriffinColor from 'src/assets/images/graphics/illustrations/screeching-griffin-color.jpg';
import ScreechingGriffinInk from 'src/assets/images/graphics/illustrations/screeching-griffin-ink.jpg';
import SkullGirl from 'src/assets/images/graphics/illustrations/skull-girl.jpg';
import Sparrow from 'src/assets/images/graphics/illustrations/sparrow.jpg';
import TapebotSketch from 'src/assets/images/graphics/illustrations/tapebot-sketch.jpg';
import Tapebot from 'src/assets/images/graphics/illustrations/tapebot.jpg';
import ThumbprintSkull from 'src/assets/images/graphics/illustrations/thumbprint-skull.jpg';
import TrexInk from 'src/assets/images/graphics/illustrations/trex-ink.jpg';
import TrexSketch from 'src/assets/images/graphics/illustrations/trex-sketch.jpg';
import TvRobotInk from 'src/assets/images/graphics/illustrations/tv-robot-ink.jpg';
import TvRobotSketch from 'src/assets/images/graphics/illustrations/tv-robot-sketch.jpg';
import VampireKissInk from 'src/assets/images/graphics/illustrations/vampire-kiss-ink.jpg';
import WhyRobotsLoveFish from 'src/assets/images/graphics/illustrations/why-robots-love-fish.jpg';
import WrappedHand from 'src/assets/images/graphics/illustrations/wrapped-hand.jpg';
import ZombiesInk from 'src/assets/images/graphics/illustrations/zombies-ink.jpg';
import VampireKissColor from 'src/assets/images/graphics/illustrations/vampire-kiss-color.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: EarlV1Sketch, title: 'Earl, first sketch', meta: 'Zorn’s · fishbat, 2014' },
  { img: EarlV1Color, title: 'Earl, first color pass', meta: 'Zorn’s · fishbat, 2014' },
  { img: EarlV2Sketch, title: 'Earl, second sketch', meta: 'Zorn’s · fishbat, 2014' },
  { img: EarlV2Color, title: 'Earl, second color pass', meta: 'Zorn’s · fishbat, 2014' },
  { img: EarlPencil, title: 'Earl, pencil on paper', meta: 'Zorn’s · fishbat, 2014' },
  { img: TrexSketch, title: 'T. rex, pencil sketch', meta: 'Stop the Revolution · 2005' },
  { img: TrexInk, title: 'T. rex, final ink', meta: 'Stop the Revolution · 2005' },
  { img: TvRobotSketch, title: 'TV robot, pencil sketch', meta: 'Skin & Thread · 2005' },
  { img: TvRobotInk, title: 'TV robot, final ink', meta: 'Skin & Thread · 2005' },
  { img: DevilAngel, title: 'Devil angel', meta: 'Skin & Thread · 2005' },
  { img: FairyInk, title: 'Fairy, line art', meta: 'Hotness · 2005' },
  { img: ZombiesInk, title: 'Zombie and reaper', meta: 'The Weakend · 2005' },
  {
    img: AstlSoldierSketch,
    title: 'Soldier and tank, pencil sketch',
    meta: 'A Second Too Late · 2005',
  },
  { img: AstlGeneralFinal, title: 'The general, final', meta: 'A Second Too Late · 2005' },
  { img: AstlGunmanFinal, title: 'Point blank, final', meta: 'A Second Too Late · 2005' },
  { img: AstlGirlFinal, title: 'Mourning girl, final ink', meta: 'A Second Too Late · 2005' },
  { img: AstlLollipopGirl, title: 'Lollipop girl', meta: 'A Second Too Late · 2005' },
  { img: GriffinInk, title: 'Griffin, line art', meta: 'Royden · 2006' },
  { img: GriffinColor, title: 'Griffin, final color', meta: 'Royden · 2006' },
  { img: ScreechingGriffinInk, title: 'Screeching griffin, line art', meta: 'Royden · 2006' },
  { img: ScreechingGriffinColor, title: 'Screeching griffin, final color', meta: 'Royden · 2006' },
  { img: WrappedHand, title: 'Wrapped hand', meta: 'Alucard · 2006' },
  { img: Sparrow, title: 'Sparrow', meta: 'The Weakend · 2003' },
  { img: FlowerSketch, title: 'Flower, pencil sketch', meta: 'The Weakend · 2005' },
  { img: FlowerInk, title: 'Flower, final ink', meta: 'The Weakend · 2005' },
  { img: VampireKissInk, title: 'Vampire kiss, ink', meta: 'The Weakend · 2005' },
  {
    img: VampireKissColor,
    title: 'I’ve been walking with vampires, final color',
    meta: 'The Weakend · 2005',
  },
  { img: ThumbprintSkull, title: 'Thumbprint skull', meta: 'The Weakend · 2005' },
  { img: SkullGirl, title: 'Skull girl', meta: 'The Weakend · 2005' },
  { img: LionInk, title: 'Lion, line art', meta: 'What Happened in Vegas · 2006' },
  { img: RobotInk, title: 'Robot, line art', meta: 'What Happened in Vegas · 2006' },
  { img: BoomboxInk, title: 'Boombox, ink', meta: 'Team Goldie · 2006' },
  { img: BoxerSketch, title: 'Boxer, pencil sketch', meta: 'Personal · 2005' },
  { img: FlosMascot, title: 'Flo', meta: 'Flo’s · fishbat, 2018' },
  { img: TapebotSketch, title: 'Tapebot, pencil sketch', meta: 'Andrew Michael · 2005' },
  { img: Tapebot, title: 'Tapebot', meta: 'Andrew Michael · 2005' },
  { img: RandomBooks, title: 'Stack of books', meta: 'Personal · 2005' },
  { img: WhyRobotsLoveFish, title: 'Why Robots Love Fish, cover', meta: 'Personal · 2003' },
];

function IllustrationsPage() {
  return (
    <GalleryPage
      title={'Illustrations'}
      intro={
        'Mascots, characters, and drawings I made, many for the tees and albums elsewhere on this site. Where the original pencil sketch survived, it sits right next to the final ink, so you can see how each one came together.'
      }
      items={ITEMS}
    />
  );
}

export default IllustrationsPage;
