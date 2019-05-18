import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Cell,
  Colors
} from 'react-foundation';

import ToolbarButton from './ToolbarButton';
import ToolbarGroup from './ToolbarGroup';

// import Icon from '../components/Icon';

import styles from './Toolbar.module.scss';

class Toolbar extends Component {
  static Group = ToolbarGroup;
  static Button = ToolbarButton;

  render() {
    const {
      children,
      className
    } = this.props;
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}

export default Toolbar;
