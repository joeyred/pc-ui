import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as filestack from 'filestack-js';
import _ from 'lodash';

// NOTE
//
// @link https://filestack.github.io/filestack-js/interfaces/pickercustomtext.html
//
// "Save" can be changed to "apply" and "upload" can be changed to "saved" via
// `customText` option, however the image is uploaded. This could be costly on
// uploads.
//
// IDEA
//
// Can the transformation be stored, a preview used as if the edits were saved, and
// files uploaded only once the purchase has been finalized?
//
// In this case, the uploads could even be sent to another storage (Google Drive?)

class Edit extends Component {
  static defaultProps = {
    onSuccess:    result => console.log(result),
    onError:      error => console.error(error),
    options:      {},
    security:     null,
    children:     null,
    render:       null,
    sessionCache: false
  }
  static propTypes = {
    file:   PropTypes.objectOf(PropTypes.any),
    /**
     * The Filestack API key
     * @type {String}
     */
    apiKey: PropTypes.string.isRequired,
    /**
     * Called at onUploadDone
     * @param {Array} result - the metadata returned from the upload
     */
    onSuccess:    PropTypes.func,
    onError:      PropTypes.func,
    options: PropTypes.objectOf(PropTypes.any),
    aspectRatio: PropTypes.arrayOf(PropTypes.number)
  };

  constructor(props) {
    super(props);
    const {
      apiKey,
      security,
      sessionCache,
      active
    } = this.props;
    const overrides = {
      displayMode: 'inline',
      container: 'editContainer'
    };
    // Parse options and override any breaking options that may be passed
    const options = _.extend(this.props.options, overrides);
    // Create client instance
    const client = filestack.init(apiKey, {
      security,
      sessionCache,
    });

    this.state = {
      client,
      active,
      options
      // picker: client.picker({ ...options, onUploadDone: this.onFinished }),
    };

    this.onFinished = this.onFinished.bind(this);
    this.onFail = this.onFail.bind(this);
  }
  componentDidMount() {
    const {file} = this.props;
    this.mountPicker(file)
      .then(this.onFinished)
      .catch(this.onFail);
  }
  /**
   * Handles initializing and instance of the picker and mounting it
   * @method mountPicker
   * @return {Promise}    - The instance.
   */
  mountPicker = (file) => {
    const {
      client,
      options
    } = this.state;
    return new Promise((resolve) => {
      client.picker({ ...options, onUploadDone: resolve }).crop(file);
    });
  }

  onFinished = (result) => {
    const { onSuccess } = this.props;
    if (typeof onSuccess === 'function' && result) {
      onSuccess(result);
    }
  };

  onFail = (error) => {
    const { onError } = this.props;
    if (typeof onError === 'function') {
      onError(error);
    } else {
      console.error(error);
    }
  };

  render() {
    const {
      options
    } = this.state;

    return (
      <div
        style={{width: '100%', height: '100%'}}
        id={options.container}
        // className={styles.overrides}
      ></div>
    );
  }

}

export default Edit;
