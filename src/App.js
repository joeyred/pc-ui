import React, { Component } from 'react';

import {
  TopBar,
  TopBarLeft,
  Menu,
  MenuItem,
} from 'react-foundation';

import Edit from './views/Edit';
import Gallery from './views/Gallery';
import Upload from './views/Upload';

// import './styles/foundation/main.scss';
import styles from './App.module.scss';


class App extends Component {
  state = {
    currentView: 'edit'
  };
  updateView(viewName) {
    this.setState({currentView: viewName})
  }
  render() {
    const items = [
      { key: 'upload', name: 'Upload', onClick: () => this.updateView('upload')},
      { key: 'gallery', name: 'Gallery', onClick: () => this.updateView('gallery') },
      { key: 'edit', name: 'Edit', onClick: () => this.updateView('edit') }
    ];
    return (
      <div className={styles.App}>
        <TopBar>
          <TopBarLeft>
            <Menu>
              {items.map((item) => (
                <MenuItem isActive={item.key === this.state.currentView} key={item.key} >
                  <a onClick={item.onClick}>
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </TopBarLeft>
        </TopBar>

        {
          this.state.currentView === 'upload' ? <Upload /> :
          this.state.currentView === 'gallery' ? <Gallery /> :
          this.state.currentView === 'edit' ? <Edit />  :
          null
        }
      </div>
    );
  }
}

export default App;
