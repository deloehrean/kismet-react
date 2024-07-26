import { Outlet } from 'react-router-dom';
import { Typography } from 'src/components';

function TrackingReports() {
  return (
    <>
      <Typography variant={'body1'}>Tracking Reports</Typography>
      <Outlet />
    </>
  );
}

export default TrackingReports;
