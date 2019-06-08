import {
  UPDATE_VIEW,
  UPDATE_APP_VISIBILITY,
} from '../actiontypes/nav';
import { Views } from '../../globals';

const initialState = {
  appIsVisible: false,
  currentView: Views.GALLERY,
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
      };
    }
    case UPDATE_APP_VISIBILITY: {
      return {
        ...state,
        appIsVisible: action.visible,
        currentView: action.view,
      }
    }
    default: {
      return state;
    }
  }
}
