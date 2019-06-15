import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Cell,
  Button,
  // ButtonGroup,
  TopBar,
  TopBarLeft,
  Colors
} from 'react-foundation';

// import MicroModal from 'micromodal';

import { AppAtts } from '../globals';
import closeModal from '../utils/CropShopButton';

import styles from './AddingToCart.module.scss';

const mapStateToProps = state => ({
  itemsToAdd: state.cart.itemsToAdd,
  itemsAdded: state.cart.itemsAdded,
  itemsErrored: state.cart.itemsErrored,
  addingItems: state.cart.addingItems,
  cartUrl: state.external.cartUrl
});

const AddingToCart = props => {
  const { itemsToAdd, itemsAdded, itemsErrored, cartUrl, addingItems } = props;
  console.log(cartUrl);
  const loading = (
    <div>
      <h1>Adding Items to CArt!</h1>
      <span>
        {itemsAdded} / {itemsToAdd}
      </span>
    </div>
  );

  const done = (
    <Grid>
      <Cell small={12}>
        <h1>All items added to cart!</h1>
      </Cell>

      <Cell small={6}>
        <Button
          color={Colors.SECONDARY}
          onClick={() => closeModal(AppAtts.MODAL_ID)}
        >
          Continue Shopping
        </Button>
      </Cell>
      <Cell small={6}>
        <a href='/cart' className={`button ${Colors.PRIMARY}`}>
          Go To My Cart
        </a>
      </Cell>
    </Grid>
  );

  const rendered = addingItems ? loading : done;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{rendered}</div>
    </div>
  );
};

AddingToCart.propTypes = {};

export default AddingToCart;
