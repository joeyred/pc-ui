import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  // Colors
} from 'react-foundation';
// import toUpper from 'lodash/toUpper';
import Icon from '../Icon';

import styles from './Toolbar.module.scss';

const ToolbarButton = (props) => {
  const {
    icon,
    label,
    color,
    disabled,
    clickHandler
  } = props;

  return (
    <Button color={color} isDisabled={disabled} onClick={clickHandler}>
      <Icon name={icon} inline={false} className={styles.icon} />
      <span>{label}</span>
    </Button>
  );
}

ToolbarButton.defaultProps = {
  color: 'primary',
  disabled: false
}

ToolbarButton.propTypes = {
  // clickHandler: () => console.log('button clicked'),
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'alert'
  ]),
  disabled: PropTypes.bool,
};

export default ToolbarButton;
