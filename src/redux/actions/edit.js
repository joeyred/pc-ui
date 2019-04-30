import * as EditActionTypes from '../actiontypes/edit';
// import {
//   UPDATE_SELECTED_FRAME
// } from '../actiontypes/edit';

export const updateSelectedFrame = index => {
  return {
    type: EditActionTypes.UPDATE_SELECTED_FRAME,
    index
  }
};

export const updateCrop = crop => {
  return {
    type: EditActionTypes.UPDATE_CROP,
    crop
  }
}

export const storeImageDimensions = dimensions => {
  return {
    type: EditActionTypes.STORE_IMAGE_DIMENSIONS,
    dimensions
  }
}
