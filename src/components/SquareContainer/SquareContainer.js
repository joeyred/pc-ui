import React from 'react';
import PropTypes from 'prop-types';

import styles from './SquareContainer.module.scss';

const SquareContainer = (props) => {
  const {
    centerContent,
    overflow
  } = props;

  const css = centerContent ?
    `${styles.container} ${styles['center-content']}` :
    styles.container
  ;
  const style = overflow ? {overflow: 'hidden'} : null;
  return (
    <div style={style} className={styles.container}>
      <div className={css}>
        {props.children}
      </div>
    </div>
  );
};

SquareContainer.defaultProps = {
  centerContent: false,
  overflow: true,
};

SquareContainer.propTypes = {
  centerContent: PropTypes.bool,
  overflow: PropTypes.bool,
};

export default SquareContainer;
