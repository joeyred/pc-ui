import {
  UPDATE_SELECTED_FRAME,
  UPDATE_SELECTED_COLLECTION,
  FETCH_FRAMES_START,
  FETCH_FRAMES_SUCCESS,
  FETCH_FRAMES_FAILURE
} from '../actiontypes/frame';

export const updateSelectedFrame = id => ({
  type: UPDATE_SELECTED_FRAME,
  id
});
// TODO Change to collection id
// NOTE As long as the id is used for the data attr,
//      nothing should change in implementation.
export const updateSelectedCollection = collectionName => ({
  type: UPDATE_SELECTED_COLLECTION,
  collectionName
});

const start = () => ({
  type: FETCH_FRAMES_START
});

const success = response => ({
  type: FETCH_FRAMES_SUCCESS,
  payload: response
});

const failure = error => ({
  type: FETCH_FRAMES_FAILURE,
  payload: {
    error
  }
});

export const fetchFrames = client => {
  return (dispatch, getState) => {
    const { frames } = getState();

    if (frames) return;
    dispatch(start());
    client.product
      .fetchQuery({ tag: 'custom' })
      .then(response => {
        console.log(response);
        dispatch(success(response));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
};
