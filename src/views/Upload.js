import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ImageActionCreators from '../redux/actions/image';
import * as NavActionCreators from '../redux/actions/nav';

import {
  Grid,
  Cell,
  TopBar,
  TopBarLeft,
} from 'react-foundation';

import Filestack from '../components/Filestack';

const mapStateToProps = (state) => (
  {
    apiKey: state.filestack.apiKey
  }
);

class Upload extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
  }
  onSuccess = (res) => {
    const {
      dispatch
    } = this.props;
    const updateView = bindActionCreators(NavActionCreators.updateView, dispatch);
    console.log(res);
    updateView('gallery');
  }
  render() {
    const {
      apiKey,
      dispatch
    } = this.props;
    const addImage = bindActionCreators(ImageActionCreators.addImage, dispatch);
    // const updateView = bindActionCreators(NavActionCreators.updateView, dispatch);

    const options = {
      displayMode: 'inline',
      container: 'uploadContainer',
      fromSources: ['local_file_system', 'instagram', 'facebook', 'googledrive'],
      accept: 'image/*',
      maxFiles: 20,
      disableTransformer: true,
      uploadInBackground: false
    };

    return (
      <div style={{height: '100%', width: '100%'}}>
        {/* Top Bar */}
        <TopBar style={{zIndex: '99999999999999'}}>
          <TopBarLeft>
            <div className='text-center'>
              <span className='menu-text'>Select Images to Upload</span>
            </div>
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
