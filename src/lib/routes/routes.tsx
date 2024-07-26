import React, { lazy } from 'react';

import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

const Homepage = lazy(() => import('src/pages/Home'));
const ThemePage = lazy(() => import('src/pages/Theme'));
const TrackingPage = lazy(() => import('src/pages/tracking/TrackingPage'));
const TrackingDashboard = lazy(() => import('src/pages/tracking/TrackingDashboard'));
const TrackingReports = lazy(() => import('src/pages/tracking/TrackingReports'));
const AllTrackedEmployees = lazy(
  () => import('src/pages/tracking/tracking-reports/AllTrackedEmployees'),
);
const MeasuredEmployees = lazy(
  () => import('src/pages/tracking/tracking-reports/MeasuredEmployees'),
);
const DesignatedFullTime = lazy(
  () => import('src/pages/tracking/tracking-reports/DesignatedFullTime'),
);
const MeasurementData = lazy(() => import('src/pages/tracking/tracking-reports/MeasurementData'));
const EmployeesInMultipleCompanies = lazy(
  () => import('src/pages/tracking/tracking-reports/EmployeesInMultipleCompanies'),
);
const TerminationRehire = lazy(
  () => import('src/pages/tracking/tracking-reports/TerminationRehire'),
);
const TrackingSetup = lazy(() => import('src/pages/tracking/TrackingSetup'));
const TrackingAllEmployees = lazy(() => import('src/pages/tracking/AllEmployees'));
const FourOhFourPage = lazy(() => import('src/pages/404'));

export const routes: RoutePathDefinition[] = [
  { path: '/', element: <Homepage />, title: 'Home', index: true },
  { path: '*', element: <FourOhFourPage />, title: 'Not Found' },
  { path: '/home', element: <Homepage />, title: 'Home', index: true },
  { path: '/theme', element: <ThemePage />, title: 'Theme', nav: true },
  {
    path: '/tracking/',
    element: <TrackingPage />,
    title: 'Tracking',
    tree: 'tracking',
    nav: true,
    startIcon: 'targetIcon',
    children: [
      {
        path: 'tracking-dashboard',
        element: <TrackingDashboard />,
        title: 'Tracking Dashboard',
        nav: true,
      },
      {
        path: 'all-employees',
        element: <TrackingAllEmployees />,
        title: 'All Employees',
        nav: true,
      },
      {
        path: 'tracking-reports',
        element: <TrackingReports />,
        title: 'Tracking Reports',
        nav: true,
        tree: 'tracking-reports',
        children: [
          {
            path: 'all-tracked-employees',
            element: <AllTrackedEmployees />,
            title: 'All Tracked Employees',
            nav: true,
          },
          {
            path: 'measured-employees',
            element: <MeasuredEmployees />,
            title: 'Measured Employees',
            nav: true,
          },
          {
            path: 'designated-full-time',
            element: <DesignatedFullTime />,
            title: 'Designated Full-Time',
            nav: true,
          },
          {
            path: 'measurement-data',
            element: <MeasurementData />,
            title: 'Measurement Data',
            nav: true,
          },
          {
            path: 'employees-in-multiple-companies',
            element: <EmployeesInMultipleCompanies />,
            title: 'Employees in Multiple Companies',
            nav: true,
          },
          {
            path: 'termination-rehire',
            element: <TerminationRehire />,
            title: 'Termination Rehire',
            nav: true,
          },
        ],
      },
      {
        path: 'tracking-setup',
        element: <TrackingSetup />,
        title: 'Tracking Setup',
        nav: true,
      },
    ],
  },
];
