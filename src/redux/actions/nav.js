import {
  UPDATE_VIEW,
  UPDATE_APP_VISIBILITY,
} from '../actiontypes/nav';
import { Views } from '../../globals';

export const updateView = view => ({
  type: UPDATE_VIEW,
  view,
});
/**
 * Update the current visibility of the app, and whioch view should be
 * displayed based on if at least one image has been edited or not.
 * @method updateAppVisibility
 * @param  {Boolean}            visible    - `true` if the app is visible, `false` if not.
 * @param  {Boolean}            editExists - `true` sets the view to GALLERY,
 *                                           `false` to UPLOAD.
 */
export const updateAppVisibility = (visible, editExists) => {
  const view = editExists ? Views.GALLERY : Views.UPLOAD;
  return {
    type: UPDATE_APP_VISIBILITY,
    visible,
    view,
  };
};
