import React from 'react';
import PropTypes from 'prop-types';

// import Rect from '../graphics/Rect';
import Frame from '../graphics/Frame';
// import SquareContainer from '../SquareContainer';

import styles from './PictureFrame.module.scss';

const PictureFrame = (props) => {
  const {dimensions} = props;

  const height = dimensions[1];
  const width = dimensions[0];
  return (

    <div className={styles.container}>
      {/* <SquareContainer centerContent={true}> */}
      <figure className={styles.frame}>
        <Frame height={height} width={width} />
        <figcaption className={styles.text}>
          <div>
            {`${dimensions[0]} x ${dimensions[1]}`}
          </div>
        </figcaption>
      </figure>
      {/* </SquareContainer> */}
    </div>

  );
};

PictureFrame.defaultProps = {};

PictureFrame.propTypes = {
  dimensions: PropTypes.array
};

export default PictureFrame;
