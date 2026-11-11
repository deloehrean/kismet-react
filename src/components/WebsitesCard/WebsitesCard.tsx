import React, { useEffect, useState } from 'react';

import cn from 'clsx';

import ResumePdf from 'src/assets/images/andrew-loehr-resume_director-of-product.pdf';
import {
  Container,
  Divider,
  Icon,
  LinkStyled,
  Row,
  Typography,
  WebsitesCardStyles as s,
  WebsiteTopper,
} from 'src/components';
import { onEnterOrSpace } from 'src/lib/utils';

export type WebsiteContent = {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  poweredBy: string;
  toolsUsed: string;
  logo: string;
  logoLight?: string;
  logoDark?: string;
  gated?: boolean;
  gallery: {
    image: string;
    imageDark?: string;
    position: string;
    ratio?: number;
    bumpUp?: boolean;
  }[];
};

type WebsitesCardProps = {
  content: WebsiteContent;
  reverse?: boolean;
  reverseLocked?: boolean;
  ghost?: boolean;
  lockedCount?: number;
  divider?: boolean;
};

const siteAnchor = (title: string) =>
  `site-${title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;

const WebsitesCard: React.FC<WebsitesCardProps> = ({
  content,
  reverse = false,
  reverseLocked = reverse,
  ghost = true,
  lockedCount = 1,
  divider = true,
}) => {
  const sides = cn(reverse && s.reverse, reverseLocked && s['reverse-locked']);
  const [loading, setLoading] = useState('loading');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [siteDark, setSiteDark] = useState(false);
  const hasDarkShots = content.gallery.some(image => image.imageDark);

  useEffect(() => {
    setTimeout(() => {
      setLoading('');
      setTimeout(() => {
        setLoading('prepared');
      }, 1000);
    }, 1000);
  }, []);

  const anchor = siteAnchor(content.title);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }
    const closeOnOutside = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest?.(`[data-site-shot="${anchor}"], [data-site-keep="${anchor}"]`)) {
        setActiveIndex(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setActiveIndex(null);
    document.addEventListener('click', closeOnOutside);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('click', closeOnOutside);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeIndex, anchor]);

  const activeAction = (index: number, activeIndex: number | null) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderLogo = () => {
    const forLight = content.logoLight ?? content.logo;
    const forDark = content.logoDark ?? content.logo;
    return (
      <div className={s['website-logo']}>
        {forLight === forDark ? (
          <img src={content.logo} alt={content.title} />
        ) : (
          <React.Fragment>
            <img src={forLight} alt={content.title} className={s['theme-light']} />
            <img src={forDark} alt={content.title} className={s['theme-dark']} />
          </React.Fragment>
        )}
      </div>
    );
  };

  const renderedGallery = content.gallery.map((image, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div
        className={cn(
          s['website-image'],
          s[`website-image-${image.position}`],
          image.bumpUp && s['bump-up'],
          active && s.active,
        )}
        key={index}
        data-site-shot={anchor}
        role={'button'}
        tabIndex={0}
        onClick={() => activeAction(index, activeIndex)}
        onKeyDown={onEnterOrSpace(() => activeAction(index, activeIndex))}
      >
        {WebsiteTopper}
        <div className={s['website-body']}>
          <img src={image.image} alt="" className={cn(image.imageDark && s['shot-light'])} />
          {image.imageDark && <img src={image.imageDark} alt="" className={s['shot-dark']} />}
        </div>
        <span className={s['expand-close']} aria-hidden>
          +
        </span>
      </div>
    );
  });

  return (
    <React.Fragment>
      {content.gated && ghost && (
        <Row
          className={cn(s.website, s.root, sides, s['gated-placeholder'])}
          gap={3}
          breakpoint={'md'}
        >
          <Container className={s['website-content']} justify={'center'}>
            <div className={s['unlock-widget']}>
              <div className={s['unlock-head']}>
                <span className={s['unlock-lock']}>
                  <Icon name={'lockIcon'} size={'medium'} />
                </span>
                <Typography variant={'subtitle1'} transform={'uppercase'}>
                  {lockedCount} locked {lockedCount === 1 ? 'project' : 'projects'}
                </Typography>
              </div>
              <ol className={s['unlock-steps']}>
                <li>
                  <span className={s['unlock-num']}>1</span>
                  <LinkStyled to={ResumePdf} target={'_blank'}>
                    Download my resume
                  </LinkStyled>
                </li>
                <li>
                  <span className={s['unlock-num']}>2</span>
                  <LinkStyled to={'mailto:andrew@kismet-ux.com?subject=Portfolio%20access'}>
                    Email me for the access link
                  </LinkStyled>
                </li>
              </ol>
            </div>
          </Container>
          <Container className={cn(s['website-screenshots'], s.active, s.prepared)}>
            {content.gallery.map((image, index) => (
              <div
                key={index}
                className={cn(
                  s['website-image'],
                  s[`website-image-${image.position}`],
                  image.bumpUp && s['bump-up'],
                  s.glass,
                )}
                aria-hidden
              >
                {WebsiteTopper}
                <div className={s['website-body']}>
                  <span
                    className={s['glass-fill']}
                    style={{ '--pane-ratio': image.ratio ?? 0.6 } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </Container>
        </Row>
      )}
      <Row
        id={anchor}
        className={cn(s.website, s.root, sides, content.gated && s.gated)}
        gap={3}
        breakpoint={'md'}
      >
        <Container className={s['website-content']} justify={'center'}>
          {content.title && (
            <Typography variant={'h4'} className={s['site-title']}>
              {content.title}
            </Typography>
          )}
          {content.subtitle && (
            <Typography variant={'subtitle1'} transform={'uppercase'} gutter>
              {content.subtitle} · {content.year}
            </Typography>
          )}
          {content.description && (
            <Typography variant={'body2'} gutter>
              {content.description}
            </Typography>
          )}
          {content.poweredBy && (
            <Typography variant={'body1'}>
              <strong>Powered by:</strong> {content.poweredBy}
            </Typography>
          )}
          {content.toolsUsed && (
            <Typography variant={'body1'}>
              <strong>Tools used:</strong> {content.toolsUsed}
            </Typography>
          )}
          {hasDarkShots && (
            <button
              type={'button'}
              role={'switch'}
              aria-checked={siteDark}
              className={s['site-theme']}
              data-site-keep={anchor}
              onClick={() => setSiteDark(dark => !dark)}
            >
              <span className={s['site-theme-track']}>
                <span className={s['site-theme-thumb']} />
              </span>
              Dark mode
            </button>
          )}
        </Container>
        <Container
          className={cn(
            s['website-screenshots'],
            s.active,
            loading && s[`${loading}`],
            siteDark && s['site-dark'],
          )}
        >
          {renderLogo()}
          {/* {console.log(logo)} */}
          {renderedGallery}
        </Container>
      </Row>
      {divider && (
        <Container className={cn(content.gated && !ghost && s.gated)}>
          <Divider />
        </Container>
      )}
    </React.Fragment>
  );
};

export default WebsitesCard;
