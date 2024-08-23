import React from 'react';

import { Container, Divider, PageHeadingStyles as s, Typography } from 'src/components';

type PageHeadingProps = {
  title: string | any;
  subtitle?: string;
  divider?: boolean;
};

const PageHeading: React.FC<PageHeadingProps> = ({ title, divider, subtitle }) => {
  return (
    <React.Fragment>
      <Container className={s.root}>
        <div className={'title'}>
          <Typography variant={'h1'} gutter>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant={'subtitle1'} color={'secondary'}>
              {subtitle}
            </Typography>
          )}
        </div>
      </Container>
      <Container>{divider && <Divider />}</Container>
    </React.Fragment>
  );
};
export default PageHeading;
