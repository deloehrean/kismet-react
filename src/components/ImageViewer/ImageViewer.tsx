import React, { useEffect, useRef, useState } from 'react';

import cn from 'clsx';
import { createPortal } from 'react-dom';

import { ImageViewerStyles as s } from 'src/components';

export type ViewerImage = { img: string; title: string; meta?: string; background?: string };

type ImageViewerProps = {
  image: ViewerImage | null;
  onClose: () => void;
};

const CLOSE_MS = 300;

const ImageViewer = ({ image, onClose }: ImageViewerProps) => {
  const [shown, setShown] = useState<ViewerImage | null>(image);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = image ?? shown;

  useEffect(() => {
    if (!image) {
      setVisible(false);
      const unmount = window.setTimeout(() => setShown(null), CLOSE_MS);
      return () => window.clearTimeout(unmount);
    }
    setShown(image);
    const opener = document.activeElement as HTMLElement | null;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        setVisible(true);
        closeRef.current?.focus();
      });
    });
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', close);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('keydown', close);
      opener?.focus();
    };
  }, [image, onClose]);

  if (!current) {
    return null;
  }

  return createPortal(
    <div
      className={cn(s.root, visible && image && s.active)}
      role={'dialog'}
      aria-modal
      aria-label={current.title}
      aria-hidden={!image}
    >
      <button
        type={'button'}
        className={s.backdrop}
        onClick={onClose}
        aria-label={`Close ${current.title}`}
        tabIndex={image ? 0 : -1}
        ref={closeRef}
      >
        <img
          key={current.img}
          src={current.img}
          alt={current.title}
          className={cn(current.background && s.matted, loaded === current.img && s.loaded)}
          style={{ background: current.background }}
          onLoad={() => setLoaded(current.img)}
        />
        <span className={s.caption}>
          <strong>{current.title}</strong>
          {current.meta && ` · ${current.meta}`}
        </span>
        <span className={s.close} aria-hidden>
          +
        </span>
      </button>
    </div>,
    document.body,
  );
};

type ZoomableProps = {
  img: string;
  title: string;
  meta?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
};

export const Zoomable = ({ img, title, meta, background, className, children }: ZoomableProps) => {
  const [open, setOpen] = useState(false);
  const close = React.useCallback(() => setOpen(false), []);
  return (
    <React.Fragment>
      <button
        type={'button'}
        className={cn(s.zoomable, className)}
        onClick={() => setOpen(true)}
        aria-label={`Open ${title}`}
      >
        {children}
      </button>
      <ImageViewer image={open ? { img, title, meta, background } : null} onClose={close} />
    </React.Fragment>
  );
};

export default ImageViewer;
