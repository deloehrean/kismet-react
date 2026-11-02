import React from 'react';

import { Column, Container, LinkStyled, PageHeading, Typography } from 'src/components';
import { Resume } from 'src/components/Resume';
import { HomePageStyles as s } from 'src/pages';

const PROOF = [
  { figure: '25+', label: 'years in product, design, and engineering' },
  { figure: '400+', label: 'enterprise clients across the suite' },
  { figure: '$1.5B', label: 'projected annual sales on a B2B platform I led' },
  { figure: '1M+', label: 'product SKUs cataloged' },
];

const CAPABILITIES = [
  {
    title: 'Product leadership',
    body: `I have led product and creative teams for the majority of my 25+ year career. At fishbat, a marketing and development agency, I built and led a creative team of interns and guided executives across graphic, web, software, and marketing projects. At Fusion Worldwide, I owned product direction for a B2B commerce platform, projected to carry $1.5 billion in annual sales, and led a team of developers, QA professionals, and helped consolidate the ideas of other team leads. At HRlogics, I led close to 20 people, including other directors and a development team of a dozen. I ran product strategy, roadmapping, and end-to-end UX for a compliance suite serving 400+ enterprise clients, launched the SSO portal that gave them one entry point into every product, and defined the vision for turning it into a single browser-based workspace.`,
  },
  {
    title: 'Design systems & UX',
    body: `I've spent twenty-five years building identity and interface systems: branding systems for bands, bars, and nonprofits through the 2000s, custom component libraries to replace walled garden-style frameworks like Tailwind on an enterprise B2B and HR Compliance platforms, rebuilding client trust through modern and inviting design. When I build a custom library, it isn't simply for the look and feel. Careful planning, thought, and a functional understanding of the audience is at the forefront of every line of code and stroke of ink.`,
  },
  {
    title: 'Full-stack delivery',
    body: `Shipping code alongside design is my forte, and how I have worked from the start: clean product data for over a million SKUs on a multi-million-dollar storefront, headless React themes for Enterprise Magento B2B stores, Single Sign-On portals on Laravel, React, and AWS, led from first commit to launch. Every engagement with Kismet is taken seriously and personally. I own, and hold myself accountable for, the work--from discovery through launch.`,
  },
];

const WORK = [
  {
    to: '/case-studies',
    title: 'Case Studies',
    body: 'How I took platforms, design systems, and brands from the first audit to launch.',
  },
  {
    to: '/websites',
    title: 'Websites',
    body: 'Commerce, marketing, and compliance sites I designed and built.',
  },
  {
    to: '/graphics',
    title: 'Graphics',
    body: 'Two decades of logos, print, ads, album art, and tee shirts.',
  },
];

function HomePage() {
  return (
    <Column className={s.root} gap={5}>
      <PageHeading
        title="Andrew Loehr"
        subtitle="Product leader with 25+ years across design, engineering, and enterprise SaaS. Detroit-based, working remote."
        divider
      />

      <Typography variant="body1" className={s.lede}>
        I work where product, design, and engineering meet. I can set the roadmap, design the
        interface, and ship the code myself, so an idea makes it from a discovery call to production
        without getting lost in a handoff.
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
            I&rsquo;m looking for my next Director of Product role at a mid-size company, remote,
            ideally in HR/compliance SaaS or e-commerce. The resume below has the full history, and
            the case studies show how the work actually turned out.
          </Typography>
          <LinkStyled to={'/case-studies'}>See a case study →</LinkStyled>
        </section>
        <section>
          <Typography variant="h5">Need something built?</Typography>
          <Typography variant="body2">
            Kismet is my studio, and for 10+ years it has taken on retail, finance, healthcare,
            hospitality, and nonprofit work: a brand, a site, a store, or all of it end to end. I do
            the work myself, from the first call to launch, and I treat every project like my own.
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
