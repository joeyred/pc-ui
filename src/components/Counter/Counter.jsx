import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import styles from './Counter.module.scss';

const Counter = (props) => {
  const {
    updateCount,
    count
  } = props;
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button}`}
        onClick={() => updateCount()}
      >
        <Icon name='Remove' />
      </button>
      <div className={styles.count}>
        {count}
      </div>
      <button
        className={`${styles.button}`}
        onClick={() => updateCount()}
      >
        <Icon name='Add' />
      </button>

    </div>
  );
}

Counter.defaultProps = {
  count: 0
}

Counter.propTypes = {
  updateCount: PropTypes.func.isRequired,
  count: PropTypes.number,
  id: PropTypes.string
};

export default Counter;
