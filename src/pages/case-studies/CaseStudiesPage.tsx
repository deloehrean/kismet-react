import React, { useState } from 'react';

import { flushSync } from 'react-dom';

import { CaseStudy, Column, PageHeading } from 'src/components';
import { CaseStudiesStyles as s } from 'src/pages/case-studies';
import designSystem from 'src/pages/case-studies/DesignSystem';
import freshWater from 'src/pages/case-studies/FreshWater';
import fusionOnline from 'src/pages/case-studies/FusionOnline';
import hrlogics from 'src/pages/case-studies/HRlogics';
import poppyParliament from 'src/pages/case-studies/PoppyParliament';

const CASES = [fusionOnline, hrlogics, designSystem, freshWater, poppyParliament];

const caseTop = (id: string) =>
  document.getElementById(`case-${id}`)?.getBoundingClientRect().top ?? 0;

function CaseStudiesPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [switching, setSwitching] = useState(false);

  const toggle = (id: string) => {
    if (!openId || openId === id) {
      setSwitching(false);
      setOpenId(openId === id ? null : id);
      return;
    }

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
