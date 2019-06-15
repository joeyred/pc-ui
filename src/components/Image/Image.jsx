import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import Loading from '../Loading';

class Image extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };

  render() {
    const { loading } = this.state;
    const { src, alt } = this.props;
    return (
      <Loading loading={loading} type='rotating-plane' color='#f76e87'>
        <img
          src={src}
          alt={alt}
          onLoad={() => this.setState({ loading: false })}
        />
      </Loading>
    );
  }
}

export default Image;
