import React, { useEffect, useState } from 'react';

import { Container, Row, ThemeToggleStyles as s } from 'src/components';

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
    <Container className={s.root}>
      <Row gap={3}>
        <label htmlFor="dark-mode">
          Dark Mode?
          <input
            id="dark-mode"
            type="checkbox"
            checked={!isUseSystem && isDarkChecked}
            disabled={isUseSystem}
            onChange={({ target }) => setIsDarkChecked(target.checked)}
          />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="system-dark">
          Use System?
          <input
            id="system-dark"
            type="checkbox"
            checked={isUseSystem}
            onChange={({ target }) => setIsUseSystem(target.checked)}
          />
        </label>
      </Row>
    </Container>
  );
};

export default ThemeToggle;
