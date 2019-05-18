import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import styles from './Counter.module.scss';

class Counter extends Component {
  state = {
    count: 0
  };
  static defaultProps = {
    count: 0,
    updateCountHandler: false,
  };

  static propTypes = {
    updateCount: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    count: PropTypes.number,
    id: PropTypes.string
  };

  componentDidMount() {
    const { count } = this.props;
    this.setState({ count });
  }

  updateCount(direction) {
    const {
      updateCountHandler,
      id,
    } = this.props;
    let count = updateCountHandler ? this.props.count : this.state.count;
    if (direction === 'increase') {
      count++
    }
    if (direction === 'decrease' && count !== 0) {
      count--
    }

    if (updateCountHandler) {
      updateCountHandler(id, count);
    } else {
      this.setState({ count });
    }
  }

  render() {
    const {
      updateCountHandler,
    } = this.props;
    const count = updateCountHandler ? this.props.count : this.state.count;

    return (
      <div className={styles.container}>
        <button
          className={`${styles.button}`}
          onClick={() => this.updateCount('decrease')}
        >
          <Icon name='Remove' />
        </button>
        <div className={styles.count}>
          {count}
        </div>
        <button
          className={`${styles.button}`}
          onClick={() => this.updateCount('increase')}
        >
          <Icon name='Add' />
        </button>
      </div>
    );
  }
}

export default Counter;
