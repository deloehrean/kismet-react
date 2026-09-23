import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { Layout } from 'src/components';
import { resolveAccess } from 'src/lib/access';

function App() {
  useEffect(() => {
    document.body.classList.remove('loading');
    // an access link (?k=) or a previous visit unlocks before anything animates,
    // so invited visitors never see the gate at all
    const unlocked = resolveAccess();
    setTimeout(() => {
      document.body.classList.remove('pw-loading');
    }, 1000);
    if (unlocked) return;
    // hero has settled - minimize it and send the resume up into the spacer
    setTimeout(() => {
      document.body.classList.add('pw-compact');
    }, 5000);
  }, []);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
