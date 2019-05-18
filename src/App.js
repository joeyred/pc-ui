import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as NavActionCreators from '../redux/actions/nav';

// import {
//   TopBar,
//   TopBarLeft,
//   Menu,
//   MenuItem,
// } from 'react-foundation';

import Edit from './views/Edit';
import Gallery from './views/Gallery';
import Upload from './views/Upload';

import './styles/foundation/global_include.scss';
import styles from './App.module.scss';

const mapStateToProps = (state) => (
  {
    currentView: state.nav.currentView
  }
);

class App extends Component {

  render() {
    const {currentView} = this.props
    return (
      <div className={styles.App}>
        {/* <TopBar>
          <TopBarLeft>
            <Menu>
              {items.map((item) => (
                <MenuItem isActive={item.key === currentView} key={item.key} >
                  <a onClick={item.onClick}>
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </TopBarLeft>
        </TopBar> */}

        {
          currentView === 'upload' ? <Upload /> :
          currentView === 'gallery' ? <Gallery /> :
          currentView === 'edit' ? <Edit />  :
          null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
