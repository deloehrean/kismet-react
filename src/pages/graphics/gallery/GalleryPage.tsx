import React, { useCallback, useMemo, useState } from 'react';

import cn from 'clsx';

import { Container, ImageViewer, Typography } from 'src/components';
import { useIsMobile } from 'src/lib/useBreakpoint';
import s from 'src/pages/graphics/gallery/GalleryPage.module.scss';

export interface GalleryItem {
  img: string;
  title: string;
  meta: string;
}

interface GalleryPageProps {
  title: string;
  intro: string;
  items: GalleryItem[];
  framed?: boolean;
  mixed?: boolean;
}

const brand = (item: GalleryItem) => item.meta.split(/ · |, /)[0] ?? item.meta;

const interleave = (items: GalleryItem[]) => {
  const groups = new Map<string, GalleryItem[]>();
  items.forEach(item => groups.set(brand(item), [...(groups.get(brand(item)) ?? []), item]));
  const queues = [...groups.values()];
  const out: GalleryItem[] = [];
  while (out.length < items.length) {
    queues.forEach(queue => {
      const next = queue.shift();
      if (next) {
        out.push(next);
      }
    });
  }
  return out;
};

function GalleryPage({ title, intro, items, framed, mixed }: GalleryPageProps) {
  const mobile = useIsMobile(600);

  const ordered = useMemo(
    () => (mixed && mobile ? interleave(items) : items),
    [items, mixed, mobile],
  );
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className={s.root}>
      <Container direction={'column'} gap={1}>
        <Typography variant={'h4'}>{title}</Typography>
        <Typography variant={'body2'} className={s.intro}>
          {intro}
        </Typography>
      </Container>

      <div className={cn(s.grid, framed && s.framed)}>
        {ordered.map(item => (
          <figure key={item.img} className={s.piece}>
            <button type={'button'} onClick={() => setOpen(item)} aria-label={`Open ${item.title}`}>
              <img src={item.img} alt={item.title} loading={'lazy'} />
            </button>
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <ImageViewer image={open} onClose={close} />
    </section>
  );
}

export default GalleryPage;
