import React from 'react';

import { Column, PageHeading, WebsitesCard } from 'src/components';
import { axleImages, intelImages } from 'src/components/WebsitesCard/WebsitesCardConstants';

function WebsitesPage() {
  return (
    <Column gap={4}>
      <PageHeading title={'Websites'} subtitle={'Custom built solutions for any problem'} divider />
      <WebsitesCard
        title={'Intel Design-In Tools'}
        subtitle={'B2B Ecommerce Website'}
        description={
          'The Design-in Tools web store hosts multiple B2B account levels for businesses and insiders, tens of thousands of skus, and a headless theme for speed and optimization. Built on a cloud-based Magento 2 Enterprise Platform, this store was built to handle a customized shopping cart quoting system, multiple coupons, and features an extensively custom product library.'
        }
        poweredBy={'Magento Enterprise Cloud / ScandiPWA'}
        toolsUsed={'React, PHP, SCSS, Composer, Node.JS, Yarn, Docker'}
        logo={intelImages[0]?.logo}
        gallery={intelImages[1]?.gallery}
      />
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/lake-atitlan/lake-atitlan.php'); ?> */}
      {/* </div> */}
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/bango-bowls/bango-bowls.php'); ?> */}
      {/* </div> */}
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/serene-spaces/serene-spaces.php'); ?> */}
      {/* </div> */}
      <WebsitesCard
        title={'Axle Workout'}
        subtitle={'Marketing Website'}
        description={
          'Axle is an Olympic barbell company that utilizes a wheel instead of weights on their barbell. This allows for a more total body workout than straight weightlifting alone and can be utilized by those not looking for strictly strength training.'
        }
        poweredBy={'Wordpress'}
        toolsUsed={'SCSS, jQuery, PHP, Photoshop'}
        logo={axleImages[0]?.logo}
        gallery={axleImages[1]?.gallery}
        reverse
        divider={false}
      />
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/bravo-actual/bravo-actual.php'); ?> */}
      {/* </div> */}
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/peters-fruit/peters-fruit.php'); ?> */}
      {/* </div> */}
      {/* <div className="container extra-content"> */}
      {/*  <h3 style="text-align: center;">From 'ugh...' to 'Ohhhhh!'</h3> */}
      {/*  <p>I'm always up for a challenge. Need to update your brand? Don't truly know what you would like to have */}
      {/*    content-wise on your site yet? Below are examples of just that. The projects below came to me as a Word */}
      {/*    document and phone call. As long as you have a vision, I can bring it to life.</p> */}
      {/* </div> */}
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/extra/extra.php'); ?> */}
      {/* </div> */}
    </Column>
  );
}

export default WebsitesPage;
