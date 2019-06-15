import {
  ADD_ITEMS_START,
  ADD_ITEMS_FINISH,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  ADD_ITEM_FINALLY,
  // UPDATE_PROGRESS,
  DONE_EDITING
} from '../actiontypes/cart';

const initialState = {
  itemsToAdd: 0,
  itemsAdded: 0,
  itemsErrored: 0,
  currentItemIndex: 0,
  errors: [],
  addingItems: false,
  currentItem: null
};

export default function Cart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS_START: {
      return {
        ...state,
        addingItems: true
      };
    }
    case ADD_ITEMS_FINISH: {
      return {
        ...state,
        addingItems: false,
        currentItemIndex: 0
      };
    }
    case ADD_ITEM_START: {
      const { item } = action;
      return {
        ...state,
        currentItem: item
      };
    }
    case ADD_ITEM_SUCCESS: {
      const { itemsAdded } = action;
      return {
        ...state,
        itemsAdded
      };
    }
    case ADD_ITEM_FAILURE: {
      const { error, itemsErrored } = action;
      return {
        ...state,
        itemsErrored,
        errors: [...state.errors, error]
      };
    }
    case ADD_ITEM_FINALLY: {
      const { currentItemIndex } = action;
      return {
        ...state,
        currentItemIndex
      };
    }
    case DONE_EDITING: {
      return {
        ...state,
        errors: null,
        itemsAdded: 0,
        itemsErrored: 0
      };
    }
    default: {
      return state;
    }
  }
}
