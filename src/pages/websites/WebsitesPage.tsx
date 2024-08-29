import React from 'react';

import cn from 'clsx';

import { AxleWorkout, Column, Container, Intel, PageHeading } from 'src/components';
import { WebsitesPageStyles as s } from 'src/pages';

function WebsitesPage() {
  return (
    <Column className={s['websites-panel']} gap={4}>
      <PageHeading title={'Websites'} subtitle={'Custom built solutions for any problem'} divider />
      <div className="content-frame-container container">
        <Intel />
      </div>
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/lake-atitlan/lake-atitlan.php'); ?> */}
      {/* </div> */}
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/bango-bowls/bango-bowls.php'); ?> */}
      {/* </div> */}
      {/* <div className="content-frame-container container"> */}
      {/*  <?php include('projects/serene-spaces/serene-spaces.php'); ?> */}
      {/* </div> */}
      <Container className={cn(s['content-frame-container'])}>
        <AxleWorkout />
      </Container>
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
