import '@fontsource/montserrat';
import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { Layout } from 'src/components';

function App() {
  useEffect(() => {
    document.body.classList.remove('loading');
  }, []);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
