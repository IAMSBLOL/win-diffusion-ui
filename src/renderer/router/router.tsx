import React from 'react';
import { createMemoryRouter, Navigate } from 'react-router-dom';
import {
  IMAGE_2_IMAGE,
  IMAGE_2_IMAGE_WIYH_MASKST,
  INPAINTING,
  OUTPAINTING,
  TEXR_2_IMAGE,
  COLLECTION
} from './pathNames'

function SuspenseFn (Comp:any) {
  return (
    <React.Suspense>
      <Comp />
    </React.Suspense>
  )
}

const App = React.lazy(() => import('@renderer/container/app'));

const Text2Image = React.lazy(() => import('@renderer/views/Text2Image'));
const Image2Image = React.lazy(() => import('@renderer/views/Image2Image'));
const Image2ImageWithMask = React.lazy(() => import('@renderer/views/Image2ImageWithMask'));
const Inpainting = React.lazy(() => import('@renderer/views/Inpainting'));
const Outpainting = React.lazy(() => import('@renderer/views/Outpainting'));
const Collection = React.lazy(() => import('@renderer/views/Collection'));

const routes = [

  {
    path: '/',
    element: <Navigate to={TEXR_2_IMAGE} />,

  },
  {
    // path: '/app',
    // exact: true,
    strict: true,
    element: SuspenseFn(App),
    children: [
      {
        path: TEXR_2_IMAGE,
        element: SuspenseFn(Text2Image),
      },
      {
        path: IMAGE_2_IMAGE,
        element: SuspenseFn(Image2Image),
      },
      {
        path: IMAGE_2_IMAGE_WIYH_MASKST,
        element: SuspenseFn(Image2ImageWithMask),
      },
      {
        path: INPAINTING,
        element: SuspenseFn(Inpainting),
      },
      {
        path: OUTPAINTING,
        element: SuspenseFn(Outpainting),
      },
      {
        path: COLLECTION,
        element: SuspenseFn(Collection),
      },
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
