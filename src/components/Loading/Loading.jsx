import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
  const {
    loading,
    children,
  } = props;
  const loadingAnimation = (

  );
  const display = loading ?  : children;
  return (
    <React.Fragment>
      {display}
    </React.Fragment>
  );
}

Loading.propTypes = {};

export default Loading;
