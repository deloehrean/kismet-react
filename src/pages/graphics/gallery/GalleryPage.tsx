import React, { useEffect, useRef, useState } from 'react';

import cn from 'clsx';

import { Container, Typography } from 'src/components';
import s from 'src/pages/graphics/gallery/GalleryPage.module.scss';

export interface GalleryItem {
  img: string;
  title: string;
  /** Client or band, then era - "Fishbat · 2017". */
  meta: string;
}

interface GalleryPageProps {
  title: string;
  intro: string;
  items: GalleryItem[];
  /** Logos sit on a white card so they all read at the same weight. */
  framed?: boolean;
}

// One page for each body of print, logo, and ad work: a masonry of the pieces,
// each opening full size.
function GalleryPage({ title, intro, items, framed }: GalleryPageProps) {
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // Opening moves focus into the viewer; closing hands it back to the piece
  // that opened it, so keyboard users don't lose their place in the grid.
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
        {items.map(item => (
          <figure key={item.img} className={s.piece}>
            <button
              type={'button'}
              onClick={event => {
                openerRef.current = event.currentTarget;
                setOpen(item);
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

      {open && (
        <div className={s.viewer} role={'dialog'} aria-modal aria-label={open.title}>
          {/* The whole backdrop closes it, so it is one real button. */}
          <button
            type={'button'}
            className={s.backdrop}
            onClick={() => setOpen(null)}
            aria-label={`Close ${open.title}`}
            ref={closeRef}
          >
            <img src={open.img} alt={open.title} />
            <span className={s.caption}>
              <strong>{open.title}</strong> · {open.meta}
            </span>
            <span className={s.close} aria-hidden>
              +
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

export default GalleryPage;
