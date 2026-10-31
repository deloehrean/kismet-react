import React from 'react';

import ShowBannerA from 'src/assets/images/case-studies/hrlogics/show-banner-a.jpg';
import ShowBannerB from 'src/assets/images/case-studies/hrlogics/show-banner-b.jpg';
import ShowTablecloth from 'src/assets/images/case-studies/hrlogics/show-tablecloth.jpg';
import GiftCards from 'src/assets/images/case-studies/poppy/gift-cards.jpg';
import MenuBeer from 'src/assets/images/case-studies/poppy/menu-beer.jpg';
import MenuCask from 'src/assets/images/case-studies/poppy/menu-cask.jpg';
import MenuDraft from 'src/assets/images/case-studies/poppy/menu-draft.jpg';
import MenuHuttonSmithDraft from 'src/assets/images/case-studies/poppy/menu-hutton-smith-draft.jpg';
import AssisiBackwall from 'src/assets/images/graphics/print/assisi-backwall.jpg';
import AssisiBannerStand from 'src/assets/images/graphics/print/assisi-banner-stand.jpg';
import AssisiLoopAidFlyer from 'src/assets/images/graphics/print/assisi-loop-aid-flyer.jpg';
import AxleGxVsGt from 'src/assets/images/graphics/print/axle-gx-vs-gt.jpg';
import AxleRaiseTheBar from 'src/assets/images/graphics/print/axle-raise-the-bar.jpg';
import AxleSlickBack from 'src/assets/images/graphics/print/axle-slick-back.jpg';
import AxleSlickFront from 'src/assets/images/graphics/print/axle-slick-front.jpg';
import CassoneBrochure from 'src/assets/images/graphics/print/cassone-brochure.jpg';
import ElephantomPoster from 'src/assets/images/graphics/print/elephantom-poster.jpg';
import EmoryTableTin from 'src/assets/images/graphics/print/emory-table-tin.jpg';
import EsudButtonGreen from 'src/assets/images/graphics/print/esud-button-green.jpg';
import EsudButtonRed from 'src/assets/images/graphics/print/esud-button-red.jpg';
import FishbatSocialChecklist from 'src/assets/images/graphics/print/fishbat-social-checklist.jpg';
import FishbatTradeShowBanner from 'src/assets/images/graphics/print/fishbat-trade-show-banner.jpg';
import FreethoughtMug from 'src/assets/images/graphics/print/freethought-mug.jpg';
import GilbertExhibitFlyer from 'src/assets/images/graphics/print/gilbert-exhibit-flyer.jpg';
import LaundryStationWrap from 'src/assets/images/graphics/print/laundry-station-wrap.jpg';
import MajesticCatering from 'src/assets/images/graphics/print/majestic-catering.jpg';
import PoppyHalloweenGiftCards from 'src/assets/images/graphics/print/poppy-halloween-gift-cards.jpg';
import PoppyStPatricksBanner from 'src/assets/images/graphics/print/poppy-st-patricks-banner.jpg';
import PoppySupportLocalBanner from 'src/assets/images/graphics/print/poppy-support-local-banner.jpg';
import PoppyUpdatedHoursSign from 'src/assets/images/graphics/print/poppy-updated-hours-sign.jpg';
import RosesdeadButtonBlack from 'src/assets/images/graphics/print/rosesdead-button-black.jpg';
import RosesdeadButtonFlowers from 'src/assets/images/graphics/print/rosesdead-button-flowers.jpg';
import RosesdeadButtonFrog from 'src/assets/images/graphics/print/rosesdead-button-frog.jpg';
import RosesdeadButtonZombie from 'src/assets/images/graphics/print/rosesdead-button-zombie.jpg';
import SkinThreadStarryNights from 'src/assets/images/graphics/print/skin-thread-starry-nights.jpg';
import VillageIdiotHalloween from 'src/assets/images/graphics/print/village-idiot-halloween.jpg';
import VoodooBeerList from 'src/assets/images/graphics/print/voodoo-beer-list.jpg';
import VoodooCocktailList from 'src/assets/images/graphics/print/voodoo-cocktail-list.jpg';
import WeakendCassetteRelease from 'src/assets/images/graphics/print/weakend-cassette-release.jpg';
import WeakendDollarMenuTour from 'src/assets/images/graphics/print/weakend-dollar-menu-tour.jpg';
import WeakendHereavvPoster from 'src/assets/images/graphics/print/weakend-hereavv-poster.jpg';
import WeakendSparrowPoster from 'src/assets/images/graphics/print/weakend-sparrow-poster.jpg';
import WeakendStickerDeadman from 'src/assets/images/graphics/print/weakend-sticker-deadman.jpg';
import WerewolvesOfDetroitWide from 'src/assets/images/graphics/print/werewolves-of-detroit-wide.jpg';
import WerewolvesOfDetroit from 'src/assets/images/graphics/print/werewolves-of-detroit.jpg';
import ZornsFamilyFlyer from 'src/assets/images/graphics/print/zorns-family-flyer.jpg';
import ZornsMenu from 'src/assets/images/graphics/print/zorns-menu.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: MenuDraft, title: 'Draft menu', meta: 'The Poppy & Parliament · 2019' },
  { img: MenuBeer, title: 'Beer menu', meta: 'The Poppy & Parliament · 2019' },
  { img: MenuCask, title: 'Cask menu', meta: 'The Poppy & Parliament · 2019' },
  {
    img: MenuHuttonSmithDraft,
    title: 'Hutton & Smith draft menu',
    meta: 'The Poppy & Parliament · 2019',
  },
  { img: GiftCards, title: 'Afternoon tea gift card', meta: 'The Poppy & Parliament · 2019' },
  {
    img: PoppyStPatricksBanner,
    title: 'St. Patrick’s Day banner',
    meta: 'The Poppy & Parliament · 2020',
  },
  {
    img: PoppySupportLocalBanner,
    title: 'Support Local Business banner',
    meta: 'The Poppy & Parliament · 2020',
  },
  {
    img: PoppyUpdatedHoursSign,
    title: 'Updated hours sign',
    meta: 'The Poppy & Parliament · 2020',
  },
  {
    img: PoppyHalloweenGiftCards,
    title: 'Halloween gift cards',
    meta: 'The Poppy & Parliament · 2019',
  },
  { img: ShowBannerA, title: 'Trade-show banner', meta: 'HRlogics · 2025' },
  { img: ShowBannerB, title: 'Trade-show banner', meta: 'HRlogics · 2025' },
  { img: ShowTablecloth, title: 'Trade-show tablecloth', meta: 'HRlogics · 2025' },
  { img: VoodooBeerList, title: 'Beer list', meta: 'Voodoo Lounge · 2020' },
  { img: VoodooCocktailList, title: 'Cocktail list', meta: 'Voodoo Lounge · 2020' },
  { img: MajesticCatering, title: 'Catering menu sign', meta: 'The Majestic Theatre · 2022' },
  { img: EmoryTableTin, title: 'QR table tin', meta: 'The Emory · 2022' },
  { img: AxleSlickFront, title: 'Gym slick, front', meta: 'Axle Workout · Fishbat, 2018' },
  { img: AxleSlickBack, title: 'Gym slick, back', meta: 'Axle Workout · Fishbat, 2018' },
  { img: AxleGxVsGt, title: 'GX vs. GT comparison', meta: 'Axle Workout · Fishbat, 2018' },
  { img: AxleRaiseTheBar, title: 'Raise the Bar flyer', meta: 'Axle Workout · Fishbat, 2018' },
  { img: AssisiBannerStand, title: 'Three-banner stand', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiBackwall, title: 'Backwall banners', meta: 'Assisi Animal Health · Fishbat' },
  {
    img: AssisiLoopAidFlyer,
    title: 'Loop-Aid flyer',
    meta: 'Assisi Animal Health · Fishbat, 2017',
  },
  { img: FishbatTradeShowBanner, title: 'Trade-show banner', meta: 'Fishbat · 2017' },
  { img: FishbatSocialChecklist, title: 'Social media checklist', meta: 'Fishbat · 2017' },
  { img: FreethoughtMug, title: 'Mug', meta: 'Freethought Coffee Co. · 2021' },
  { img: LaundryStationWrap, title: 'Locker wrap', meta: 'Laundry Station · Fishbat, 2014' },
  { img: ZornsMenu, title: 'Menu', meta: 'Zorn’s · Fishbat, 2014' },
  { img: ZornsFamilyFlyer, title: 'Feed a family of four flyer', meta: 'Zorn’s · Fishbat, 2014' },
  { img: CassoneBrochure, title: 'Brochure cover', meta: 'Cassone · Fishbat, 2016' },
  {
    img: GilbertExhibitFlyer,
    title: 'Turn the volume up flyer',
    meta: 'Gilbert Exhibition · Fishbat, 2016',
  },
  {
    img: SkinThreadStarryNights,
    title: 'Starry Nights show flyer',
    meta: 'Skin Thread · 2005',
  },
  {
    img: VillageIdiotHalloween,
    title: 'Halloween flyer',
    meta: 'The Village Idiot · 2005',
  },
  { img: WeakendStickerDeadman, title: 'Sticker', meta: 'The Weakend · 2005' },
  {
    img: WeakendHereavvPoster,
    title: 'How Everyone Ruins Everything poster',
    meta: 'The Weakend · 2004',
  },
  { img: WeakendSparrowPoster, title: 'Sparrow poster', meta: 'The Weakend · 2003' },
  { img: WerewolvesOfDetroit, title: 'Werewolves of Detroit poster', meta: 'The Weakend' },
  {
    img: WerewolvesOfDetroitWide,
    title: 'Werewolves of Detroit, wide',
    meta: 'The Weakend',
  },
  { img: WeakendDollarMenuTour, title: 'Dollar Menu Tour poster', meta: 'The Weakend' },
  { img: WeakendCassetteRelease, title: 'Cassette release poster', meta: 'The Weakend · 2017' },
  { img: ElephantomPoster, title: 'Wall poster', meta: 'Elephantom' },
  { img: RosesdeadButtonBlack, title: 'Button', meta: 'Rosesdead · 2005' },
  { img: RosesdeadButtonFlowers, title: 'Button', meta: 'Rosesdead · 2005' },
  { img: RosesdeadButtonFrog, title: 'Button', meta: 'Rosesdead · 2005' },
  { img: RosesdeadButtonZombie, title: 'Button', meta: 'Rosesdead · 2005' },
  { img: EsudButtonGreen, title: 'Button', meta: 'Eight Seconds Upside Down · 2005' },
  { img: EsudButtonRed, title: 'Button', meta: 'Eight Seconds Upside Down · 2005' },
];

function PrintPage() {
  return (
    <GalleryPage
      title={'Print'}
      intro={
        'Business cards, menus, signs, banners, flyers, and trade-show booths, from show flyers in 2005 to the HRlogics trade-show booth in 2025.'
      }
      items={ITEMS}
    />
  );
}

export default PrintPage;
