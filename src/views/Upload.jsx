import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filter } from 'lodash';
import {
  // Grid,
  // Cell,
  TopBar,
  TopBarLeft,
  Button,
  Colors
} from 'react-foundation';

import { Views } from '../globals';

import Icon from '../components/Icon';
import Filestack from '../components/Filestack';

import * as ImageActionCreators from '../redux/actions/image';
import * as NavActionCreators from '../redux/actions/nav';

const mapStateToProps = state => ({
  apiKey: state.filestack.key,
  images: state.image.images
});

class Upload extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired
  };

  onSuccess = res => {
    const { dispatch } = this.props;
    const updateView = bindActionCreators(
      NavActionCreators.updateView,
      dispatch
    );
    console.log(res);
    updateView(Views.GALLERY);
  };

  render() {
    const { apiKey, images, dispatch } = this.props;
    // console.log(apiKey);
    const imageHasBeenUploaded = images.allIds.length > 0;
    const addImage = bindActionCreators(ImageActionCreators.addImage, dispatch);
    const updateView = bindActionCreators(
      NavActionCreators.updateView,
      dispatch
    );

    const backToGallery = imageHasBeenUploaded ? (
      <div>
        <Button
          color={Colors.SECONDARY}
          size='small'
          onClick={() => updateView(Views.GALLERY)}
          isDisabled={imageHasBeenUploaded}
        >
          <Icon name='Apps' /> Back To Gallery
        </Button>
      </div>
    ) : null;

    const options = {
      displayMode: 'inline',
      container: 'uploadContainer',
      fromSources: [
        'local_file_system',
        'instagram',
        'facebook',
        'googledrive'
      ],
      accept: 'image/*',
      maxFiles: 20,
      disableTransformer: true,
      uploadInBackground: false
    };

    return (
      <div style={{ height: '100%', width: '100%' }}>
        {/* Top Bar */}
        <TopBar style={{ zIndex: '99999999999999' }}>
          <TopBarLeft>
            <div className='text-center'>
              <span className='menu-text'>Select Images to Upload</span>
            </div>
            {backToGallery}
          </TopBarLeft>
        </TopBar>

        <Filestack.Upload
          apiKey={apiKey}
          options={options}
          onFileUploadSuccess={addImage}
          onSuccess={this.onSuccess}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Upload);
