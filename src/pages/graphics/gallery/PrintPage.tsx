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
import EmoryTableTin from 'src/assets/images/graphics/print/emory-table-tin.jpg';
import FishbatSocialChecklist from 'src/assets/images/graphics/print/fishbat-social-checklist.jpg';
import FishbatTradeShowBanner from 'src/assets/images/graphics/print/fishbat-trade-show-banner.jpg';
import MajesticCatering from 'src/assets/images/graphics/print/majestic-catering.jpg';
import PoppyStPatricksBanner from 'src/assets/images/graphics/print/poppy-st-patricks-banner.jpg';
import SkinThreadStarryNights from 'src/assets/images/graphics/print/skin-thread-starry-nights.jpg';
import VillageIdiotHalloween from 'src/assets/images/graphics/print/village-idiot-halloween.jpg';
import VoodooBeerList from 'src/assets/images/graphics/print/voodoo-beer-list.jpg';
import VoodooCocktailList from 'src/assets/images/graphics/print/voodoo-cocktail-list.jpg';
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
  { img: ShowBannerA, title: 'Trade-show banner', meta: 'HRlogics' },
  { img: ShowBannerB, title: 'Trade-show banner', meta: 'HRlogics' },
  { img: ShowTablecloth, title: 'Trade-show tablecloth', meta: 'HRlogics' },
  { img: VoodooBeerList, title: 'Beer list', meta: 'Voodoo Lounge · Kismet' },
  { img: VoodooCocktailList, title: 'Cocktail list', meta: 'Voodoo Lounge · Kismet' },
  { img: MajesticCatering, title: 'Catering menu sign', meta: 'The Majestic Theatre · Kismet' },
  { img: EmoryTableTin, title: 'QR table tin', meta: 'The Emory · Kismet' },
  { img: FishbatTradeShowBanner, title: 'Trade-show banner', meta: 'Fishbat' },
  { img: FishbatSocialChecklist, title: 'Social media checklist', meta: 'Fishbat' },
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
];

function PrintPage() {
  return (
    <GalleryPage
      title={'Print'}
      intro={
        'Business cards, menus, signs, flyers, and trade-show booths, from show flyers in 2005 to QR menus and a full storefront identity.'
      }
      items={ITEMS}
    />
  );
}

export default PrintPage;
