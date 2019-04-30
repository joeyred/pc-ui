import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EditActionCreators from '../redux/actions/edit';
// import ReactCrop from 'react-image-crop';

import {
  Grid,
  Cell,
  Button,
  TopBar,
  TopBarLeft,
  Colors
} from 'react-foundation';
import {MdApps} from 'react-icons/md';

// import Filestack from '../components/Filestack';
import FrameSelector from '../components/FrameSelector';
import ImageEditor from '../components/ImageEditor';

import styles from './Edit.module.scss';
import 'react-image-crop/lib/ReactCrop.scss';

const mapStateToProps = (state) => (
  {
    apiKey: state.filestack.apiKey,
    frames: state.edit.frames,
    activeFrameIndex: state.edit.selectedFrameIndex,
    selectedFrame: state.edit.selectedFrame,
    file: state.edit.file,
    crop: state.edit.crop
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
      dispatch,
      crop
    } = this.props;

    const updateSelectedFrame = bindActionCreators(EditActionCreators.updateSelectedFrame, dispatch);
    const updateCrop = bindActionCreators(EditActionCreators.updateCrop, dispatch);
    const storeImageDimensions = bindActionCreators(EditActionCreators.storeImageDimensions, dispatch);
    const aspectRatio = selectedFrame[0]/selectedFrame[1];
    // const options = {
    //   transformations: {
    //     crop: {
    //       aspectRatio
    //     }
    //   },
    //   displayMode: 'inline',
    //   container: 'editContainer'
    // };
    // const crop = {
    //   aspect: aspectRatio
    // };
    return (
      <div>
      <TopBar>
        <TopBarLeft>
          {/* TODO Add onClick */}
          <Button color={Colors.SECONDARY}>
            <MdApps /> Back To Gallery
          </Button>
        </TopBarLeft>
      </TopBar>
      <Grid vertical={true} className='grid-padding-y'>
        {/* Frame Select */}
        <Cell>
          <h1>
            Select A Frame
          </h1>
        </Cell>
        <Cell>

          <FrameSelector
            frames={frames}
            activeFrameIndex={activeFrameIndex}
            direction='horizontal'
            clickHandler={updateSelectedFrame}
          />
        </Cell>
        {/* Image Editor */}
        <Cell>
          <ImageEditor
            file={file}
            crop={crop}
            updateCrop={updateCrop}
            storeImageDimensions={storeImageDimensions}
            aspectRatioArray={selectedFrame}
          />
        </Cell>
        <Cell>
          <Button color={Colors.PRIMARY}>Apply</Button>
        </Cell>
        {/* <ReactCrop
          src={file}
          crop={crop}
          keepSelection={true}
          onChange={updateCrop} /> */}
        {/* <div className={styles['fill-remaining-height']}>
          <Filestack.Edit
            apiKey={apiKey}
            file={file}
            options={options}
            sessionCache={true}
          />
        </div> */}

      </Grid>
    </div>
    );
  };
}

export default connect(mapStateToProps)(Edit);
