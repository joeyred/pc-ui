import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ReactFilestack from 'filestack-react';
import {
  Grid,
  Menu,
  Segment,
  Icon,
  Header,
  Button
} from 'semantic-ui-react';

import Filestack from '../components/Filestack';



class Upload extends Component {
  state = { activeItem: 'gamepad' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const apiKey = 'AA1ZGkqsZT1Ca96rjT6mKz';

    const options = {
      fromSources: ['local_file_system', 'instagram', 'facebook', 'googledrive'],
      accept: 'image/*'
    };

    const { activeItem } = this.state;
    // TODO API - will come from query and passed to props
    const uploadSources = [
      ['laptop', 'Device'],
      ['facebook', 'Facebook'],
      ['instagram', 'Instagram'],
      ['google drive', 'Google Drive'],
      ['dropbox', 'Dropbox']
    ];
    const items = [];
    for (let i = 0; i < uploadSources.length; i++) {
      items.push(
        <Menu.Item
          key={uploadSources[i][0]}
          name={uploadSources[i][0]}
          onClick={this.handleItemClick}
          active={activeItem === uploadSources[i][0]}
        >
          <Icon name={uploadSources[i][0]} />
          {uploadSources[i][1]}
        </Menu.Item>
      );
    }


    return (
      <Filestack.Upload apiKey={apiKey} />
    );
  }
}

export default Upload;
