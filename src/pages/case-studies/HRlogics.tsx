import React from 'react';

import BeforeClearI9 from 'src/assets/images/case-studies/hrlogics/before-cleari9.jpg';
import BeforeOnCentive from 'src/assets/images/case-studies/hrlogics/before-oncentive.jpg';
import CircleClearVerify from 'src/assets/images/case-studies/hrlogics/circle-clear-verify.jpg';
import CircleHome from 'src/assets/images/case-studies/hrlogics/circle-home.jpg';
import CircleRyze from 'src/assets/images/case-studies/hrlogics/circle-ryze.jpg';
import CircleUcm from 'src/assets/images/case-studies/hrlogics/circle-ucm.jpg';
import GuideAlerts from 'src/assets/images/case-studies/hrlogics/guide-alerts.jpg';
import GuideHive from 'src/assets/images/case-studies/hrlogics/guide-hive-wotc-i9.jpg';
import GuidePalette from 'src/assets/images/case-studies/hrlogics/guide-palette.jpg';
import GuideProductLogos from 'src/assets/images/case-studies/hrlogics/guide-product-logos.jpg';
import LaunchPrelaunch from 'src/assets/images/case-studies/hrlogics/launch-2023-prelaunch.jpg';
import LaunchSite from 'src/assets/images/case-studies/hrlogics/launch-2023-site.jpg';
import LinkedInBanner from 'src/assets/images/case-studies/hrlogics/linkedin-banner.jpg';
import Logos2024 from 'src/assets/images/case-studies/hrlogics/logos-2024.jpg';
import Logos2026Dark from 'src/assets/images/case-studies/hrlogics/logos-2026-dark.jpg';
import Logos2026Light from 'src/assets/images/case-studies/hrlogics/logos-2026-light.jpg';
import LogosRedraw from 'src/assets/images/case-studies/hrlogics/logos-redraw.jpg';
import Mark from 'src/assets/images/case-studies/hrlogics/mark.svg';
import PaletteOldNew from 'src/assets/images/case-studies/hrlogics/palette-old-new.jpg';
import RhBifoldUcm from 'src/assets/images/case-studies/hrlogics/rh-bifold-ucm.jpg';
import RhLinkedInOne from 'src/assets/images/case-studies/hrlogics/rh-linkedin-1.jpg';
import RhLinkedInTwo from 'src/assets/images/case-studies/hrlogics/rh-linkedin-2.jpg';
import RhSlickUcmCover from 'src/assets/images/case-studies/hrlogics/rh-slick-ucm-cover.jpg';
import RhSlickVerifyCover from 'src/assets/images/case-studies/hrlogics/rh-slick-verify-cover.jpg';
import RhSlickVerify from 'src/assets/images/case-studies/hrlogics/rh-slick-verify.jpg';
import RyzeLogos from 'src/assets/images/case-studies/hrlogics/ryze-logos.jpg';
import ShowBannerA from 'src/assets/images/case-studies/hrlogics/show-banner-a.jpg';
import ShowBannerB from 'src/assets/images/case-studies/hrlogics/show-banner-b.jpg';
import ShowTablecloth from 'src/assets/images/case-studies/hrlogics/show-tablecloth.jpg';
import Site2025 from 'src/assets/images/case-studies/hrlogics/site-2025.jpg';
import ZoomBackground from 'src/assets/images/case-studies/hrlogics/zoom-background.jpg';
import PortalDashboard from 'src/assets/images/websites/hrl-portal/hrl-portal-dashboard.jpg';
import PortalSignIn from 'src/assets/images/websites/hrl-portal/hrl-portal-sign-in.jpg';
import WotcApplicants from 'src/assets/images/websites/wotc/wotc-applicants.jpg';
import { LinkStyled, Typography } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Stats, Tile } from 'src/pages/case-studies/CaseStudyParts';

const PALETTE = [
  { hex: '#110B48', name: 'Dark Blue' },
  { hex: '#22168F', name: 'Bright Blue' },
  { hex: '#E84A0A', name: 'Orange' },
  { hex: '#F39D00', name: 'Yellow' },
];

const PUBLISHED = [
  { value: '$64.4M', label: 'Liability removed' },
  { value: '$3B', label: 'Captured tax credits' },
  { value: '27,000', label: 'Data records in four months' },
  { value: '300+', label: 'HRlogics customers' },
];

const HRlogicsBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — Before'}
      title={'Two brands, two websites'}
      lead={
        'OnCentive sold tax credits and incentives. Clear I-9 sold Form I-9 compliance. They ' +
        'belonged to the same company, but each had its own site, its own colors, and its own ' +
        'voice.'
      }
    >
      <div className={s.pair}>
        <Tile img={BeforeOnCentive} label={'oncentive.com, 2022'} ratio={1.6} />
        <Tile img={BeforeClearI9} label={'cleari9.com, 2022'} ratio={1.6} />
      </div>
    </Section>

    <Section
      eyebrow={'02 — The hive'}
      title={'One name for the whole suite'}
      lead={
        'Trak Capital was bringing its compliance products together under a single sign-on as ' +
        'HRlogics. I was brought in to finish the hive and build the brand around it for the ' +
        'April 3, 2023 launch: a network of hexagons for a suite of connected products, in navy, ' +
        'orange, and gold.'
      }
    >
      <div className={s.pair}>
        <Tile img={LaunchPrelaunch} label={'The pre-launch page, March 2023'} ratio={1.6} />
        <Tile img={LaunchSite} label={'hrlogics.com at launch, April 2023'} ratio={1.6} />
      </div>
    </Section>

    <Section
      eyebrow={'03 — The product system'}
      title={'One guide for every product'}
      lead={
        'Once the products shared one platform, they needed shared rules. The product branding ' +
        'guide set a palette for the interface, an alert color with one job each, a rounded type ' +
        'family with Montserrat for anything in caps, and two tiers: Clear for software only, ' +
        'Total for software plus service.'
      }
    >
      <div className={s.pair}>
        <Tile img={GuidePalette} label={'Product color palette'} ratio={1.29} />
        <Tile img={GuideAlerts} label={'Alert colors and their jobs'} ratio={1.29} />
        <Tile img={GuideProductLogos} label={'Clear and Total product logos'} ratio={1.29} />
        <Tile img={GuideHive} label={'Hive application'} ratio={1.29} />
      </div>
    </Section>

    <Section
      eyebrow={'04 — The logo system'}
      title={'Every mark, at every size'}
      lead={
        'The guide grew into the hive’s original logo system: a wordmark for each product in ' +
        'both tiers, a bold standalone mark for each with an orange gradient, and exports at ' +
        'every size, in color and one color, for light and dark backgrounds.'
      }
    >
      <Tile img={Logos2024} label={'The original logo system, v0.7, January 2024'} ratio={2.76} />
    </Section>

    <Section
      eyebrow={'05 — Ryze'}
      title={'A name of its own for tax credits'}
      lead={
        'Tax credits got their own brand. Ryze rises on a single phoenix stroke, and WOTC ' +
        'became ryze WOTC by HRlogics.'
      }
    >
      <Tile img={RyzeLogos} label={'Ryze, Ryze by HRlogics, and ryze WOTC'} ratio={5.22} />
    </Section>

    <Section
      eyebrow={'06 — The portal rebrand'}
      title={'Redrawn for one sign-on'}
      lead={
        'As HRL Portal took shape in 2025 to bring every product behind a single sign-on, I redrew the ' +
        'logos for it. The gradients came out for a flat orange, the navy moved to a slightly ' +
        'darker blue, every product took the same light wordmark signed “by HRlogics,” and Ryze ' +
        'joined the family under the HRlogics umbrella.'
      }
    >
      <div className={s.library}>
        <Tile
          img={LogosRedraw}
          label={'The original logos and their portal redraws'}
          ratio={1.55}
        />
        <Tile img={PaletteOldNew} label={'Old colors and new'} ratio={1.07} />
      </div>
    </Section>

    <Section
      eyebrow={'07 — The 2025 website'}
      title={'HR compliance, without the “corporate”'}
      lead={
        'I redesigned hrlogics.com in the new colors the same year. The hive stayed front and ' +
        'center, and each product page got an illustration that pairs the software with a ' +
        'number that matters to the buyer.'
      }
    >
      <div className={s.library}>
        <Tile img={Site2025} label={'hrlogics.com, 2025'} ratio={1.6} />
        <Tile img={CircleHome} label={'Home'} />
      </div>
      <div className={s.swatches}>
        {PALETTE.map(c => (
          <div key={c.hex} className={s.swatch}>
            <span style={{ background: c.hex }} />
            <strong>{c.name}</strong>
            <code>{c.hex}</code>
          </div>
        ))}
      </div>
      <div className={s.row3}>
        <Tile img={CircleClearVerify} label={'Clear Verify'} />
        <Tile img={CircleRyze} label={'Ryze'} />
        <Tile img={CircleUcm} label={'UCM'} />
      </div>
      <Stats items={PUBLISHED} source={'From the 2025 hrlogics.com homepage and product pages.'} />
    </Section>

    <Section
      eyebrow={'08 — Out in the world'}
      title={'Booths, backgrounds, and print'}
      lead={
        'The same system carried the trade-show booth, the team’s video-call backgrounds, and ' +
        'the company’s LinkedIn page.'
      }
    >
      <div className={s.row4}>
        <Tile img={ShowBannerA} label={'Trade-show banner'} ratio={0.43} />
        <Tile img={ShowBannerB} label={'Trade-show banner'} ratio={0.6} />
        <div className={s.span2}>
          <Tile img={ShowTablecloth} label={'Trade-show tablecloth'} ratio={2.35} />
          <Tile img={ZoomBackground} label={'Video-call background'} ratio={1.78} />
        </div>
      </div>
      <Tile img={LinkedInBanner} label={'LinkedIn banner'} ratio={5.91} />
      <Typography variant={'body2'} className={s.lead}>
        For the fall 2025 campaign, Red Herring Design designed the reseller print slicks and the
        LinkedIn ads, working from my brand assets and the rules in the brand guide.
      </Typography>
      <div className={s.row4}>
        <Tile
          img={RhSlickVerifyCover}
          label={'Clear Verify slick cover, by Red Herring Design'}
          ratio={0.65}
        />
        <Tile img={RhSlickUcmCover} label={'UCM slick cover, by Red Herring Design'} ratio={0.65} />
        <Tile img={RhLinkedInOne} label={'LinkedIn ad, by Red Herring Design'} />
        <Tile img={RhLinkedInTwo} label={'LinkedIn ad, by Red Herring Design'} />
      </div>
      <div className={s.pair}>
        <Tile
          img={RhSlickVerify}
          label={'Clear Verify slick, by Red Herring Design'}
          ratio={1.55}
        />
        <Tile img={RhBifoldUcm} label={'UCM bifold, by Red Herring Design'} ratio={1.55} />
      </div>
    </Section>

    <Section
      eyebrow={'09 — Into the product'}
      title={'The brand inside the software'}
      lead={
        'The 2026 set finished the redraw: every product in light and dark, plus product icons in ' +
        'two weights. HRL Portal and the WOTC app were built in it.'
      }
    >
      <div className={s.pair}>
        <Tile img={Logos2026Light} label={'2026 logo set, light'} ratio={4.15} />
        <Tile img={Logos2026Dark} label={'2026 logo set, dark'} ratio={4.15} />
      </div>
      <div className={s.row3}>
        <Tile img={PortalSignIn} label={'HRL Portal sign-in'} ratio={1.14} />
        <Tile img={PortalDashboard} label={'HRL Portal dashboard'} ratio={1.14} />
        <Tile img={WotcApplicants} label={'ryze WOTC applicants'} ratio={1.14} />
      </div>
      <LinkStyled to={'/websites#site-hrlogics-portal'}>
        See HRL Portal and WOTC on Websites &rarr;
      </LinkStyled>
    </Section>
  </React.Fragment>
);

const hrlogics = {
  id: 'hrlogics',
  mark: Mark,
  markAlt: 'The HRlogics hive',
  title: 'HRlogics',
  meta: 'Identity & Product · HR compliance suite · 2023–2026',
  summary: (
    <React.Fragment>
      Two compliance brands, each with its own site, colors, and voice, became one suite. I was
      brought in to finish the hive and build the brand around it, then stayed with it through a
      product system, a full logo set, a tax-credit brand, a portal rebrand, and finally into the
      software itself.
    </React.Fragment>
  ),
  Body: HRlogicsBody,
};

export default hrlogics;
