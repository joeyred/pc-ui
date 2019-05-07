import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {aspectRatioFill} from '../../utils/crop';

import ReactCrop from 'react-image-crop';
import Cropper from 'react-cropper';

// import 'cropperjs/dist/cropper.css';
import styles from './ImageEditor.module.scss';

class ImageEditor extends Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.artboardRef = React.createRef();
  }
  componentDidMount() {
    const {
      crop,
      updateCrop,
      storeImageDimensions,
      aspectRatioArray
    } = this.props;
    const ref = this.artboardRef.current;
    console.log(ref.width, ref.height);
    const dimensions = aspectRatioFill(
      aspectRatioArray[0],
      aspectRatioArray[1],
      ref.offsetWidth,
      ref.offsetHeight
    );
    const cropBox = _.extend(crop, {height: dimensions.height, width: dimensions.width});
    storeImageDimensions([ref.offsetWidth, ref.offsetHeight]);
    updateCrop(cropBox);
  }
  // componentDidUpdate
  initCropper(props) {
    const {
      file,
      crop,
      updateCrop
    } = props;
    console.log('crop init fired');
    return (
      <ReactCrop
        src={file}
        crop={crop}
        keepSelection={true}
        onChange={updateCrop}
      />
    )
  }
  render() {
    const {
      file,
      crop,
      updateCrop
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.deadspace}>
          <div className={styles.artboard} ref={this.artboardRef}>
            {/* <Cropper
              src={file}
              aspectRatio={crop.aspectRatio}
              viewMode={3}
            /> */}
            {/* {this.initCropper(this.props)} */}
            <ReactCrop
              src={file}
              crop={crop}
              keepSelection={true}
              onChange={updateCrop}
            />
          </div>
        </div>
      </div>
    );
  }
}

ImageEditor.defaultProps = {};

ImageEditor.propTypes = {

};

export default ImageEditor;
