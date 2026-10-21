import React from 'react';

import EmoryTableTin from 'src/assets/images/graphics/print/emory-table-tin.jpg';
import FishbatSocialChecklist from 'src/assets/images/graphics/print/fishbat-social-checklist.jpg';
import FishbatTradeShowBanner from 'src/assets/images/graphics/print/fishbat-trade-show-banner.jpg';
import MajesticCatering from 'src/assets/images/graphics/print/majestic-catering.jpg';
import SkinThreadPendleton from 'src/assets/images/graphics/print/skin-thread-pendleton.jpg';
import SkinThreadStarryNights from 'src/assets/images/graphics/print/skin-thread-starry-nights.jpg';
import SkinThreadStarryNights5 from 'src/assets/images/graphics/print/skin-thread-starry-nights-5.jpg';
import VillageIdiotHalloween from 'src/assets/images/graphics/print/village-idiot-halloween.jpg';
import VoodooBeerList from 'src/assets/images/graphics/print/voodoo-beer-list.jpg';
import VoodooCocktailList from 'src/assets/images/graphics/print/voodoo-cocktail-list.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: VoodooBeerList, title: 'Beer list', meta: 'Voodoo Lounge · Kismet' },
  { img: VoodooCocktailList, title: 'Cocktail list', meta: 'Voodoo Lounge · Kismet' },
  { img: MajesticCatering, title: 'Catering menu sign', meta: 'The Majestic Theatre · Kismet' },
  { img: EmoryTableTin, title: 'QR table tin', meta: 'The Emory · Kismet' },
  { img: FishbatTradeShowBanner, title: 'Trade-show banner', meta: 'Fishbat' },
  { img: FishbatSocialChecklist, title: 'Social media checklist', meta: 'Fishbat' },
  { img: SkinThreadStarryNights, title: 'Starry Nights show flyer', meta: 'Skin Thread · 2005' },
  { img: SkinThreadStarryNights5, title: 'Starry Nights 5 show flyer', meta: 'Skin Thread · 2005' },
  { img: SkinThreadPendleton, title: 'Pendleton show flyer', meta: 'Skin Thread · 2005' },
  { img: VillageIdiotHalloween, title: 'Halloween flyer', meta: 'The Village Idiot · 2005' },
];

function PrintPage() {
  return (
    <GalleryPage
      title={'Print'}
      intro={
        'Menus, table signs, flyers, and trade-show graphics, from show flyers in 2005 to QR menus for restaurants and venues.'
      }
      items={ITEMS}
    />
  );
}

export default PrintPage;
