import React from 'react';

import { Outlet } from 'react-router-dom';

import { Container, Typography } from 'src/components';

function WebsitesPage() {
  return (
    <Container>
      <Typography variant={'h3'}>Websites</Typography>
      <Typography variant={'overline'}>Coming Soon</Typography>
      <Outlet />
    </Container>
  );
}

export default WebsitesPage;
