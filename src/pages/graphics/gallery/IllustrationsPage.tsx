import React from 'react';

import AstlGeneralFinal from 'src/assets/images/graphics/illustrations/astl-general-final.jpg';
import AstlGeneralSketch from 'src/assets/images/graphics/illustrations/astl-general-sketch.jpg';
import AstlGirlFinal from 'src/assets/images/graphics/illustrations/astl-girl-final.jpg';
import AstlGirlSketch from 'src/assets/images/graphics/illustrations/astl-girl-sketch.jpg';
import AstlGunmanFinal from 'src/assets/images/graphics/illustrations/astl-gunman-final.jpg';
import AstlGunmanSketch from 'src/assets/images/graphics/illustrations/astl-gunman-sketch.jpg';
import AstlHand from 'src/assets/images/graphics/illustrations/astl-hand.jpg';
import AstlLollipopGirl from 'src/assets/images/graphics/illustrations/astl-lollipop-girl.jpg';
import AstlSoldierSketch from 'src/assets/images/graphics/illustrations/astl-soldier-sketch.jpg';
import DevilAngel from 'src/assets/images/graphics/illustrations/devil-angel.jpg';
import EarlPencil from 'src/assets/images/graphics/illustrations/earl-pencil.jpg';
import EarlV1Color from 'src/assets/images/graphics/illustrations/earl-v1-color.jpg';
import EarlV1Sketch from 'src/assets/images/graphics/illustrations/earl-v1-sketch.jpg';
import EarlV2Color from 'src/assets/images/graphics/illustrations/earl-v2-color.jpg';
import EarlV2Sketch from 'src/assets/images/graphics/illustrations/earl-v2-sketch.jpg';
import FlosMascot from 'src/assets/images/graphics/illustrations/flos-mascot.jpg';
import RandomBooks from 'src/assets/images/graphics/illustrations/random-books.jpg';
import Tapebot from 'src/assets/images/graphics/illustrations/tapebot.jpg';
import WhyRobotsLoveFish from 'src/assets/images/graphics/illustrations/why-robots-love-fish.jpg';
import TrexSketch from 'src/assets/images/graphics/illustrations/trex-sketch.jpg';
import TrexInk from 'src/assets/images/graphics/illustrations/trex-ink.jpg';
import TvRobotSketch from 'src/assets/images/graphics/illustrations/tv-robot-sketch.jpg';
import TvRobotInk from 'src/assets/images/graphics/illustrations/tv-robot-ink.jpg';
import WingedSkull from 'src/assets/images/graphics/illustrations/winged-skull.jpg';
import FairyInk from 'src/assets/images/graphics/illustrations/fairy-ink.jpg';
import ZombiesInk from 'src/assets/images/graphics/illustrations/zombies-ink.jpg';
import LionInk from 'src/assets/images/graphics/illustrations/lion-ink.jpg';
import RobotInk from 'src/assets/images/graphics/illustrations/robot-ink.jpg';
import BoomboxInk from 'src/assets/images/graphics/illustrations/boombox-ink.jpg';
import TapebotSketch from 'src/assets/images/graphics/illustrations/tapebot-sketch.jpg';
import BoxerSketch from 'src/assets/images/graphics/illustrations/boxer-sketch.jpg';
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
  { img: WingedSkull, title: 'Winged skull', meta: 'Skin & Thread · 2005' },
  { img: DevilAngel, title: 'Devil angel', meta: 'Skin & Thread · 2005' },
  { img: FairyInk, title: 'Fairy, line art', meta: 'Hotness · 2005' },
  { img: ZombiesInk, title: 'Zombie and reaper', meta: 'The Weakend · 2005' },
  {
    img: AstlSoldierSketch,
    title: 'Soldier and tank, pencil sketch',
    meta: 'A Second Too Late · 2005',
  },
  { img: AstlGeneralSketch, title: 'The general, pencil sketch', meta: 'A Second Too Late · 2005' },
  { img: AstlGeneralFinal, title: 'The general, final', meta: 'A Second Too Late · 2005' },
  { img: AstlGunmanSketch, title: 'Point blank, pencil sketch', meta: 'A Second Too Late · 2005' },
  { img: AstlGunmanFinal, title: 'Point blank, final', meta: 'A Second Too Late · 2005' },
  { img: AstlGirlSketch, title: 'Mourning girl, pencil sketch', meta: 'A Second Too Late · 2005' },
  { img: AstlGirlFinal, title: 'Mourning girl, final ink', meta: 'A Second Too Late · 2005' },
  { img: AstlLollipopGirl, title: 'Lollipop girl', meta: 'A Second Too Late · 2005' },
  { img: AstlHand, title: 'Reaching hand', meta: 'A Second Too Late · 2005' },
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
