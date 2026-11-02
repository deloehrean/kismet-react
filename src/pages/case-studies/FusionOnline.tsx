import React from 'react';

import CmsHeroEntry from 'src/assets/images/case-studies/fusion/cms-hero-entry.jpg';
import FusionLive from 'src/assets/images/case-studies/fusion/fusionww-2026.jpg';
import LibraryButtons from 'src/assets/images/case-studies/fusion/library-buttons.jpg';
import LibraryForms from 'src/assets/images/case-studies/fusion/library-forms.jpg';
import Mark from 'src/assets/images/case-studies/fusion/rocketchips-mark.svg';
import FoCategory from 'src/assets/images/websites/fusion-online/fusion-online-category.jpg';
import FoHome from 'src/assets/images/websites/fusion-online/fusion-online-home.jpg';
import FoProduct from 'src/assets/images/websites/fusion-online/fusion-online-product.jpg';
import { LinkStyled, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Code, Section, Stats, Tile } from 'src/pages/case-studies/CaseStudyParts';

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
  { value: '4', label: 'Sites designed and built in one year' },
  { value: '25', label: 'Audit findings that became the roadmap' },
  { value: '2', label: 'Brands carried by one codebase' },
];

const SYSTEM = [
  { value: '871 → 102', label: 'Lines styled with utility classes' },
  { value: '52 → 96', label: 'Component style modules' },
];

const CARRIED = [
  { value: '109 of 109', label: 'Design tokens from my last build still live' },
  { value: '102', label: 'With the same values' },
  { value: '2024', label: 'Launch, on the brand I proposed' },
];

const FusionOnlineBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — The system'}
      title={'Out of Tailwind, into a component library'}
      lead={
        'The agency build styled most of its pages inline with utility classes, so no two headings or buttons quite matched, and every new page made it a little worse. I designed a component library and the architecture behind it, with a style module for each component. Rather than rip everything out at once, my team and I migrated one component at a time, so the store kept shipping while it changed underneath. Nobody had to stop the car to change the tires.'
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
      eyebrow={'02 — Fusion Online'}
      title={'The same store under Fusion’s name'}
      lead={
        'Late in 2023, Fusion decided to fold RocketChips into its own site, so customers would find one place to learn about the company and buy from it. The same codebase took on the new green brand. My last change was merged that October, and it launched in 2024 as the shop on fusionww.com.'
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
      eyebrow={'03 — The CMS'}
      title={'Content without a release'}
      lead={
        'On the old sites, every word went through a developer and waited for the next release. Marketing shouldn’t need a developer to fix a typo. I brought in a headless CMS and built pages from blocks the sales and marketing teams could fill in themselves: heroes, stats, features, lead-gen forms, benefit cards, and links across services, industries, and quality. When they hit publish, the change goes live on its own, with no build and no release.'
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
      eyebrow={'04 — What carried forward'}
      title={'Launched on the foundation I left'}
      lead={
        'I left in October 2023, before launch. The agency that picked the project up launched Fusion Online in 2024 on the branding I proposed, and built the rest of fusionww.com on the foundation I’d laid: the green palette, the type, the design tokens, and the header, search, and navigation. Every design token that was in the codebase when I left is still on the live site today, and a foundation that outlasts you is exactly what I set out to build.'
      }
    >
      <div className={s.pair}>
        <Tile img={FoHome} label={'My last build, October 2023'} ratio={1.44} top />
        <Tile img={FusionLive} label={'fusionww.com today'} ratio={1.44} top />
      </div>
      <Stats
        items={CARRIED}
        source={'Comparing the codebase at my last merge with the live site’s CSS, November 2026.'}
      />
    </Section>

    <Section
      eyebrow={'05 — My part'}
      title={'Design, direction, and code review'}
      lead={
        'I owned the design and direction for the whole rebrand: the new fusionww.com, Prosemi, RocketChips, and Fusion Online, which brought the services, twelve industries, quality, insights, and the shop together in one site that sales and marketing could publish to themselves. I led a team of three to five developers, set the front-end architecture they built on, and reviewed every change with them, so what we shipped stayed consistent from the first page to the last.'
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
  markAlt: 'The RocketChips mark',
  title: 'RocketChips to Fusion Online',
  meta: 'Product & UX · B2B ecommerce · Fusion Worldwide · 2023, launched 2024',
  summary: (
    <React.Fragment>
      Once RocketChips was live, I moved it onto a component library, and it grew into Fusion
      Online: one store and company site on one codebase, in a new green brand, on a CMS marketing
      could publish to themselves. I left before launch, and the team that carried it the rest of
      the way kept the brand I proposed and built on the foundation I set up. It still runs on both
      today.
    </React.Fragment>
  ),
  Body: FusionOnlineBody,
};

export default fusionOnline;
