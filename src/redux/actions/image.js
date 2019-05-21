import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  SAVE_EDIT,
} from '../actiontypes/image';

import uniqid from 'uniqid';

/**
 * Add Image object to images array
 * @method addImage
 * @param  {Object}  image - Array of metadata objects to be parsed.
 */
export const addImage = image => {
  const {
    filename,
    handle,
    url,
    mimetype,
  } = image;
  const id = uniqid();
  return {
    type: ADD_IMAGE,
    payload: {
      id,
      filename,
      handle,
      url,
      mimetype,
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

export const saveEdit = (imageId, editId) => {
  return {
    type: SAVE_EDIT,
    imageId,
    editId
  };
};
