import React from 'react';

import { PageHeading, Typography } from 'src/components';

function HomePage() {
  return (
    <React.Fragment>
      <PageHeading title="Kismet" subtitle="Multi-Disciplined Design & Development" divider />
      <Typography variant="body1">Home Page</Typography>
    </React.Fragment>
  );
}

export default HomePage;
