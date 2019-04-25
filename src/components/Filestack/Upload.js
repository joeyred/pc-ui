import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as filestack from 'filestack-js';
import _ from 'lodash';

import styles from './FilestackUpload.module.scss';

// NOTE
// Might need to lift state up to a Redux store.
//
// This will occure if the client instance must be used by multiple filestack components

class Upload extends Component {
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
    options:      PropTypes.objectOf(PropTypes.any),
    security:     PropTypes.objectOf(PropTypes.any),
    children:     PropTypes.node,
    render:       PropTypes.func,
    sessionCache: PropTypes.bool,
    active:       PropTypes.bool
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
      container: 'uploadContainer'
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
    this.mountPicker()
      .then(this.onFinished)
      .catch(this.onFail);
  }
  /**
   * Handles initializing and instance of the picker and mounting it
   * @method mountPicker
   * @return {Promise}    - The instance.
   */
  mountPicker = () => {
    const {
      client,
      options
    } = this.state;
    return new Promise((resolve) => {
      client.picker({ ...options, onUploadDone: resolve }).open();
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
        className={styles.overrides}
      ></div>
    );
  }
}

export default Upload;
