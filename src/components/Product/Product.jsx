import React from 'react';
import PropTypes from 'prop-types';

import {
  Label,
  Colors
} from 'react-foundation';

import Thumbnail from '../Thumbnail';
import Icon from '../Icon';

import classnames from 'classnames';

import styles from './Product.module.scss';

const Product = (props) => {
  const {
    src,
    handleClick,
    isEdited,
    mode,
    frame,
  } = props;

  const style = props.style ? props.style : null;
  const containerClasses = classnames(
    styles.container,
    props.className ? props.className : null
  );

  const editLabel = isEdited ? (
    <div className={styles.label}>
      <Label color={Colors.SUCCESS}>
        <Icon name='Done' /> Edited
      </Label>
    </div>
  ) : null;
  const editModeOutput = (
    <button className={containerClasses} onClick={handleClick} style={style}>
      <Thumbnail src={src} fill={true} />
      {editLabel}
    </button>
  );
  const cartModeOutput = (
    <div className={containerClasses} style={style}>
      <Thumbnail src={src} fill={true} />
      <div className={styles.label}>
        <Label color={Colors.SECONDARY}>{`${frame[0]} x ${frame[1]}`}</Label>
      </div>
    </div>
  );
  const output = (mode === 'edit');
  return output ? editModeOutput : cartModeOutput;
}

Product.defaultProps = {
  mode: 'edit',
  isEdited: false,
  frame: [0, 0],
}

Product.propTypes = {
  /**
   * The image source (url)
   * @type {String}
   * @required
   */
  src: PropTypes.string.isRequired,
  /**
   * The current view mode
   * @type {String} - accepts `edit` or `cart`.
   */
  mode: PropTypes.oneOf(['edit', 'cart']),
  /**
   * The click handler for when the product is in `edit` mode
   * @type {Function}
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * Whether or not the uploaded image has a saved edit
   * @type {Boolean}
   */
  isEdited: PropTypes.bool,
  /**
   * The frame dimensions (relative, not actual)
   * @type {Array}
   */
  frame: PropTypes.array,

};

export default Product;
