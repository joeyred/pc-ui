import React from 'react';
import PropTypes from 'prop-types';

import Rect from './graphics/Rect';

import style from './PictureFrame.module.scss';

const PictureFrame = (props) => {
  const {dimensions} = props;

  const height = dimensions[0];
  const width = dimensions[1];
  return (
    <div className={style.container}>
      <figure className={style.frame}>
        <Rect height={height} width={width} />
        <figcaption className={style.text}>{`${dimensions[0]} x ${dimensions[1]}`}</figcaption>
      </figure>
    </div>
  );
};

PictureFrame.defaultProps = {};

PictureFrame.propTypes = {
  dimensions: PropTypes.array
};

export default PictureFrame;
