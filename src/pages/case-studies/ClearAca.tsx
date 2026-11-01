import React from 'react';

import Mark from 'src/assets/images/case-studies/clear-aca/mark.svg';
import OldAdminMenu from 'src/assets/images/case-studies/clear-aca/old-admin-menu.jpg';
import ReportingCritique from 'src/assets/images/case-studies/clear-aca/reporting-critique.jpg';
import ReportingBefore from 'src/assets/images/process/process-1-reporting-page-review.jpg';
import AddEmployee from 'src/assets/images/websites/clear-aca/clear-aca-add-employee.jpg';
import AdminManagement from 'src/assets/images/websites/clear-aca/clear-aca-admin-management.jpg';
import AllEmployees from 'src/assets/images/websites/clear-aca/clear-aca-all-employees.jpg';
import ReportingHome from 'src/assets/images/websites/clear-aca/clear-aca-reporting-home.jpg';
import { LinkStyled } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Stats, Tile } from 'src/pages/case-studies/CaseStudyParts';

const AUDIT = [
  {
    found: 'Not vertically centered',
    fix: 'The logo got its own header bar, centered top to bottom.',
    when: 'Header',
  },
  {
    found: 'Not horizontally centered',
    fix: 'Navigation moved into a sidebar, so it no longer had to balance against the logo.',
    when: 'Navigation',
  },
  {
    found: 'Banner is clunky and takes up too much space',
    fix: 'The banner came out. The product carried the new name itself.',
    when: 'Banner',
  },
  {
    found: 'Too little margin / padding',
    fix: 'Cards and tables got consistent padding, inside and between.',
    when: 'Spacing',
  },
  {
    found: 'Too much of a gap',
    fix: 'Each set of numbers got its own card in one grid, so nothing floats.',
    when: 'Layout',
  },
  {
    found: 'Should be aligned horizontally or vertically',
    fix: 'Buttons moved inside the card they act on, lined up with its edges.',
    when: 'Alignment',
  },
];

const NAVIGATION = [
  { value: '100+', label: 'Links across the old menus' },
  { value: '~30', label: 'Links in the new sidebar' },
  { value: '24', label: 'In the admin menu alone, four levels deep' },
  { value: '8 → 6', label: 'Top-level menus to sidebar sections' },
];

const ClearAcaBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — Before'}
      title={'A new name on an old product'}
      lead={
        'Clear ACA started life as SyncStream, a platform employers used to track and report ' +
        'Affordable Care Act compliance. When it joined HRlogics, the only sign of the change was ' +
        'a banner announcing the new name, above the old logo, the old navigation, and a 2015 footer.'
      }
    />

    <Section
      eyebrow={'02 — The audit'}
      title={'Marking up the page every client opened'}
      lead={
        'I started with the reporting page, the first screen most clients saw, and marked up ' +
        'everything working against them. Each note became part of the brief for the redesign.'
      }
      figure={
        <Tile img={ReportingCritique} label={'My markup of the reporting page'} ratio={1.23} />
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
      eyebrow={'03 — Navigation'}
      title={'Over a hundred links down to about thirty'}
      lead={
        'The old navigation ran past a hundred links. The admin menu alone held twenty-four, ' +
        'nested up to four levels deep, and the rest of the menus repeated close to a dozen ' +
        'links to the same pages. Eight top-level menus became six sections in a collapsible ' +
        'sidebar of about thirty links, with the admin tools in short, labeled groups.'
      }
      figure={
        <Tile
          img={OldAdminMenu}
          label={'The old admin menu, recreated from its real structure'}
          ratio={1.23}
        />
      }
    >
      <Stats
        items={NAVIGATION}
        source={'Old totals are approximate; the new count is from the shipped sidebar.'}
      />
    </Section>

    <Section
      eyebrow={'04 — The redesign'}
      title={'The same data, with room to read it'}
      lead={
        'Reporting Home kept every number clients relied on and gave each set its own card: ' +
        'current year plans, the employee breakdown, offers of coverage, employee counts, and ' +
        'child companies, with the actions for each card inside it.'
      }
    >
      <div className={s.pair}>
        <Tile img={ReportingBefore} label={'Before'} ratio={1.23} />
        <Tile img={ReportingHome} label={'After'} ratio={0.87} />
      </div>
    </Section>

    <Section
      eyebrow={'05 — Across the product'}
      title={'One system on every screen'}
      lead={
        'The same cards, tables, forms, and sidebar carried through the rest of the platform, ' +
        'from employee tracking to the year-end process to company administration.'
      }
    >
      <div className={s.row3}>
        <Tile img={AllEmployees} label={'All Employees'} ratio={0.84} />
        <Tile img={AddEmployee} label={'Year-end process, employee details'} ratio={0.91} />
        <Tile img={AdminManagement} label={'Company administration'} ratio={0.8} />
      </div>
    </Section>

    <Section
      eyebrow={'06 — What it led to'}
      title={'The first version of the design system'}
      lead={
        'I did both the design and the build, on a refactored front end. Its components became ' +
        'the first version of the library behind the whole HRlogics suite. The new experience ' +
        'improved every metric we tracked, and its look and feel helped lead to the product ' +
        'being sold to another company.'
      }
    >
      <LinkStyled to={'/websites#site-clear-aca'}>See Clear ACA on Websites &rarr;</LinkStyled>
    </Section>
  </React.Fragment>
);

const clearAca = {
  id: 'clear-aca',
  mark: Mark,
  markFill: '#111A75',
  markInset: true,
  markAlt: 'The Clear ACA wordmark',
  title: 'Clear ACA',
  meta: 'Product & UX · ACA compliance platform · 2024',
  gated: true,
  summary: (
    <React.Fragment>
      Clear ACA started life as SyncStream and still looked like it. I audited the product,
      redesigned it, and rebuilt the front end myself, and that front end became the first version
      of the component library behind the whole HRlogics suite.
    </React.Fragment>
  ),
  Body: ClearAcaBody,
};

export default clearAca;
