import * as GalleryActionTypes from '../actiontypes/gallery';

/**
 * Add Image objects to gallery state
 * @method addImages
 * @param  {Array}  files - Array of metadata objects to be parsed.
 */
export const addImages = files => {
  return {
    type: GalleryActionTypes.ADD_IMAGES,
    files
  };
};

/**
 * Remove Images from the gallery state
 * @method removeImages
 * @param  {Array}     handles - an Array of stings containing
 *                               the file handles to be removed.
 */
export const removeImages = handles => {
  return {
    type: GalleryActionTypes.REMOVE_IMAGES,
    handles
  };
};

export const editImage = handle => {
  return {
    type: GalleryActionTypes.EDIT_IMAGE,
    handle
  };
};

export const markImageAsEdited = handle => {
  return {
    type: GalleryActionTypes.MARK_IMAGE_AS_EDITED,
    handle
  };
};
