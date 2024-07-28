import React from 'react';

import { Outlet } from 'react-router-dom';

import { Typography } from 'src/components';

function WebsitesPage() {
  return (
    <React.Fragment>
      <Typography variant="body1">Websites</Typography>
      <Outlet />
    </React.Fragment>
  );
}

export default WebsitesPage;
