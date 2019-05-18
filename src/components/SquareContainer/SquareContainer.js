import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import styles from './SquareContainer.module.scss';

const SquareContainer = (props) => {
  const {
    centerContent,
    overflow
  } = props;

  const containerClasses = classnames(
    props.className ? props.className : null,
    styles.container
  );

  const contentClasses = classnames(
    centerContent ? styles['center-content'] : null,
    overflow ? null : styles['overflow-hidden'],
    styles.content
  );
  const style = props.style ? props.style : null;
  return (
    <div style={style} className={containerClasses}>
      <div className={contentClasses}>
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
