import {
  UPDATE_VIEW
} from '../actiontypes/nav';

export const updateView = (view) => {
  return {
    type: UPDATE_VIEW,
    view
  };
};
