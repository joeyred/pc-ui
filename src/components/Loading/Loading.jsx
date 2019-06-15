import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

const Loading = props => {
  const { loading, children, type, color } = props;

  const loadingAnimation = <Spinner name={type} color={color} />;

  const display = loading ? loadingAnimation : children;

  return <React.Fragment>{display}</React.Fragment>;
};

Loading.defaultProps = {
  type: 'three-bounce',
  color: 'blue'
};

Loading.propTypes = {};

export default Loading;
