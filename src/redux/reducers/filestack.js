import {
  FETCH_API_KEY_START,
  FETCH_API_KEY_SUCCESS,
  FETCH_API_KEY_FAILURE
} from '../actiontypes/filestack';

const initialState = {
  loading: false,
  key: false,
  error: null
};

export default function Filestack(state = initialState, action) {
  switch (action.type) {
    case FETCH_API_KEY_START: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_API_KEY_SUCCESS: {
      return {
        ...state,
        loading: false,
        key: action.payload
      };
    }
    case FETCH_API_KEY_FAILURE: {
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
