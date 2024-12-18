import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import React from "react";

import "@utils/animationStar";
import App from "./app";
import store from '@store/index';

const container = document.getElementById('app') as HTMLElement;

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./SW_starsWar.ts')
      .then(registration => {
        // eslint-disable-next-line no-console
        console.log('[SW] service Worker is registered', registration.scope);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('[SW] service Worker registration failed:', err);
      });
    });
  }
}

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);