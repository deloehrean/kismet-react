import React, { useEffect, useState } from 'react';

import cn from 'clsx';

import {
  Container,
  Divider,
  Icon,
  Row,
  Typography,
  WebsitesCardStyles as s,
  WebsiteTopper,
} from 'src/components';

type WebsitesCardProps = {
  content?: any;
  reverse?: boolean;
  divider?: boolean;
};

const WebsitesCard: React.FC<WebsitesCardProps> = ({
  content,
  reverse = false,
  divider = true,
}) => {
  const [loading, setLoading] = useState('loading');
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading('');
      setTimeout(() => {
        setLoading('prepared');
      }, 1000);
    }, 1000);
  }, []);

  const activeAction = (index, activeIndex) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderLogo = () => {
    return (
      <div className={s['website-logo']}>
        <img src={content.logo} alt={content.title} />
      </div>
    );
  };

  const renderedGallery = content.gallery?.map((image, index) => {
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
        onClick={() => activeAction(index, activeIndex)}
      >
        {WebsiteTopper}
        <div className={s['website-body']}>
          <img src={image.image} alt="" />
        </div>
        <span className={s['expand-close']} onClick={() => activeAction(index, activeIndex)}>
          +
        </span>
      </div>
    );
  });

  return (
    <React.Fragment>
      {/* Gated clients render a ghost of the real card: the screenshot stack
          becomes blank sheets of glass in the same positions, and the copy
          side becomes a widget explaining how to unlock. Both this and the
          real card are rendered; CSS picks which is visible, so there is no
          polling and no re-render on unlock. */}
      {content.gated && (
        <Row
          className={cn(s.website, s.root, reverse && s.reverse, s['gated-placeholder'])}
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
                  Locked project
                </Typography>
              </div>
              <ol className={s['unlock-steps']}>
                <li>
                  <span className={s['unlock-num']}>1</span>Download the resume
                </li>
                <li>
                  <span className={s['unlock-num']}>2</span>Find the password inside
                </li>
                <li>
                  <span className={s['unlock-num']}>3</span>Enter it in the bar above
                </li>
              </ol>
            </div>
          </Container>
          <Container className={cn(s['website-screenshots'], s.active, s.prepared)}>
            {(content.gallery || []).map((image, index) => (
              <div
                key={index}
                className={cn(
                  s['website-image'],
                  s[`website-image-${image.position}`],
                  image.bumpUp && s['bump-up'],
                  s.glass,
                )}
                style={{ ['--pane-ratio' as any]: image.ratio ?? 0.6 }}
              />
            ))}
          </Container>
        </Row>
      )}
      <Row
        className={cn(s.website, s.root, reverse && s.reverse, content.gated && s.gated)}
        aria-label="axle-workout"
        gap={3}
        breakpoint={'md'}
      >
        <Container className={s['website-content']} justify={'center'}>
          {content.title && <Typography variant={'h4'}>{content.title}</Typography>}
          {content.subtitle && (
            <Typography variant={'subtitle1'} transform={'uppercase'} gutter>
              {content.subtitle}
            </Typography>
          )}
          {content.description && (
            <Typography variant={'body2'} gutter>
              {content.description}
            </Typography>
          )}
          {content.poweredBy && (
            <Typography variant={'body1'}>
              <strong>content.Powered by:</strong> {content.poweredBy}
            </Typography>
          )}
          {content.toolsUsed && (
            <Typography variant={'body1'}>
              <strong>Tools used:</strong> {content.toolsUsed}
            </Typography>
          )}
        </Container>
        <Container className={cn(s['website-screenshots'], s.active, loading && s[`${loading}`])}>
          {renderLogo()}
          {/* {console.log(logo)} */}
          {renderedGallery}
        </Container>
      </Row>
      {divider && (
        <Container>
          <Divider />
        </Container>
      )}
    </React.Fragment>
  );
};

export default WebsitesCard;
