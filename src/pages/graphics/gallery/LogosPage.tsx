import React from 'react';

import Logos2024 from 'src/assets/images/case-studies/hrlogics/logos-2024.jpg';
import LogoFullBlack from 'src/assets/images/case-studies/poppy/logo-full-black.png';
import MarkRed from 'src/assets/images/case-studies/poppy/mark-red.svg';
import MarkLockup from 'src/assets/images/case-studies/solstice/mark-lockup.png';
import Mark from 'src/assets/images/case-studies/solstice/mark.png';
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
import PbdHoldings from 'src/assets/images/graphics/logos/pbd-holdings.jpg';
import PoppyParliamentStacked from 'src/assets/images/graphics/logos/poppy-parliament-stacked.jpg';
import RyzeWotc from 'src/assets/images/graphics/logos/ryze-wotc.jpg';
import Ryze from 'src/assets/images/graphics/logos/ryze.jpg';
import SdMedicare from 'src/assets/images/graphics/logos/sd-medicare.jpg';
import TeamYoungBmx from 'src/assets/images/graphics/logos/team-young-bmx.jpg';
import TheEmory from 'src/assets/images/graphics/logos/the-emory.jpg';
import TheShoppeBadge from 'src/assets/images/graphics/logos/the-shoppe-badge.jpg';
import TheShoppe from 'src/assets/images/graphics/logos/the-shoppe.jpg';
import TicaSeal from 'src/assets/images/graphics/logos/tica-seal.jpg';
import TopSecretDistro from 'src/assets/images/graphics/logos/top-secret-distro.jpg';
import TrueNorth from 'src/assets/images/graphics/logos/true-north.jpg';
import Ucm from 'src/assets/images/graphics/logos/ucm.jpg';
import VoodooLounge from 'src/assets/images/graphics/logos/voodoo-lounge.jpg';
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
  { img: IkigaiColorSeal, title: 'Ikigai seal', meta: 'Ikigai · Kismet' },
  { img: IkigaiBestVersion, title: 'The best version of you', meta: 'Ikigai · Kismet' },
  { img: TheEmory, title: 'The Emory', meta: 'The Emory · Kismet' },
  { img: VoodooLounge, title: 'The Voodoo Lounge', meta: 'Voodoo Lounge · Kismet' },
  { img: EugeneAuction, title: 'Eugene Auction', meta: 'Eugene Auction · Kismet, 2019' },
  { img: FountainOfLife, title: 'Fountain of Life', meta: 'Fountain of Life Malawi · Pro bono' },
  { img: FreethoughtCoffee, title: 'Freethought Coffee Co.', meta: 'Freethought Coffee Co.' },
  { img: TheShoppeBadge, title: 'The Shoppe at Anagen, badge', meta: 'The Shoppe at Anagen' },
  { img: TheShoppe, title: 'The Shoppe at Anagen', meta: 'The Shoppe at Anagen' },
  { img: MbGroupUsa, title: 'MB Group USA', meta: 'MB Group USA' },
  { img: HorseshoeRecords, title: 'Horseshoe Records', meta: 'Horseshoe Records' },
  { img: GatewayCoffee, title: 'Gateway Coffee', meta: 'Gateway Coffee' },
  { img: FraudExpertAdvisors, title: 'Fraud Expert Advisors', meta: 'Fraud Expert Advisors' },
  { img: CinderellaBrides, title: 'Cinderella Brides', meta: 'Cinderella Brides' },
  { img: CarolinaClassicFlags, title: 'Carolina Classic', meta: 'Carolina Classic' },
  { img: CarolinaClassicRunning, title: 'Carolina Classic, running', meta: 'Carolina Classic' },
  { img: CarolinaClassicSplat, title: 'Carolina Classic, splatter', meta: 'Carolina Classic' },
  { img: Alchemy521, title: 'Alchemy 521', meta: 'Alchemy 521' },
  { img: Aea, title: 'AEA', meta: 'AEA' },
  { img: FoundMyAnimal, title: 'Found My Animal Rescue Mission', meta: 'To confirm' },
  { img: FoundMyAnimalHeart, title: 'Found My Animal, heart', meta: 'To confirm' },
  { img: TrueNorth, title: 'True North Pet Rescue Mission', meta: 'To confirm' },
  { img: CalmerCanine, title: 'Calmer Canine', meta: 'To confirm' },
  { img: FlapYou, title: 'Flap You', meta: 'To confirm' },
  { img: HeartVenues, title: 'Heart Venues, Weddings & Events', meta: 'To confirm' },
  { img: PbdHoldings, title: 'PBD Holdings', meta: 'To confirm' },
  { img: SdMedicare, title: 'S&D MediCare', meta: 'To confirm' },
  { img: TicaSeal, title: 'TICA Endorsement of Excellence seal', meta: 'To confirm' },
  { img: Acm, title: 'ACM icon', meta: 'ACM · Fishbat' },
  { img: Bwella, title: 'Bwella', meta: 'Bwella · Fishbat' },
  { img: Loop, title: 'Loop', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiPawPrint, title: 'Paw-print dog', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiPegasus, title: 'Pegasus', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiTreeOfLife, title: 'Tree of life', meta: 'Assisi Animal Health · Fishbat' },
  { img: Miraburst, title: 'MiraBurst', meta: 'MiraBurst · Fishbat' },
  { img: Mirasweet, title: 'MiraSweet', meta: 'MiraBurst · Fishbat' },
  { img: YouAreGreaterThan, title: 'You are greater than', meta: 'Fishbat' },
  { img: TopSecretDistro, title: 'Top Secret Distro', meta: 'Top Secret Distro · Kismet, 2005' },
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
