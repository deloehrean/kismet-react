import React from 'react';

import { Column, Container, LinkStyled, PageHeading, Typography } from 'src/components';
import { Resume } from 'src/components/Resume';
import { HomePageStyles as s } from 'src/pages';

const PROOF = [
  { figure: '25+', label: 'years designing, building, and shipping' },
  { figure: '400+', label: 'enterprise clients on the platform I lead' },
  { figure: '$1.5B', label: 'projected annual sales on a platform I owned' },
  { figure: '2007', label: 'working remote since' },
];

const CAPABILITIES = [
  {
    title: 'Product leadership',
    body: `I've led product and creative teams since 2013 — building a creative technologies team at
      an agency, owning product direction for a B2B commerce platform, and today running product
      strategy, definition, and roadmapping across an enterprise compliance suite serving 400+
      clients. I'm currently defining the flagship product that consolidates that whole portfolio
      into one platform with subscription tiers.`,
  },
  {
    title: 'Design systems & UX',
    body: `Twenty-five years of building identity and interface systems that have to hold together
      across every surface — brand systems for bands, bars, and nonprofits through the 2000s, custom
      component libraries replacing Tailwind on enterprise commerce, and the shared TypeScript
      design system now underpinning an entire product suite.`,
  },
  {
    title: 'Full-stack delivery',
    body: `I've shipped the code as well as the design since the beginning: catalogue and commerce
      work running into millions of SKUs, a headless React storefront on enterprise Magento, and
      current work on Vercel, Supabase, and Next.js. I can take something from discovery call to
      production without a handoff losing it.`,
  },
];

const WORK = [
  { to: '/branding', title: 'Branding', body: 'Identity systems and how they hold together in the wild.' },
  { to: '/websites', title: 'Websites', body: 'Commerce, marketing, and compliance platforms.' },
  { to: '/graphics', title: 'Graphics', body: 'Album art, apparel, and two decades of illustration.' },
];

function HomePage() {
  return (
    <Column gap={5}>
      <PageHeading
        title="Andrew Loehr"
        subtitle="Product leader with 25+ years across design, engineering, and enterprise SaaS — based in Detroit, working remote."
        divider
      />

      <Typography variant="body1" className={s.lede}>
        I sit where product, design, and engineering meet. I can define the roadmap, draw the
        interface and ship the code — which means I can carry an idea from a discovery call through
        to production without it getting lost in a handoff.
      </Typography>

      <ul className={s.proof}>
        {PROOF.map(p => (
          <li key={p.label}>
            <strong>{p.figure}</strong>
            <span>{p.label}</span>
          </li>
        ))}
      </ul>

      <div className={s.capabilities}>
        {CAPABILITIES.map(c => (
          <section key={c.title}>
            <Typography variant="h5">{c.title}</Typography>
            <Typography variant="body2">{c.body}</Typography>
          </section>
        ))}
      </div>

      <Container gap={2} direction={'column'}>
        <Typography variant="h4">Selected work</Typography>
        <div className={s.work}>
          {WORK.map(w => (
            <LinkStyled key={w.to} to={w.to} className={s['work-card']}>
              <Typography variant="h5">{w.title}</Typography>
              <Typography variant="body2">{w.body}</Typography>
              <span className={s.more}>View →</span>
            </LinkStyled>
          ))}
        </div>
      </Container>

      <div className={s.paths}>
        <section>
          <Typography variant="h5">Hiring for a product role?</Typography>
          <Typography variant="body2">
            I&rsquo;m looking for Director of Product work at a mid-size company — remote, ideally in
            HR/compliance SaaS or e-commerce. The resume below has the full history; the case studies
            show how the work actually turned out.
          </Typography>
          <LinkStyled to={'/branding'}>See a case study →</LinkStyled>
        </section>
        <section>
          <Typography variant="h5">Need something built?</Typography>
          <Typography variant="body2">
            Kismet has run for 10+ years across retail, finance, healthcare, hospitality, and
            nonprofit work — brand, site, store, or the whole thing end to end. One person, no
            handoffs, no agency overhead.
          </Typography>
          <LinkStyled to={'/websites'}>See the work →</LinkStyled>
        </section>
      </div>

      <Container gap={2} direction={'column'}>
        <Typography variant="h4">Resume</Typography>
        <Resume />
      </Container>
    </Column>
  );
}

export default HomePage;
