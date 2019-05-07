import {
  UPDATE_VIEW
} from '../actiontypes/nav';

const initialState = {
  currentView: 'upload'
}

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
