import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Filestack from '../components/Filestack';



class Upload extends Component {

  render() {
    const apiKey = 'AA1ZGkqsZT1Ca96rjT6mKz';

    const options = {
      fromSources: ['local_file_system', 'instagram', 'facebook', 'googledrive'],
      accept: 'image/*'
    };

    return (
      <Filestack.Upload apiKey={apiKey} />
    );
  }
}

export default Upload;
