import React, { useEffect } from 'react';

import { Column, PageHeading, Typography, WebsitesCard } from 'src/components';
import {
  axleImages,
  bangoImages,
  bravoImages,
  clearAcaImages,
  intelImages,
  lakeAtitlanImages,
  petersFruitImages,
  prosemiImages,
  sereneSpacesImages,
} from 'src/components/WebsitesCard/WebsitesCardConstants';
import { isPasswordProtected } from 'src/lib/utils';

function WebsitesPage() {
  useEffect(() => {
    setInterval(() => {
      return isPasswordProtected();
    }, 2000);
  });
  return (
    <Column gap={4}>
      <PageHeading title={'Websites'} subtitle={'Custom built solutions for any problem'} divider />
      {isPasswordProtected() && (
        <Typography variant={'overline'} align={'center'} gutter>
          In order to access this page, you must first apply the password from my resume.
        </Typography>
      )}
      {!isPasswordProtected() && (
        <React.Fragment>
          <WebsitesCard
            title={'Intel Design-In Tools'}
            subtitle={'B2B Ecommerce Website'}
            description={
              'Led the development and customization of a specialized React.js headless theme for an ' +
              'Enterprise Magento B2B platform. Managed semantic versioning of deployments using Gitlab ' +
              'and Azure for precise version control. Integrated custom components, including tailored ' +
              'product views, specialized payment methods, B2B invoicing, bulk international shipping ' +
              'options, complex cart discounts, coupon configurations, and a streamlined customer-facing ' +
              'quoting system.'
            }
            poweredBy={'Magento Enterprise Cloud / ScandiPWA'}
            toolsUsed={'React, PHP, SCSS, Composer, Node.js, Yarn, GraphQL, Docker'}
            logo={intelImages[0]?.logo}
            gallery={intelImages[1]?.gallery}
          />
          <WebsitesCard
            title={'Clear ACA'}
            subtitle={'Website'}
            description={
              'Clear ACA is a fully functional solution for Affordable Care Act management. A fully branded headless theme was built to work as the frontend of an extensive Python backend connected to an MDM for data management.'
            }
            poweredBy={'React + Vite / Python'}
            toolsUsed={'React, Typescript, SCSS, Node.js, Yarn, GraphQL'}
            logo={clearAcaImages[0]?.logo}
            gallery={clearAcaImages[1]?.gallery}
            reverse
          />
          <WebsitesCard
            title={'Prosemi'}
            subtitle={'Marketing Website'}
            description={
              'As the leading semi-conductor testing facility in the world, Prosemi needed a new website to reflect their updated facilities and gather requests for quotes.'
            }
            poweredBy={'Gatsby / Contentful'}
            toolsUsed={'React, Node.js, SCSS, Yarn, GraphQL'}
            logo={prosemiImages[0]?.logo}
            gallery={prosemiImages[1]?.gallery}
          />
          <WebsitesCard
            title={'University of Alabama Huntsville & NASA: Lake Atitlán Project'}
            subtitle={'Algal Satellite & Data Solution'}
            description={
              'By leveraging the power of AI and satellite remote sensing, the aim of the Lake Atitlán Project is to inform authorities about when algal blooms are expected, so preventative measures against their negative economic and environmental impacts can be enforced.'
            }
            poweredBy={'Concrete CMS / Sentinel-2 Explorer / GEE Planet Labs'}
            toolsUsed={'PHP, LESS, Composer, Node.js'}
            logo={lakeAtitlanImages[0]?.logo}
            gallery={lakeAtitlanImages[1]?.gallery}
            reverse
          />
          <WebsitesCard
            title={'Bango Bowls'}
            subtitle={'Marketing Website with Store Locator'}
            description={
              'Bango Bowls is an açaí and smoothie restaurant based out of the Northeast. They have multiple locations and needed a website to showcase them all as well as their full menu for each location with an integrated online ordering tool.'
            }
            poweredBy={'Concrete CMS'}
            toolsUsed={'LESS, PHP, jQuery, Composer'}
            logo={bangoImages[0]?.logo}
            gallery={bangoImages[1]?.gallery}
          />
          <WebsitesCard
            title={'Serene Spaces Living'}
            subtitle={'Ecommerce website'}
            description={
              'Serene Spaces Living is an eCommerce site that sells insanely cool handmade home goods, decorations, and luxurious accessories. Most of the products are imported from around the world and created by street vendors to be brought to your door. They have a brick-and-mortar store in Manhattan but needed a way of selling their backstock and inventory online. Giving them a Magento website was exactly what they needed and have been selling on it very successfully for years.'
            }
            poweredBy={'Magento'}
            toolsUsed={'PHP, LESS, jQuery, Composer'}
            logo={sereneSpacesImages[0]?.logo}
            gallery={sereneSpacesImages[1]?.gallery}
            reverse
          />
          <WebsitesCard
            title={'Axle Workout'}
            subtitle={'Marketing Website'}
            description={
              'Axle is an Olympic barbell company that utilizes a wheel instead of weights on their barbell. This allows for a more total body workout than straight weightlifting alone and can be utilized by those not looking for strictly strength training.'
            }
            poweredBy={'Wordpress'}
            toolsUsed={'SCSS, jQuery, PHP'}
            logo={axleImages[0]?.logo}
            gallery={axleImages[1]?.gallery}
          />
          <WebsitesCard
            title={'Bravo Actual'}
            subtitle={'Ecommerce website'}
            description={
              'Bravo Actual is a workout supplement company. They wanted to move away from their X-Cart storefront but be put on a website platform that could both support a small Ecommerce plugin and be content-rich. Rebuilding their website on a Concrete CMS solution did exactly that and allowed for expansions in the future.'
            }
            poweredBy={'Concrete CMS w/ Ecommerce Add-on'}
            toolsUsed={'LESS, PHP, jQuery'}
            logo={bravoImages[0]?.logo}
            gallery={bravoImages[1]?.gallery}
            reverse
          />
          <WebsitesCard
            title={`Peter's Fruit`}
            subtitle={'Marketing website'}
            description={
              "Peter's Fruit Company needed a way to show all the available produce during each rotating season. I put together a simple dynamic site to rotate their produce in and out of categories easily and painlessly."
            }
            poweredBy={'Concrete CMS'}
            toolsUsed={'LESS, PHP, jQuery'}
            logo={petersFruitImages[0]?.logo}
            gallery={petersFruitImages[1]?.gallery}
            divider={false}
          />
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
        </React.Fragment>
      )}
    </Column>
  );
}

export default WebsitesPage;
