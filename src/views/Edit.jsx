import React, {Component} from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Grid,
  Cell,
  Button,
  // ButtonGroup,
  TopBar,
  TopBarLeft,
  Colors
} from 'react-foundation';

import * as EditActionCreators from '../redux/actions/edit';
// import ReactCrop from 'react-image-crop';



import Icon from '../components/Icon';

// import Filestack from '../components/Filestack';
import FrameSelector from '../components/FrameSelector';
import Toolbar from '../components/Toolbar';
import ImageEditor from '../components/ImageEditor';

import styles from './Edit.module.scss';
import 'react-image-crop/lib/ReactCrop.scss';

// Mock
import mockImg from '../imgs/mock-img-vertical.jpg';

const mapStateToProps = (state) => (
  {
    // apiKey: state.filestack.apiKey,
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
      // apiKey,
      frames,
      activeFrameIndex,
      selectedFrame,
      // file,
      dispatch,
      crop
    } = this.props;

    const updateSelectedFrame = bindActionCreators(EditActionCreators.updateSelectedFrame, dispatch);
    const updateCrop = bindActionCreators(EditActionCreators.updateCrop, dispatch);
    const storeImageDimensions = bindActionCreators(EditActionCreators.storeImageDimensions, dispatch);
    // const aspectRatio = selectedFrame[0]/selectedFrame[1];
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

      <Grid vertical={true} className={`${styles.container}`}>
        <TopBar>
          <TopBarLeft>
            {/* TODO Redux - Add Reducer to Back to Gallery button */}
            <Button color={Colors.SECONDARY} size='small'>
              <Icon name='Apps' /> Back To Gallery
            </Button>
          </TopBarLeft>
        </TopBar>

        {/* Frame Select */}
        <Cell>
          <h1 className=''>
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
        <Cell className='auto'>
          <ImageEditor
            file={mockImg}
            crop={crop}
            updateCrop={updateCrop}
            storeImageDimensions={storeImageDimensions}
            aspectRatioArray={selectedFrame}
          />
        </Cell>
        <Cell>
          <Toolbar>
            <Toolbar.Button
              icon='Crop'
              label='Crop'
            />
            <Toolbar.Group label='Zoom'>
              <Toolbar.Button
                icon='ZoomIn'
                label='In'
              />
              <Toolbar.Button
                icon='ZoomOut'
                label='Out'
              />
            </Toolbar.Group>
            <Toolbar.Group label='Rotate'>
              <Toolbar.Button
                icon='RotateLeft'
                label='Left'
              />
              <Toolbar.Button
                icon='RotateRight'
                label='Right'
              />
            </Toolbar.Group>
          </Toolbar>
        </Cell>
        <Cell>
          <Grid vertical={false} className='align-center-middle text-center'>
            <Cell className='auto'>
              {/* TODO Redux - Add Reducer to Revert button */}
              <Button color={Colors.SECONDARY}>Revert</Button>
            </Cell>
            <Cell className='auto'>
              {/* TODO Redux - Add Reducer to Apply button */}
              <Button color={Colors.PRIMARY}>Apply</Button>
            </Cell>
            <Cell className='auto'>
              {/* TODO Redux - Add Reducer to Save button */}
              <Button color={Colors.WARNING}>Save</Button>
            </Cell>
          </Grid>
        </Cell>


      </Grid>

    );
  };
}

export default connect(mapStateToProps)(Edit);
