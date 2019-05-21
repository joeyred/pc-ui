import {
  FETCH_FRAMES,
  UPDATE_ASPECT_RATIO,
  UPDATE_SELECTED_FRAME,
  UPDATE_CROP,
  STORE_IMAGE_DIMENSIONS
} from '../actiontypes/editor';

const initialState = {
  frames: {
    '01': {
      display: [8, 8],
      exact: [7.75, 7.75]
    },
    '02': {
      display: [8, 12],
      exact: [7.75, 11.75]
    },
    '03': {
      display: [12, 8],
      exact: [11.75, 7.75]
    },
    '04': {
      display: [8, 16],
      exact: [7.75, 15.75]
    },
    '05': {
      display: [16, 8],
      exact: [15.75, 7.75]
    },
  }
};

export default function Editor(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_FRAME: {

      return {
        ...state,
        selectedFrame,
        selectedFrameIndex,
        aspectRatio,
        crop: {
          ...state.crop,
          aspect: selectedFrame[0]/selectedFrame[1],
          width: dimensions.width,
          height: dimensions.height,
          x,
          y
        }

      };
    }
    case STORE_IMAGE_DIMENSIONS: {
      const width = action.dimensions[0];
      const height = action.dimensions[1];
      console.log('fired', width, height);
      return {
        ...state,
        image: {
          width,
          height
        }
      }
    }
    case UPDATE_CROP: {
      return {
        ...state,
        crop: {
          ...action.crop,
          aspect: state.aspectRatio[0]/state.aspectRatio[1]
        }
      }
    }
    default: {
      return state;
    }
  }
}
