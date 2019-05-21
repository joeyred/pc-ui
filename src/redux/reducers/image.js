import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  SAVE_EDIT,
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
      const {
        id,
        filename,
        handle,
        url,
        mimetype,
      } = action.payload;

      return {
        ...state,
        images: {
          byId: {
            ...state.images.byId,
            [id]: {
              id,
              edited: false,
              filename,
              handle,
              url,
              mimetype,
              currentSavedEditId: null,
              edits: [],
            },
          },
          allIds: [
            ...state.images.allIds,
            id,
          ],
        },
      };
    }
    case REMOVE_IMAGE: {
      const RemoveImageIndex = _.indexOf(state.images.allIds, action.id);
      const newList = [
        ...state.images.slice(0, RemoveImageIndex),
				...state.images.slice(RemoveImageIndex + 1)
      ];
      const newImagesById = _.omit(state.images.byId, action.id);
      return {
        ...state,
        images: {
          byId: newImagesById,
          allIds: newList,
        },
      };
    }
    case SAVE_EDIT: {
      const {
        imageId,
        editId
      } = action;
      return {
        ...state,
        images: {
          byId: {
            ...state.images.byId,
            [imageId]: {
              ...state.images.byId[imageId],
              currentSavedEditId: editId,
              edits: [
                editId,
                ...state.images.byId[imageId].edits,
              ],
            },
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}
