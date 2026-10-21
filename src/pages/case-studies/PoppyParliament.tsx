import React from 'react';

import cn from 'clsx';

import CampHappyHour from 'src/assets/images/case-studies/poppy/camp-happy-hour.jpg';
import CampHuttonSmith from 'src/assets/images/case-studies/poppy/camp-hutton-smith.jpg';
import CampIndustry from 'src/assets/images/case-studies/poppy/camp-industry-night.jpg';
import CampMardiGras from 'src/assets/images/case-studies/poppy/camp-mardi-gras.jpg';
import CampNewYears from 'src/assets/images/case-studies/poppy/camp-new-years.jpg';
import CampPhoneBox from 'src/assets/images/case-studies/poppy/camp-phone-box.jpg';
import CampRugby from 'src/assets/images/case-studies/poppy/camp-rugby-night.jpg';
import CampRugbyWorldCup from 'src/assets/images/case-studies/poppy/camp-rugby-world-cup.jpg';
import CampStPatricks from 'src/assets/images/case-studies/poppy/camp-st-patricks-day.jpg';
import CampTrivia from 'src/assets/images/case-studies/poppy/camp-trivia.jpg';
import CampValentines from 'src/assets/images/case-studies/poppy/camp-valentines-tea.jpg';
import Concept1 from 'src/assets/images/case-studies/poppy/concept-01.jpg';
import Concept2 from 'src/assets/images/case-studies/poppy/concept-02.jpg';
import Concept3 from 'src/assets/images/case-studies/poppy/concept-03.jpg';
import CovidAnnouncement from 'src/assets/images/case-studies/poppy/covid-announcement.jpg';
import CovidPostponed from 'src/assets/images/case-studies/poppy/covid-events-postponed.jpg';
import CovidFoundersAfter from 'src/assets/images/case-studies/poppy/covid-founders-after.jpg';
import CovidFoundersBefore from 'src/assets/images/case-studies/poppy/covid-founders-before.jpg';
import KitBloody from 'src/assets/images/case-studies/poppy/covid-kit-bloody-mary.jpg';
import KitMoscow from 'src/assets/images/case-studies/poppy/covid-kit-moscow-mule.jpg';
import KitVodka from 'src/assets/images/case-studies/poppy/covid-kit-vodka-tonic.jpg';
import CovidPythonAfter from 'src/assets/images/case-studies/poppy/covid-python-after.jpg';
import CovidPythonBefore from 'src/assets/images/case-studies/poppy/covid-python-before.jpg';
import CovidSickDeals from 'src/assets/images/case-studies/poppy/covid-sick-deals.jpg';
import GiftCards from 'src/assets/images/case-studies/poppy/gift-cards.jpg';
import LogoBlack from 'src/assets/images/case-studies/poppy/logo-full-black.png';
import MarkRed from 'src/assets/images/case-studies/poppy/mark-red.svg';
import MenuBeer from 'src/assets/images/case-studies/poppy/menu-beer.jpg';
import MenuCask from 'src/assets/images/case-studies/poppy/menu-cask.jpg';
import MenuDraft from 'src/assets/images/case-studies/poppy/menu-draft.jpg';
import MenuHutton from 'src/assets/images/case-studies/poppy/menu-hutton-smith-draft.jpg';
import MerchTee from 'src/assets/images/case-studies/poppy/merch-st-pats-tee.jpg';
import MerchBack from 'src/assets/images/case-studies/poppy/merch-support-local-back.jpg';
import Banner from 'src/assets/images/case-studies/poppy/print-st-patricks-banner.svg';
import { Divider, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Tile } from 'src/pages/case-studies/CaseStudyParts';

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
  { img: CampRugbyWorldCup, label: 'Rugby World Cup', ratio: 1 },
  { img: CampTrivia, label: 'Trivia', ratio: 1 },
  { img: CampNewYears, label: "New Year's Party", ratio: 1 },
  { img: CampRugby, label: 'Rugby Night', ratio: 1 },
  { img: CampMardiGras, label: 'Mardi Gras', ratio: 1 },
  { img: CampValentines, label: 'Valentines Tea', ratio: 1 },
  { img: CampPhoneBox, label: 'Phone Box', ratio: 1 },
  { img: CampHuttonSmith, label: 'Hutton & Smith takeover', ratio: 1 },
  { img: CampStPatricks, label: "St Patrick's Day", ratio: 1 },
  { img: CampHappyHour, label: 'Happy Hour', ratio: 0.83 },
  { img: CampIndustry, label: 'Industry Night', ratio: 1.78 },
];

const PoppyParliamentBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — The mark'}
      title={'Three routes, one poppy'}
      lead={
        'Early directions explored the pub name, the flower, and the parliament reference. The chosen route keeps the poppy as a standalone mark so it can shrink to a stamp.'
      }
    >
      <div className={cn(s.row3, s.concepts)}>
        {[Concept1, Concept2, Concept3].map((c, i) => (
          <figure key={i} className={s.tile}>
            <img src={c} alt={`Logo concept ${i + 1}`} loading={'lazy'} />
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

    <Section eyebrow={'02 — Palette & type'} title={'Four colors, four faces'}>
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
      lead={'The same two colors and the standalone mark, applied across physical goods.'}
    >
      <div className={s.row3}>
        <Tile img={MerchTee} label={"St Patrick's Day tee"} ratio={1.49} />
        <Tile img={MerchBack} label={'Support Local — back'} ratio={0.96} />
        <Tile img={GiftCards} label={'Gift cards'} ratio={1.29} />
      </div>
      <Typography variant={'body2'} className={s.lead}>
        The menus were where the identity did its daily work &mdash; four lists, reprinted as the
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
        <figcaption>
          St Patrick&rsquo;s Day banner &mdash; supplied as AI, EPS, PSD, and SVG
        </figcaption>
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
      lead={
        'Within three weeks the pub went from booking tap events to closing its doors. The artwork did not get redesigned — it got reissued.'
      }
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
  </React.Fragment>
);

const poppyParliament = {
  id: 'poppy-parliament',
  mark: MarkRed,
  markFill: '#FFFFFF',
  markInset: true,
  markAlt: 'The Poppy & Parliament mark',
  title: 'The Poppy & Parliament',
  meta: 'Identity · British pub · Huntsville, AL · 2019–2020',
  summary: (
    <React.Fragment>
      A full identity for a British pub &mdash; mark, type system, menus, merch, print, and a year
      of social campaigns. Then March 2020 arrived, and the same system had to carry closure notices
      and a takeout pivot.
    </React.Fragment>
  ),
  Body: PoppyParliamentBody,
};

export default poppyParliament;
