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
  title: string;
  subtitle?: string;
  description?: string;
  poweredBy?: string;
  toolsUsed?: string;
  logo: string;
  gallery?: any[] | undefined;
  reverse?: boolean;
  divider?: boolean;
};

const WebsitesCard: React.FC<WebsitesCardProps> = ({
  title,
  subtitle,
  description,
  poweredBy,
  toolsUsed,
  logo,
  gallery,
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
        <img src={logo} alt="" />
      </div>
    );
  };

  const renderedGallery = gallery?.map((image, index) => {
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
      <Row className={cn(s.website, s.root, reverse && s.reverse)} aria-label="axle-workout">
        <Container className={s['website-content']} justify={'center'}>
          <Typography variant={'h4'}>{title}</Typography>
          <Typography variant={'subtitle1'} transform={'uppercase'} gutter>
            {subtitle}
          </Typography>
          <Typography variant={'body2'} gutter>
            {description}
          </Typography>
          <Typography variant={'body1'}>
            <strong>Powered by:</strong> {poweredBy}
          </Typography>
          <Typography variant={'body1'}>
            <strong>Tools used:</strong> {toolsUsed}
          </Typography>
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
