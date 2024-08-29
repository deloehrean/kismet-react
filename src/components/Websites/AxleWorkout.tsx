import { useState } from 'react';

import cn from 'clsx';

import AxleBlog from 'src/assets/images/websites/axleWorkout/axle-blog-template.jpg';
import AxleBuyIt from 'src/assets/images/websites/axleWorkout/axle-buy-it-template.jpg';
import AxlePartner from 'src/assets/images/websites/axleWorkout/axle-find-it-become-partner-template.jpg';
import AxleHomepage from 'src/assets/images/websites/axleWorkout/axle-homepage-template-02.jpg';
import AxleLogo from 'src/assets/images/websites/axleWorkout/axle-logo-wt.png';
import AxleWorkIt from 'src/assets/images/websites/axleWorkout/axle-work-it-template.jpg';
import { Row, Typography } from 'src/components';
import { WebsitesPageStyles as s, WebsiteTopper } from 'src/pages';

const axleImages = [
  { logo: AxleLogo },
  {
    image: AxleHomepage,
    position: 'a',
  },
  {
    image: AxleBlog,
    position: 'b',
  },
  {
    image: AxlePartner,
    position: 'c',
  },
  {
    image: AxleBuyIt,
    position: 'd',
  },
  {
    image: AxleWorkIt,
    position: 'e',
  },
];

function AxleWorkout() {
  const [loading, setLoading] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const activeAction = (index, activeIndex) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = axleImages.map((axleImage, index) => {
    const active = index === activeIndex ? 'active' : '';

    if (axleImage.logo) {
      return (
        <div className={s['website-logo']} key={index}>
          <img src={axleImage.logo} alt="" />
        </div>
      );
    }
    return (
      <div
        className={cn(
          s['website-image'],
          s[`website-image-${axleImage.position}`],
          active && s.active,
        )}
        key={index}
        onClick={() => activeAction(index, activeIndex)}
      >
        {WebsiteTopper}
        <div className={s['website-body']}>
          <img src={axleImage.image} alt="" />
        </div>
        <span className={s['expand-close']} onClick={() => activeAction(index, activeIndex)}>
          +
        </span>
      </div>
    );
  });

  return (
    <Row className={s.website} aria-label="axle-workout">
      <div className={s['website-content']}>
        <Typography variant={'h3'} gutter>
          Axle Workout
        </Typography>
        <Typography variant={'body1'} gutter>
          Axle is an Olympic barbell company that utilizes a wheel instead of weights on their
          barbell. This allows for a more total body workout than straight weightlifting alone and
          can be utilized by those not looking for strictly strength training.
        </Typography>
        <Typography variant={'body1'}>
          <strong>Powered by:</strong> WordPress
        </Typography>
        <Typography variant={'body1'}>
          <strong>Tools used:</strong> SCSS, jQuery, PHP, Photoshop
        </Typography>
      </div>
      <div className={cn(s['website-screenshots'], s.active, loading && s.loading)}>
        {renderedItems}
      </div>
    </Row>
  );
}

export default AxleWorkout;
