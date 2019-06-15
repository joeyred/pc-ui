import React from 'react';
import PropTypes from 'prop-types';

// import Rect from '../graphics/Rect';
import Frame from '../graphics/Frame';
// import SquareContainer from '../SquareContainer';

import styles from './PictureFrame.module.scss';

const PictureFrame = props => {
  const { dimensions } = props;
  const { width, height } = dimensions;

  // const width = dimensions[0];
  // const height = dimensions[1];

  return (
    <div className={styles.container}>
      {/* <SquareContainer centerContent={true}> */}
      <figure className={styles.frame}>
        <Frame width={width} height={height} />
        <figcaption className={styles.text}>
          <div>{`${width} x ${height}`}</div>
        </figcaption>
      </figure>
      {/* </SquareContainer> */}
    </div>
  );
};

PictureFrame.defaultProps = {};

PictureFrame.propTypes = {
  // dimensions: PropTypes.array
};

export default PictureFrame;
