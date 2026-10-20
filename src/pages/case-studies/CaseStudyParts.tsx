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
      <Typography variant={'h3'}>{title}</Typography>
      {lead && (
        <Typography variant={'body2'} className={s.lead}>
          {lead}
        </Typography>
      )}
    </div>
    {children}
  </section>
);
