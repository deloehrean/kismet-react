import React, { FC } from 'react';

import cn from 'clsx';

import { Icon, CaseStudyStyles as s, Typography } from 'src/components';

interface CaseStudyProps {
  id: string;
  mark: string;
  markAlt: string;
  title: string;
  meta: string;
  summary: React.ReactNode;
  open: boolean;
  /** Open or close without the roll animation. */
  instant?: boolean;
  onToggle: (id: string) => void;
  children?: React.ReactNode;
}

// One accordion panel: the header is the trigger, the case study rolls out
// beneath it. Open/closed is the parent's call, so a page of these can keep
// just one open at a time.
const CaseStudy: FC<CaseStudyProps> = ({
  id,
  mark,
  markAlt,
  title,
  meta,
  summary,
  open,
  instant,
  onToggle,
  children,
}) => {
  const headId = `case-${id}-head`;
  const bodyId = `case-${id}-body`;

  return (
    <article id={`case-${id}`} className={cn(s.root, open && s.open, instant && s.instant)}>
      <header className={s.head}>
        <img className={s.mark} src={mark} alt={markAlt} />
        <div className={s.titles}>
          {/* The button carries the heading's name only; its ::after stretches
              over the whole header so the mark and summary click through too. */}
          <Typography variant={'h2'}>
            <button
              id={headId}
              type={'button'}
              className={s.trigger}
              aria-expanded={open}
              aria-controls={bodyId}
              onClick={() => onToggle(id)}
            >
              {title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {i > 0 && ' '}
                  <span className={cn(i > 0 && word.startsWith('T') && s['swash-t'])}>
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </button>
          </Typography>
          <Typography variant={'subtitle1'} transform={'uppercase'} gutter>
            {meta}
          </Typography>
          <Typography variant={'body2'}>{summary}</Typography>
        </div>
        <span className={s.chevron} aria-hidden>
          <Icon name={'chevronDownIcon'} />
        </span>
      </header>
      <div
        id={bodyId}
        role={'region'}
        aria-labelledby={headId}
        className={s.body}
        // closed panels keep their layout for the animation, so take them out
        // of the tab order and the accessibility tree instead of `hidden`
        {...({ inert: open ? undefined : '' } as any)}
      >
        <div className={s.inner}>
          <div className={s.content}>{children}</div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudy;
