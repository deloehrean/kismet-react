import React, { FC } from 'react';

import cn from 'clsx';

import ResumePdf from 'src/assets/images/andrew-loehr_web-resume-2024.pdf';
import ResumeImg from 'src/assets/images/andrew-loehr_web-resume-plain.jpg';
import { Container, LinkStyled, Typography } from 'src/components';
import { ResumeStyles as s } from 'src/components/Resume/index';

type ResumeProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  inAppbar?: boolean;
};

const Resume: FC<ResumeProps> = ({ inAppbar = false }) => {
  return (
    <Container
      variant={'static'}
      align={'center'}
      className={s['resume-downloads']}
      gap={inAppbar ? 3 : 0}
    >
      {!inAppbar && (
        <React.Fragment>
          <Typography variant={'h6'} gutter>
            Resume Download
          </Typography>
          <Typography variant={'overline'} color={'secondary'} gutter>
            Hire me!
          </Typography>
        </React.Fragment>
      )}
      <div className={cn(s.resume, s['resume-plain'])}>
        <LinkStyled to={ResumePdf} target="_blank">
          <img src={ResumeImg} alt={'Andrew M Loehr Resume'} />
          <span>PDF Download</span>
        </LinkStyled>
      </div>
      {/* {inAppbar && ( */}
      {/*  <Container> */}
      {/*    <Typography variant={'code'} align={'center'}> */}
      {/*      Download for password */}
      {/*    </Typography> */}
      {/*  </Container> */}
      {/* )} */}
    </Container>
  );
};

export default Resume;
