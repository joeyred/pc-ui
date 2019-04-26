import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditActionCreators from '../redux/actions/edit';

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

const mapStateToProps = (state) => (
  {
    apiKey: state.filestack.apiKey,
    frames: state.edit.frames,
    activeFrameIndex: state.edit.selectedFrameIndex,
    file: state.edit.file
  }
);

class Edit extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    frames: PropTypes.array,
    activeFrameIndex: PropTypes.number
    // file: PropTypes.object.isRequired,
  };
  render() {
    // console.log(this.props);
    const {
      apiKey,
      frames,
      activeFrameIndex,
      file,
      dispatch
    } = this.props;

    const updateSelectedFrame = bindActionCreators(EditActionCreators.updateSelectedFrame, dispatch);

    return (
      <div className={styles['height-fill']}>
        {/* Frame Select */}
        <div>
          <Header as='h1' textAlign='center'>
            Select A Frame
          </Header>
        </div>
        <div>

          <FrameSelector
            frames={frames}
            activeFrameIndex={activeFrameIndex}
            direction='horizontal'
            clickHandler={updateSelectedFrame}
          />
        </div>
        {/* Image Editor */}
        <div className={styles['fill-remaining-height']}>
          <Filestack.Edit apiKey={apiKey} file={file} />
        </div>

      </div>
    );
  };
}

export default connect(mapStateToProps)(Edit);
