import React from 'react';

import Mark from 'src/assets/images/case-studies/solstice/mark.png';
import OldHome from 'src/assets/images/case-studies/solstice/old-home.jpg';
import OldServices from 'src/assets/images/case-studies/solstice/old-services.jpg';
import OldTherapists from 'src/assets/images/case-studies/solstice/old-therapists.jpg';
import NewAbout from 'src/assets/images/websites/solstice/solstice-about.jpg';
import NewHome from 'src/assets/images/websites/solstice/solstice-home.jpg';
import NewServices from 'src/assets/images/websites/solstice/solstice-services.jpg';
import { LinkStyled } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import { Section, Tile } from 'src/pages/case-studies/CaseStudyParts';

const SolsticeBody = () => (
  <React.Fragment>
    <Section
      eyebrow={'01 — The original site'}
      title={'Built in 2008 and never touched again'}
      lead={
        'Someone else built the studio’s first site in 2008: a fixed column under 700 pixels wide, small orange type, and a booking button tucked into a corner later. It stayed that way for more than a decade (a few lifetimes, in website years), and then it went down without warning.'
      }
    />

    <Section
      eyebrow={'02 — The redesign'}
      title={'The same studio, a modern site'}
      lead={
        'I gathered the old site’s files and copy and redesigned it as a modern, responsive site, cutting the fat and filling in what the original was missing. The logo and colors came with the studio. My work was the website, and I wanted it to feel like the same place her clients already knew.'
      }
    >
      <div className={s.pair}>
        <Tile img={OldHome} label={'Home, before'} ratio={1.08} />
        <Tile img={NewHome} label={'Home, after'} ratio={1.08} top />
      </div>
    </Section>

    <Section
      eyebrow={'03 — Services and pricing'}
      title={'Prices you can compare at a glance'}
      lead={
        'The old services page was one long column of small type. The new one sets each service’s lengths and prices side by side, with packages, gift certificates, and policies in their own cards, so a first-time client can choose a massage without calling to ask.'
      }
    >
      <div className={s.pair}>
        <Tile img={OldServices} label={'Services, before'} ratio={0.48} />
        <Tile img={NewServices} label={'Services, after'} ratio={0.48} top />
      </div>
    </Section>

    <Section
      eyebrow={'04 — Booking'}
      title={'Booking on every page'}
      lead={
        'Booking used to be a small button in a corner, which is a strange place for the one thing almost every visitor came to do. Now Book Now sits in the header of every page and leads the homepage, and the therapist page became an About page with her full bio and training.'
      }
    >
      <div className={s.pair}>
        <Tile img={OldTherapists} label={'Therapists, before'} ratio={0.97} />
        <Tile img={NewAbout} label={'About, after'} ratio={0.97} top />
      </div>
      <LinkStyled to={'/websites#site-solstice-massage-therapy'}>
        See the site on Websites &rarr;
      </LinkStyled>
    </Section>
  </React.Fragment>
);

const solstice = {
  id: 'solstice',
  mark: Mark,
  markAlt: 'Solstice Massage Therapy logo',
  title: 'Solstice Massage Therapy',
  meta: 'Web Design & Development · Massage studio · 2026',
  summary: (
    <React.Fragment>
      A neighborhood massage studio’s website had gone unchanged since 2008, and then it went down.
      I gathered what was left of the old files and redesigned it as a modern, responsive site with
      full pricing, the therapist bio, directions, and online booking.
    </React.Fragment>
  ),
  Body: SolsticeBody,
};

export default solstice;
