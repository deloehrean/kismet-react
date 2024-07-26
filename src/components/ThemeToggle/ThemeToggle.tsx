import React, { useEffect, useState } from 'react';
import { Container, Row, Column } from 'src/components';

const ThemeToggle: React.FC = () => {
  const [isDarkChecked, setIsDarkChecked] = useState(false);
  const [isUseSystem, setIsUseSystem] = useState(true);
  const [isSystemDark, setIsSystemDark] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    if (mq.matches) {
      setIsSystemDark(true);
    }

    if ((isUseSystem && isSystemDark) || (!isUseSystem && isDarkChecked)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark-theme');
    } else {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', '');
    }

    // This callback will fire if the preferred color scheme changes without a reload
    mq.addEventListener('change', evt => setIsSystemDark(evt.matches));
  }, [isDarkChecked, isSystemDark, isUseSystem]);

  return (
    <Container styled rounded variant={'outline'}>
      <Column gap={1}>
        <Row gap={1}>
          <label htmlFor="dark-mode">Dark Mode?</label>
          <input
            id="dark-mode"
            type="checkbox"
            checked={!isUseSystem && isDarkChecked}
            disabled={isUseSystem}
            onChange={({ target }) => setIsDarkChecked(target.checked)}
          />
        </Row>
        <Row gap={1}>
          <label htmlFor="system-dark">Use System?</label>
          <input
            id="system-dark"
            type="checkbox"
            checked={isUseSystem}
            onChange={({ target }) => setIsUseSystem(target.checked)}
          />
        </Row>
      </Column>
    </Container>
  );
};

export default ThemeToggle;
