import React, { useEffect, useState } from 'react';

import { Container } from 'src/components';

const ThemeToggle: React.FC = () => {
  const [isDarkChecked, setIsDarkChecked] = useState(true);
  const [isUseSystem, setIsUseSystem] = useState(false);
  const [isSystemDark, setIsSystemDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    if (mq.matches) {
      setIsSystemDark(true);
    }

    if ((isUseSystem && isSystemDark) || (!isUseSystem && isDarkChecked)) {
      document.documentElement.setAttribute('data-theme', 'dark-theme');
    } else {
      document.documentElement.setAttribute('data-theme', '');
    }

    // This callback will fire if the preferred color scheme changes without a reload
    mq.addEventListener('change', evt => setIsSystemDark(evt.matches));
  }, [isDarkChecked, isSystemDark, isUseSystem]);

  return (
    <Container>
      {/* <Row gap={3}> */}
      {/*  <Row gap={1}> */}
      {/*    <label htmlFor="dark-mode">Dark Mode?</label> */}
      {/*    <input */}
      {/*      id="dark-mode" */}
      {/*      type="checkbox" */}
      {/*      checked={!isUseSystem && isDarkChecked} */}
      {/*      disabled={isUseSystem} */}
      {/*      onChange={({ target }) => setIsDarkChecked(target.checked)} */}
      {/*    /> */}
      {/*  </Row> */}
      {/*  <Row gap={1}> */}
      {/*    <label htmlFor="system-dark">Use System?</label> */}
      {/*    <input */}
      {/*      id="system-dark" */}
      {/*      type="checkbox" */}
      {/*      checked={isUseSystem} */}
      {/*      onChange={({ target }) => setIsUseSystem(target.checked)} */}
      {/*    /> */}
      {/*  </Row> */}
      {/* </Row> */}
    </Container>
  );
};

export default ThemeToggle;
