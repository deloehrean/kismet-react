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
import tee3 from 'src/assets/images/tees/alucard-black-tee.png';
import tee1 from 'src/assets/images/tees/royden-spike-tee.png';
import tee4 from 'src/assets/images/tees/skin-thread-tv-tee.png';
import tee2 from 'src/assets/images/tees/weakend-bronto-tee.png';
import tee5 from 'src/assets/images/tees/whiv-robot-tee.png';
import { Column, Container, Divider, LinkStyled, Row, Typography } from 'src/components';
import { GraphicsPageStyles as s } from 'src/pages';
import albumStyles from 'src/pages/graphics/albums/AlbumsPage.module.scss';
import AlucardAlbum from 'src/pages/graphics/albums/AlucardAlbum';
import AndrewLoehrAlbum from 'src/pages/graphics/albums/AndrewLoehrAlbum';
import AsecondtoolateAlbum from 'src/pages/graphics/albums/AsecondtoolateAlbum';
import ElephantomAlbum from 'src/pages/graphics/albums/ElephantomAlbum';
import RoydenAlbum from 'src/pages/graphics/albums/RoydenAlbum';
import teesStyles from 'src/pages/graphics/tees/TeesPage.module.scss';

type Thumb = { img: string; alt: string; contain?: boolean };

type GalleryCardProps = {
  title: string;
  overline: string;
  body: string;
  to: string;
  thumbs: Thumb[];
  framed?: boolean;
};

const GalleryCard = ({ title, overline, body, to, thumbs, framed }: GalleryCardProps) => (
  <Container styled variant={'darkish'} rounded={'extra'} full elevation={8}>
    <Container direction={'column'} full gap={2}>
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
      <div className={cn(s.thumbs, framed && s.framed)}>
        {thumbs.map(thumb => (
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
      <LinkStyled className={s.button} to={to}>
        View all
      </LinkStyled>
    </Container>
  </Container>
);

function GraphicsDashboard() {
  return (
    <Column gap={4}>
      <Typography variant={'body1'}>
        A few favorites from each collection. Every card links to the full set.
      </Typography>
      <Row gap={2} breakpoint={'md'}>
        <Container styled variant={'darkish'} rounded={'extra'} full elevation={8}>
          <Container direction={'column'} full gap={2}>
            <Column>
              <Typography variant={'h6'}>Album Artwork</Typography>
              <Typography variant={'overline'} color={'secondary'}>
                CD, Vinyl, Cassette
              </Typography>
            </Column>
            <Divider />
            <Typography variant={'body2'} gutter>
              Starting in 2000, I designed album artwork for bands from all over the country. It let
              me use both digital and illustrative skills and really stretch the imagination.
            </Typography>
            <Row className={albumStyles['content-frame-container']}>
              <Link
                to={'/graphics/albums'}
                aria-label={'View all albums'}
                className={cn(albumStyles['album-group'])}
              >
                <div className={albumStyles['active-reset']}>
                  <AlucardAlbum />
                </div>
              </Link>
              <Link
                to={'/graphics/albums'}
                aria-label={'View all albums'}
                className={cn(albumStyles['album-group'])}
              >
                <div className={albumStyles['active-reset']}>
                  <ElephantomAlbum />
                </div>
              </Link>
              <Link
                to={'/graphics/albums'}
                aria-label={'View all albums'}
                className={cn(albumStyles['album-group'])}
              >
                <div className={albumStyles['active-reset']}>
                  <AsecondtoolateAlbum />
                </div>
              </Link>
              <Link
                to={'/graphics/albums'}
                aria-label={'View all albums'}
                className={cn(albumStyles['album-group'])}
              >
                <div className={albumStyles['active-reset']}>
                  <AndrewLoehrAlbum />
                </div>
              </Link>
              <Link
                to={'/graphics/albums'}
                aria-label={'View all albums'}
                className={cn(albumStyles['album-group'])}
              >
                <div className={albumStyles['active-reset']}>
                  <RoydenAlbum />
                </div>
              </Link>
            </Row>
            <Container direction={'column'} full justify={'end'} variant={'static'}>
              <LinkStyled className={s.button} to={'/graphics/albums'}>
                View all
              </LinkStyled>
            </Container>
          </Container>
        </Container>
        <Container styled variant={'darkish'} rounded={'extra'} full elevation={8}>
          <Container direction={'column'} full gap={2}>
            <Column>
              <Typography variant={'h6'}>Tee Shirt Designs</Typography>
              <Typography variant={'overline'} color={'secondary'}>
                From concept to wearable
              </Typography>
            </Column>
            <Divider />
            <Typography variant={'body2'} gutter>
              I designed over 100 tee shirts for bands, companies, corporate outings, and events...
              mostly bands. Working with artists on how they wanted to brand themselves was a
              highlight of my career.
            </Typography>
            <Row className={teesStyles['content-frame-container']}>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee1} alt={'Royden spike tee'} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee2} alt={'The Weakend brontosaurus tee'} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee3} alt={'Alucard black tee'} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee4} alt={'Skin & Thread TV tee'} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee5} alt={'WHIV robot tee'} />
              </div>
            </Row>
            <LinkStyled className={s.button} to={'/graphics/tees'}>
              View all
            </LinkStyled>
          </Container>
        </Container>
      </Row>
      <Row gap={2} breakpoint={'md'}>
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
      <Row gap={2} breakpoint={'md'}>
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
