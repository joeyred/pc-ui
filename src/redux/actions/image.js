import uniqid from 'uniqid';
import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  SAVE_EDIT,
  REMOVE_EDIT
} from '../actiontypes/image';

/**
 * Add Image object to images array
 * @method addImage
 * @param  {Object}  image - Array of metadata objects to be parsed.
 */
export const addImage = image => {
  const { filename, handle, url, mimetype } = image;
  const id = uniqid();
  return {
    type: ADD_IMAGE,
    payload: {
      id,
      filename,
      handle,
      url,
      mimetype
    }
  };
};

/**
 * Remove Image object and id
 * @method removeImage
 * @param  {Array}     id - The id of the image to remove
 */
export const removeImage = id => {
  return {
    type: REMOVE_IMAGE,
    id
  };
};

export const saveEdit = (imageId, productId, previewSrc, transformations) => {
  return {
    type: SAVE_EDIT,
    imageId,
    productId,
    previewSrc,
    transformations
  };
};

export const removeEdit = imageId => ({
  type: REMOVE_EDIT,
  imageId
});
