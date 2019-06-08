// React
import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';
// 3rd Party Components
import {
  Grid,
  // GridContainer,
  Cell
} from 'react-foundation';

import { updateSelectedFrame , fetchFrames } from '../../redux/actions/frame';
import { updateCropFullCenter } from '../../redux/actions/editor';

// Project Components
import PictureFrame from './PictureFrame';
// Styles
import styles from './FrameSelector.module.scss';

const mapStateToProps = state => ({
  frames: state.frame.frames,
  selectedFrameId: state.frame.selectedFrameId,
  selectedCollectionId: state.frame.selectedCollectionId,
  imageProps: state.editor.imageProps
});

const FrameSelector = props => {
  const {
    frames,
    selectedFrameId,
    selectedCollectionId,
    direction,
    imageProps,
    dispatch
  } = props;
  const filteredFramesIdArray = map(frames.allIds, id => {
    const frame = frames.byId[id];
    if (frame.productCollectionId === selectedCollectionId) {
      return id;
    }
    return null;
  });
  // TODO this needs fixing!!
  const cellsPerRow =
    filteredFramesIdArray.length < 6 ? filteredFramesIdArray.length : 5;
  let tempFrame = selectedFrameId;

  const handleClick = id => {
    const aspect = frames.byId[id].exact;
    dispatch(updateSelectedFrame(id));
    dispatch(updateCropFullCenter(aspect, imageProps));
  };

  const items = map(filteredFramesIdArray, id => {
    if (tempFrame === null) {
      tempFrame = id;
      // console.log(tempFrame, id);
      dispatch(updateSelectedFrame(id));
    }
    const frame = frames.byId[id];
    const active = id === tempFrame;
    // console.log(tempFrame, id);
    // const display = frame.productCollectionId === selectedCollectionId;

    // if (display) {
    return (
      <Cell key={id}>
        <button
          type='button'
          className={`${active ? styles.active : null} ${styles.button}`}
          onClick={() => handleClick(id)}
        >
          <PictureFrame dimensions={frame.display} />
          {/* TODO Add Price Here */}
        </button>
      </Cell>
    );
    // }
    // return null;
  });
  return (
    <div className={styles.container}>
      <Grid
        vertical={direction === 'vertical'}
        className={`small-up-${cellsPerRow}`}
      >
        {items}
      </Grid>
    </div>
  );
};

FrameSelector.defaultProps = {
  frames: {},
  direction: 'horizontal'
  // clickHandler: (index) => console.log(`FrameSelector - Index Selected: ${index}`)
};

FrameSelector.propTypes = {
  frames: PropTypes.shape({
    byId: PropTypes.object,
    allIds: PropTypes.array
  }),
  // selectedFrameId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal'])
  // clickHandler:     PropTypes.func,
};

export default connect(mapStateToProps)(FrameSelector);
