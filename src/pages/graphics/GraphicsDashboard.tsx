import React from 'react';

import { Column, Container, LinkStyled, Row, Typography } from 'src/components';

function GraphicsDashboard() {
  return (
    <Container>
      <Column gap={4}>
        <Typography variant={'h3'}>This is the graphics dashboard</Typography>
        <Typography variant={'body1'}>
          Here you will find a small selection of the best items from each child category displayed.
          They will have links to go to the full category page.
        </Typography>
        <Row gap={2}>
          <LinkStyled to={'/graphics/albums'}>Album Artwork</LinkStyled>
          <LinkStyled to={'/graphics/tees'}>Tee Shirt Design</LinkStyled>
        </Row>
      </Column>
    </Container>
  );
}

export default GraphicsDashboard;
