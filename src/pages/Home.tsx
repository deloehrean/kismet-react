import React from 'react';

import { Container, PageHeading, Typography } from 'src/components';

function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <PageHeading
          title="Andrew Loehr"
          subtitle="A Senior Frontend Website Developer, UI/UX Designer, and Graphic designer with a
        focus on eCommerce living in Detroit, MI."
          divider
        />
      </Container>
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
    </React.Fragment>
  );
}

export default HomePage;
