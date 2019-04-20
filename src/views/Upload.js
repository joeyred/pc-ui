import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Menu,
  Segment,
  Icon
} from 'semantic-ui-react'

class Upload extends Component {
  state = { activeItem: 'gamepad' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
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
      <Grid>
        <Grid.Column width={5}>
          <Menu icon='labeled' fluid vertical tabular>
            {items}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={11}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Upload;
