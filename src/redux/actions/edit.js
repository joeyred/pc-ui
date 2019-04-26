import * as EditActionTypes from '../actiontypes/edit';
// import {
//   UPDATE_SELECTED_FRAME
// } from '../actiontypes/edit';

const updateSelectedFrame = index => {
  return {
    type: EditActionTypes.UPDATE_SELECTED_FRAME,
    index
  }
};

export default {
  updateSelectedFrame
};
