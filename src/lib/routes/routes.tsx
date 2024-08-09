import React, { lazy } from 'react';

import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

const Homepage = lazy(() => import('src/pages/Home'));
const ThemePage = lazy(() => import('src/pages/Theme'));
const GraphicsPage = lazy(() => import('src/pages/graphics/GraphicsPage'));
const GraphicsDashboard = lazy(() => import('src/pages/graphics/GraphicsDashboard'));
const AlbumsPage = lazy(() => import('src/pages/graphics/albums/AlbumsPage'));
const TeesPage = lazy(() => import('src/pages/graphics/tees/TeesPage'));
const WebsitesPage = lazy(() => import('src/pages/websites/WebsitesPage'));
const FourOhFourPage = lazy(() => import('src/pages/404'));

export const routes: RoutePathDefinition[] = [
  { path: '/', element: <Homepage />, title: 'Home', color: 'rust', index: true },
  { path: '*', element: <FourOhFourPage />, title: 'Not Found', color: 'rust' },
  { path: '/home', element: <Homepage />, title: 'Home', color: 'rust', index: true },
  { path: '/theme', element: <ThemePage />, title: 'Theme', color: 'rust', nav: true },
  {
    path: '/graphics',
    element: <GraphicsPage />,
    title: 'Graphics',
    tree: 'graphics',
    color: 'olive',
    nav: true,
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
    ],
  },
  {
    path: '/websites',
    element: <WebsitesPage />,
    title: 'Web Dev',
    tree: 'websites',
    color: 'dusk',
    nav: true,
  },
  {
    path: '/branding',
    element: <WebsitesPage />,
    title: 'Branding',
    tree: 'branding',
    color: 'aqua',
    nav: true,
  },
  {
    path: '/ecommerce',
    element: <WebsitesPage />,
    title: 'eCommerce',
    tree: 'ecommerce',
    color: 'plum',
    nav: true,
  },
];
