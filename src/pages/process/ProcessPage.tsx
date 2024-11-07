import React, { useEffect, useRef, useState } from 'react';

import cn from 'clsx';

// eslint-disable-next-line import/no-extraneous-dependencies
import Process1ReportingReview from 'src/assets/images/process/process-1-reporting-page-review.jpg';
import {
  Markup01,
  Markup02,
  Markup03,
  Markup04,
  Markup05,
  Markup06,
  Markup07,
  Markup08,
  Markup09,
  Markup10,
  Markup11,
  Markup12,
  Markup13,
  Markup14,
  Markup15,
  Markup16,
} from 'src/assets/images/process/screen-2-markup';
import { Column, CursorIcon, NavMenu, PageHeading, WebsiteTopper } from 'src/components';
import { processRoutes } from 'src/lib/routes/processRoutes';
import { isPasswordProtected } from 'src/lib/utils';
import { ProcessPageStyles as s } from 'src/pages';

function ProcessPage() {
  document.body.classList.remove('password-protected'); // TODO: Remove when complete

  const scrollWrapRef = useRef<HTMLInputElement>(null);
  const frameRef = useRef([]);
  const numberOfFrames = 8;

  const [activeFrame, setActiveFrame] = useState(1);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [frameScrollPercent, setFrameScrollPercent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      return isPasswordProtected();
    }, 2000);
  });

  function handleScroll(event) {
    const { scrollTop, clientHeight } = event.target;
    // const scrollPosition = scrollHeight - scrollTop - clientHeight;
    const frameScrollPercent = 1 + scrollTop / clientHeight;
    const activeFrameNumber = Math.round(frameScrollPercent);

    // setScrollPosition(scrollPosition);
    // setFrameScrollPercent(Number(frameScrollPercent.toFixed(1)));
    setActiveFrame(activeFrameNumber);
    window.scrollTo({
      top: scrollWrapRef.current?.offsetTop,
      behavior: 'smooth',
    });
  }

  const markupMap = [
    <Markup01 key={1} />,
    <Markup02 key={2} />,
    <Markup03 key={3} />,
    <Markup04 key={4} />,
    <Markup05 key={5} />,
    <Markup06 key={6} />,
    <Markup07 key={7} />,
    <Markup08 key={8} />,
    <Markup09 key={9} />,
    <Markup10 key={10} />,
    <Markup11 key={11} />,
    <Markup12 key={12} />,
    <Markup13 key={13} />,
    <Markup14 key={14} />,
    <Markup15 key={15} />,
    <Markup16 key={16} />,
  ];

  const renderFrame2 = () => {
    return (
      <div className={cn(s.markup, activeFrame === 2 && s.active)}>
        {markupMap.map((markup, index) => (
          <div className={cn(s.mark, s[`mark-${index + 1}`])} key={index}>
            {markup}
          </div>
        ))}
        <span className={cn(s.comment, s['comment-1'])}>Not vertically centered</span>
        <span className={cn(s.comment, s['comment-2'])}>Not horizontally centered</span>
        <span className={cn(s.comment, s['comment-3'])}>Too little margin / padding</span>
        <span className={cn(s.comment, s['comment-4'])}>
          Banner is clunky and takes up too much space
        </span>
        <span className={cn(s.comment, s['comment-5'])}>Too much of a gap</span>
        <span className={cn(s.comment, s['comment-6'])}>
          Should be aligned horizontally or vertically
        </span>
      </div>
    );
  };

  const renderFrame3 = () => {
    return (
      <div className={cn(activeFrame === 3 && s.active, s.before)}>
        <div className={s.cursor}>
          <CursorIcon />
        </div>
        <NavMenu routes={processRoutes} variant={'process-nav'} />
      </div>
    );
  };
  return (
    <Column gap={6} className={s.root}>
      <PageHeading title={'Process'} subtitle={'Making lemonade from lemons'} divider />
      {/* {isPasswordProtected() && ( */}
      {/*  <Typography variant={'overline'} align={'center'} gutter> */}
      {/*    In order to access this page, you must first apply the password from my resume. */}
      {/*  </Typography> */}
      {/* )} */}
      <div className={s['full-wrap']} ref={scrollWrapRef}>
        <div
          className={cn(s['scroll-wrap'], s[`active-frame-${activeFrame}`])}
          onScroll={handleScroll}
        >
          {Array.from(Array(numberOfFrames)).map((_, index) => (
            <div
              key={index}
              // @ts-ignore
              ref={index => frameRef.current.push(index)}
              className={cn(s.frame, s[`frame-${index + 1}`])}
            >
              {/* {contentGoesHere} */}
            </div>
          ))}
        </div>
        <div className={cn(s['content-wrap'], s[`active-frame-${activeFrame}`])}>
          <div className={s['crop-wrap']}>
            <div className={s['website-wrap']}>
              <div className={s['website-topper']}>{WebsiteTopper}</div>
              <div className={s.img}>
                <img src={Process1ReportingReview} alt={''} />
              </div>
              {renderFrame2()}
              {renderFrame3()}
            </div>
          </div>
          {/* <div className={s.shape}> */}
          {/*  <p>Scroll Position: {scrollPosition}</p> */}
          {/*  <p>Frame Number %: {frameScrollPercent}</p> */}
          {/* </div> */}
        </div>
      </div>
    </Column>
  );
}

export default ProcessPage;
