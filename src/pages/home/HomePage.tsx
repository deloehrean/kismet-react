import React from 'react';

import cn from 'clsx';

import ResumePdf from 'src/assets/images/andrew-loehr_web-resume-2024.pdf';
import ResumeImg from 'src/assets/images/andrew-loehr_web-resume-plain.jpg';
import { Column, Container, LinkStyled, PageHeading, Typography } from 'src/components';
import { HomePageStyles as s } from 'src/pages';

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
      <Container align={'center'} className={s['resume-downloads']}>
        <Typography variant={'h5'} gutter>
          Hire me!
        </Typography>
        <Typography variant={'code'} gutter>
          (Find my contact information on my resume)
        </Typography>
        <div className={cn(s.resume, s['resume-plain'])}>
          <LinkStyled to={ResumePdf} target="_blank">
            <img src={ResumeImg} alt={'Andrew M Loehr Resume'} />
            <span>PDF Download</span>
          </LinkStyled>
        </div>
      </Container>
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
