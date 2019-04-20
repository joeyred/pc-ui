import React, { Component } from 'react';
import './App.css';

import {
  Menu
} from 'semantic-ui-react';

import Edit from './views/Edit';
import Gallery from './views/Gallery';
import Upload from './views/Upload';

import './semantic/dist/semantic.min.css';


class App extends Component {
  state = {
    currentView: 'upload'
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
      <div className="App">
        <Menu items={items} />

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
