import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = (props) => {
  const {
    imageSrc,
    handleClick,
    isEdited
  } = props;
  const label = isEdited ? (
    <div></div>
  ) : null;
  return (
    <div style={{width: 'auto'}}>


    </div>
  );
}

Thumbnail.defaultProps = {
  handleClick: () => console.log('thumbnail clicked'),
  isEdited:    false
};

Thumbnail.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isEdited: PropTypes.bool,
};

export default Thumbnail;
