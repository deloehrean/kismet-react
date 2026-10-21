import React from 'react';

import cn from 'clsx';

import AdGrandOpening from 'src/assets/images/case-studies/solstice/ad-grand-opening.jpg';
import CardBack from 'src/assets/images/case-studies/solstice/card-back.jpg';
import CardFront from 'src/assets/images/case-studies/solstice/card-front.jpg';
import ExploreArc from 'src/assets/images/case-studies/solstice/explore-arc.jpg';
import ExploreSoulstice from 'src/assets/images/case-studies/solstice/explore-soulstice.jpg';
import GiftBack from 'src/assets/images/case-studies/solstice/gift-back.jpg';
import GiftFront from 'src/assets/images/case-studies/solstice/gift-front.jpg';
import Letterhead from 'src/assets/images/case-studies/solstice/letterhead.jpg';
import MarkLockup from 'src/assets/images/case-studies/solstice/mark-lockup.png';
import Mark from 'src/assets/images/case-studies/solstice/mark.png';
import SignPanelMark from 'src/assets/images/case-studies/solstice/sign-panel-mark.jpg';
import SignPanelType from 'src/assets/images/case-studies/solstice/sign-panel-type.jpg';
import SignWordmark from 'src/assets/images/case-studies/solstice/sign-wordmark.jpg';
import Web2026 from 'src/assets/images/case-studies/solstice/web-2026.jpg';
import WebCompFirst from 'src/assets/images/case-studies/solstice/web-comp-01.jpg';
import WebCompFinal from 'src/assets/images/case-studies/solstice/web-comp-final.jpg';
import WindowSign from 'src/assets/images/case-studies/solstice/window-sign.jpg';
import { LinkStyled, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Tile } from 'src/pages/case-studies/CaseStudyParts';

// Sampled from the print PDFs - the type and band colour are one swatch, the
// brush strokes a lighter one laid over the gold.
const PALETTE = [
  { hex: '#DE6A26', name: 'Band Orange' },
  { hex: '#EB7D31', name: 'Brush Orange' },
  { hex: '#FAD07A', name: 'Sun Gold' },
  { hex: '#FFFFFF', name: 'Paper' },
];

// One family throughout - packaged with every InDesign file.
const TYPE = [
  { face: 'Garamond Regular', role: 'Wordmark, addresses' },
  { face: 'Garamond, letterspaced', role: '"massage therapy" descriptor' },
  { face: 'Garamond Italic', role: 'Titles and credentials' },
  { face: 'Garamond Bold', role: 'Ad headlines' },
];

const SolsticeBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — The mark'}
      title={'Three routes to a sunrise'}
      lead={
        'Early routes tried a sun rising over a horizon and a clean geometric arc. The chosen mark ' +
        'is painterly instead: loose orange strokes over a gold field, warm and physical rather ' +
        'than clinical.'
      }
    >
      <div className={cn(s.row3, s.concepts)}>
        <Tile img={ExploreSoulstice} label={'"Soulstice" horizon route'} />
        <Tile img={ExploreArc} label={'Arc route'} />
        <Tile img={Mark} label={'Final mark'} />
      </div>
      <div className={s.lockups}>
        <div className={s['lockup-light']}>
          <img src={SignWordmark} alt={'Wordmark lockup'} loading={'lazy'} />
        </div>
        <div className={s['lockup-light']}>
          <img src={MarkLockup} alt={'Full lockup'} loading={'lazy'} />
        </div>
      </div>
    </Section>

    <Section eyebrow={'02 — Palette & type'} title={'Two oranges, one gold, one serif'}>
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
      title={'Cards, certificates, and signs'}
      lead={
        'Every print piece splits along the same torn brush edge: white above for the mark, ' +
        'orange below for the details.'
      }
    >
      <div className={s.row4}>
        <Tile img={CardFront} label={'Business card — front'} ratio={0.59} />
        <Tile img={CardBack} label={'Business card — back'} ratio={0.59} />
        <Tile img={GiftFront} label={'Gift certificate — front'} ratio={1} />
        <Tile img={GiftBack} label={'Gift certificate — back'} ratio={1} />
      </div>
      <div className={s.row3}>
        <Tile img={AdGrandOpening} label={'Grand opening ad'} ratio={0.83} />
        <Tile img={Letterhead} label={'Letterhead'} ratio={0.77} />
        <Tile img={WindowSign} label={'Window sign'} ratio={0.64} />
      </div>
      <Typography variant={'body2'} className={s.lead}>
        At sign scale the system drops to its essentials &mdash; the mark on one panel, the promise
        and the phone number on the other.
      </Typography>
      <div className={s.pair}>
        <Tile img={SignPanelMark} label={'Exterior sign — mark panel'} ratio={2.73} />
        <Tile img={SignPanelType} label={'Exterior sign — type panel'} ratio={2.73} />
      </div>
    </Section>

    <Section
      eyebrow={'04 — On screen'}
      title={'The same sun, two websites apart'}
      lead={
        'The 2008 site reused the print system: the mark as the centre panel of the header, the ' +
        'brush texture either side, and the orange band carrying the descriptor. The 2026 rebuild ' +
        'started from scratch, and the mark was the one thing that came along unchanged.'
      }
    >
      <div className={s.row3}>
        <Tile img={WebCompFirst} label={'2008 — first comp'} ratio={2.49} />
        <Tile img={WebCompFinal} label={'2008 — final comp'} ratio={1.44} />
        <Tile img={Web2026} label={'2026 — rebuild'} ratio={1.54} />
      </div>
      <LinkStyled to={'/websites#site-solstice-massage-therapy'}>
        See the 2026 site &rarr;
      </LinkStyled>
    </Section>
  </React.Fragment>
);

const solstice = {
  id: 'solstice',
  mark: Mark,
  // the mark's own gold field, so the square tile reads as one piece
  markFill: '#FAD382',
  markAlt: 'The Solstice mark',
  title: 'Solstice Massage Therapy',
  meta: 'Identity · Massage studio · Ferndale, MI · 2007, site rebuilt 2026',
  summary: (
    <React.Fragment>
      A grand-opening identity for a massage studio on Woodward Avenue &mdash; a painted sun, two
      warm oranges, and one serif family, carried from the business card to the storefront sign to
      the website.
    </React.Fragment>
  ),
  Body: SolsticeBody,
};

export default solstice;
