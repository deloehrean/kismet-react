import React from 'react';

import LinkedinBanner from 'src/assets/images/case-studies/hrlogics/linkedin-banner.jpg';
import CampHappyHour from 'src/assets/images/case-studies/poppy/camp-happy-hour.jpg';
import CampHuttonSmith from 'src/assets/images/case-studies/poppy/camp-hutton-smith.jpg';
import CampIndustryNight from 'src/assets/images/case-studies/poppy/camp-industry-night.jpg';
import CampMardiGras from 'src/assets/images/case-studies/poppy/camp-mardi-gras.jpg';
import CampNewYears from 'src/assets/images/case-studies/poppy/camp-new-years.jpg';
import CampPhoneBox from 'src/assets/images/case-studies/poppy/camp-phone-box.jpg';
import CampRugbyNight from 'src/assets/images/case-studies/poppy/camp-rugby-night.jpg';
import CampRugbyWorldCup from 'src/assets/images/case-studies/poppy/camp-rugby-world-cup.jpg';
import CampStPatricksDay from 'src/assets/images/case-studies/poppy/camp-st-patricks-day.jpg';
import CampTrivia from 'src/assets/images/case-studies/poppy/camp-trivia.jpg';
import CampValentinesTea from 'src/assets/images/case-studies/poppy/camp-valentines-tea.jpg';
import CovidAnnouncement from 'src/assets/images/case-studies/poppy/covid-announcement.jpg';
import CovidKitMoscowMule from 'src/assets/images/case-studies/poppy/covid-kit-moscow-mule.jpg';
import CovidSickDeals from 'src/assets/images/case-studies/poppy/covid-sick-deals.jpg';
import AcmWireDiscount from 'src/assets/images/graphics/ads/acm-wire-discount.jpg';
import AcmWireSeals from 'src/assets/images/graphics/ads/acm-wire-seals.jpg';
import AssisiHappyCatMonth from 'src/assets/images/graphics/ads/assisi-happy-cat-month.jpg';
import AssisiHolidays from 'src/assets/images/graphics/ads/assisi-holidays.jpg';
import ClarityHsa from 'src/assets/images/graphics/ads/clarity-hsa.jpg';
import CtmNewsletter from 'src/assets/images/graphics/ads/ctm-newsletter.jpg';
import FirstStar1 from 'src/assets/images/graphics/ads/first-star-1.jpg';
import FirstStar2 from 'src/assets/images/graphics/ads/first-star-2.jpg';
import FishbatBeacon from 'src/assets/images/graphics/ads/fishbat-beacon.jpg';
import FishbatInfluencer from 'src/assets/images/graphics/ads/fishbat-influencer.jpg';
import FishbatNewMarkets from 'src/assets/images/graphics/ads/fishbat-new-markets.jpg';
import FishbatPuzzle from 'src/assets/images/graphics/ads/fishbat-puzzle.jpg';
import FlatRate from 'src/assets/images/graphics/ads/flat-rate.jpg';
import GlobalProsperity from 'src/assets/images/graphics/ads/global-prosperity.jpg';
import JloftsEmail from 'src/assets/images/graphics/ads/jlofts-email.jpg';
import LoopLoc40Years from 'src/assets/images/graphics/ads/loop-loc-40-years.jpg';
import LoopLocGiftOfSafety from 'src/assets/images/graphics/ads/loop-loc-gift-of-safety.jpg';
import ModelYearCloseout from 'src/assets/images/graphics/ads/model-year-closeout.jpg';
import PoppyFoundersTap from 'src/assets/images/graphics/ads/poppy-founders-tap.jpg';
import PoppyKitKentuckyMule from 'src/assets/images/graphics/ads/poppy-kit-kentucky-mule.jpg';
import PoppyKitTennesseeMule from 'src/assets/images/graphics/ads/poppy-kit-tennessee-mule.jpg';
import PoppyKitVodkaSoda from 'src/assets/images/graphics/ads/poppy-kit-vodka-soda.jpg';
import PoppyMontyPython from 'src/assets/images/graphics/ads/poppy-monty-python.jpg';
import Viv1 from 'src/assets/images/graphics/ads/viv-1.jpg';
import Viv2 from 'src/assets/images/graphics/ads/viv-2.jpg';
import GalleryPage, { GalleryItem } from 'src/pages/graphics/gallery/GalleryPage';

const ITEMS: GalleryItem[] = [
  { img: CampStPatricksDay, title: 'St. Patrick’s Day', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampRugbyWorldCup, title: 'Rugby World Cup', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampNewYears, title: 'New Year’s party', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampIndustryNight, title: 'Industry night', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampTrivia, title: 'Trivia night', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampMardiGras, title: 'Mardi Gras', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampPhoneBox, title: 'Phone box selfie', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampRugbyNight, title: 'Rugby night', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampValentinesTea, title: 'Valentine’s tea', meta: 'The Poppy & Parliament · Kismet' },
  {
    img: CampHuttonSmith,
    title: 'Hutton & Smith tap takeover',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppyFoundersTap,
    title: 'Founders tap takeover',
    meta: 'The Poppy & Parliament · Kismet',
  },
  { img: PoppyMontyPython, title: 'Monty Python night', meta: 'The Poppy & Parliament · Kismet' },
  { img: CampHappyHour, title: 'Happy hour', meta: 'The Poppy & Parliament · Kismet' },
  { img: CovidAnnouncement, title: 'Updated hours', meta: 'The Poppy & Parliament · Kismet' },
  { img: CovidSickDeals, title: 'Still slingin’ beers', meta: 'The Poppy & Parliament · Kismet' },
  {
    img: CovidKitMoscowMule,
    title: 'Starter kit, Moscow mule',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppyKitKentuckyMule,
    title: 'Starter kit, Kentucky mule',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppyKitTennesseeMule,
    title: 'Starter kit, Tennessee mule',
    meta: 'The Poppy & Parliament · Kismet',
  },
  {
    img: PoppyKitVodkaSoda,
    title: 'Starter kit, vodka soda',
    meta: 'The Poppy & Parliament · Kismet',
  },
  { img: LinkedinBanner, title: 'LinkedIn banner', meta: 'HRlogics' },
  { img: AcmWireSeals, title: 'Wire seals in stock', meta: 'ACM · Fishbat' },
  { img: AcmWireDiscount, title: '15% off, display ad', meta: 'ACM · Fishbat' },
  { img: AssisiHolidays, title: 'Holiday post', meta: 'Assisi Animal Health · Fishbat' },
  { img: AssisiHappyCatMonth, title: 'Happy Cat Month', meta: 'Assisi Animal Health · Fishbat' },
  { img: LoopLoc40Years, title: '40 years', meta: 'Loop-Loc · Fishbat' },
  { img: LoopLocGiftOfSafety, title: 'Gift of safety', meta: 'Loop-Loc · Fishbat' },
  { img: ClarityHsa, title: 'Ready for life, display ad', meta: 'Clarity · Fishbat' },
  { img: FirstStar1, title: 'Foster youth campaign', meta: 'First Star · Fishbat' },
  { img: FirstStar2, title: '“Life isn’t always sad”', meta: 'First Star · Fishbat' },
  { img: Viv1, title: 'Sell. Share. Inspire.', meta: 'Viv · Fishbat' },
  { img: Viv2, title: 'CreditWatch post', meta: 'Viv · Fishbat' },
  { img: FlatRate, title: 'The future is full of surprises', meta: 'Flat Rate · Fishbat' },
  { img: ModelYearCloseout, title: 'Model-year closeout', meta: 'Lynn Layton · Fishbat' },
  { img: GlobalProsperity, title: 'Global prosperity post', meta: 'Fishbat' },
  { img: FishbatInfluencer, title: 'Influencer marketing', meta: 'Fishbat' },
  { img: FishbatBeacon, title: 'Finding your beacon', meta: 'Fishbat' },
  { img: FishbatPuzzle, title: 'Every piece makes it whole', meta: 'Fishbat' },
  { img: FishbatNewMarkets, title: 'New markets', meta: 'Fishbat' },
  { img: CtmNewsletter, title: 'Newsletter header', meta: 'CTM · Fishbat' },
  { img: JloftsEmail, title: 'February email', meta: 'J Lofts · Fishbat' },
];

function AdsPage() {
  return (
    <GalleryPage
      title={'Ads & Social'}
      intro={
        'Social posts, display ads, and email campaigns for my own clients at Kismet and for agency clients at Fishbat, each built to its platform’s sizes.'
      }
      items={ITEMS}
    />
  );
}

export default AdsPage;
