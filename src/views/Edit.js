import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Header,
  Button,
  Icon,
  Menu
} from 'semantic-ui-react';

import FrameSelector from '../components/FrameSelector';

class Edit extends Component {

  render() {
    const frames = [
      [8, 8],
      [8, 12],
      [12, 8],
      [8, 16],
      [16, 8]
    ];

    return (
      <Grid>
        {/* Frame Select */}
        <Grid.Row>
          <Header as='h1' textAlign='center'>
            Select A Frame
          </Header>
        </Grid.Row>
        <Grid.Row>

          <FrameSelector frames={frames} direction='horizontal' />
        </Grid.Row>
        {/* Image Editor */}
        <Grid.Row></Grid.Row>

        {/* Image Editor - Toolbar */}
        <Grid.Row>
          <Button.Group>
            <Button>
              <Header size='tiny' icon>
                <Icon name='crop'/>
                Crop
              </Header>
            </Button>
          </Button.Group>
        </Grid.Row>
        {/* Revert and Save Buttons? */}
      </Grid>
    );
  };
}

Edit.defaultProps = {};

Edit.propTypes = {};

export default Edit;
