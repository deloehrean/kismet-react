import React from 'react';

import Logos2024 from 'src/assets/images/case-studies/hrlogics/logos-2024.jpg';
import LogoFullBlack from 'src/assets/images/case-studies/poppy/logo-full-black.png';
import MarkRed from 'src/assets/images/case-studies/poppy/mark-red.svg';
import Acm from 'src/assets/images/graphics/logos/acm.jpg';
import Aea from 'src/assets/images/graphics/logos/aea.jpg';
import Alchemy521 from 'src/assets/images/graphics/logos/alchemy-521.jpg';
import AssisiPawPrint from 'src/assets/images/graphics/logos/assisi-paw-print.jpg';
import AssisiPegasus from 'src/assets/images/graphics/logos/assisi-pegasus.jpg';
import AssisiTreeOfLife from 'src/assets/images/graphics/logos/assisi-tree-of-life.jpg';
import Bwella from 'src/assets/images/graphics/logos/bwella.jpg';
import CalmerCanine from 'src/assets/images/graphics/logos/calmer-canine.jpg';
import CarolinaClassicFlags from 'src/assets/images/graphics/logos/carolina-classic-flags.jpg';
import CarolinaClassicRunning from 'src/assets/images/graphics/logos/carolina-classic-running.jpg';
import CarolinaClassicSplat from 'src/assets/images/graphics/logos/carolina-classic-splat.jpg';
import CinderellaBrides from 'src/assets/images/graphics/logos/cinderella-brides.jpg';
import ClearI9 from 'src/assets/images/graphics/logos/clear-i9.jpg';
import ClearVerify from 'src/assets/images/graphics/logos/clear-verify.jpg';
import EugeneAuction from 'src/assets/images/graphics/logos/eugene-auction.jpg';
import FishbatWhalePaper from 'src/assets/images/graphics/logos/fishbat-whale-paper.jpg';
import FlapYou from 'src/assets/images/graphics/logos/flap-you.jpg';
import FoundMyAnimalHeart from 'src/assets/images/graphics/logos/found-my-animal-heart.jpg';
import FoundMyAnimal from 'src/assets/images/graphics/logos/found-my-animal.jpg';
import FountainOfLife from 'src/assets/images/graphics/logos/fountain-of-life.jpg';
import FraudExpertAdvisors from 'src/assets/images/graphics/logos/fraud-expert-advisors.jpg';
import FreethoughtCoffee from 'src/assets/images/graphics/logos/freethought-coffee.jpg';
import GatewayCoffee from 'src/assets/images/graphics/logos/gateway-coffee.jpg';
import HeartVenues from 'src/assets/images/graphics/logos/heart-venues.jpg';
import HorseshoeRecords from 'src/assets/images/graphics/logos/horseshoe-records.jpg';
import Hrlogics from 'src/assets/images/graphics/logos/hrlogics.jpg';
import IkigaiBestVersion from 'src/assets/images/graphics/logos/ikigai-best-version.jpg';
import IkigaiColorSeal from 'src/assets/images/graphics/logos/ikigai-color-seal.jpg';
import Loop from 'src/assets/images/graphics/logos/loop.jpg';
import MbGroupUsa from 'src/assets/images/graphics/logos/mb-group-usa.jpg';
import Miraburst from 'src/assets/images/graphics/logos/miraburst.jpg';
import Mirasweet from 'src/assets/images/graphics/logos/mirasweet.jpg';
import PoppyParliamentStacked from 'src/assets/images/graphics/logos/poppy-parliament-stacked.jpg';
import RyzeWotc from 'src/assets/images/graphics/logos/ryze-wotc.jpg';
import Ryze from 'src/assets/images/graphics/logos/ryze.jpg';
import TeamYoungBmx from 'src/assets/images/graphics/logos/team-young-bmx.jpg';
import TheShoppeBadge from 'src/assets/images/graphics/logos/the-shoppe-badge.jpg';
import TheShoppe from 'src/assets/images/graphics/logos/the-shoppe.jpg';
import TopSecretDistro from 'src/assets/images/graphics/logos/top-secret-distro.jpg';
import TrueNorth from 'src/assets/images/graphics/logos/true-north.jpg';
import Ucm from 'src/assets/images/graphics/logos/ucm.jpg';
import VoodooLounge from 'src/assets/images/graphics/logos/voodoo-lounge.jpg';
import YouAreGreaterThan from 'src/assets/images/graphics/logos/you-are-greater-than.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: Hrlogics, title: 'HRlogics', meta: 'HRlogics · 2026' },
  { img: RyzeWotc, title: 'ryze WOTC', meta: 'HRlogics · 2026' },
  { img: Ryze, title: 'Ryze', meta: 'HRlogics · 2026' },
  { img: ClearI9, title: 'Clear I-9', meta: 'HRlogics · 2026' },
  { img: ClearVerify, title: 'Clear Verify', meta: 'HRlogics · 2026' },
  { img: Ucm, title: 'UCM', meta: 'HRlogics · 2026' },
  { img: Logos2024, title: 'The original product logo system', meta: 'HRlogics · 2024' },
  { img: LogoFullBlack, title: 'The Poppy & Parliament', meta: 'The Poppy & Parliament · 2019' },
  {
    img: PoppyParliamentStacked,
    title: 'The Poppy & Parliament, stacked',
    meta: 'The Poppy & Parliament · 2019',
  },
  { img: MarkRed, title: 'The Poppy mark', meta: 'The Poppy & Parliament · 2019' },
  { img: IkigaiColorSeal, title: 'Ikigai seal', meta: 'Ikigai · 2019' },
  { img: IkigaiBestVersion, title: 'The best version of you', meta: 'Ikigai · 2020' },
  { img: VoodooLounge, title: 'The Voodoo Lounge', meta: 'Voodoo Lounge · 2020' },
  { img: EugeneAuction, title: 'Eugene Auction', meta: 'Eugene Auction · 2019' },
  { img: FountainOfLife, title: 'Fountain of Life', meta: 'Fountain of Life Malawi · 2014' },
  {
    img: FreethoughtCoffee,
    title: 'Freethought Coffee Co.',
    meta: 'Freethought Coffee Co. · 2021',
  },
  {
    img: TheShoppeBadge,
    title: 'The Shoppe at Anagen, badge',
    meta: 'The Shoppe at Anagen · fishbat, 2016',
  },
  { img: TheShoppe, title: 'The Shoppe at Anagen', meta: 'The Shoppe at Anagen · fishbat, 2016' },
  { img: MbGroupUsa, title: 'MB Group USA', meta: 'MB Group USA · fishbat, 2016' },
  { img: HorseshoeRecords, title: 'Horseshoe Records', meta: 'Horseshoe Records · fishbat, 2016' },
  { img: GatewayCoffee, title: 'Gateway Coffee', meta: 'Gateway Coffee · fishbat, 2019' },
  {
    img: FraudExpertAdvisors,
    title: 'Fraud Expert Advisors',
    meta: 'Fraud Expert Advisors · fishbat, 2017',
  },
  { img: CinderellaBrides, title: 'Cinderella Brides', meta: 'Cinderella Brides · fishbat, 2016' },
  {
    img: CarolinaClassicFlags,
    title: 'Carolina Classic',
    meta: 'Carolina Classic · fishbat, 2016',
  },
  {
    img: CarolinaClassicRunning,
    title: 'Carolina Classic, running',
    meta: 'Carolina Classic · fishbat, 2016',
  },
  {
    img: CarolinaClassicSplat,
    title: 'Carolina Classic, splatter',
    meta: 'Carolina Classic · fishbat, 2016',
  },
  { img: Alchemy521, title: 'Alchemy 521', meta: 'Alchemy 521 · fishbat, 2016' },
  { img: Aea, title: 'AEA', meta: 'AEA · fishbat, 2013' },
  {
    img: FoundMyAnimal,
    title: 'Found My Animal Rescue Mission',
    meta: 'Found My Animal Rescue Mission · fishbat, 2017',
  },
  {
    img: FoundMyAnimalHeart,
    title: 'Found My Animal, heart',
    meta: 'Found My Animal Rescue Mission · fishbat, 2017',
  },
  {
    img: TrueNorth,
    title: 'True North Pet Rescue Mission',
    meta: 'True North Pet Rescue Mission · fishbat, 2016',
  },
  { img: CalmerCanine, title: 'Calmer Canine', meta: 'Calmer Canine · fishbat, 2016' },
  { img: FlapYou, title: 'Flap You', meta: 'Flap You · fishbat, 2019' },
  {
    img: HeartVenues,
    title: 'Heart Venues, Weddings & Events',
    meta: 'Heart Venues, Weddings & Events · fishbat, 2016',
  },
  { img: FishbatWhalePaper, title: 'fishbat', meta: 'fishbat · 2016' },
  { img: Acm, title: 'ACM icon', meta: 'ACM · fishbat, 2017' },
  { img: Bwella, title: 'Bwella', meta: 'Bwella · fishbat, 2019' },
  { img: Loop, title: 'Loop', meta: 'Assisi Animal Health · fishbat, 2016' },
  { img: AssisiPawPrint, title: 'Paw-print dog', meta: 'Assisi Animal Health · fishbat, 2014' },
  { img: AssisiPegasus, title: 'Pegasus', meta: 'Assisi Animal Health · fishbat, 2014' },
  { img: AssisiTreeOfLife, title: 'Tree of life', meta: 'Assisi Animal Health · fishbat, 2014' },
  { img: Miraburst, title: 'MiraBurst', meta: 'MiraBurst · fishbat, 2016' },
  { img: Mirasweet, title: 'MiraSweet', meta: 'MiraBurst · fishbat, 2016' },
  { img: YouAreGreaterThan, title: 'You are greater than', meta: 'fishbat · 2018' },
  { img: TopSecretDistro, title: 'Top Secret Distro', meta: 'Top Secret Distro · 2005' },
  { img: TeamYoungBmx, title: 'Team Young BMX', meta: 'Team Young BMX · 2005' },
];

function LogosPage() {
  return (
    <GalleryPage
      title={'Logos'}
      intro={
        'Marks I designed for my own clients at Kismet, for HRlogics and its products, for agency clients at fishbat, and for the bands and labels I worked with in the 2000s.'
      }
      items={ITEMS}
      framed
    />
  );
}

export default LogosPage;
