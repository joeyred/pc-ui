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
import ImageActionCreators from '../redux/actions/image';

import ImageList from '../components/ImageList';

const mapStateToProps = (state) => (
  {
    images: state.image.images
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
          <Grid className='full'>
            <Cell className='small-6'>
              {/* TODO Add onClick */}
              <Button color={Colors.SECONDARY} size='small'>
                <MdFileUpload /> Upload More Images
              </Button>
            </Cell>

            <Cell className='auto'>
              <Button color={Colors.PRIMARY} size='small'>
                {/* TODO Add onClick */}
                <MdAddShoppingCart /> Add to Cart
              </Button>
            </Cell>
          </Grid>
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

export default connect(mapStateToProps)(Gallery);
