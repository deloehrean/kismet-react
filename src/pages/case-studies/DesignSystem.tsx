import React from 'react';

import Alert from 'src/assets/images/case-studies/design-system/alert.jpg';
import Button from 'src/assets/images/case-studies/design-system/button.jpg';
import Chip from 'src/assets/images/case-studies/design-system/chip.jpg';
import CorvusAsk from 'src/assets/images/case-studies/design-system/corvus-ask.jpg';
import CorvusReport from 'src/assets/images/case-studies/design-system/corvus-report.jpg';
import CorvusSavedReports from 'src/assets/images/case-studies/design-system/corvus-saved-reports.jpg';
import DatePicker from 'src/assets/images/case-studies/design-system/date-picker.jpg';
import Mark from 'src/assets/images/case-studies/design-system/mark.svg';
import OverviewDark from 'src/assets/images/case-studies/design-system/overview-dark.jpg';
import Overview from 'src/assets/images/case-studies/design-system/overview.jpg';
import StatCard from 'src/assets/images/case-studies/design-system/stat-card.jpg';
import Table from 'src/assets/images/case-studies/design-system/table.jpg';
import PortalDashboard from 'src/assets/images/websites/hrl-portal/hrl-portal-dashboard.jpg';
import PortalEditOrganization from 'src/assets/images/websites/hrl-portal/hrl-portal-edit-organization.jpg';
import { LinkStyled, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Code, Section, Stats, Tile } from 'src/pages/case-studies/CaseStudyParts';

const LIBRARY = [
  { value: '52', label: 'Components' },
  { value: '7', label: 'Hooks' },
  { value: '46', label: 'Releases in six months' },
  { value: '0', label: 'Outside UI dependencies' },
];

const PRIMITIVES = [
  { value: '11 → 0', label: 'Radix packages, replaced in-house' },
  { value: '2', label: 'Runtime dependencies left' },
];

const AI = [
  { value: '7', label: 'Agent skills, one per component category' },
  { value: '51', label: 'HRL Portal files built on the library' },
];

const BUTTON_VARIANTS = `export const buttonVariants = cva(s.button, {
  variants: {
    variant: {
      contained: s['button--contained'],
      outlined: s['button--outlined'],
      ghost: s['button--ghost'],
    },
    theme: {
      primary: s['button--primary'],
      secondary: s['button--secondary'],
      destructive: s['button--destructive'],
      info: s['button--info'],
    },
    size: { xs: …, sm: …, md: …, lg: … },
  },
  defaultVariants: {
    variant: 'contained',
    theme: 'primary',
    size: 'md',
  },
});`;

const PORTAL_DIALOG = `<DialogFooter>
  <DialogClose asChild>
    <Button variant={'ghost'} theme={'info'} disabled={submitting}>
      Cancel
    </Button>
  </DialogClose>
  <Button type={'submit'} disabled={submitting}>
    {submitting ? 'Saving...' : 'Save category'}
  </Button>
</DialogFooter>`;

const DesignSystemBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — The problem'}
      title={'A brand that only lived in logo files'}
      lead={
        'The new apps were starting from a generic Tailwind and Radix starter kit and getting styled one page at a time, so every app was slowly drifting into its own look. The HRlogics brand needed to exist in code, once, so every app would look and behave like part of the same suite.'
      }
    >
      <Stats items={LIBRARY} source={'From the library’s release history, January to June 2026.'} />
    </Section>

    <Section
      eyebrow={'02 — Tokens first'}
      title={'Re-theme every app from one place'}
      lead={
        'Color, spacing, and type are tokens, redefined for dark mode, so one change reaches every app at once instead of being chased through each codebase. When the April 2026 palette refresh moved Info to a slate-to-blue midpoint and made Slate a full theme, that one change was all it took.'
      }
    >
      <div className={s.pair}>
        <Tile img={Overview} label={'The component overview, light'} ratio={0.89} />
        <Tile img={OverviewDark} label={'The same page, dark'} ratio={0.89} />
      </div>
    </Section>

    <Section
      eyebrow={'03 — The components'}
      title={'Fifty-two pieces, one look'}
      lead={
        'Forms, tables, dialogs, navigation, and layout each ship as their own import, so an app only loads what it uses. Every component shows its variants and states in the library’s own preview workspace, so a developer can see exactly what they’re getting before they reach for it.'
      }
    >
      <div className={s.pair}>
        <Tile img={Table} label={'Table, with sorting and an empty state'} ratio={2.13} />
        <Tile img={DatePicker} label={'Date picker and its states'} ratio={1.98} />
        <Tile img={Alert} label={'Alerts for every status'} ratio={1.88} />
        <Tile img={Chip} label={'Chips by theme and size'} ratio={2.17} />
      </div>
      <div className={s.pair}>
        <Tile img={Button} label={'Button: three variants across eight themes'} ratio={1.47} />
        <Tile img={StatCard} label={'Stat cards'} ratio={1.69} />
      </div>
    </Section>

    <Section
      eyebrow={'04 — No outside UI runtime'}
      title={'Built in-house, down to the focus trap'}
      lead={
        'Version 2.0 replaced all eleven Radix packages with the library’s own building blocks for slots, focus trapping, scroll locking, and animation. Owning those pieces meant the apps stopped inheriting someone else’s upgrade cycle, and later releases cleared out the last Tailwind holdovers.'
      }
    >
      <Stats items={PRIMITIVES} source={'From the 2.0 release, April 6, 2026.'} />
    </Section>

    <Section
      eyebrow={'05 — One pattern per job'}
      title={'Define it once, pick from it everywhere'}
      lead={
        'Button, Chip, and Alert are the reference implementations. They set the file layout, the variant rules, the theming, and the markup every other component follows. In an app, a button is a choice from that list, never a new style someone invents on the spot.'
      }
    >
      <div className={s.codes}>
        <Code
          code={BUTTON_VARIANTS}
          highlight={'theme'}
          label={'In the library: the button’s variants, defined once'}
        />
        <Code
          code={PORTAL_DIALOG}
          highlight={"theme={'info'}"}
          label={'In HRL Portal: a dialog footer that only picks from them'}
        />
      </div>
      <Typography variant={'body2'} className={s.lead}>
        HRL Portal’s user and organization dialogs became the template every form in a dialog
        follows.
      </Typography>
      <div className={s.pair}>
        <Tile
          img={PortalEditOrganization}
          label={'HRL Portal: editing an organization'}
          ratio={0.8}
        />
        <Tile img={PortalDashboard} label={'HRL Portal dashboard'} ratio={1.14} />
      </div>
    </Section>

    <Section
      eyebrow={'06 — Built for AI-assisted development'}
      title={'A library the coding assistants follow too'}
      lead={
        'AI coding assistants are part of how software gets written now, so I made sure they follow the same rules as everyone else. Each component category has a matching agent skill, a set of instructions the assistants read before they write code. A sync script, a drift check on install, and pre-commit hooks keep HRL Portal and Corvus on the documented API, so code written with AI help still looks like the rest of the suite.'
      }
    >
      <Stats items={AI} source={'From the library and the HRL Portal codebase.'} />
    </Section>

    <Section
      eyebrow={'07 — In the products'}
      title={'Two apps, one system'}
      lead={
        'HRL Portal and Corvus, the suite’s AI workforce analytics app, are both built on the library. Corvus turns a plain-English question into an answer with metrics, a chart, and a table, all made from the same parts, which is exactly the payoff a design system is for.'
      }
    >
      <div className={s.row3}>
        <Tile img={CorvusAsk} label={'Corvus: ask a question'} ratio={1.14} />
        <Tile img={CorvusReport} label={'Corvus: a saved report'} ratio={1.14} />
        <Tile img={CorvusSavedReports} label={'Corvus: reports'} ratio={1.14} />
      </div>
      <Typography variant={'body2'} className={s.lead}>
        The screenshots come from the real code, run offline against generated demo data.
      </Typography>
      <LinkStyled to={'/websites#site-hrlogics-portal'}>
        See HRL Portal on Websites &rarr;
      </LinkStyled>
    </Section>
  </React.Fragment>
);

const designSystem = {
  id: 'design-system',
  mark: Mark,
  markAlt: 'Component tiles in the HRlogics colors',
  title: 'HRlogics Design System',
  meta: 'Product & Engineering · Design system · 2025–2026',
  summary: (
    <React.Fragment>
      The React component library I designed and built so every new HRlogics app would look and
      behave like part of one suite: tokens for light and dark, fifty-two components with no outside
      UI dependencies, and rules that even the AI coding assistants follow.
    </React.Fragment>
  ),
  Body: DesignSystemBody,
};

export default designSystem;
