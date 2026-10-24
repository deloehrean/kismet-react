import React from 'react';

import ShowBannerA from 'src/assets/images/case-studies/hrlogics/show-banner-a.jpg';
import ShowBannerB from 'src/assets/images/case-studies/hrlogics/show-banner-b.jpg';
import ShowTablecloth from 'src/assets/images/case-studies/hrlogics/show-tablecloth.jpg';
import GiftCards from 'src/assets/images/case-studies/poppy/gift-cards.jpg';
import MenuBeer from 'src/assets/images/case-studies/poppy/menu-beer.jpg';
import MenuCask from 'src/assets/images/case-studies/poppy/menu-cask.jpg';
import MenuDraft from 'src/assets/images/case-studies/poppy/menu-draft.jpg';
import MenuHuttonSmithDraft from 'src/assets/images/case-studies/poppy/menu-hutton-smith-draft.jpg';
import AdGrandOpening from 'src/assets/images/case-studies/solstice/ad-grand-opening.jpg';
import CardBack from 'src/assets/images/case-studies/solstice/card-back.jpg';
import CardFront from 'src/assets/images/case-studies/solstice/card-front.jpg';
import GiftBack from 'src/assets/images/case-studies/solstice/gift-back.jpg';
import GiftFront from 'src/assets/images/case-studies/solstice/gift-front.jpg';
import Letterhead from 'src/assets/images/case-studies/solstice/letterhead.jpg';
import SignPanelMark from 'src/assets/images/case-studies/solstice/sign-panel-mark.jpg';
import WindowSign from 'src/assets/images/case-studies/solstice/window-sign.jpg';
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
  { img: CardFront, title: 'Business card, front', meta: 'Solstice Massage Therapy · Kismet' },
  { img: CardBack, title: 'Business card, back', meta: 'Solstice Massage Therapy · Kismet' },
  { img: GiftFront, title: 'Gift certificate, front', meta: 'Solstice Massage Therapy · Kismet' },
  { img: GiftBack, title: 'Gift certificate, back', meta: 'Solstice Massage Therapy · Kismet' },
  { img: Letterhead, title: 'Letterhead', meta: 'Solstice Massage Therapy · Kismet' },
  { img: AdGrandOpening, title: 'Grand-opening ad', meta: 'Solstice Massage Therapy · Kismet' },
  { img: WindowSign, title: 'Window sign', meta: 'Solstice Massage Therapy · Kismet' },
  {
    img: SignPanelMark,
    title: 'Exterior sign, mark panel',
    meta: 'Solstice Massage Therapy · Kismet',
  },
  { img: MenuDraft, title: 'Draft menu', meta: 'The Poppy & Parliament · Kismet' },
  { img: MenuBeer, title: 'Beer menu', meta: 'The Poppy & Parliament · Kismet' },
  { img: MenuCask, title: 'Cask menu', meta: 'The Poppy & Parliament · Kismet' },
  {
    img: MenuHuttonSmithDraft,
    title: 'Hutton & Smith draft menu',
    meta: 'The Poppy & Parliament · Kismet',
  },
  { img: GiftCards, title: 'Gift cards', meta: 'The Poppy & Parliament · Kismet' },
  {
    img: PoppyStPatricksBanner,
    title: 'St. Patrick’s Day banner',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppySupportLocalBanner,
    title: 'Support Local Business banner',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppyUpdatedHoursSign,
    title: 'Updated hours sign',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppyHalloweenGiftCards,
    title: 'Halloween gift cards',
    meta: 'The Poppy & Parliament · Kismet',
  },
  { img: ShowBannerA, title: 'Trade-show banner', meta: 'HRlogics' },
  { img: ShowBannerB, title: 'Trade-show banner', meta: 'HRlogics' },
  { img: ShowTablecloth, title: 'Trade-show tablecloth', meta: 'HRlogics' },
  { img: VoodooBeerList, title: 'Beer list', meta: 'Voodoo Lounge · Kismet' },
  { img: VoodooCocktailList, title: 'Cocktail list', meta: 'Voodoo Lounge · Kismet' },
  { img: MajesticCatering, title: 'Catering menu sign', meta: 'The Majestic Theatre · Kismet' },
  { img: EmoryTableTin, title: 'QR table tin', meta: 'The Emory · Kismet' },
  { img: AxleSlickFront, title: 'Gym slick, front', meta: 'Axle Workout · Fishbat' },
  { img: AxleSlickBack, title: 'Gym slick, back', meta: 'Axle Workout · Fishbat' },
  { img: AxleGxVsGt, title: 'GX vs. GT comparison', meta: 'Axle Workout · Fishbat' },
  { img: AxleRaiseTheBar, title: 'Raise the Bar flyer', meta: 'Axle Workout · Fishbat' },
  { img: AssisiBannerStand, title: 'Three-banner stand', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiBackwall, title: 'Backwall banners', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiLoopAidFlyer, title: 'Loop-Aid flyer', meta: 'Assisi Animal Health · Fishbat' },
  { img: FishbatTradeShowBanner, title: 'Trade-show banner', meta: 'Fishbat' },
  { img: FishbatSocialChecklist, title: 'Social media checklist', meta: 'Fishbat' },
  { img: FreethoughtMug, title: 'Mug', meta: 'Freethought Coffee Co.' },
  { img: LaundryStationWrap, title: 'Locker wrap', meta: 'Laundry Station' },
  { img: ZornsMenu, title: 'Menu', meta: 'Zorn’s' },
  { img: ZornsFamilyFlyer, title: 'Feed a family of four flyer', meta: 'Zorn’s' },
  { img: CassoneBrochure, title: 'Brochure cover', meta: 'Cassone' },
  { img: GilbertExhibitFlyer, title: 'Turn the volume up flyer', meta: 'Gilbert Exhibition' },
  {
    img: SkinThreadStarryNights,
    title: 'Starry Nights show flyer',
    meta: 'Skin Thread · Kismet, 2005',
  },
  {
    img: VillageIdiotHalloween,
    title: 'Halloween flyer',
    meta: 'The Village Idiot · Kismet, 2005',
  },
  { img: WeakendStickerDeadman, title: 'Sticker', meta: 'The Weakend · Kismet, 2005' },
  {
    img: WeakendHereavvPoster,
    title: 'How Everyone Ruins Everything poster',
    meta: 'The Weakend · Kismet',
  },
  { img: WeakendSparrowPoster, title: 'Sparrow poster', meta: 'The Weakend · Kismet' },
  { img: WerewolvesOfDetroit, title: 'Werewolves of Detroit poster', meta: 'The Weakend · Kismet' },
  {
    img: WerewolvesOfDetroitWide,
    title: 'Werewolves of Detroit, wide',
    meta: 'The Weakend · Kismet',
  },
  { img: WeakendDollarMenuTour, title: 'Dollar Menu Tour poster', meta: 'The Weakend · Kismet' },
  { img: WeakendCassetteRelease, title: 'Cassette release poster', meta: 'The Weakend · Kismet' },
  { img: ElephantomPoster, title: 'Wall poster', meta: 'Elephantom · Kismet' },
  { img: RosesdeadButtonBlack, title: 'Button', meta: 'Rosesdead · Kismet' },
  { img: RosesdeadButtonFlowers, title: 'Button', meta: 'Rosesdead · Kismet' },
  { img: RosesdeadButtonFrog, title: 'Button', meta: 'Rosesdead · Kismet' },
  { img: EsudButtonGreen, title: 'Button', meta: 'Eight Seconds Upside Down · Kismet' },
  { img: EsudButtonRed, title: 'Button', meta: 'Eight Seconds Upside Down · Kismet' },
];

function PrintPage() {
  return (
    <GalleryPage
      title={'Print'}
      intro={
        'Business cards, menus, signs, banners, flyers, and trade-show booths, from show flyers in 2005 to a full storefront identity.'
      }
      items={ITEMS}
    />
  );
}

export default PrintPage;
