import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Header,
  Button,
  Icon,
  Menu
} from 'semantic-ui-react';

import Filestack from '../components/Filestack';
import FrameSelector from '../components/FrameSelector';

import styles from './Edit.module.scss';

class Edit extends Component {

  render() {
    const apiKey = 'AA1ZGkqsZT1Ca96rjT6mKz';
    const frames = [
      [8, 8],
      [8, 12],
      [12, 8],
      [8, 16],
      [16, 8]
    ];

    return (
      <div className={styles['height-fill']}>
        {/* Frame Select */}
        <div>
          <Header as='h1' textAlign='center'>
            Select A Frame
          </Header>
        </div>
        <div>

          <FrameSelector frames={frames} direction='horizontal' />
        </div>
        {/* Image Editor */}
        <div className={styles['fill-remaining-height']}>
          <Filestack.Edit apiKey={apiKey} file='https://cdn.filestackcontent.com/UfxVvzDDTkqquiJL3CSI' />
        </div>

      </div>
    );
  };
}

Edit.defaultProps = {};

Edit.propTypes = {};

export default Edit;
