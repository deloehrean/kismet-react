import React from 'react';

import { Column, Container, LinkStyled, PageHeading, Typography } from 'src/components';
import { Resume } from 'src/components/Resume';
import { HomePageStyles as s } from 'src/pages';

const PROOF = [
  { figure: '25+', label: 'years in product, design, and engineering' },
  { figure: '400+', label: 'enterprise clients managed' },
  { figure: '$1.5B', label: 'projected annual client sales' },
  { figure: '1M+', label: 'product SKUs cataloged' },
];

const CAPABILITIES = [
  {
    title: 'Product leadership',
    body: `I led product and creative teams for over a decade — building a creative team across
      graphic, web, software, and marketing at an agency, owning product direction for a B2B
      commerce platform supporting a projected $1.5 billion in annual sales, and running product
      strategy, roadmapping, and end-to-end UX for an enterprise compliance suite serving 400+
      clients. There I launched an SSO portal that gave clients a single entry point into every
      product, and defined the vision for evolving it into one browser-based workspace.`,
  },
  {
    title: 'Design systems & UX',
    body: `Twenty-five years of building identity and interface systems that had to hold together
      across every surface — brand systems for bands, bars, and nonprofits through the 2000s, a
      custom component library that replaced Tailwind on an enterprise B2B platform, and a
      company-wide rebrand that reached into the product itself, where I designed and built the
      shared TypeScript component library that became the suite's design system.`,
  },
  {
    title: 'Full-stack delivery',
    body: `I shipped the code as well as the design from the start: clean product data for over a
      million SKUs on a multi-million-dollar storefront, a React.js headless theme on enterprise
      Magento B2B, and more recent work on Vercel, Supabase, and Next.js. On every Kismet
      engagement I owned the work from discovery through launch.`,
  },
];

const WORK = [
  { to: '/case-studies', title: 'Case Studies', body: 'Identity systems and data products, from first sketch to shipped.' },
  { to: '/websites', title: 'Websites', body: 'Commerce, marketing, and compliance platforms.' },
  { to: '/graphics', title: 'Graphics', body: 'Album art, apparel, and two decades of illustration.' },
];

function HomePage() {
  return (
    <Column className={s.root} gap={5}>
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
          <LinkStyled to={'/case-studies'}>See a case study →</LinkStyled>
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
