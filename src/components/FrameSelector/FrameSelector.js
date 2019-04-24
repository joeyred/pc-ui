// React
import React from 'react';
import PropTypes from 'prop-types';
// 3rd Party Components
import {
  Grid
} from 'semantic-ui-react';
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
  // Makes the display vertical or horizontal by manipulating stacking
  const columnsPerRow = direction === 'horizontal' ? frames.length : 1;

  // Build out the array of frame components.
  const frameComponents = frames.map((frame, index) => (
    <Grid.Column stretched key={`${frame[0]}x${frame[0]}_${index}`}>

      <button
        className={activeFrameIndex === index ? styles.active : null}
        onClick={() => clickHandler(index)}
      >
        <PictureFrame dimensions={frame} />
      </button>

    </Grid.Column>
  ));
  return (
    <Grid columns={columnsPerRow} verticalAlign='middle'>
      {frameComponents}
    </Grid>
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
