import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  EDIT_IMAGE
} from '../actiontypes/image';

/**
 * Add Image object to images array
 * @method addImage
 * @param  {Object}  image - Array of metadata objects to be parsed.
 */
export const addImage = image => {
  return {
    type: ADD_IMAGE,
    image
  };
};

/**
 * Remove Image object to images array
 * @method removeImages
 * @param  {Array}     handles - an Array of stings containing
 *                               the file handles to be removed.
 */
export const removeImage = handle => {
  return {
    type: REMOVE_IMAGE,
    handle
  };
};

export const editImage = (handle, edit) => {
  return {
    type: EDIT_IMAGE,
    handle,
    edit
  };
};
