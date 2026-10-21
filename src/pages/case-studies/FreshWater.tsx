import React from 'react';

import AppLayoutDatasets from 'src/assets/images/case-studies/fresh-water/app-layout-datasets.jpg';
import AppLayout from 'src/assets/images/case-studies/fresh-water/app-layout.jpg';
import DashboardFirst from 'src/assets/images/case-studies/fresh-water/dashboard-v1.jpg';
import Mark from 'src/assets/images/case-studies/fresh-water/mark.jpg';
import MockupOverview from 'src/assets/images/case-studies/fresh-water/mockup-overview.jpg';
import MockupTeam from 'src/assets/images/case-studies/fresh-water/mockup-team.jpg';
import SiteForecasting from 'src/assets/images/websites/lake-atitlan/lake-atitlan-forcasting.jpg';
import SiteHome from 'src/assets/images/websites/lake-atitlan/lake-atitlan-homepage.jpg';
import SiteMonitoring from 'src/assets/images/websites/lake-atitlan/lake-atitlan-monitoring.jpg';
import { LinkStyled } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Tile } from 'src/pages/case-studies/CaseStudyParts';

const FreshWaterBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — Discovery'}
      title={'A mockup made of questions'}
      lead={
        'The first layout, in April 2020, was mostly open questions set in place. False color or ' +
        'optical imagery? What belongs on the dashboard, and what on a dedicated data page? Is ' +
        'there room for citizen science? Each one went back to the science team before anything ' +
        'was built.'
      }
    >
      <div className={s.pair}>
        <Tile img={MockupOverview} label={'Rough mockup — overview'} ratio={0.64} />
        <Tile img={MockupTeam} label={'Rough mockup — team'} ratio={0.64} />
      </div>
    </Section>

    <Section
      eyebrow={'02 — The site'}
      title={'One story, three depths'}
      lead={
        'The build kept the mockup’s structure: an overview for the public, then a page each for ' +
        'the forecasts and the raw monitoring data, for the officials who had to act on them.'
      }
    >
      <div className={s.row3}>
        <Tile img={SiteHome} label={'Overview'} ratio={0.35} />
        <Tile img={SiteForecasting} label={'Forecasting'} ratio={0.78} />
        <Tile img={SiteMonitoring} label={'Monitoring & data'} ratio={0.43} />
      </div>
      <LinkStyled to={'/websites#site-university-of-alabama-huntsville-nasa-lake-atitlan-project'}>
        See the build on Websites &rarr;
      </LinkStyled>
    </Section>

    <Section
      eyebrow={'03 — The dashboard'}
      title={'From a sidebar to the whole screen'}
      lead={
        'The first dashboard answered one question, whether a bloom was likely, beside a single ' +
        'satellite image. The July redesign gave the screen to the lake: imagery edge to edge, any ' +
        'of the team’s datasets on demand, and bloom probability lined up against lake and land ' +
        'temperature on one timeline, so the readings can be compared at a glance.'
      }
    >
      <Tile img={DashboardFirst} label={'First dashboard'} ratio={1.74} />
      <div className={s.pair}>
        <Tile img={AppLayout} label={'Redesign — map and timeline'} ratio={1.18} />
        <Tile img={AppLayoutDatasets} label={'Redesign — dataset picker open'} ratio={1.18} />
      </div>
    </Section>
  </React.Fragment>
);

const freshWater = {
  id: 'fresh-water',
  mark: Mark,
  markAlt: 'Satellite view of an algal bloom on Lake Atitlán',
  title: 'Fresh Water',
  meta: 'Product & UX · Research platform · Lake Atitlán, Guatemala · 2020',
  summary: (
    <React.Fragment>
      A public site and forecasting dashboard for a UAH research team, working with NASA, Microsoft,
      and National Geographic, that used satellite imagery and AI to predict algal blooms on the lake &mdash; worked out with the scientists,
      built for the people who had to act on it.
    </React.Fragment>
  ),
  Body: FreshWaterBody,
};

export default freshWater;
