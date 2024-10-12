import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { Layout } from 'src/components';

function App() {
  useEffect(() => {
    document.body.classList.remove('loading');
    setTimeout(() => {
      document.body.classList.remove('pw-loading');
    }, 1000);
  }, []);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
