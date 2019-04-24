import React from 'react';
import PropTypes from 'prop-types';

import styles from './SquareContainer.module.scss';

const SquareContainer = (props) => {
  const {centerContent} = props;

  let css = styles.content;

  if (centerContent) css = `${css} ${styles['center-content']}`;
  return (

    <div className={styles.container}>
      <div className={css}>
        {props.children}
      </div>
    </div>
  );
};

SquareContainer.defaultProps = {
  centerContent: false
};

SquareContainer.propTypes = {
  centerContent: PropTypes.bool
};

export default SquareContainer;
