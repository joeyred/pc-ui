import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import classnames from 'classnames';
import { Label, Colors } from 'react-foundation';

import Thumbnail from '../Thumbnail';
import Icon from '../Icon';

import styles from './Product.module.scss';

const Product = props => {
  const { src, handleClick, isEdited, mode, frame } = props;
  console.log('Frame for this Product:\n', frame);
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
    <button
      type='button'
      className={containerClasses}
      onClick={handleClick}
      style={style}
    >
      <Thumbnail src={src} fill />
      {editLabel}
    </button>
  );
  const cartModeOutput = (
    <div className={containerClasses} style={style}>
      <Thumbnail src={src} fill />
      <div className={styles.label}>
        <Label color={Colors.SECONDARY}>
          {`${frame.width} x ${frame.height}`}
        </Label>
      </div>
    </div>
  );
  const output = mode === 'edit';
  return output ? editModeOutput : cartModeOutput;
};

Product.defaultProps = {
  mode: 'edit',
  isEdited: false,
  frame: { width: 0, height: 0 }
};

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
  handleClick: PropTypes.func,
  /**
   * Whether or not the uploaded image has a saved edit
   * @type {Boolean}
   */
  isEdited: PropTypes.bool,
  /**
   * The frame dimensions
   * @type {Array}
   */
  frame: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number })
};

export default Product;
