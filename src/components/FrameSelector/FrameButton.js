import React from 'react';
import PropTypes from 'prop-types';

// import Rect from '../graphics/Rect';
import Frame from '../graphics/Frame';
// import SquareContainer from '../SquareContainer';

import styles from './FrameButton.module.scss';

const FrameButton = (props) => {
  const {dimensions} = props;

  const height = dimensions[0];
  const width = dimensions[1];
  return (
    
    <div className={styles.container}>
      <figure className={styles.frame}>
        <Frame height={height} width={width} />
        <figcaption className={styles.text}>
          <div>
            {`${dimensions[0]} x ${dimensions[1]}`}
          </div>
        </figcaption>
      </figure>
    </div>

  );
};

FrameButton.defaultProps = {};

FrameButton.propTypes = {
  dimensions: PropTypes.array,
  fontSize:   PropTypes.string,
  fontColor:  PropTypes.string,
  frameFill:  PropTypes.string
};

export default FrameButton;
