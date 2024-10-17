import React, { useEffect, useState } from 'react';

import cn from 'clsx';

import {
  Container,
  Divider,
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
      <Row
        className={cn(s.website, s.root, reverse && s.reverse)}
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
