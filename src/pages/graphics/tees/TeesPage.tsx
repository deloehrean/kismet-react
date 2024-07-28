import React from 'react';

import { Outlet } from 'react-router-dom';

import { Typography } from 'src/components';

function TeesPage() {
  return (
    <React.Fragment>
      <Typography variant="body1">Tees Page</Typography>
      <Outlet />
    </React.Fragment>
  );
}

export default TeesPage;
