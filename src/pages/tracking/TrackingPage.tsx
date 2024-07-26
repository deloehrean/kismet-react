import { Outlet } from 'react-router-dom';
import { PageHeading } from 'src/components';
import { routes } from 'src/lib/routes/routes';
import { useActiveRoutePaths } from 'src/lib/routes/useActiveRoutePaths';

function TrackingPage() {
  const activeRoutePaths = useActiveRoutePaths(routes);
  return (
    <>
      {activeRoutePaths.map((active, index, { length }) => (
        <>
          {index === length - 1 && (
            <PageHeading title={active.title} subtitle={'heyo'} divider key={index} />
          )}
        </>
      ))}
      <Outlet />
    </>
  );
}

export default TrackingPage;
