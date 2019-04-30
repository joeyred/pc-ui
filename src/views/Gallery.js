import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  TopBar,
  TopBarLeft,
  TopBarRight,
  Button,
  Grid,
  Cell,
  Colors
} from 'react-foundation';
import { MdFileUpload, MdAddShoppingCart } from 'react-icons/md';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GalleryActionCreators from '../redux/actions/gallery';

import ImageList from '../components/ImageList';

const mapStateToProps = (state) => (
  {
    images: state.gallery.images
  }
);

class Gallery extends Component {
  render() {
    const {
      images
    } = this.props;
    return (
      <div>
        {/* Top Bar */}
        <TopBar>
          <TopBarLeft>
            {/* TODO Add onClick */}
            <Button color={Colors.SECONDARY}>
              <MdFileUpload /> Upload More Images
            </Button>
          </TopBarLeft>

          <TopBarRight>
            <Button color={Colors.PRIMARY}>
              <MdAddShoppingCart /> Add to Cart
            </Button>
          </TopBarRight>
        </TopBar>
        {/* Main Gallery */}
        <Grid>
          <Cell small={12}>
            <h4>Select an Image to Edit</h4>
          </Cell>
          <Cell>
            <ImageList images={images} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Gallery;
