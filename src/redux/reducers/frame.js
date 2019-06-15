import {
  UPDATE_SELECTED_FRAME,
  UPDATE_SELECTED_COLLECTION,
  ADD_FRAME
  // FETCH_FRAMES_START,
  // FETCH_FRAMES_SUCCESS,
  // FETCH_FRAMES_FAILURE
} from '../actiontypes/frame';

// import { Frames } from '../../globals';

const initialState = {
  frames: {
    byId: {},
    allIds: []
  },
  loaded: false,
  loading: false,
  // frames: Frames,
  selectedFrameId: null,
  selectedCollectionId: null,
  error: null
};

export default function Frame(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_FRAME: {
      return {
        ...state,
        selectedFrameId: action.id
      };
    }
    case UPDATE_SELECTED_COLLECTION: {
      return {
        ...state,
        selectedCollectionId: action.collectionName
      };
    }
    case ADD_FRAME: {
      const {
        id,
        productId,
        variantId,
        collections,
        price,
        dimensions,
        aspectRatio,
        width,
        height
      } = action.payload;
      return {
        ...state,
        frames: {
          byId: {
            ...state.frames.byId,
            [id]: {
              id,
              productId,
              variantId,
              collections,
              price,
              dimensions,
              aspectRatio,
              width,
              height
            }
          },
          allIds: [...state.frames.allIds, id]
        }
      };
    }
    default: {
      return state;
    }
  }
}
