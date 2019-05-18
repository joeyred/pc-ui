import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  EDIT_IMAGE
} from '../actiontypes/image';
import _ from 'lodash';
// import imgMock from '../../imgs/IMG_0408.jpg';

const initialState = {
  images: {
    byId: {},
    allIds: []
  },
};

export default function Image(state=initialState, action) {
  switch(action.type) {
    // TODO No Duplicate Images
    // Add a check to make sure the handle of the image doesnt match
    // previously uploaded images.
    case ADD_IMAGE: {
      const imageListAdd = [
        ...state.images,
        {
          edited:   false,
          filename: action.image.filename,
          handle:   action.image.handle,
          url:      action.image.url,
          mimetype: action.image.mimetype,
          edits:    {
            current: null,
            history: []
          },
          metadata: action.image
        }
      ];
      return {
        ...state,
        images: imageListAdd
      };
    }
    case REMOVE_IMAGE: {
      const RemoveImageIndex = _.indexOf(state.images, {handle: action.handle});
      const imageListRemove = [
        ...state.images.slice(0, RemoveImageIndex),
				...state.images.slice(RemoveImageIndex + 1)
      ];
      return {
        ...state,
        images: imageListRemove
      }
    }
    case EDIT_IMAGE: {
      const EditImageIndex = _.indexOf(state.images, {handle: action.handle});
      // parse edits
      const edits = {
        ...state.image[EditImageIndex].edits,
        ...action.edits
      };
      // update image object
      const imageListEdit = [
        ...state.images.slice(0, EditImageIndex),
        {
          ...state.images[EditImageIndex],
          edits
        },
				...state.images.slice(EditImageIndex + 1)
      ];
      return {
        ...state,
        images: imageListEdit
      }
    }
    default: {
      return state;
    }
  }

}
