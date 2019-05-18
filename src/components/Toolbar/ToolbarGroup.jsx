import React from 'react';
import PropTypes from 'prop-types';

import styles from './Toolbar.module.scss';

const ToolbarGroup = (props) => {
  const {
    children,
    label
  } = props;

  const labelElement = label ? <span>{label}</span> : null;

  return (
    <div className={styles.group}>
      {labelElement}
      <div>
        {children}
      </div>

    </div>
  );
}

ToolbarGroup.defaultProps = {
  label: null
};

ToolbarGroup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, null]),
};

export default ToolbarGroup;
