import React, { lazy } from 'react';

import { RoutePathDefinition } from 'src/lib/routes/RoutePathDefinition';
import TeesPage from 'src/pages/graphics/tees/TeesPage';
import AlucardTees from 'src/pages/graphics/tees/AlucardTees';
import AndrewLoehrTees from 'src/pages/graphics/tees/AndrewLoehrTees';
import AsecondtoolateTees from 'src/pages/graphics/tees/AsecondtoolateTees';
import EightSecondsUpsideDownTees from 'src/pages/graphics/tees/EightSecondsUpsideDownTees';
import ElephantomTees from 'src/pages/graphics/tees/ElephantomTees';
import HotnessTees from 'src/pages/graphics/tees/HotnessTees';
import NightAwayTees from 'src/pages/graphics/tees/NightAwayTees';
import PoppyTees from 'src/pages/graphics/tees/PoppyTees';
import RosesdeadTees from 'src/pages/graphics/tees/RosesdeadTees';
import RoydenTees from 'src/pages/graphics/tees/RoydenTees';
import ShowcaseTees from 'src/pages/graphics/tees/ShowcaseTees';
import SkinThreadClothingTees from 'src/pages/graphics/tees/SkinThreadClothingTees';
import StopTheRevolutionTees from 'src/pages/graphics/tees/StopTheRevolutionTees';
import TeamGoldieTees from 'src/pages/graphics/tees/TeamGoldieTees';
import WeakendTees from 'src/pages/graphics/tees/WeakendTees';
import WhatHappenedInVegasTees from 'src/pages/graphics/tees/WhatHappenedInVegasTees';
import WebsitesPage from 'src/pages/websites/WebsitesPage';
import AlucardAlbum from 'src/pages/graphics/albums/AlucardAlbum';
import EightSecondsUpsideDownAlbum from 'src/pages/graphics/albums/EightSecondsUpsideDownAlbum';
import ElephantomAlbum from 'src/pages/graphics/albums/ElephantomAlbum';
import ElleAndTheFontsAlbum from 'src/pages/graphics/albums/ElleAndTheFontsAlbum';
import RoydenAlbum from 'src/pages/graphics/albums/RoydenAlbum';
import WeakendAlbum from 'src/pages/graphics/albums/WeakendHEREAVVTape';
import WoodwardAlbum from 'src/pages/graphics/albums/WoodwardAlbum';

const Homepage = lazy(() => import('src/pages/Home'));
const ThemePage = lazy(() => import('src/pages/Theme'));
const GraphicsPage = lazy(() => import('src/pages/graphics/GraphicsPage'));
const AlbumsPage = lazy(() => import('src/pages/graphics/albums/AlbumsPage'));
const FourOhFourPage = lazy(() => import('src/pages/404'));

function ASundialAlbum() {
  return null;
}

export const routes: RoutePathDefinition[] = [
  { path: '/', element: <Homepage />, title: 'Home', index: true },
  { path: '*', element: <FourOhFourPage />, title: 'Not Found' },
  { path: '/home', element: <Homepage />, title: 'Home', index: true },
  { path: '/theme', element: <ThemePage />, title: 'Theme', nav: true },
  {
    path: '/graphics/',
    element: <GraphicsPage />,
    title: 'Graphics',
    tree: 'graphics',
    nav: true,
    startIcon: 'targetIcon',
    children: [
      {
        path: 'albums',
        element: <AlbumsPage />,
        title: 'Albums',
        nav: true,
        tree: 'albums',
        children: [
          {
            path: 'alucard',
            element: <AlucardAlbum />,
            title: 'Alucard',
            nav: true,
          },
          {
            path: 'a-sundial',
            element: <ASundialAlbum />,
            title: 'A Sundial',
            nav: true,
          },
          {
            path: 'eight-seconds-upside-down',
            element: <EightSecondsUpsideDownAlbum />,
            title: 'Eight Seconds Upside Down',
            nav: true,
          },
          {
            path: 'elephantom',
            element: <ElephantomAlbum />,
            title: 'Elephantom',
            nav: true,
          },
          {
            path: 'elle-and-the-fonts',
            element: <ElleAndTheFontsAlbum />,
            title: 'Elle and the Fonts',
            nav: true,
          },
          {
            path: 'Royden',
            element: <RoydenAlbum />,
            title: 'Royden',
            nav: true,
          },
          {
            path: 'the-weakend',
            element: <WeakendAlbum />,
            title: 'The Weakend',
            nav: true,
          },
          {
            path: 'woodward',
            element: <WoodwardAlbum />,
            title: 'Woodward',
            nav: true,
          },
        ],
      },
      {
        path: 'tees',
        element: <TeesPage />,
        title: 'Tees',
        nav: true,
        tree: 'tees',
        children: [
          {
            path: 'alucard',
            element: <AlucardTees />,
            title: 'Alucard',
            nav: true,
          },
          {
            path: 'andrew-loehr',
            element: <AndrewLoehrTees />,
            title: 'Andrew Loehr',
            nav: true,
          },
          {
            path: 'asecondtoolate',
            element: <AsecondtoolateTees />,
            title: 'asecondtoolate',
            nav: true,
          },
          {
            path: 'eight-seconds-too-late',
            element: <EightSecondsUpsideDownTees />,
            title: 'Eight Seconds Too Late',
            nav: true,
          },
          {
            path: 'elephantom',
            element: <ElephantomTees />,
            title: 'Elephantom',
            nav: true,
          },
          {
            path: 'hotness',
            element: <HotnessTees />,
            title: 'Hotness',
            nav: true,
          },
          {
            path: 'night-away',
            element: <NightAwayTees />,
            title: 'Night Away',
            nav: true,
          },
          {
            path: 'poppy',
            element: <PoppyTees />,
            title: 'The Poppy',
            nav: true,
          },
          {
            path: 'rosesdead',
            element: <RosesdeadTees />,
            title: 'Rosesdead',
            nav: true,
          },
          {
            path: 'royden',
            element: <RoydenTees />,
            title: 'Royden',
            nav: true,
          },
          {
            path: 'showcase',
            element: <ShowcaseTees />,
            title: 'Showcase',
            nav: true,
          },
          {
            path: 'skin-thread-clothing',
            element: <SkinThreadClothingTees />,
            title: 'Skin Thread Clothing',
            nav: true,
          },
          {
            path: 'stop-the-revolution',
            element: <StopTheRevolutionTees />,
            title: 'Stop the Revolution',
            nav: true,
          },
          {
            path: 'team-goldie',
            element: <TeamGoldieTees />,
            title: 'Team Goldie',
            nav: true,
          },
          {
            path: 'the-weakend',
            element: <WeakendTees />,
            title: 'The Weakend',
            nav: true,
          },
          {
            path: 'what-happened-in-vegas',
            element: <WhatHappenedInVegasTees />,
            title: 'What Happened in Vegas',
            nav: true,
          },
        ],
      },
    ],
  },
  {
    path: '/websites/',
    element: <WebsitesPage />,
    title: 'Websites',
    tree: 'websites',
    nav: true,
    startIcon: 'targetIcon',
  },
];
