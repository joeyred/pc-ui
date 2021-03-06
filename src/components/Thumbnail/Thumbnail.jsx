// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
// Project Componets
import Icon from '../Icon';
import SquareContainer from '../SquareContainer';
// import SquareContainer from '../SquareContainer';
// Styles
import styles from './Thumbnail.module.scss';

class Thumbnail extends Component {
  static defaultProps = {
    fill: true,
  };

  static propTypes = {
    /**
     * Image source
     * @type {String}
     */
    src:  PropTypes.string.isRequired,
    /**
     * If the image should fill the entire thumnail or reatin its aspect ratio.
     * @type {Boolean}
     */
    fill: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.state = {
      landscape: null,
      imgHeight: null,
      imgWidth: null,
    };
  }
  // TODO Move this to the constructor?
  componentDidMount() {
    const landscape = this.image.current.offsetHeight < this.image.current.offsetWidth;
    this.setState({
      landscape,
      imgHeight: this.image.current.offsetHeight,
      imgWidth: this.image.current.offsetWidth,
    });
  }
  calcStyleProp(landscape, height, width) {
    const aspectRatio = width / height;
    if (landscape) {
      const updatedWidth = width * aspectRatio;
      return {
        width: updatedWidth,
        height: width,
      }
    } else {
      return null;
    }
  }
  render() {
    const {
      src,
    } = this.props;

    // Handle any passed inline styles
    const style = this.props.style ? this.props.style : null;

    // Handle any passed class names
    const containerClasses = classnames(
      styles.container,
      this.props.className ? this.props.className : null
    );
    // Handle addition of portrait class based on image aspect ratio
    const imageClass = this.state.portrait ? styles.portrait : null;
    const imgStyle = this.calcStyleProp(this.state.landscape, this.state.imgHeight, this.state.imgWidth);
    // TODO Handle passing a proper `alt` value
    // return (
    //   <div className={containerClasses} style={style}>
    //     <img className={imageClass} ref={this.image} src={src} alt='' />
    //   </div>
    // );
    return (
      <SquareContainer centerContent={true} overflow={false}>
        <div className={containerClasses} style={imgStyle}>
          <img ref={this.image} src={src} alt=''  />
        </div>
      </SquareContainer>

    );
  }
}

export default Thumbnail;
