import React from 'react';

import Logos2024 from 'src/assets/images/case-studies/hrlogics/logos-2024.jpg';
import LogoFullBlack from 'src/assets/images/case-studies/poppy/logo-full-black.png';
import MarkRed from 'src/assets/images/case-studies/poppy/mark-red.svg';
import MarkLockup from 'src/assets/images/case-studies/solstice/mark-lockup.png';
import Mark from 'src/assets/images/case-studies/solstice/mark.png';
import Acm from 'src/assets/images/graphics/logos/acm.jpg';
import AssisiPawPrint from 'src/assets/images/graphics/logos/assisi-paw-print.jpg';
import AssisiPegasus from 'src/assets/images/graphics/logos/assisi-pegasus.jpg';
import AssisiTreeOfLife from 'src/assets/images/graphics/logos/assisi-tree-of-life.jpg';
import Bwella from 'src/assets/images/graphics/logos/bwella.jpg';
import ClearI9 from 'src/assets/images/graphics/logos/clear-i9.jpg';
import ClearVerify from 'src/assets/images/graphics/logos/clear-verify.jpg';
import Hrlogics from 'src/assets/images/graphics/logos/hrlogics.jpg';
import HyacinthCrest from 'src/assets/images/graphics/logos/hyacinth-crest.jpg';
import IAmThePilotCrest from 'src/assets/images/graphics/logos/i-am-the-pilot-crest.jpg';
import IkigaiBestVersion from 'src/assets/images/graphics/logos/ikigai-best-version.jpg';
import IkigaiColorSeal from 'src/assets/images/graphics/logos/ikigai-color-seal.jpg';
import IkigaiColor from 'src/assets/images/graphics/logos/ikigai-color.jpg';
import IkigaiOutline from 'src/assets/images/graphics/logos/ikigai-outline.jpg';
import LoehrConceptDesignCrest from 'src/assets/images/graphics/logos/loehr-concept-design-crest.jpg';
import Loop from 'src/assets/images/graphics/logos/loop.jpg';
import PoppyParliamentStacked from 'src/assets/images/graphics/logos/poppy-parliament-stacked.jpg';
import RyzeWotc from 'src/assets/images/graphics/logos/ryze-wotc.jpg';
import Ryze from 'src/assets/images/graphics/logos/ryze.jpg';
import TeamYoungBmx from 'src/assets/images/graphics/logos/team-young-bmx.jpg';
import TheEmory from 'src/assets/images/graphics/logos/the-emory.jpg';
import TopSecretDistro from 'src/assets/images/graphics/logos/top-secret-distro.jpg';
import Ucm from 'src/assets/images/graphics/logos/ucm.jpg';
import WeakendBuddySystem from 'src/assets/images/graphics/logos/weakend-buddy-system.jpg';
import Woodward from 'src/assets/images/graphics/logos/woodward.jpg';
import YouAreGreaterThan from 'src/assets/images/graphics/logos/you-are-greater-than.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: Hrlogics, title: 'HRlogics', meta: 'HRlogics' },
  { img: RyzeWotc, title: 'ryze WOTC', meta: 'HRlogics' },
  { img: Ryze, title: 'Ryze', meta: 'HRlogics' },
  { img: ClearI9, title: 'Clear I-9', meta: 'HRlogics' },
  { img: ClearVerify, title: 'Clear Verify', meta: 'HRlogics' },
  { img: Ucm, title: 'UCM', meta: 'HRlogics' },
  { img: Logos2024, title: 'The original product logo system', meta: 'HRlogics · 2024' },
  { img: LogoFullBlack, title: 'The Poppy & Parliament', meta: 'The Poppy & Parliament · Kismet' },
  {
    img: PoppyParliamentStacked,
    title: 'The Poppy & Parliament, stacked',
    meta: 'The Poppy & Parliament · Kismet',
  },
  { img: MarkRed, title: 'The Poppy mark', meta: 'The Poppy & Parliament · Kismet' },
  { img: MarkLockup, title: 'Solstice Massage Therapy', meta: 'Solstice Massage Therapy · Kismet' },
  { img: Mark, title: 'The Solstice sun', meta: 'Solstice Massage Therapy · Kismet' },
  { img: IkigaiColor, title: 'Ikigai', meta: 'Ikigai · Kismet' },
  { img: IkigaiColorSeal, title: 'Ikigai seal', meta: 'Ikigai · Kismet' },
  { img: IkigaiBestVersion, title: 'The best version of you', meta: 'Ikigai · Kismet' },
  { img: IkigaiOutline, title: 'Ikigai, one color', meta: 'Ikigai · Kismet' },
  { img: TheEmory, title: 'The Emory', meta: 'The Emory · Kismet' },
  { img: Acm, title: 'ACM icon', meta: 'ACM · Fishbat' },
  { img: Bwella, title: 'Bwella', meta: 'Bwella · Fishbat' },
  { img: Loop, title: 'Loop', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiPawPrint, title: 'Paw-print dog', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiPegasus, title: 'Pegasus', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiTreeOfLife, title: 'Tree of life', meta: 'Assisi Animal Health · Fishbat' },
  { img: YouAreGreaterThan, title: 'You are greater than', meta: 'Fishbat' },
  {
    img: LoehrConceptDesignCrest,
    title: 'Loehr Concept & Design crest',
    meta: 'Kismet’s first name, 2005',
  },
  { img: WeakendBuddySystem, title: 'Our buddy system works', meta: 'The Weakend · Kismet, 2005' },
  { img: IAmThePilotCrest, title: 'I am the Pilot crest', meta: 'I am the Pilot · Kismet, 2005' },
  { img: Woodward, title: 'Woodward', meta: 'Woodward · Kismet, 2005' },
  { img: TopSecretDistro, title: 'Top Secret Distro', meta: 'Top Secret Distro · Kismet, 2005' },
  { img: HyacinthCrest, title: 'Hyacinth crest', meta: 'Hyacinth · Kismet, 2005' },
  { img: TeamYoungBmx, title: 'Team Young BMX', meta: 'Team Young BMX · Kismet, 2005' },
];

function LogosPage() {
  return (
    <GalleryPage
      title={'Logos'}
      intro={
        'Marks for my own clients at Kismet, for HRlogics and its products, for agency clients at Fishbat, and for the bands and labels I designed for in the 2000s.'
      }
      items={ITEMS}
      framed
    />
  );
}

export default LogosPage;
