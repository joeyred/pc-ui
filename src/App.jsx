import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Client from 'shopify-buy/index.unoptimized.umd';
// import * as NavActionCreators from './redux/actions/nav';
import { updateAppVisibility } from './redux/actions/nav';
import { updateSelectedCollection, fetchFrames } from './redux/actions/frame';
// Moved to index.js
// import { fetchApiKey } from './redux/actions/filestack';
// import { externalsToState } from './redux/externalsToState';
// import { fetchStorefrontToken } from './redux/storefront';

// import {
//   TopBar,
//   TopBarLeft,
//   Menu,
//   MenuItem,
// } from 'react-foundation';

import Edit from './views/Edit';
import Gallery from './views/Gallery';
import Upload from './views/Upload';
import Preview from './views/Preview';

import { ExternalDataAtts, Views, AppAtts } from './globals';

import './styles/foundation/global_include.scss';
import styles from './App.module.scss';

const mapStateToProps = state => ({
  currentView: state.nav.currentView,
  images: state.image.images,
  selectedCollection: state.frame.selectedCollectionId,
  storefrontTokenLoaded: state.storefront.loaded,
  storefrontToken: state.storefront.token,
  storefrontDomain: state.storefront.domain,
  client: state.storefront.client
});

const bindActionsToExternalEvents = (query, callback) => {
  const elements = document.querySelectorAll(query);
  for (let i = 0; i < elements.length; i += 1) {
    console.log(query);
    elements[i].addEventListener('click', callback);
  }
};

class App extends Component {
  componentDidMount() {
    const { images, dispatch } = this.props;
    // NOTE This is gotten from a globally define variable.
    //      Yes I know this sucks...
    //      It's Shopify...
    // eslint-disable-next-line no-undef
    // const storeDomain = CropshopData.shop.domain;
    const imageHasBeenEdited =
      _.filter(images.byId, { edited: true }).length > 0;

    bindActionsToExternalEvents(`[${ExternalDataAtts.MODAL_OPEN}]`, () => {
      // TODO uncomment this for deployment/final testing
      // const collection = document
      //   .getElementById(AppAtts.ID)
      //   .getAttribute(ExternalDataAtts.COLLECTION);
      // dispatch(updateSelectedCollection(collection));
      // TODO uncomment this for deployment/final testing
      // dispatch(updateAppVisibility(true, imageHasBeenEdited));
    });

    bindActionsToExternalEvents(`[${ExternalDataAtts.MODAL_CLOSE}]`, () => {
      // TODO uncomment this for deployment/final testing
      // dispatch(updateAppVisibility(false, imageHasBeenEdited));
    });
  }

  view() {
    const { currentView, client } = this.props;

    if (currentView === Views.UPLOAD) {
      return <Upload />;
    }
    if (currentView === Views.GALLERY) {
      return <Gallery />;
    }
    if (currentView === Views.EDIT) {
      return <Edit />;
    }
    if (currentView === Views.PREVIEW) {
      return <Preview />;
    }
    return null;
  }

  render() {
    const {
      storefrontTokenLoaded,
      storefrontToken,
      storefrontDomain
    } = this.props;
    if (storefrontTokenLoaded) {
      const client = Client.buildClient({
        storefrontAccessToken: 'd528ce7d37897fcd81e84bef3f81c547',
        domain: storefrontDomain
      });
      console.log(client);
      if (client) {
        const productsQuery = client.graphQLClient.query(root => {
          root.addConnection(
            'products',
            { args: { query: 'tag:custom', first: 50 } },
            product => {
              product.addConnection(
                'collections',
                { args: { first: 10 } },
                collection => {
                  collection.add('id');
                  collection.add('handle');
                  collection.add('title');
                }
              );
              product.addConnection(
                'metafields',
                { args: { namespace: 'cropshop', first: 10 } },
                metafield => {
                  metafield.add('id');
                  metafield.add('key');
                  metafield.add('value');
                }
              );
              product.add('id');

              // product.add('metafield')
            }
          );
        });
        client.graphQLClient.send(productsQuery).then(response => {
          console.log(response);
        });
        client.product.fetchQuery({ tag: 'custom' }).then(response => {
          console.log(response);
        });
        // client.product.fetchAll().then(response => {
        //   console.log(response);
        // });
      }
    }
    return <div className={styles.App}>{this.view()}</div>;
  }
}

export default connect(mapStateToProps)(App);
