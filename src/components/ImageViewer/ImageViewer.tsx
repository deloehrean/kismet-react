import React, { useEffect, useRef, useState } from 'react';

import cn from 'clsx';

import { ImageViewerStyles as s } from 'src/components';

export type ViewerImage = { img: string; title: string; meta?: string };

type ImageViewerProps = {
  image: ViewerImage | null;
  onClose: () => void;
};

const ImageViewer = ({ image, onClose }: ImageViewerProps) => {
  const [shown, setShown] = useState<ViewerImage | null>(image);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!image) {
      return undefined;
    }
    setShown(image);
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
      opener?.focus();
    };
  }, [image, onClose]);

  return (
    <div
      className={cn(s.root, image && s.active)}
      role={'dialog'}
      aria-modal
      aria-label={shown?.title}
      aria-hidden={!image}
    >
      {shown && (
        <button
          type={'button'}
          className={s.backdrop}
          onClick={onClose}
          aria-label={`Close ${shown.title}`}
          tabIndex={image ? 0 : -1}
          ref={closeRef}
        >
          <img src={shown.img} alt={shown.title} />
          <span className={s.caption}>
            <strong>{shown.title}</strong>
            {shown.meta && ` · ${shown.meta}`}
          </span>
          <span className={s.close} aria-hidden>
            +
          </span>
        </button>
      )}
    </div>
  );
};

type ZoomableProps = {
  img: string;
  title: string;
  meta?: string;
  className?: string;
  children: React.ReactNode;
};

export const Zoomable = ({ img, title, meta, className, children }: ZoomableProps) => {
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
      <ImageViewer image={open ? { img, title, meta } : null} onClose={close} />
    </React.Fragment>
  );
};

export default ImageViewer;
