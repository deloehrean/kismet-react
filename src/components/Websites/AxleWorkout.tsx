import { useState } from 'react';

import cn from 'clsx';

import { Row, Typography } from 'src/components';
import { WebsitesPageStyles as s, WebsiteTopper } from 'src/pages';

const axleImages = [
  { logo: 'src/assets/images/websites/axleWorkout/axle-logo-wt.png' },
  {
    image: 'src/assets/images/websites/axleWorkout/axle-homepage-template-02.jpg',
    position: 'a',
  },
  {
    image: 'src/assets/images/websites/axleWorkout/axle-blog-template.jpg',
    position: 'b',
  },
  {
    image: 'src/assets/images/websites/axleWorkout/axle-find-it-become-partner-template.jpg',
    position: 'c',
  },
  {
    image: 'src/assets/images/websites/axleWorkout/axle-buy-it-template.jpg',
    position: 'd',
  },
  {
    image: 'src/assets/images/websites/axleWorkout/axle-work-it-template.jpg',
    position: 'e',
  },
];

function AxleWorkout() {
  const [loading, setLoading] = useState('');

  const renderedItems = axleImages.map((axleImage, index) => {
    if (axleImage.logo) {
      return (
        <div className={s['website-logo']} key={index}>
          <img src={axleImage.logo} alt="" />
        </div>
      );
    }
    return (
      <div className={cn(s['website-image'], s[`website-image-${axleImage.position}`])} key={index}>
        {WebsiteTopper}
        <div className={s['website-body']}>
          <img src={axleImage.image} alt="" />
        </div>
        <span className={s['expand-close']}>+</span>
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
