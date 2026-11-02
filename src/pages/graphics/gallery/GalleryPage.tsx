import React, { useEffect, useMemo, useRef, useState } from 'react';

import cn from 'clsx';

import { Container, Typography } from 'src/components';
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

const MOBILE = '(max-width: 600px)';

function GalleryPage({ title, intro, items, framed, mixed }: GalleryPageProps) {
  const [mobile, setMobile] = useState(() => window.matchMedia(MOBILE).matches);

  useEffect(() => {
    const query = window.matchMedia(MOBILE);
    const update = () => setMobile(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const ordered = useMemo(
    () => (mixed && mobile ? interleave(items) : items),
    [items, mixed, mobile],
  );
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const [shown, setShown] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    closeRef.current?.focus();
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
      openerRef.current?.focus();
    };
  }, [open]);

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
            <button
              type={'button'}
              onClick={event => {
                openerRef.current = event.currentTarget;
                setOpen(item);
                setShown(item);
              }}
              aria-label={`Open ${item.title}`}
            >
              <img src={item.img} alt={item.title} loading={'lazy'} />
            </button>
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div
        className={cn(s.viewer, open && s.active)}
        role={'dialog'}
        aria-modal
        aria-label={shown?.title}
        aria-hidden={!open}
      >
        {shown && (
          <button
            type={'button'}
            className={s.backdrop}
            onClick={() => setOpen(null)}
            aria-label={`Close ${shown.title}`}
            tabIndex={open ? 0 : -1}
            ref={closeRef}
          >
            <img src={shown.img} alt={shown.title} />
            <span className={s.caption}>
              <strong>{shown.title}</strong> · {shown.meta}
            </span>
            <span className={s.close} aria-hidden>
              +
            </span>
          </button>
        )}
      </div>
    </section>
  );
}

export default GalleryPage;
