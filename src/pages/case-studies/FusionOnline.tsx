import React from 'react';

import CmsHeroEntry from 'src/assets/images/case-studies/fusion/cms-hero-entry.jpg';
import SiteWordpress from 'src/assets/images/case-studies/fusion/fusion-2022-wordpress.jpg';
import SiteRebrand from 'src/assets/images/case-studies/fusion/fusion-2023-rebrand.jpg';
import LibraryButtons from 'src/assets/images/case-studies/fusion/library-buttons.jpg';
import LibraryForms from 'src/assets/images/case-studies/fusion/library-forms.jpg';
import Mark from 'src/assets/images/case-studies/fusion/mark.svg';
import FoCategory from 'src/assets/images/websites/fusion-online/fusion-online-category.jpg';
import FoHome from 'src/assets/images/websites/fusion-online/fusion-online-home.jpg';
import FoProduct from 'src/assets/images/websites/fusion-online/fusion-online-product.jpg';
import RcAccount from 'src/assets/images/websites/rocketchips/rocketchips-account.jpg';
import RcCategory from 'src/assets/images/websites/rocketchips/rocketchips-category.jpg';
import RcProduct from 'src/assets/images/websites/rocketchips/rocketchips-product.jpg';
import { LinkStyled, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Code, Section, Stats, Tile } from 'src/pages/case-studies/CaseStudyParts';

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

const SYSTEM = [
  { value: '871 → 102', label: 'Lines styled with utility classes' },
  { value: '52 → 96', label: 'Component style modules' },
];

const FUSION_ONLINE = [
  { value: '$1.5B', label: 'Projected annual sales' },
  { value: '12,000+', label: 'Hardware products at launch' },
  { value: '675,000', label: 'Parts in the catalog today' },
  { value: '518', label: 'Manufacturers' },
];

const CMS = [
  { value: '10', label: 'Content blocks to build pages from' },
  { value: '0', label: 'Builds or releases needed to publish' },
];

const HEADLINE = 'the future of electronic component sourcing';

const HERO_BEFORE = `<Container className="homepage_hero_cta narrow-1000 flex flex-col center relative">
  <h1>
    ${HEADLINE}
    <span className="trade">&trade;</span>
  </h1>
  <p>
    Browse and buy from worldwide suppliers with actual pricing, 24/7.
  </p>
</Container>`;

const HERO_AFTER = `... on Hero {
  eyebrow
  title
  description
  image { url description }
  variant
  shape
}

<Hero
  eyebrow={eyebrow}
  title={title}
  description={description}
  image={image}
  variant={variant}
  shape={shape}
/>`;

const MY_PART = [
  { value: '3', label: 'Sites designed and built in one year' },
  { value: '25', label: 'Audit findings that became the roadmap' },
  { value: '2', label: 'Brands carried by one codebase' },
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

const FusionOnlineBody = () => (
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
      eyebrow={'02 — The audit'}
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
      eyebrow={'03 — The system'}
      title={'Out of Tailwind, into a component library'}
      lead={
        'The agency build styled most of its pages inline with utility classes, so no two ' +
        'headings or buttons quite matched. I designed a component library and the architecture ' +
        'behind it, with a style module for each component. Rather than swap everything at once, ' +
        'we decided as a team to migrate one component at a time, so the store kept shipping ' +
        'while it changed underneath.'
      }
    >
      <Stats items={SYSTEM} source={'From the repository, December 2022 to October 2023.'} />
      <div className={s.library}>
        <Tile img={LibraryButtons} label={'Buttons on dark and light'} ratio={1.18} />
        <Tile img={LibraryForms} label={'Form fields and their states'} ratio={0.51} />
      </div>
      <Typography variant={'body2'} className={s.lead}>
        Both are from the store’s component library page. I designed every piece and the
        architecture it runs on, the team built on that foundation, and every change came through my
        code review, so the whole library reads as one voice.
      </Typography>
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
    </Section>

    <Section
      eyebrow={'05 — Fusion Online'}
      title={'The same store under Fusion’s name'}
      lead={
        'Late in 2023, Fusion folded RocketChips into its own site. The same codebase took the ' +
        'new green brand, and my last change was merged that October. It launched in 2024 as the ' +
        'shop on fusionww.com.'
      }
    >
      <div className={s.row3}>
        <Tile img={FoHome} label={'Home'} ratio={1.14} />
        <Tile img={FoCategory} label={'Category'} ratio={0.8} />
        <Tile img={FoProduct} label={'Product'} ratio={1.14} />
      </div>
      <Stats
        items={FUSION_ONLINE}
        source={
          'Sales projection from Fusion; product counts from the fusionww.com shop in 2025 and ' +
          'Fusion’s public catalog in 2026.'
        }
      />
    </Section>

    <Section
      eyebrow={'06 — The CMS'}
      title={'Content without a release'}
      lead={
        'Every word on the old sites went through the developers and waited for the next ' +
        'release. I brought in a headless CMS and built the pages from blocks the sales and ' +
        'marketing teams could fill in themselves: heroes, stats, features, lead-gen forms, ' +
        'benefit cards, and links across services, industries, and quality. When they publish, ' +
        'the change goes live on its own, with no build and no release.'
      }
    >
      <Stats items={CMS} source={'From the CMS integration in the codebase.'} />
      <Typography variant={'body2'} className={s.lead}>
        Take the homepage headline. On RocketChips it was typed into the page itself, so changing it
        meant a developer, a build, and a release. With the CMS, the same line is a field in a Hero
        block, and the page simply lays out whatever marketing publishes.
      </Typography>
      <div className={s.codes}>
        <Code code={HERO_BEFORE} highlight={HEADLINE} label={'Before: the headline in the code'} />
        <Code code={HERO_AFTER} highlight={'title'} label={'After: the Hero block asks the CMS'} />
      </div>
      <Tile img={CmsHeroEntry} label={'The same line as a CMS entry (recreated)'} ratio={2.29} />
    </Section>

    <Section
      eyebrow={'07 — My part'}
      title={'Design, direction, and code review'}
      lead={
        'I owned the design and the direction for the whole rebrand: the new fusionww.com, ' +
        'RocketChips, and Fusion Online, which brought the services, twelve industries, quality, ' +
        'insights, and the shop together in one site, on a CMS the sales and marketing teams ' +
        'could publish to themselves. I led a team of three to five developers, set the front-end ' +
        'architecture they built on, and reviewed every change with them.'
      }
    >
      <Stats items={MY_PART} source={'From my audit notes and the sites themselves.'} />
      <Typography variant={'body2'} className={s.lead}>
        The screenshots come from the real code, run against demo prices and a demo customer.
      </Typography>
      <LinkStyled to={'/websites#site-rocketchips'}>See both stores on Websites &rarr;</LinkStyled>
    </Section>
  </React.Fragment>
);

const fusionOnline = {
  id: 'fusion-online',
  mark: Mark,
  markAlt: 'The Fusion mark',
  title: 'RocketChips to Fusion Online',
  meta: 'Product & UX · B2B ecommerce · Fusion Worldwide · 2022–2023, launched 2024',
  summary: (
    <React.Fragment>
      A self-service parts store for one of the world&rsquo;s largest independent electronics
      distributors. I audited the agency build I inherited, then redesigned it and led the team that
      rebuilt it as RocketChips and carried it into Fusion Online, the shop on fusionww.com.
    </React.Fragment>
  ),
  Body: FusionOnlineBody,
};

export default fusionOnline;
