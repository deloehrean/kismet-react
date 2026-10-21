import React from 'react';

import { Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';

// Building blocks shared by every brand's case study.
export const Tile = ({ img, label, ratio = 1 }: any) => (
  <figure className={s.tile}>
    <img src={img} alt={label} loading={'lazy'} style={{ ['--tile-ratio' as any]: ratio }} />
    <figcaption>{label}</figcaption>
  </figure>
);

export const Section = ({ eyebrow, title, lead, children }: any) => (
  <section className={s.section}>
    <div className={s['section-head']}>
      <Typography variant={'overline'} color={'primary'}>
        {eyebrow}
      </Typography>
      <Typography variant={'h3'} className={s['section-title']}>
        {title}
      </Typography>
      {lead && (
        <Typography variant={'body2'} className={s.lead}>
          {lead}
        </Typography>
      )}
    </div>
    {children}
  </section>
);

// A row of headline numbers, with where they came from underneath.
export const Stats = ({ items, source }: any) => (
  <React.Fragment>
    <dl className={s.stats}>
      {items.map(({ value, label }: any) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
    {source && <p className={s.source}>{source}</p>}
  </React.Fragment>
);

// A trimmed excerpt of real source, with the line that matters marked.
export const Code = ({ code, highlight, label }: any) => (
  <figure className={s.code}>
    <pre>
      <code>
        {highlight
          ? code
              .split(highlight)
              .flatMap((part: string, i: number) =>
                i === 0 ? [part] : [<mark key={i}>{highlight}</mark>, part],
              )
          : code}
      </code>
    </pre>
    <figcaption>{label}</figcaption>
  </figure>
);
