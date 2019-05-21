import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import _ from 'lodash';

import {
  TopBar,
  TopBarLeft,
  // TopBarRight,
  Button,
  Grid,
  GridContainer,
  Cell,
  Colors
} from 'react-foundation';

import Icon from '../components/Icon';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as ImageActionCreators from '../redux/actions/image';
import * as GalleryActionCreators from '../redux/actions/gallery';

import ImageList from '../components/ImageList';

import styles from './Gallery.module.scss';

const mapStateToProps = (state) => (
  {
    images: state.image.images,
    isEditing: state.gallery.isEditing,
    imageHasBeenEdited: state.gallery.imageHasBeenEdited,
  }
);

class Gallery extends Component {

  render() {
    const {
      images,
      isEditing,
      dispatch
    } = this.props;
    // Check if an image has been edited
    const imageHasBeenEdited = (_.filter(images.byId, {edited: true}).length > 0);
    // console.log(imageHasBeenEdited);

    const updateEditMode = bindActionCreators(GalleryActionCreators.updateEditMode, dispatch);

    const responsiveItemsPerRow = {
      small: 2,
      medium: 3,
      large: 4,
      xlarge: 5,
      xxlarge: 6,
    };

    const AddToCart = isEditing ? null :
      <Cell className='auto'>
        <Button color={Colors.PRIMARY} size='small'>
          {/* TODO Add onClick */}
          <Icon name='AddShoppingCart' /> Add to Cart
        </Button>
      </Cell>;

    const DoneEditing = isEditing ?
      <Cell className='auto'>
        <Button
          color={Colors.PRIMARY}
          size='small'
          onClick={() => updateEditMode()}
          isDisabled={!imageHasBeenEdited}
        >
          Done Editing <Icon name='ArrowForward' />
        </Button>
      </Cell> : null;

    const BackToEditing = isEditing ? null :
    <Cell className='auto'>
      <Button color={Colors.SECONDARY} size='small' onClick={() => updateEditMode()}>
        <Icon name='ModeEdit' /> Back to Editing
      </Button>
    </Cell>;

    return (
      <div>
        {/* Top Bar */}
        <TopBar>
          <TopBarLeft>
            <Button color={Colors.SECONDARY} size='small'>
              <Icon name='FileUpload' /> Upload More Images
            </Button>
          </TopBarLeft>
        </TopBar>
        {/* Main Gallery */}
        <GridContainer className={styles['content-container']}>
          <Grid vertical={true} className='grid-margin-y'>
            <Cell small={12}>
              <Grid vertical={false} className='align-center-middle text-center'>
                {AddToCart}
                {DoneEditing}
                {BackToEditing}
              </Grid>
            </Cell>
            <Cell small={12}>
              <h2>Select an Image to Edit</h2>
            </Cell>
            <Cell>
              {/* TODO Redux - add click handler for image select */}
              {/* TODO Redux - add count handler */}
              <ImageList
                images={images}
                temsPerRow={responsiveItemsPerRow}
                isEditing={isEditing}
              />
            </Cell>
          </Grid>
        </GridContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Gallery);
