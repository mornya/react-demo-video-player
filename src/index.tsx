import { Ignite } from '@mornya/react-helper';

declare var module: Ignite.IHotNodeModule;

const option: Ignite.IOption = {
  application: {
    component: () => import(/* webpackChunkName: "app" */ './App'),
    rootElementId: 'app',
    onHotReload: next => module.hot && module.hot.accept('./App', next),
  },
  router: {
    isUseBrowserRouter: true,
  },
  serviceWorker: {
    isUse: process.env.NODE_ENV === 'production',
  },
};

Ignite.init(option);
