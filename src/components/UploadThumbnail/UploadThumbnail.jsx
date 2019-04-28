// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
// 3rd Party UI Components
import {
  // Thumbnail,
  Label,
  Colors
} from 'react-foundation';
import { MdDone } from 'react-icons/md';
// Project Componets
import SquareContainer from '../SquareContainer';
// Styles
import styles from './UploadThumbnail.module.scss';

class UploadThumbnail extends Component {
  static defaultProps = {
    handleClick: () => console.log('thumbnail clicked'),
    square:      true,
    isEdited:    false
  };

  static propTypes = {
    src:         PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    square:      PropTypes.bool,
    isEdited:    PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.state = {
      portrait: null
    };
  }
  componentDidMount() {
    const portrait = this.image.current.offsetHeight > this.image.current.offsetWidth;
    this.setState({portrait});
  }
  render() {
    const props = this.props;
    const {
      src,
      handleClick,
      isEdited
    } = props;

    const label = isEdited ? (
      <div className={styles.label}>
        <Label color={Colors.SUCCESS}>
          <MdDone /> Edited
        </Label>
      </div>
    ) : null;
    const imageClass = this.state.portrait ? styles.portrait : null;

    return (
      <button className={styles.container} onClick={handleClick}>
        {label}
        <div className={styles.thumbnail}>
          <img className={imageClass} ref={this.image} src={src} alt='' />
        </div>
      </button>
    );
  }
}



export default UploadThumbnail;
