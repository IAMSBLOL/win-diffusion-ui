import React from 'react';
import { createMemoryRouter } from 'react-router-dom';
import {
  APP_HOME
} from './pathNames'

function SuspenseFn (Comp:any) {
  return (
    <React.Suspense>
      <Comp />
    </React.Suspense>
  )
}

const App = React.lazy(() => import('@renderer/container/app'));

const HomePage = React.lazy(() => import('@renderer/views/HomePage'));
// const HomeN = React.lazy(() => import('@src/views/home/one'));
// const HomeT = React.lazy(() => import('@src/views/home/two'));

const routes = [
  {
    path: APP_HOME,
    element: SuspenseFn(HomePage),
  },
  {
    // path: '/app',
    // exact: true,
    strict: true,
    element: SuspenseFn(App),
    children: [

    ]
  }
]
const Routes = createMemoryRouter(routes);
// If you need to navigate externally, instead of history.push you can do:
// router.navigate('/path');

// // And instead of history.replace you can do:
// router.navigate('/path', { replace: true });

// // And instead of history.listen you can:
// Routes.subscribe((state) => {
//   console.log('new state', state)
// });
export default Routes;
