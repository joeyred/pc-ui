import {
  UPDATE_SELECTED_FRAME,
  UPDATE_SELECTED_COLLECTION,
  FETCH_FRAMES_START,
  FETCH_FRAMES_SUCCESS,
  FETCH_FRAMES_FAILURE
} from '../actiontypes/frame';

import { Frames } from '../../globals';

const initialState = {
  // frames: {
  //   byId: {},
  //   allIds: [],
  // },
  loaded: false,
  loading: false,
  frames: Frames,
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
    case FETCH_FRAMES_START: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_FRAMES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
        // TODO Finish this once you know what the response looks like
      };
    }
    case FETCH_FRAMES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
