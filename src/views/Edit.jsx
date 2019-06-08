import React, { Component } from 'react';
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

import * as EditorActionCreators from '../redux/actions/editor';
import * as NavActionCreators from '../redux/actions/nav';
// import ReactCrop from 'react-image-crop';
import { Views } from '../globals';

import Icon from '../components/Icon';

// import Filestack from '../components/Filestack';
import FrameSelector from '../components/FrameSelector';
import Toolbar from '../components/Toolbar';
import ImageEditor from '../components/ImageEditor';

import styles from './Edit.module.scss';
import 'react-image-crop/lib/ReactCrop.scss';

// Mock
// import mockImg from "../imgs/mock-img-vertical.jpg";

const mapStateToProps = state => ({
  // apiKey: state.filestack.apiKey,
  frames: state.frame.frames,
  selectedFrameId: state.frame.selectedFrameId,
  images: state.image.images,
  imageId: state.gallery.currentIdBeingEdited,

  // selectedCollectionId: state.edit.selectedFrame,
  // file: state.edit.file,
  crop: state.editor.crop
});

// eslint-disable-next-line react/prefer-stateless-function
class Edit extends Component {
  static propTypes = {
    // apiKey: PropTypes.string.isRequired
    // frames: PropTypes.array,
    // activeFrameIndex: PropTypes.number,
    // selectedFrame: PropTypes.array,
    // file: PropTypes.object.isRequired,
  };

  render() {
    // console.log(this.props);
    const {
      frames,
      selectedFrameId,
      images,
      imageId,
      dispatch,
      crop
    } = this.props;

    const image = images.byId[imageId];
    let frame = frames.byId[selectedFrameId];
    console.log(frame);
    if (!frame) {
      frame = {
        exact: [8, 8]
      };
    }

    const updateView = bindActionCreators(
      NavActionCreators.updateView,
      dispatch
    );
    const updateCrop = bindActionCreators(
      EditorActionCreators.updateCrop,
      dispatch
    );
    const storeImageDimensions = bindActionCreators(
      EditorActionCreators.storeImageDimensions,
      dispatch
    );

    return (
      <Grid vertical className={`${styles.container}`}>
        <TopBar>
          <TopBarLeft>
            {/* TODO Redux - Add Reducer to Back to Gallery button */}
            <Button
              color={Colors.SECONDARY}
              size='small'
              onClick={() => updateView(Views.GALLERY)}
            >
              <Icon name='Apps' /> Back To Gallery
            </Button>
          </TopBarLeft>
        </TopBar>

        {/* Frame Select */}
        <Cell>
          <h1 className=''>Select A Frame</h1>
        </Cell>
        <Cell>
          <FrameSelector direction='horizontal' />
        </Cell>
        {/* Image Editor */}
        <Cell className='auto'>
          <ImageEditor
            imageSrc={image.url}
            crop={crop}
            updateCrop={updateCrop}
            storeImageDimensions={storeImageDimensions}
            aspectRatioArray={frame.exact}
            // aspectRatioArray={[8, 8]}
          />
        </Cell>
        <Cell>
          <Toolbar>
            <Toolbar.Group label='Zoom'>
              <Toolbar.Button icon='ZoomIn' label='In' />
              <Toolbar.Button icon='ZoomOut' label='Out' />
            </Toolbar.Group>
            <Toolbar.Group label='Rotate'>
              <Toolbar.Button icon='RotateLeft' label='Left' />
              <Toolbar.Button icon='RotateRight' label='Right' />
            </Toolbar.Group>
          </Toolbar>
        </Cell>
        <Cell className='align-center-middle text-center'>
          {/* TODO Redux - Add Reducer to Apply button */}
          <Button
            color={Colors.SECONDARY}
            onClick={() => updateView(Views.PREVIEW)}
          >
            Apply
          </Button>
          {/* <Grid vertical={false} className='align-center-middle text-center'>
            {}
          </Grid> */}
        </Cell>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Edit);
