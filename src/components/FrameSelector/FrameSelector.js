// React
import React from 'react';
import PropTypes from 'prop-types';
// 3rd Party Components
import {
  Grid,
  GridContainer,
  Cell
} from 'react-foundation';
// Project Components
import PictureFrame from './PictureFrame';
// Styles
import styles from './FrameSelector.module.scss';

const FrameSelector = (props) => {
  const {
    frames,
    activeFrameIndex,
    direction,
    clickHandler
  } = props;

  const cellsPerRow = frames.length < 6 ? frames.length : 5;

  // Build out the array of frame components.
  const frameComponents = frames.map((frame, index) => (
    <Cell key={`${frame[0]}x${frame[0]}_${index}`}>

      <button
        className={`${activeFrameIndex === index ? styles.active : null} ${styles.button}`}
        onClick={() => clickHandler(index)}
      >
        <PictureFrame dimensions={frame} />
      </button>

    </Cell>
  ));
  return (
    <div className={styles.container}>
      <Grid vertical={direction === 'vertical'} className={`small-up-${cellsPerRow}`}>
        {frameComponents}
      </Grid>
    </div>
  );
};

FrameSelector.defaultProps = {
  frames:           [],
  activeFrameIndex: 0,
  direction:        'horizontal',
  clickHandler: (index) => console.log(`FrameSelector - Index Selected: ${index}`)
};

FrameSelector.propTypes = {
  frames:           PropTypes.array,
  activeFrameIndex: PropTypes.number,
  direction:        PropTypes.oneOf(['vertical', 'horizontal']),
  clickHandler:     PropTypes.func
};

export default FrameSelector;
