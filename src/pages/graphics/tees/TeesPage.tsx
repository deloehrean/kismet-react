import React from 'react';

import { Outlet } from 'react-router-dom';

import { Container, Typography } from 'src/components';

function TeesPage() {
  return (
    <Container>
      <Typography variant={'h3'}>Tees Page</Typography>
      <Typography variant={'overline'}>Coming Soon</Typography>
      <Outlet />
    </Container>
  );
}

export default TeesPage;
