import React from 'react';

import { Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';

type TileProps = { img: string; label: string; ratio?: number; top?: boolean };

export const Tile = ({ img, label, ratio = 1, top }: TileProps) => (
  <figure className={s.tile}>
    <img
      src={img}
      alt={label}
      loading={'lazy'}
      style={
        { '--tile-ratio': ratio, objectPosition: top ? 'top' : undefined } as React.CSSProperties
      }
    />
    <figcaption>{label}</figcaption>
  </figure>
);

type SectionProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
};

export const Section = ({ eyebrow, title, lead, children }: SectionProps) => (
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

type StatsProps = { items: { value: React.ReactNode; label: string }[]; source?: React.ReactNode };

export const Stats = ({ items, source }: StatsProps) => (
  <React.Fragment>
    <dl className={s.stats}>
      {items.map(({ value, label }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
    {source && <p className={s.source}>{source}</p>}
  </React.Fragment>
);

type CodeProps = { code: string; highlight?: string; label: string };

export const Code = ({ code, highlight, label }: CodeProps) => (
  <figure className={s.code}>
    <pre>
      <code>
        {highlight
          ? code
              .split(highlight)
              .flatMap((part, i) => (i === 0 ? [part] : [<mark key={i}>{highlight}</mark>, part]))
          : code}
      </code>
    </pre>
    <figcaption>{label}</figcaption>
  </figure>
);
