// React
import React from 'react';
import PropTypes from 'prop-types';
// 3rd Party UI Components
import {
  Thumbnail,
  Label,
  Colors
} from 'react-foundation';
import { MdDone } from 'react-icons/md';
// Project Componets

// Styles
import styles from './UploadThumbnail.module.scss';

const UploadThumbnail = (props) => {
  const {
    src,
    handleClick,
    isEdited
  } = props;
  const label = isEdited ? (
    <div className={styles.label}>
      <Label color={Colors.SUCCESS}>
        <MdDone /> Edited
      </Label>
    </div>
  ) : null;
  return (
    <button className={styles.container} onClick={handleClick}>
      {label}
      <Thumbnail src={src} />
    </button>
  );
}

UploadThumbnail.defaultProps = {
  handleClick: () => console.log('thumbnail clicked'),
  isEdited:    false
};

UploadThumbnail.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isEdited: PropTypes.bool,
};

export default UploadThumbnail;
