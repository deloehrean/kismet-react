import React from 'react';

import SiteWordpress from 'src/assets/images/case-studies/fusion/fusion-2022-wordpress.jpg';
import SiteRebrand from 'src/assets/images/case-studies/fusion/fusion-2023-rebrand.jpg';
import Mark from 'src/assets/images/case-studies/fusion/mark.svg';
import ProsemiHome from 'src/assets/images/websites/prosemi/prosemi-homepage.jpg';
import ProsemiQuality from 'src/assets/images/websites/prosemi/prosemi-quality-management.jpg';
import ProsemiServices from 'src/assets/images/websites/prosemi/prosemi-services.jpg';
import RcAccount from 'src/assets/images/websites/rocketchips/rocketchips-account.jpg';
import RcCategory from 'src/assets/images/websites/rocketchips/rocketchips-category.jpg';
import RcProduct from 'src/assets/images/websites/rocketchips/rocketchips-product.jpg';
import { LinkStyled, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Stats, Tile } from 'src/pages/case-studies/CaseStudyParts';

const FUSION_2023 = [
  { value: '$3B', label: 'Revenue' },
  { value: '62', label: 'Fortune 500 customers' },
  { value: '6B', label: 'Units shipped' },
  { value: '18', label: 'Locations' },
];

const ROCKETCHIPS_PROMISES = [
  { value: '0', label: 'Phone calls required' },
  { value: '< 24h', label: 'Quote turnaround' },
  { value: '60 sec.', label: 'Credit approval' },
  { value: '24/7', label: 'Real pricing' },
];

const AUDIT = [
  {
    found: 'Mobile is a mess',
    fix:
      'A full mobile pass, page by page: the header, the mega menu, a flyout for filters, the ' +
      'product page, the cart, checkout, and every account panel.',
    when: 'March – June 2023',
  },
  {
    found: 'The heading text on every page is in a different place',
    fix: 'One section header component and one page heading style, used everywhere.',
    when: 'April – May 2023',
  },
  {
    found: 'All fields red with nothing specific telling me what is wrong',
    fix: 'Validation that runs as you type, field by field, with messages that say what to fix.',
    when: 'February & September 2023',
  },
  {
    found: 'Filters should be alphabetized … Sort does not work',
    fix: 'Filter tags that show what is selected, a Clear All button, and a sort that works.',
    when: 'April – June 2023',
  },
  {
    found: 'Tabs feel like the idea wasn’t fully fleshed out',
    fix:
      'Every account panel redesigned: profile, addresses, orders, quotes, payments, and ' +
      'settings.',
    when: 'January – October 2023',
  },
  {
    found: 'Checkout should DEFINITELY not be accessible with nothing in it',
    fix: 'An empty checkout sends you back to the cart, and the empty cart got a page of its own.',
    when: 'December 2022 – March 2023',
  },
];

const FusionWorldwideBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — The starting point'}
      title={'A $3 billion distributor that sold by phone'}
      lead={
        'In 2022 Fusion’s website was a WordPress brochure. Every sale started with a phone call ' +
        'or a quote form. RocketChips, a self-service store built by an agency, was meant to ' +
        'change that, and it was half finished when I joined. I rebuilt fusionww.com in the 2023 ' +
        'rebrand, and it sent buyers to RocketChips.'
      }
    >
      <div className={s.pair}>
        <Tile img={SiteWordpress} label={'fusionww.com, 2022: what I inherited'} ratio={2.57} />
        <Tile img={SiteRebrand} label={'fusionww.com, 2023: the rebrand I built'} ratio={1.6} />
      </div>
      <Stats items={FUSION_2023} source={'Fusion’s own numbers, from its 2023 homepage.'} />
    </Section>

    <Section
      eyebrow={'02 — Prosemi'}
      title={'A second site in two weeks'}
      lead={
        'Prosemi, an electronics testing company in Southeast Asia that joined Fusion, needed a ' +
        'site to show its facilities and take requests for quotes. I designed and built it in ' +
        'November 2022 on Gatsby, set in Graphik like Fusion, and shipped it in two ' +
        'weeks.'
      }
    >
      <div className={s.row3}>
        <Tile img={ProsemiHome} label={'Home'} ratio={0.8} top />
        <Tile img={ProsemiServices} label={'Services'} ratio={0.8} top />
        <Tile img={ProsemiQuality} label={'Quality management'} ratio={0.8} top />
      </div>
      <LinkStyled to={'/websites#site-prosemi'}>See Prosemi on Websites &rarr;</LinkStyled>
    </Section>

    <Section
      eyebrow={'03 — The audit'}
      title={'Twenty-five problems in my first month'}
      lead={
        'A month in, I walked the store end to end and wrote down everything that was broken or ' +
        'inconsistent: spacing, headings, mobile, registration, filters, the account dashboard, ' +
        'and a checkout you could reach with an empty cart. That list became the team’s roadmap.'
      }
    >
      <ul className={s.audit}>
        {AUDIT.map(a => (
          <li key={a.found}>
            <blockquote>{a.found}</blockquote>
            <p>{a.fix}</p>
            <span>{a.when}</span>
          </li>
        ))}
      </ul>
    </Section>

    <Section
      eyebrow={'04 — RocketChips'}
      title={'Buying parts without a phone call'}
      lead={
        'The homepage made four promises, and the store had to keep them: search with real ' +
        'pricing, quotes back within a day, credit approved in a minute, and a checkout with no ' +
        'salesperson in the way.'
      }
    >
      <Stats items={ROCKETCHIPS_PROMISES} source={'From the RocketChips homepage, 2023.'} />
      <div className={s.row3}>
        <Tile img={RcCategory} label={'Category'} ratio={0.8} />
        <Tile img={RcProduct} label={'Product'} ratio={1.14} />
        <Tile img={RcAccount} label={'Order history'} ratio={1.14} />
      </div>
      <Typography variant={'body2'} className={s.lead}>
        RocketChips went on to become Fusion Online, the next case study.
      </Typography>
    </Section>
  </React.Fragment>
);

const fusionWorldwide = {
  id: 'fusion-worldwide',
  mark: Mark,
  markAlt: 'The Fusion mark',
  title: 'Fusion Worldwide',
  meta: 'Product & UX · Electronics distribution · 2022–2023',
  summary: (
    <React.Fragment>
      A $3 billion electronics distributor that sold by phone from a WordPress brochure. In one year
      I rebuilt fusionww.com in its 2023 rebrand, designed and built a site for Prosemi, its testing
      company, and audited and redesigned RocketChips, the store meant to replace the phone call.
    </React.Fragment>
  ),
  Body: FusionWorldwideBody,
};

export default fusionWorldwide;
