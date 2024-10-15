import React, { lazy } from 'react';

import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';

const Homepage = lazy(() => import('src/pages/home/HomePage'));
const ThemePage = lazy(() => import('src/pages/Theme'));
const GraphicsPage = lazy(() => import('src/pages/graphics/GraphicsPage'));
const GraphicsDashboard = lazy(() => import('src/pages/graphics/GraphicsDashboard'));
const AlbumsPage = lazy(() => import('src/pages/graphics/albums/AlbumsPage'));
const TeesPage = lazy(() => import('src/pages/graphics/tees/TeesPage'));
const WebsitesPage = lazy(() => import('src/pages/websites/WebsitesPage'));
const FourOhFourPage = lazy(() => import('src/pages/404'));
const isPasswordProtected = () => {
  return document.body.classList.contains('password-protected');
};

export const routes: RoutePathDefinition[] = [
  { path: '/', element: <Homepage />, title: 'Kismet', color: 'rust', index: true },
  { path: '*', element: <FourOhFourPage />, title: 'Not Found', color: 'rust' },
  { path: '/home', element: <Homepage />, title: 'Kismet', color: 'rust', index: true, nav: true },
  { path: '/theme', element: <ThemePage />, title: 'Theme', color: 'rust' },
  {
    path: '/websites',
    element: <WebsitesPage />,
    title: 'Websites',
    tree: 'websites',
    color: 'dusk',
    nav: true,
    protected: isPasswordProtected(),
  },
  {
    path: '/graphics',
    element: <GraphicsPage />,
    title: 'Graphics',
    tree: 'graphics',
    color: 'olive',
    nav: true,
    protected: isPasswordProtected(),
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
    path: '/branding',
    element: <Homepage />,
    title: 'Branding',
    tree: 'branding',
    color: 'aqua',
  },
  {
    path: '/ecommerce',
    element: <Homepage />,
    title: 'eCommerce',
    tree: 'ecommerce',
    color: 'plum',
  },
];
