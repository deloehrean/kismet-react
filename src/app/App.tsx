import { useEffect, useRef } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Layout } from 'src/components';
import { resolveAccess } from 'src/lib/access';
import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';
import { routes } from 'src/lib/routes/routes';

const isHome = (path: string) => path === '/' || path === '/home';

const SITE_TITLE = 'Andrew Loehr Portfolio - Kismet';

const pageTitle = (path: string) => {
  if (isHome(path)) {
    return SITE_TITLE;
  }
  const [top, child] = path.split('/').filter(Boolean);
  const section = routes.find(route => route.path === `/${top}`);
  const children = section?.children as RoutePathDefinition[] | undefined;
  const page = child ? children?.find(c => c.path === child) : section;
  return `${page?.title ?? 'Not Found'} | ${SITE_TITLE}`;
};

function App() {
  const { pathname, hash } = useLocation();
  const actedOn = useRef(pathname);

  useEffect(() => {
    document.body.classList.remove('loading');
    const unlocked = resolveAccess();
    setTimeout(() => {
      document.body.classList.remove('pw-loading');
    }, 1000);
    if (unlocked) {
      document.body.classList.add('intro');
      setTimeout(() => {
        document.body.classList.remove('intro');
      }, 2600);
      return;
    }
    if (!isHome(pathname)) {
      document.body.classList.add('pw-compact');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = pageTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    if (actedOn.current === pathname) {
      return;
    }
    actedOn.current = pathname;
    document.body.classList.add('pw-compact');
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
