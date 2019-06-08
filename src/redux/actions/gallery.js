import {
  SET_IMAGE_IN_EDITOR,
  UPDATE_EDIT_MODE,
} from '../actiontypes/gallery';

/**
 * Whether the gallery for editing or adding items to the cart
 *
 * @method updateEditMode
 *
 * @param  {Boolean}      isEditing - `true` if editing, `false` if adding items to cart.
 */
export const updateEditMode = isEditing => ({
  type: UPDATE_EDIT_MODE,
  isEditing,
});

/**
 * Set the image to be used by the editor
 *
 * @method setImageInEditor
 *
 * @param  {String}         id - The ID of the image.
 */
export const setImageInEditor = id => ({
  type: SET_IMAGE_IN_EDITOR,
  id,
});
