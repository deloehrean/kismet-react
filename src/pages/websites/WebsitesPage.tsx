import React from 'react';

import { Column, PageHeading, WebsitesCard } from 'src/components';
import {
  axleContent,
  bangoContent,
  bravoContent,
  clearAcaContent,
  hrlPortalContent,
  intelContent,
  lakeAtitlanContent,
  petersFruitContent,
  prosemiContent,
  rocketChipsContent,
  sereneSpacesContent,
  solsticeContent,
  wotcContent,
} from 'src/components/WebsitesCard/WebsitesCardConstants';

// Top to bottom. The first gated site is the one locked visitors see as a ghost;
// any later gated site is simply left out for them.
type Site = { title: string; gated?: boolean };

const SITES: Site[] = [
  hrlPortalContent,
  wotcContent,
  rocketChipsContent,
  intelContent,
  clearAcaContent,
  prosemiContent,
  lakeAtitlanContent,
  bangoContent,
  sereneSpacesContent,
  axleContent,
  bravoContent,
  petersFruitContent,
  solsticeContent,
];

const firstGated = SITES.findIndex(site => site.gated);
const lockedCount = SITES.filter(site => site.gated).length;

// Alternate sides twice: across every site, and across only the sites a locked
// visitor sees, so neither view puts two cards on the same side in a row.
const cards = SITES.reduce<
  { content: Site; reverse: boolean; reverseLocked: boolean; ghost: boolean }[]
>((list, content, i) => {
  const ghost = !content.gated || i === firstGated;
  const shownLocked = list.filter(card => card.ghost).length;
  return [...list, { content, reverse: i % 2 === 1, reverseLocked: shownLocked % 2 === 1, ghost }];
}, []);

function WebsitesPage() {
  return (
    <Column gap={6}>
      <PageHeading
        title={'Websites'}
        subtitle={'Custom-built commerce, marketing, and compliance platforms'}
        divider
      />
      {cards.map(card => (
        <WebsitesCard
          key={card.content.title}
          content={card.content}
          reverse={card.reverse}
          reverseLocked={card.reverseLocked}
          ghost={card.ghost}
          lockedCount={lockedCount}
        />
      ))}
    </Column>
  );
}

export default WebsitesPage;
