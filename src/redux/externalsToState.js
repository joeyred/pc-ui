const EXTERNALS_TO_STATE = 'externals/EXTERNALS_TO_STATE';

const initialState = {
  shop: ''
};

export const externalsToState = data => ({
  type: EXTERNALS_TO_STATE,
  data
});

export function ExternalsReducer(state = initialState, action) {
  switch (action.type) {
    case EXTERNALS_TO_STATE: {
      return {
        ...state,
        shop: action.data.shop
      };
    }
    default: {
      return state;
    }
  }
}
