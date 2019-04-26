import * as EditActionTypes from '../actiontypes/edit';
// import _ from 'lodash';

const initialState = {
  frames: [
    [8, 8],
    [8, 12],
    [12, 8],
    [8, 16],
    [16, 8]
  ],
  selectedFrameIndex: 0,
  selectedFrame: [8, 8],
  aspectRatio: [8, 8],
  file: 'https://cdn.filestackcontent.com/UfxVvzDDTkqquiJL3CSI'
};

export default function Edit(state = initialState, action) {
  switch(action.type) {
    case EditActionTypes.UPDATE_SELECTED_FRAME: {
      const selectedFrame = state.frames[action.index];
      const selectedFrameIndex = action.index;
      // delete state.selectedFrame;
      // console.log(state);
      return {
        ...state,
        selectedFrame,
        selectedFrameIndex
      };
    }
    default: {
      return state;
    }

  }


}
