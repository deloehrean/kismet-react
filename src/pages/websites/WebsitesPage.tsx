import React, { useEffect } from 'react';

import { Column, PageHeading, Typography, WebsitesCard } from 'src/components';
import {
  axleContent,
  bangoContent,
  bravoContent,
  clearAcaContent,
  intelContent,
  lakeAtitlanContent,
  petersFruitContent,
  prosemiContent,
  sereneSpacesContent,
} from 'src/components/WebsitesCard/WebsitesCardConstants';
import { isPasswordProtected } from 'src/lib/utils';

function WebsitesPage() {
  useEffect(() => {
    setInterval(() => {
      return isPasswordProtected();
    }, 2000);
  });
  return (
    <Column gap={6}>
      <PageHeading title={'Websites'} subtitle={'Custom built solutions for any problem'} divider />
      {isPasswordProtected() && (
        <Typography variant={'overline'} align={'center'} gutter>
          In order to access this page, you must first apply the password from my resume.
        </Typography>
      )}
      {!isPasswordProtected() && (
        <React.Fragment>
          <WebsitesCard content={intelContent} />
          <WebsitesCard content={clearAcaContent} reverse />
          <WebsitesCard content={prosemiContent} />
          <WebsitesCard content={lakeAtitlanContent} reverse />
          <WebsitesCard content={bangoContent} />
          <WebsitesCard content={sereneSpacesContent} reverse />
          <WebsitesCard content={axleContent} />
          <WebsitesCard content={bravoContent} reverse />
          <WebsitesCard content={petersFruitContent} />
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
