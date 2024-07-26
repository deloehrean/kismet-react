import React, { FC } from 'react';

import {
  AppbarStyles as s,
  Column,
  Container,
  Icon,
  Typography,
  Breadcrumbs,
} from 'src/components';
import { routes } from 'src/lib/routes/routes';

type AppbarProps = {
  searchbar?: boolean;
  breadcrumbs?: boolean;
};

const renderSearchbar = () => {
  return <Typography>Searchbar here</Typography>;
};

const Appbar: FC<AppbarProps> = ({ searchbar, breadcrumbs }) => {
  return (
    <header className={s.root}>
      <Container direction={'row'} align={'center'} full>
        {breadcrumbs && <Breadcrumbs routes={routes} />}
        {searchbar && renderSearchbar()}
      </Container>

      <Container direction={'row'} align={'center'} className={s['account-options']}>
        <Icon name="starIcon" size="medium" />
        <Column>
          <Typography variant={'subtitle1'} gutter>
            Person Human
          </Typography>
          <Typography variant={'tooltip'}>Good morning!</Typography>
        </Column>
      </Container>
    </header>
  );
};

export default Appbar;
