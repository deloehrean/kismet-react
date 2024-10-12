import React from 'react';

import { Column, Container, PageHeading, Typography } from 'src/components';
import { Resume } from 'src/components/Resume';

function HomePage() {
  return (
    <Column gap={4}>
      <PageHeading
        title="Andrew Loehr"
        subtitle="A Senior Frontend Website Developer, UI/UX Designer, and Graphic Designer with a
        focus on e-commerce living in Detroit, MI."
        divider
      />
      <Container>
        <Typography variant="body1">
          An agile and adaptable professional with over 20 years of experience in software
          development, user interface design, team leadership, and e-commerce. I have a deep
          understanding of operational processes, design principles, and customer engagement. My
          skill set includes branding, front-end development, styling, user experience design, and
          responsive web design. This diverse expertise enables me to create cohesive and engaging
          digital experiences across various platforms, spanning multiple departments. With strong
          interpersonal communication skills, I excel in client-facing interactions and leading
          teams by example. I am deeply passionate about delivering front-end solutions that have a
          real impact and operate seamlessly within your business specifications.
        </Typography>
      </Container>
      <Resume />
      <Container>
        <Typography variant={'body1'}>
          As a seasoned professional, I have extensive expertise in digital and illustration graphic
          design, web design and styling (CSS), and proper website architecture (HTML, W3C
          compliance, browser compatibility). My knowledge, skills, and experience uniquely position
          me to effectively address and solve your creative, innovative, and technical needs.
        </Typography>
      </Container>
    </Column>
  );
}

export default HomePage;
