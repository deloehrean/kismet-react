import React from 'react';

import cn from 'clsx';
import { Link } from 'react-router-dom';

import ShowBannerA from 'src/assets/images/case-studies/hrlogics/show-banner-a.jpg';
import CampStPatricksDay from 'src/assets/images/case-studies/poppy/camp-st-patricks-day.jpg';
import GiftCards from 'src/assets/images/case-studies/poppy/gift-cards.jpg';
import AssisiHealingHome from 'src/assets/images/graphics/ads/assisi-healing-home.jpg';
import FishbatInfluencer from 'src/assets/images/graphics/ads/fishbat-influencer.jpg';
import HosForeverCollection from 'src/assets/images/graphics/ads/hos-forever-collection.jpg';
import EarlV1Color from 'src/assets/images/graphics/illustrations/earl-v1-color.jpg';
import FlosMascot from 'src/assets/images/graphics/illustrations/flos-mascot.jpg';
import ScreechingGriffin from 'src/assets/images/graphics/illustrations/screeching-griffin-color.jpg';
import Tapebot from 'src/assets/images/graphics/illustrations/tapebot.jpg';
import FishbatWhale from 'src/assets/images/graphics/logos/fishbat-whale-paper.jpg';
import FreethoughtCoffee from 'src/assets/images/graphics/logos/freethought-coffee.jpg';
import PoppyParliamentStacked from 'src/assets/images/graphics/logos/poppy-parliament-stacked.jpg';
import Ucm from 'src/assets/images/graphics/logos/ucm.jpg';
import AxleSlickFront from 'src/assets/images/graphics/print/axle-slick-front.jpg';
import GilbertExhibitFlyer from 'src/assets/images/graphics/print/gilbert-exhibit-flyer.jpg';
import tee1 from 'src/assets/images/tees/royden-spike-tee.png';
import tee4 from 'src/assets/images/tees/skin-thread-tv-tee.png';
import tee2 from 'src/assets/images/tees/weakend-bronto-tee.png';
import tee5 from 'src/assets/images/tees/whiv-robot-tee.png';
import { Column, Container, Divider, LinkStyled, Row, Typography } from 'src/components';
import { GraphicsPageStyles as s } from 'src/pages';
import albumStyles from 'src/pages/graphics/albums/AlbumsPage.module.scss';
import AlucardAlbum from 'src/pages/graphics/albums/AlucardAlbum';
import AsecondtoolateAlbum from 'src/pages/graphics/albums/AsecondtoolateAlbum';
import ElephantomAlbum from 'src/pages/graphics/albums/ElephantomAlbum';
import RoydenAlbum from 'src/pages/graphics/albums/RoydenAlbum';

type Thumb = { img: string; alt: string; contain?: boolean };

type GalleryCardProps = {
  title: string;
  overline: string;
  body: string;
  to: string;
  thumbs?: Thumb[];
  preview?: React.ReactNode;
  framed?: boolean;
};

const GalleryCard = ({ title, overline, body, to, thumbs, preview, framed }: GalleryCardProps) => (
  <Container className={s.shell} styled variant={'darkish'} rounded={'extra'} full elevation={8}>
    <Container className={s.card} direction={'column'} full gap={2}>
      <Column>
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'overline'} color={'secondary'}>
          {overline}
        </Typography>
      </Column>
      <Divider />
      <Typography variant={'body2'} gutter>
        {body}
      </Typography>
      {preview ?? (
        <div className={cn(s.thumbs, framed && s.framed)}>
          {thumbs?.map(thumb => (
            <Link
              key={thumb.alt}
              to={to}
              className={cn(thumb.contain && s.contain)}
              aria-label={`${thumb.alt}, view all ${title.toLowerCase()}`}
            >
              <img src={thumb.img} alt={thumb.alt} loading={'lazy'} />
            </Link>
          ))}
        </div>
      )}
      <LinkStyled className={s.button} to={to}>
        View all {title.toLowerCase()}
      </LinkStyled>
    </Container>
  </Container>
);

const ALBUMS = [
  { name: 'Alucard', Album: AlucardAlbum },
  { name: 'Elephantom', Album: ElephantomAlbum },
  { name: 'A Second Too Late', Album: AsecondtoolateAlbum },
  { name: 'Royden', Album: RoydenAlbum },
];

const TEES: Thumb[] = [
  { img: tee1, alt: 'Royden spike tee' },
  { img: tee2, alt: 'The Weakend brontosaurus tee' },
  { img: tee4, alt: 'Skin & Thread TV tee' },
  { img: tee5, alt: 'WHIV robot tee' },
];

function GraphicsDashboard() {
  return (
    <Column gap={4} className={s.cards}>
      <Typography variant={'body1'}>
        A few favorites from each collection. Every card links to the full set.
      </Typography>
      <Row className={s.row} gap={2} breakpoint={'md'}>
        <GalleryCard
          title={'Albums'}
          overline={'CD, vinyl, and cassette'}
          body={
            'Starting in 2000, I designed album artwork for bands from all over the country. It let me use both digital and illustrative skills and really stretch the imagination.'
          }
          to={'/graphics/albums'}
          preview={
            <div className={cn(albumStyles['content-frame-container'], s.albums)}>
              {ALBUMS.map(({ name, Album }) => (
                <Link
                  key={name}
                  to={'/graphics/albums'}
                  aria-label={`${name}, view all albums`}
                  className={cn(albumStyles['album-group'], s['album-tile'])}
                >
                  <div className={albumStyles['active-reset']}>
                    <Album />
                  </div>
                </Link>
              ))}
            </div>
          }
        />
        <GalleryCard
          title={'Tees'}
          overline={'From concept to wearable'}
          body={
            'I designed over 100 tee shirts for bands, companies, corporate outings, and events... mostly bands. Working with artists on how they wanted to brand themselves was a highlight of my career.'
          }
          to={'/graphics/tees'}
          preview={
            <div className={s.tees}>
              {TEES.map(tee => (
                <Link key={tee.alt} to={'/graphics/tees'} aria-label={`${tee.alt}, view all tees`}>
                  <img src={tee.img} alt={tee.alt} loading={'lazy'} />
                </Link>
              ))}
            </div>
          }
        />
      </Row>
      <Row className={s.row} gap={2} breakpoint={'md'}>
        <GalleryCard
          title={'Print'}
          overline={'Cards, menus, signs, and booths'}
          body={
            'I’ve designed business cards, menus, signage, and corporate branding, from band concert fliers in 2005 to trade-show booths in 2025.'
          }
          to={'/graphics/print'}
          thumbs={[
            { img: GilbertExhibitFlyer, alt: 'Gilbert Exhibition flyer' },
            {
              img: GiftCards,
              alt: 'The Poppy & Parliament afternoon tea gift card',
              contain: true,
            },
            { img: ShowBannerA, alt: 'HRlogics trade-show banner' },
            { img: AxleSlickFront, alt: 'Axle Workout gym slick' },
          ]}
        />
        <GalleryCard
          title={'Logos'}
          overline={'Marks and identity systems'}
          body={
            'I designed the HRlogics mark and every product logo in its suite, along with marks for my own clients at Kismet and for agency clients at fishbat.'
          }
          to={'/graphics/logos'}
          framed
          thumbs={[
            { img: FreethoughtCoffee, alt: 'Freethought Coffee logo' },
            { img: Ucm, alt: 'UCM logo' },
            { img: PoppyParliamentStacked, alt: 'The Poppy & Parliament logo' },
            { img: FishbatWhale, alt: 'fishbat logo' },
          ]}
        />
      </Row>
      <Row className={s.row} gap={2} breakpoint={'md'}>
        <GalleryCard
          title={'Ads & Social'}
          overline={'Social, display, and email'}
          body={
            'I’ve designed social posts, display ads, and email campaigns for Kismet clients, for agency clients at fishbat, and for LocoX, each one sized for the platform it ran on.'
          }
          to={'/graphics/ads'}
          thumbs={[
            { img: CampStPatricksDay, alt: 'The Poppy & Parliament St. Patrick’s Day post' },
            { img: FishbatInfluencer, alt: 'fishbat influencer marketing post' },
            { img: HosForeverCollection, alt: 'House of Staunton Forever Collection ad' },
            { img: AssisiHealingHome, alt: 'Assisi Animal Health holiday ad' },
          ]}
        />
        <GalleryCard
          title={'Illustrations'}
          overline={'Sketch to final color'}
          body={
            'Mascots and characters I drew, from the first pencil sketch to the finished color art.'
          }
          to={'/graphics/illustrations'}
          thumbs={[
            { img: EarlV1Color, alt: 'Earl, the Zorn’s mascot' },
            { img: FlosMascot, alt: 'Flo’s mascot' },
            { img: Tapebot, alt: 'Tapebot' },
            { img: ScreechingGriffin, alt: 'Royden screeching griffin' },
          ]}
        />
      </Row>
    </Column>
  );
}

export default GraphicsDashboard;
