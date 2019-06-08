// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import uniqid from 'uniqid';

import store from './redux/store';

// This will do fun stuff outside the scope of React
import CropShopButton from './utils/CropShopButton';
import { fetchApiKey } from './redux/actions/filestack';
import { externalsToState } from './redux/externalsToState';
import { fetchStorefrontToken, setStorefrontDomain } from './redux/storefront';
// import { updateAppVisibility } from './redux/actions/nav';
import { AppAtts } from './globals';

// Components
import App from './App';
// Util
import * as serviceWorker from './serviceWorker';
// Styles
// import "./index.css";

const initExternalStuff = () => {
  const buttonNodes = document.querySelectorAll('[data-cropshop-open]');
  const appNode = document.getElementById('cropshop_app');

  const buttons = {};

  for (let i = 0; i < buttonNodes.length; i += 1) {
    const buttonId = uniqid();
    buttons[buttonId] = new CropShopButton(
      buttonNodes[i],
      appNode,
      'cropshop_app_modal'
    );

    buttons[buttonId].init();
  }
};

// NOTE This is gotten from a globally define variable.
//      Yes I know this sucks...
//      It's Shopify...
// eslint-disable-next-line no-undef
const siteData = CropshopData;
store.dispatch(setStorefrontDomain(storeDomain));
store.dispatch(
  externalsToState({
    shop: siteData.shop.domain,
    products: siteData.products
  })
);

store.dispatch(fetchApiKey(siteData.shop.domain));
// store.dispatch(fetchStorefrontToken(storeDomain));

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(AppAtts.ID)
);

initExternalStuff();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
