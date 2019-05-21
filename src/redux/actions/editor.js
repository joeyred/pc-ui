import {
  FETCH_FRAMES,
  UPDATE_ASPECT_RATIO,
  UPDATE_SELECTED_FRAME,
  UPDATE_CROP,
  STORE_IMAGE_DIMENSIONS
} from '../actiontypes/editor';

export const updateAspectRatio

export const updateSelectedFrame = id => {
  return {
    type: UPDATE_SELECTED_FRAME,
    id
  }
};

export const updateCrop = crop => {
  return {
    type: UPDATE_CROP,
    crop
  }
}

export const storeImageDimensions = dimensions => {
  return {
    type: STORE_IMAGE_DIMENSIONS,
    dimensions
  }
}
