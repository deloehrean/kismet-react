import React from 'react';

import { Column, PageHeading, WebsitesCard } from 'src/components';
import {
  axleContent,
  bangoContent,
  bravoContent,
  clearAcaContent,
  intelContent,
  lakeAtitlanContent,
  petersFruitContent,
  prosemiContent,
  sereneSpacesContent,
} from 'src/components/WebsitesCard/WebsitesCardConstants';
function WebsitesPage() {
  return (
    <Column gap={6}>
      <PageHeading title={'Websites'} subtitle={'Custom built solutions for any problem'} divider />
      <WebsitesCard content={intelContent} />
      <WebsitesCard content={clearAcaContent} reverse />
      <WebsitesCard content={prosemiContent} />
      <WebsitesCard content={lakeAtitlanContent} reverse />
      <WebsitesCard content={bangoContent} />
      <WebsitesCard content={sereneSpacesContent} reverse />
      <WebsitesCard content={axleContent} />
      <WebsitesCard content={bravoContent} reverse />
      <WebsitesCard content={petersFruitContent} />
    </Column>
  );
}

export default WebsitesPage;
