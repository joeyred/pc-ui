import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditActionCreators from '../redux/actions/edit';

import Filestack from '../components/Filestack';
import FrameSelector from '../components/FrameSelector';

import styles from './Edit.module.scss';

const mapStateToProps = (state) => (
  {
    apiKey: state.filestack.apiKey,
    frames: state.edit.frames,
    activeFrameIndex: state.edit.selectedFrameIndex,
    selectedFrame: state.edit.selectedFrame,
    file: state.edit.file
  }
);

class Edit extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    frames: PropTypes.array,
    activeFrameIndex: PropTypes.number,
    selectedFrame: PropTypes.array,
    // file: PropTypes.object.isRequired,
  };
  render() {
    // console.log(this.props);
    const {
      apiKey,
      frames,
      activeFrameIndex,
      selectedFrame,
      file,
      dispatch
    } = this.props;

    const updateSelectedFrame = bindActionCreators(EditActionCreators.updateSelectedFrame, dispatch);
    const aspectRatio = selectedFrame[0]/selectedFrame[1];
    const options = {
      transformations: {
        crop: {
          aspectRatio
        }
      },
      displayMode: 'inline',
      container: 'editContainer'
    };
    return (
      <div className={styles['height-fill']}>
        {/* Frame Select */}
        <div>
          <h1>
            Select A Frame
          </h1>
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
          <Filestack.Edit
            apiKey={apiKey}
            file={file}
            options={options}
            sessionCache={true}
          />
        </div>

      </div>
    );
  };
}

export default connect(mapStateToProps)(Edit);
