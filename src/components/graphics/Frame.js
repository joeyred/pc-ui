import React from 'react';
import PropTypes from 'prop-types';

import Graphic from './Graphic';

const Frame = (props) => {
  const {height, width} = props;

  // Find the greater value and assign it as the dimensions to be used for the viewbox.
  const box = height >= width ? height : width;
  const xy = {};

  if (height >= width) {
    xy.x = (height - width) / 2;
    xy.y = 0;
  } else {
    xy.x = 0;
    xy.y = (width - height) / 2;
  }

  return (
    <Graphic viewBox={box}>

      <rect {...xy} height={height} width={width} />

    </Graphic>
  );
}

Frame.propTypes = {
  height: PropTypes.number,
  width:  PropTypes.number,
  fill:   PropTypes.string
};

export default Frame;
