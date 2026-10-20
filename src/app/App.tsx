import { useEffect, useRef } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Layout } from 'src/components';
import { resolveAccess } from 'src/lib/access';

const isHome = (path: string) => path === '/' || path === '/home';

function App() {
  const { pathname } = useLocation();
  // The pathname we last acted on, seeded with the one we landed on. A boolean
  // "have I rendered yet" flag cannot do this job: refs survive StrictMode's
  // simulated remount, so the second mount found the flag already spent and
  // minimized the hero before anyone had touched anything.
  const actedOn = useRef(pathname);

  useEffect(() => {
    document.body.classList.remove('loading');
    // an access link (?k=) or a previous visit unlocks before anything animates,
    // so invited visitors never see the gate at all
    const unlocked = resolveAccess();
    setTimeout(() => {
      document.body.classList.remove('pw-loading');
    }, 1000);
    if (unlocked) {
      // Invited visitors skip the gate, but still get the hero build: the logo
      // resolves at full size, holds, then settles into the appbar.
      document.body.classList.add('intro');
      setTimeout(() => {
        document.body.classList.remove('intro');
      }, 2600);
      return;
    }
    // Landing anywhere but home means they're already exploring, so start compact.
    if (!isHome(pathname)) {
      document.body.classList.add('pw-compact');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Only a real change of page counts. This tracks the PREVIOUS pathname, not
    // the landing one - comparing against the landing path meant returning to
    // the page you started on read as "no change".
    if (actedOn.current === pathname) {
      return;
    }
    actedOn.current = pathname;
    // The full hero holds until someone actually explores. Scrolling the
    // homepage is not exploring; changing page is - at that point the hero
    // would be in the way, so it minimizes and the nav takes over.
    document.body.classList.add('pw-compact');
    // Routes keep the previous page's scroll offset, so you land part way down
    // a page that is still building itself.
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
