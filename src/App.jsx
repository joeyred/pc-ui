import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
// import * as NavActionCreators from './redux/actions/nav';
import { updateAppVisibility } from './redux/actions/nav';
import { updateSelectedCollection } from './redux/actions/frame';

// import {
//   TopBar,
//   TopBarLeft,
//   Menu,
//   MenuItem,
// } from 'react-foundation';

import Edit from './views/Edit';
import Gallery from './views/Gallery';
import Upload from './views/Upload';

import {
  ExternalDataAtts,
  Views,
  AppAtts,
} from './globals';

import './styles/foundation/global_include.scss';
import styles from './App.module.scss';

const mapStateToProps = (state) => (
  {
    currentView: state.nav.currentView,
    images: state.image.images,
  }
);

const bindActionsToExternalEvents = (query, callback) => {
  const elements = document.querySelectorAll(query);
  for (let i = 0; i < elements.length; i += 1) {
    console.log(query);
    elements[i].addEventListener('click', callback);
  }
};

class App extends Component {
  componentDidMount() {
    const {
      images,
      dispatch,
    } = this.props;
    const imageHasBeenEdited = _.filter(images.byId, { edited: true }).length > 0;

    bindActionsToExternalEvents(`[${ExternalDataAtts.MODAL_OPEN}]`, () => {
      const collection = document
        .getElementById(AppAtts.ID)
        .getAttribute(ExternalDataAtts.COLLECTION);
      dispatch(updateSelectedCollection(collection));
      dispatch(updateAppVisibility(true, imageHasBeenEdited));

    });

    bindActionsToExternalEvents(`[${ExternalDataAtts.MODAL_CLOSE}]`, () => {
      dispatch(updateAppVisibility(false, imageHasBeenEdited));
    });

  }

  view() {
    const { currentView } = this.props;
    if (currentView === Views.UPLOAD) {
      return <Upload />;
    }
    if(currentView === Views.GALLERY) {
      return <Gallery />;
    }
    if(currentView === Views.EDIT) {
      return <Edit />;
    }
    return null;
  }

  render() {
    return (
      <div className={styles.App}>
        {this.view()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
