import {
  SET_IMAGE_IN_EDITOR,
  UPDATE_EDIT_MODE,
} from '../actiontypes/gallery';
// import imgMock from '../../imgs/mock-img-vertical.jpg';

const initialState = {
  // Is the gallery in edit mode
  isEditing: true,
  // Has an image edit been saved yet
  imageHasBeenEdited: false,
  // Use this to load the correct image data into the editor
  currentIdBeingEdited: null,
};

export default function Gallery(state=initialState, action) {
  switch(action.type) {
    case UPDATE_EDIT_MODE: {
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
