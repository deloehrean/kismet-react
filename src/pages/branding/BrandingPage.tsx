import React from 'react';

import cn from 'clsx';

import { Column, Divider, PageHeading, Typography } from 'src/components';
import { BrandingStyles as s } from 'src/pages/branding';
import LogoBlack from 'src/assets/images/branding/poppy/logo-full-black.png';
import MarkRed from 'src/assets/images/branding/poppy/mark-red.svg';
import Concept1 from 'src/assets/images/branding/poppy/concept-01.jpg';
import Concept2 from 'src/assets/images/branding/poppy/concept-02.jpg';
import Concept3 from 'src/assets/images/branding/poppy/concept-03.jpg';
import MerchTee from 'src/assets/images/branding/poppy/merch-st-pats-tee.jpg';
import MerchFront from 'src/assets/images/branding/poppy/merch-support-local-front.jpg';
import MerchBack from 'src/assets/images/branding/poppy/merch-support-local-back.jpg';
import GiftCards from 'src/assets/images/branding/poppy/gift-cards.jpg';
import Banner from 'src/assets/images/branding/poppy/print-st-patricks-banner.svg';
import MenuBeer from 'src/assets/images/branding/poppy/menu-beer.jpg';
import MenuCask from 'src/assets/images/branding/poppy/menu-cask.jpg';
import MenuDraft from 'src/assets/images/branding/poppy/menu-draft.jpg';
import MenuHutton from 'src/assets/images/branding/poppy/menu-hutton-smith-draft.jpg';
import CampHappyHour from 'src/assets/images/branding/poppy/camp-happy-hour.jpg';
import CampIndustry from 'src/assets/images/branding/poppy/camp-industry-night.jpg';
import CampNewYears from 'src/assets/images/branding/poppy/camp-new-years.jpg';
import CampRugby from 'src/assets/images/branding/poppy/camp-rugby-night.jpg';
import CampMardiGras from 'src/assets/images/branding/poppy/camp-mardi-gras.jpg';
import CampValentines from 'src/assets/images/branding/poppy/camp-valentines-tea.jpg';
import CampPhoneBox from 'src/assets/images/branding/poppy/camp-phone-box.jpg';
import CovidFoundersBefore from 'src/assets/images/branding/poppy/covid-founders-before.jpg';
import CovidFoundersAfter from 'src/assets/images/branding/poppy/covid-founders-after.jpg';
import CovidPythonBefore from 'src/assets/images/branding/poppy/covid-python-before.jpg';
import CovidPythonAfter from 'src/assets/images/branding/poppy/covid-python-after.jpg';
import CovidAnnouncement from 'src/assets/images/branding/poppy/covid-announcement.jpg';
import CovidPostponed from 'src/assets/images/branding/poppy/covid-events-postponed.jpg';
import CovidSickDeals from 'src/assets/images/branding/poppy/covid-sick-deals.jpg';
import KitMoscow from 'src/assets/images/branding/poppy/covid-kit-moscow-mule.jpg';
import KitBloody from 'src/assets/images/branding/poppy/covid-kit-bloody-mary.jpg';
import KitVodka from 'src/assets/images/branding/poppy/covid-kit-vodka-tonic.jpg';

// Palette read straight out of the logo SVGs
const PALETTE = [
  { hex: '#CF1C21', name: 'Poppy Red' },
  { hex: '#26110F', name: 'Ink' },
  { hex: '#331612', name: 'Mark Brown' },
  { hex: '#FFFFFF', name: 'Paper' },
];

const TYPE = [
  { face: 'Cheddar Gothic', role: 'Display / headlines' },
  { face: 'Yonkers', role: 'Feature lettering' },
  { face: 'Goudy Mediaeval', role: 'Pub character, menus' },
  { face: 'Archivo Narrow', role: 'Body / listings' },
];

// Each piece was cut to a platform spec - square for Instagram, 1.91:1 for a
// Facebook share, 4:1 for a printed banner. `ratio` is the file's true
// width/height, so nothing gets cropped and no caption loses its wording.
const CAMPAIGNS = [
  { img: CampNewYears, label: "New Year's Party", ratio: 1 },
  { img: CampRugby, label: 'Rugby Night', ratio: 1 },
  { img: CampMardiGras, label: 'Mardi Gras', ratio: 1 },
  { img: CampValentines, label: 'Valentines Tea', ratio: 1 },
  { img: CampPhoneBox, label: 'Phone Box', ratio: 1 },
  { img: CampHappyHour, label: 'Happy Hour', ratio: 0.83 },
  { img: CampIndustry, label: 'Industry Night', ratio: 1.78 },
];

const Tile = ({ img, label, ratio = 1 }: any) => (
  <figure className={s.tile}>
    <img src={img} alt={label} style={{ ['--tile-ratio' as any]: ratio }} />
    <figcaption>{label}</figcaption>
  </figure>
);

const Section = ({ eyebrow, title, lead, children }: any) => (
  <section className={s.section}>
    <div className={s['section-head']}>
      <Typography variant={'overline'} color={'primary'}>
        {eyebrow}
      </Typography>
      <Typography variant={'h3'}>{title}</Typography>
      {lead && (
        <Typography variant={'body2'} className={s.lead}>
          {lead}
        </Typography>
      )}
    </div>
    {children}
  </section>
);

function BrandingPage() {
  return (
    <Column gap={6}>
      <PageHeading
        title={'Branding'}
        subtitle={'Identity systems, built to hold together everywhere they land'}
        divider
      />

      <header className={s.hero}>
        <img className={s['hero-mark']} src={MarkRed} alt={'The Poppy & Parliament mark'} />
        <div>
          <Typography variant={'h2'}>The Poppy &amp; Parliament</Typography>
          <Typography variant={'subtitle1'} transform={'uppercase'} gutter>
            British pub &middot; Huntsville, AL &middot; 2019&ndash;2020
          </Typography>
          <Typography variant={'body2'}>
            A full identity for a British pub &mdash; mark, type system, menus, merch, print, and a
            year of social campaigns. Then March 2020 arrived, and the same system had to carry
            closure notices and a takeaway pivot.
          </Typography>
        </div>
      </header>

      <Section
        eyebrow={'01 — The mark'}
        title={'Three routes, one poppy'}
        lead={'Early directions explored the pub name, the flower and the parliament reference. The chosen route keeps the poppy as a standalone mark so it can shrink to a stamp.'}
      >
        <div className={cn(s.row3, s.concepts)}>
          {[Concept1, Concept2, Concept3].map((c, i) => (
            <figure key={i} className={s.tile}>
              <img src={c} alt={`Logo concept ${i + 1}`} />
              <figcaption>Concept {`0${i + 1}`}</figcaption>
            </figure>
          ))}
        </div>
        <div className={s.lockups}>
          <div className={s['lockup-light']}>
            <img src={LogoBlack} alt={'Full lockup, dark on light'} />
          </div>
          <div className={s['lockup-dark']}>
            <img src={MarkRed} alt={'Poppy mark'} />
          </div>
        </div>
      </Section>

      <Section eyebrow={'02 — Palette & type'} title={'Four colours, four faces'}>
        <div className={s.swatches}>
          {PALETTE.map(c => (
            <div key={c.hex} className={s.swatch}>
              <span style={{ background: c.hex }} />
              <strong>{c.name}</strong>
              <code>{c.hex}</code>
            </div>
          ))}
        </div>
        <ul className={s.typelist}>
          {TYPE.map(t => (
            <li key={t.face}>
              <strong>{t.face}</strong>
              <span>{t.role}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow={'03 — In the wild'}
        title={'Merch, print, and gift cards'}
        lead={'The same two colours and the standalone mark, applied across physical goods.'}
      >
        <div className={s.row3}>
          <Tile img={MerchTee} label={"St Patrick's Day tee"} ratio={1.49} />
          <Tile img={MerchBack} label={'Support Local — back'} ratio={0.96} />
          <Tile img={GiftCards} label={'Gift cards'} ratio={1.29} />
        </div>
        {/*<Tile img={MerchFront} label={'Support Local — front (4:1 banner)'} ratio={4} />*/}
        <Typography variant={'body2'} className={s.lead}>
          The menus are where the identity does its daily work &mdash; four lists, reprinted as the
          taps changed.
        </Typography>
        <div className={s.row4}>
          <Tile img={MenuDraft} label={'Draft list'} ratio={0.71} />
          <Tile img={MenuCask} label={'Cask list'} ratio={0.71} />
          <Tile img={MenuBeer} label={'Beer list'} ratio={0.77} />
          <Tile img={MenuHutton} label={'Hutton & Smith takeover'} ratio={0.71} />
        </div>
        <figure className={s.banner}>
          <img src={Banner} alt={"St Patrick's Day banner"} />
          <figcaption>St Patrick&rsquo;s Day banner &mdash; supplied as AI, EPS, PSD and SVG</figcaption>
        </figure>
      </Section>

      <Section
        eyebrow={'04 — Campaign cadence'}
        title={'A year of events'}
        lead={'Thirteen campaigns across 2019 and early 2020, each sized for Instagram and Facebook.'}
      >
        <div className={s.grid}>
          {CAMPAIGNS.map(c => (
            <Tile key={c.label} img={c.img} label={c.label} ratio={c.ratio} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section
        eyebrow={'05 — March 2020'}
        title={'The same system, under pressure'}
        lead={'Within three weeks the pub went from booking tap events to closing its doors. The artwork did not get redesigned — it got reissued.'}
      >
        <div className={s.pair}>
          <Tile img={CovidFoundersBefore} label={'Founders tap event — announced'} ratio={1} />
          <Tile img={CovidFoundersAfter} label={'… and postponed'} ratio={1} />
        </div>
        <div className={s.pair}>
          <Tile img={CovidPythonBefore} label={'Monty Python night — announced'} ratio={1.9} />
          <Tile img={CovidPythonAfter} label={'… and postponed'} ratio={1.9} />
        </div>
        <div className={s.row3}>
          <Tile img={CovidAnnouncement} label={'Coronavirus announcement'} ratio={1} />
          <Tile img={CovidPostponed} label={'All events postponed'} ratio={1} />
          <Tile img={CovidSickDeals} label={'“Sick Deals” — trading through'} ratio={1} />
        </div>
        <Typography variant={'body2'} className={s.lead}>
          Then the pivot: cocktail starter kits, sold to take home.
        </Typography>
        <div className={s.row3}>
          <Tile img={KitMoscow} label={'Moscow Mule kit'} ratio={0.75} />
          <Tile img={KitBloody} label={'Bloody Mary kit'} ratio={0.75} />
          <Tile img={KitVodka} label={'Vodka Tonic kit'} ratio={1.33} />
        </div>
      </Section>
    </Column>
  );
}

export default BrandingPage;
