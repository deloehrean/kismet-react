import React, { useState } from 'react';

import { flushSync } from 'react-dom';

import { CaseStudy, Column, PageHeading } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import freshWater from 'src/pages/case-studies/FreshWater';
import fusionOnline from 'src/pages/case-studies/FusionOnline';
import poppyParliament from 'src/pages/case-studies/PoppyParliament';
import solstice from 'src/pages/case-studies/Solstice';

// One entry per brand; each brings its own header copy and case study body.
const CASES = [fusionOnline, freshWater, poppyParliament, solstice];

const caseTop = (id: string) =>
  document.getElementById(`case-${id}`)?.getBoundingClientRect().top ?? 0;

function CaseStudiesPage() {
  // Accordion: opening one brand rolls up whichever was open before.
  const [openId, setOpenId] = useState<string | null>(null);
  // Switching brands swaps the panels without the roll animation - a smooth
  // scroll racing a collapse thousands of pixels tall throws the page around.
  const [switching, setSwitching] = useState(false);

  const toggle = (id: string) => {
    if (!openId || openId === id) {
      setSwitching(false);
      setOpenId(openId === id ? null : id);
      return;
    }

    // Swap the panels, pin the clicked header where it was on screen, then
    // glide it to the top.
    const before = caseTop(id);
    flushSync(() => {
      setSwitching(true);
      setOpenId(id);
    });
    const top = window.scrollY + caseTop(id);
    window.scrollTo({ top: top - before, behavior: 'instant' });
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Column className={s.root} gap={6}>
      <PageHeading
        title={'Case Studies'}
        subtitle={'The problem, the work, and how it held up'}
        divider
      />

      <div>
        {CASES.map(({ Body, ...c }) => (
          <CaseStudy key={c.id} {...c} open={openId === c.id} instant={switching} onToggle={toggle}>
            <Body />
          </CaseStudy>
        ))}
      </div>
    </Column>
  );
}

export default CaseStudiesPage;
