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
  ButtonGroup,
  TopBar,
  TopBarLeft,
  Colors
} from 'react-foundation';

import Icon from '../components/Icon';

// import Filestack from '../components/Filestack';
import FrameSelector from '../components/FrameSelector';
import ImageEditor from '../components/ImageEditor';

import styles from './Edit.module.scss';
import 'react-image-crop/lib/ReactCrop.scss';

// Mock
import mockImg from '../imgs/IMG_0408.jpg';

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
          {/* TODO Replace with a Toolbar Component */}
          <div className={styles.toolbar}>
            <Button>
              <Icon name='Crop' inline={false} className={styles.icon} />
              <span>Crop</span>
            </Button>
            <ButtonGroup>
              <Button>
                <Icon name='ZoomIn' inline={false} className={styles.icon} />
                <span>In</span>
              </Button>
              <Button>
                <Icon name='ZoomOut' inline={false} className={styles.icon} />
                <span>Out</span>
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>
                <Icon name='RotateLeft' inline={false} className={styles.icon} />
                <span>Left</span>
              </Button>
              <Button>
                <Icon name='RotateRight' inline={false} className={styles.icon} />
                <span>Right</span>
              </Button>
            </ButtonGroup>
          </div>
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
