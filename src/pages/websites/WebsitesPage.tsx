import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { Column, PageHeading, WebsitesCard } from 'src/components';
import type { WebsiteContent } from 'src/components/WebsitesCard/WebsitesCard';
import {
  aeaContent,
  assisiContent,
  axleContent,
  bangoContent,
  bravoContent,
  clearAcaContent,
  fishbatContent,
  fountainOfLifeContent,
  fusionOnlineContent,
  hrlPortalContent,
  intelContent,
  lakeAtitlanContent,
  petersFruitContent,
  prosemiContent,
  psdContent,
  rocketChipsContent,
  sereneSpacesContent,
  solsticeContent,
  wotcContent,
} from 'src/components/WebsitesCard/WebsitesCardConstants';

const SITES: WebsiteContent[] = [
  hrlPortalContent,
  wotcContent,
  rocketChipsContent,
  fusionOnlineContent,
  intelContent,
  clearAcaContent,
  prosemiContent,
  lakeAtitlanContent,
  fountainOfLifeContent,
  aeaContent,
  assisiContent,
  fishbatContent,
  psdContent,
  bangoContent,
  sereneSpacesContent,
  axleContent,
  bravoContent,
  petersFruitContent,
  solsticeContent,
];

const firstGated = SITES.findIndex(site => site.gated);
const lockedCount = SITES.filter(site => site.gated).length;

const cards = SITES.reduce<
  { content: WebsiteContent; reverse: boolean; reverseLocked: boolean; ghost: boolean }[]
>((list, content, i) => {
  const ghost = !content.gated || i === firstGated;
  const shownLocked = list.filter(card => card.ghost).length;
  return [...list, { content, reverse: i % 2 === 1, reverseLocked: shownLocked % 2 === 1, ghost }];
}, []);

function WebsitesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return undefined;
    }
    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <Column gap={6}>
      <PageHeading
        title={'Websites'}
        subtitle={'Commerce, marketing, and compliance sites, from small business to enterprise'}
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
