import {
  UPDATE_VIEW
} from '../actiontypes/nav';

const initialState = {
  currentView: 'gallery',
  modal: {
    active: false,
    message: null,
  },
  crouton: {
    active: false,
    id: null,
    message: null,
    type: null,
  },
};

export default function Nav(state=initialState, action) {
  switch(action.type) {
    case UPDATE_VIEW: {
      return {
        ...state,
        currentView: action.view
      }
    }
    default: {
      return state;
    }
  }
}
