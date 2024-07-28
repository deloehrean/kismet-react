import { Suspense } from 'react';

import { Appbar, LayoutStyles as s, Footer } from 'src/components';
import { routes } from 'src/lib/routes/routes';
import { RoutesRenderer } from 'src/lib/routes/RoutesRenderer';

function Loader() {
  return <div>Loading...</div>;
}

const Layout = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.pageWrap}>
        <Appbar breadcrumbs />
        <main>
          <Suspense fallback={<Loader />}>
            <RoutesRenderer routes={routes} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
