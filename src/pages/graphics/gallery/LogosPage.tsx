import React from 'react';

import Acm from 'src/assets/images/graphics/logos/acm.jpg';
import AssisiPawPrint from 'src/assets/images/graphics/logos/assisi-paw-print.jpg';
import AssisiPegasus from 'src/assets/images/graphics/logos/assisi-pegasus.jpg';
import AssisiTreeOfLife from 'src/assets/images/graphics/logos/assisi-tree-of-life.jpg';
import Bwella from 'src/assets/images/graphics/logos/bwella.jpg';
import HyacinthCrest from 'src/assets/images/graphics/logos/hyacinth-crest.jpg';
import IkigaiBestVersion from 'src/assets/images/graphics/logos/ikigai-best-version.jpg';
import IkigaiColor from 'src/assets/images/graphics/logos/ikigai-color.jpg';
import IkigaiColorSeal from 'src/assets/images/graphics/logos/ikigai-color-seal.jpg';
import IkigaiOutline from 'src/assets/images/graphics/logos/ikigai-outline.jpg';
import Loop from 'src/assets/images/graphics/logos/loop.jpg';
import TeamYoungBmx from 'src/assets/images/graphics/logos/team-young-bmx.jpg';
import TheEmory from 'src/assets/images/graphics/logos/the-emory.jpg';
import TopSecretDistro from 'src/assets/images/graphics/logos/top-secret-distro.jpg';
import YouAreGreaterThan from 'src/assets/images/graphics/logos/you-are-greater-than.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: Acm, title: 'ACM icon', meta: 'ACM · Fishbat' },
  { img: Bwella, title: 'Bwella', meta: 'Bwella · Fishbat' },
  { img: Loop, title: 'Loop', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiPawPrint, title: 'Paw-print dog', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiPegasus, title: 'Pegasus', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiTreeOfLife, title: 'Tree of life', meta: 'Assisi Animal Health · Fishbat' },
  { img: YouAreGreaterThan, title: 'You are greater than', meta: 'Fishbat' },
  { img: IkigaiColor, title: 'Ikigai', meta: 'Ikigai · Kismet' },
  { img: IkigaiColorSeal, title: 'Ikigai seal', meta: 'Ikigai · Kismet' },
  { img: IkigaiBestVersion, title: 'The best version of you', meta: 'Ikigai · Kismet' },
  { img: IkigaiOutline, title: 'Ikigai, one color', meta: 'Ikigai · Kismet' },
  { img: TheEmory, title: 'The Emory', meta: 'The Emory · Kismet' },
  { img: TopSecretDistro, title: 'Top Secret Distro', meta: 'Top Secret Distro · 2005' },
  { img: HyacinthCrest, title: 'Hyacinth crest', meta: 'Hyacinth · 2005' },
  { img: TeamYoungBmx, title: 'Team Young BMX', meta: 'Team Young BMX · 2005' },
];

function LogosPage() {
  return (
    <GalleryPage
      title={'Logos'}
      intro={
        'Marks for agency clients at Fishbat, for my own clients at Kismet, and for the bands and labels I designed for in the 2000s.'
      }
      items={ITEMS}
      framed
    />
  );
}

export default LogosPage;
