import React from 'react';
import { createHashRouter } from 'react-router-dom';

import Home from './views/Home';
import Curiosity from './views/Curiosity';
import Opportunity from './views/Opportunity';
import Spirit from './views/Spirit';

export const paths = Object.freeze({
  curiosity: '/curiosity',
  opportunity: '/opportunity',
  spirit: '/spirit',
});

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: `${paths.curiosity}/:page?`,
    element: <Curiosity />,
  },
  {
    path: `${paths.opportunity}/:page?`,
    element: <Opportunity />,
  },
  {
    path: `${paths.spirit}/:page?`,
    element: <Spirit />,
  },
]);

export default router;
