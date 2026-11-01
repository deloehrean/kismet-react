import React, { lazy } from 'react';

import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

const Homepage = lazy(() => import('src/pages/home/HomePage'));
const GraphicsPage = lazy(() => import('src/pages/graphics/GraphicsPage'));
const GraphicsDashboard = lazy(() => import('src/pages/graphics/GraphicsDashboard'));
const AlbumsPage = lazy(() => import('src/pages/graphics/albums/AlbumsPage'));
const TeesPage = lazy(() => import('src/pages/graphics/tees/TeesPage'));
const LogosPage = lazy(() => import('src/pages/graphics/gallery/LogosPage'));
const PrintPage = lazy(() => import('src/pages/graphics/gallery/PrintPage'));
const AdsPage = lazy(() => import('src/pages/graphics/gallery/AdsPage'));
const IllustrationsPage = lazy(() => import('src/pages/graphics/gallery/IllustrationsPage'));
const WebsitesPage = lazy(() => import('src/pages/websites/WebsitesPage'));
const CaseStudiesPage = lazy(() => import('src/pages/case-studies/CaseStudiesPage'));
const FourOhFourPage = lazy(() => import('src/pages/404'));

export const routes: RoutePathDefinition[] = [
  { path: '/', element: <Homepage />, title: 'Kismet', color: 'rust', index: true },
  { path: '*', element: <FourOhFourPage />, title: 'Not Found', color: 'rust' },
  { path: '/home', element: <Homepage />, title: 'Kismet', color: 'rust', index: true, nav: true },
  {
    path: '/websites',
    element: <WebsitesPage />,
    title: 'Websites',
    tree: 'websites',
    color: 'dusk',
    nav: true,
  },
  {
    path: '/graphics',
    element: <GraphicsPage />,
    title: 'Graphics',
    tree: 'graphics',
    color: 'olive',
    nav: true,
    // protected: isPasswordProtected(),
    children: [
      { index: true, title: 'Graphics Dashboard', Component: GraphicsDashboard, path: '' },
      {
        path: 'albums',
        element: <AlbumsPage />,
        title: 'Albums',
      },
      {
        path: 'tees',
        element: <TeesPage />,
        title: 'Tees',
      },
      { path: 'print', element: <PrintPage />, title: 'Print' },
      { path: 'logos', element: <LogosPage />, title: 'Logos' },
      { path: 'ads', element: <AdsPage />, title: 'Ads & Social' },
      { path: 'illustrations', element: <IllustrationsPage />, title: 'Illustrations' },
    ],
  },
  {
    path: '/case-studies',
    element: <CaseStudiesPage />,
    title: 'Case Studies',
    tree: 'case-studies',
    color: 'plum',
    nav: true,
  },
];
