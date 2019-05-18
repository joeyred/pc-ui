import * as GalleryActionTypes from './actiontypes';
// import imgMock from '../../../imgs/mock-img-vertical.jpg';

const initialState = {
  isEditing: true
};

export default function Gallery(state=initialState, action) {
  switch(action.type) {
    case GalleryActionTypes.UPDATE_EDIT_MODE: {
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    }
    default: {
      return state;
    }
  }
}
