import React, { FC, useEffect, useRef } from 'react';

import cn from 'clsx';

import { CaseStudyStyles as s, Divider, Typography } from 'src/components';
import ChevronIcon from 'src/components/icons/ChevronIcon';
import { useIsMobile } from 'src/lib/useBreakpoint';

interface CaseStudyProps {
  id: string;
  mark: string;
  markAlt: string;
  markFill?: string;
  markInset?: boolean;
  gated?: boolean;
  title: string;
  meta: string;
  summary: React.ReactNode;
  open: boolean;
  instant?: boolean;
  last?: boolean;
  onToggle: (id: string) => void;
  children?: React.ReactNode;
}

const CaseStudy: FC<CaseStudyProps> = ({
  id,
  mark,
  markAlt,
  markFill,
  markInset,
  gated,
  title,
  meta,
  summary,
  open,
  instant,
  last,
  onToggle,
  children,
}) => {
  const headId = `case-${id}-head`;
  const bodyId = `case-${id}-body`;
  const bodyRef = useRef<HTMLDivElement>(null);
  const mobile = useIsMobile(767);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.inert = !open;
    }
  }, [open]);

  return (
    <React.Fragment>
      <article
        id={`case-${id}`}
        className={cn(s.root, open && s.open, instant && s.instant, gated && s.gated)}
      >
        <header className={s.head}>
          <img
            className={cn(s.mark, markInset && s['mark-inset'])}
            src={mark}
            alt={markAlt}
            style={markFill ? { background: markFill } : undefined}
          />
          <div className={s.titles}>
            <Typography variant={'h2'} gutter={mobile}>
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
            <Typography
              variant={!mobile ? 'subtitle1' : 'subtitle2'}
              transform={'uppercase'}
              gutter={!mobile}
            >
              {meta}
            </Typography>
            {!mobile && <Typography variant={'body2'}>{summary}</Typography>}
          </div>
          <span className={s.chevron} aria-hidden>
            <ChevronIcon direction={'down'} />
          </span>
        </header>
        <div id={bodyId} role={'region'} aria-labelledby={headId} className={s.body} ref={bodyRef}>
          <div className={s.inner}>
            <div className={s.content}>{children}</div>
          </div>
        </div>
      </article>
      {!last && <Divider />}
    </React.Fragment>
  );
};

export default CaseStudy;
