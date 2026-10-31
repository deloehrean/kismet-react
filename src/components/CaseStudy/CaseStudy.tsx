import React, { FC } from 'react';

import cn from 'clsx';

import { Icon, CaseStudyStyles as s, Typography } from 'src/components';

interface CaseStudyProps {
  id: string;
  mark: string;
  markAlt: string;
  markFill?: string;
  markInset?: boolean;
  title: string;
  meta: string;
  summary: React.ReactNode;
  open: boolean;
  instant?: boolean;
  onToggle: (id: string) => void;
  children?: React.ReactNode;
}

const CaseStudy: FC<CaseStudyProps> = ({
  id,
  mark,
  markAlt,
  markFill,
  markInset,
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
        <img
          className={cn(s.mark, markInset && s['mark-inset'])}
          src={mark}
          alt={markAlt}
          style={markFill ? { background: markFill } : undefined}
        />
        <div className={s.titles}>
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
