import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import * as MdIcons from 'react-icons/md';

import styles from './Icon.module.scss';

const Icon = (props) => {
  const {
    name,
    inline
  } = props;
  const Element = MdIcons[`Md${name}`];

  const className = classnames(
    inline ? styles['inline-block'] : styles.block,
    props.className
  );
  return (
    <span className={className}>
      <Element />
    </span>
  );
}

Icon.defaultProps = {
  inline: true
}

Icon.propTypes = {
  inline: PropTypes.bool,
  name: PropTypes.string.isRequired,
};


export default Icon;
