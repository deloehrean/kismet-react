import { useState } from 'react';

import cn from 'clsx';

import IntelCategory from 'src/assets/images/websites/intel/intel-category.jpg';
import IntelLogo from 'src/assets/images/websites/intel/intel-dit-store-logo.png';
import IntelEditAddress from 'src/assets/images/websites/intel/intel-edit-address.jpg';
import IntelHomepage from 'src/assets/images/websites/intel/intel-homepage.jpg';
import IntelOrders from 'src/assets/images/websites/intel/intel-orders.jpg';
import IntelProduct from 'src/assets/images/websites/intel/intel-product-page.jpg';
import { Row, Typography } from 'src/components';
import { WebsitesPageStyles as s, WebsiteTopper } from 'src/pages';

const images = [
  { logo: IntelLogo },
  {
    image: IntelHomepage,
    position: 'a',
  },
  {
    image: IntelCategory,
    position: 'b',
  },
  {
    image: IntelOrders,
    position: 'c',
  },
  {
    image: IntelProduct,
    position: 'd',
  },
  {
    image: IntelEditAddress,
    position: 'e',
    bumpUp: true,
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

  const renderedItems = images.map((image, index) => {
    const active = index === activeIndex ? 'active' : '';

    if (image.logo) {
      return (
        <div className={s['website-logo']} key={index}>
          <img src={image.logo} alt="" />
        </div>
      );
    }
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
    <Row className={s.website} aria-label="axle-workout">
      <div className={s['website-content']}>
        <Typography variant={'h3'} gutter>
          Intel Design-in Tools
        </Typography>
        <Typography variant={'body1'} gutter>
          The Design-in Tools web store hosts multiple B2B account levels for businesses and
          insiders, tens of thousands of skus, and a headless theme for speed and optimization.
          Built on a cloud-based Magento 2 Enterprise Platform, this store was built to handle a
          customized shopping cart quoting system, multiple coupons, and features an extensively
          custom product library.
        </Typography>
        <Typography variant={'body1'}>
          <strong>Powered by:</strong> Magento / ScandiPWA
        </Typography>
        <Typography variant={'body1'}>
          <strong>Tools used:</strong> React, PHP, SCSS, Composer, Node.JS, Yarn, Docker
        </Typography>
      </div>
      <div className={cn(s['website-screenshots'], s.active, loading && s.loading)}>
        {renderedItems}
      </div>
    </Row>
  );
}

export default AxleWorkout;
