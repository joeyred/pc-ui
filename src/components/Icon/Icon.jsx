import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import * as MdIcons from 'react-icons/md';

import styles from './Icon.module.scss';

const Icon = props => {
  const { name, inline, rotate, className } = props;
  const Element = MdIcons[`Md${name}`];
  // const icon = `Md${name}`;
  //
  // const { icon: Element} = require(`react-icons/md`);

  const css = classnames(
    rotate !== 0 ? styles[`rotate-${rotate}`] : null,
    inline ? styles['inline-block'] : styles.block,
    className
  );

  return (
    <span className={css}>
      <Element />
    </span>
  );
};

Icon.defaultProps = {
  rotate: 0,
  inline: true
};

Icon.propTypes = {
  rotate: PropTypes.number,
  inline: PropTypes.bool,
  name: PropTypes.string.isRequired
};

export default Icon;
