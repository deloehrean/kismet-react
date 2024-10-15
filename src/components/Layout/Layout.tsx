import { Suspense, useEffect, useState } from 'react';

import { Appbar, Footer, LayoutStyles as s } from 'src/components';
import { routes } from 'src/lib/routes/routes';
import { RoutesRenderer } from 'src/lib/routes/RoutesRenderer';
import { useActiveRoutePaths } from 'src/lib/routes/useActiveRoutePaths';

function Loader() {
  return <div>Loading...</div>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layout = ({ children }) => {
  const activeRoutePaths = useActiveRoutePaths(routes);
  const activeRouterColors = activeRoutePaths.filter(route => route.definition.color);
  const parentRouterColor = activeRouterColors[0]?.definition.color || 'rust';
  const [currentColor, setCurrentColor] = useState('rust');

  useEffect(() => {
    if (parentRouterColor !== currentColor) {
      setCurrentColor(parentRouterColor);
    }
  }, [parentRouterColor, currentColor]);

  return (
    <div className={s.root}>
      <div className={s.pageWrap}>
        <Appbar color={currentColor} />
        <main className={s[`${currentColor}`]}>
          <Suspense fallback={<Loader />}>
            <RoutesRenderer routes={routes} />
          </Suspense>
        </main>
        <Footer color={currentColor} />
      </div>
    </div>
  );
};

export default Layout;
