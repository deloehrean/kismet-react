import React, { useEffect, useRef, useState } from 'react';

import cn from 'clsx';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Column, PageHeading } from 'src/components';
import { isPasswordProtected } from 'src/lib/utils';
import { ProcessPageStyles as s } from 'src/pages';

function ProcessPage() {
  const scrollWrapRef = useRef<HTMLInputElement>(null);
  const numberOfFrames = 8;

  const frameRef = useRef([]);

  useEffect(() => {
    setInterval(() => {
      return isPasswordProtected();
    }, 2000);
  });

  const [isVisible, setIsVisible] = useState(false);
  const [scrollIsActive, setScrollIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [frameScrollPercent, setFrameScrollPercent] = useState(0);
  const [activeFrame, setActiveFrame] = useState(1);

  function handleScroll(event) {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const scrollPosition = scrollHeight - scrollTop - clientHeight;
    const frameHeight = scrollHeight - scrollTop;
    const windowHeight = window.innerHeight;
    const windowScrollPos = document.documentElement.scrollTop;

    const frameScrollPercent = 1 + scrollTop / clientHeight;

    window.scrollTo({
      top: scrollWrapRef.current?.offsetTop,
      behavior: 'smooth',
    });

    const activeFrameNumber = Math.round(frameScrollPercent);

    console.log(activeFrameNumber);

    console.log(windowHeight, windowScrollPos, frameScrollPercent);

    console.log(scrollPosition, scrollHeight, scrollTop, clientHeight, frameHeight);
    setScrollPosition(scrollPosition);
    setFrameScrollPercent(Number(frameScrollPercent.toFixed(1)));
    setActiveFrame(activeFrameNumber);
  }

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
            />
          ))}
        </div>
        <div className={cn(s['content-wrap'], s[`active-frame-${activeFrame}`])}>
          <div className={s.shape}>
            <p>Scroll Position: {scrollPosition}</p>
            <p>Frame Number %: {frameScrollPercent}</p>
          </div>
        </div>
      </div>
    </Column>
  );
}

export default ProcessPage;
