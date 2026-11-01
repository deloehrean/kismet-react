import React from 'react';

import EarlPencil from 'src/assets/images/graphics/illustrations/earl-pencil.jpg';
import EarlV1Color from 'src/assets/images/graphics/illustrations/earl-v1-color.jpg';
import EarlV1Sketch from 'src/assets/images/graphics/illustrations/earl-v1-sketch.jpg';
import EarlV2Color from 'src/assets/images/graphics/illustrations/earl-v2-color.jpg';
import EarlV2Sketch from 'src/assets/images/graphics/illustrations/earl-v2-sketch.jpg';
import FlosMascot from 'src/assets/images/graphics/illustrations/flos-mascot.jpg';
import RandomBooks from 'src/assets/images/graphics/illustrations/random-books.jpg';
import Tapebot from 'src/assets/images/graphics/illustrations/tapebot.jpg';
import WhyRobotsLoveFish from 'src/assets/images/graphics/illustrations/why-robots-love-fish.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: EarlV1Sketch, title: 'Earl, first sketch', meta: 'Zorn’s · Fishbat, 2014' },
  { img: EarlV1Color, title: 'Earl, first color pass', meta: 'Zorn’s · Fishbat, 2014' },
  { img: EarlV2Sketch, title: 'Earl, second sketch', meta: 'Zorn’s · Fishbat, 2014' },
  { img: EarlV2Color, title: 'Earl, second color pass', meta: 'Zorn’s · Fishbat, 2014' },
  { img: EarlPencil, title: 'Earl, pencil on paper', meta: 'Zorn’s · Fishbat, 2014' },
  { img: FlosMascot, title: 'Flo', meta: 'Flo’s · Fishbat, 2018' },
  { img: Tapebot, title: 'Tapebot', meta: 'Andrew Michael · 2005' },
  { img: RandomBooks, title: 'Stack of books', meta: 'Personal · 2005' },
  { img: WhyRobotsLoveFish, title: 'Why Robots Love Fish, cover', meta: 'Personal · 2003' },
];

function IllustrationsPage() {
  return (
    <GalleryPage
      title={'Illustrations'}
      intro={'Mascots, characters, and drawings, from pencil sketches to finished color.'}
      items={ITEMS}
    />
  );
}

export default IllustrationsPage;
