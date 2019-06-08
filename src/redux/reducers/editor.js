import {
  // UPDATE_ASPECT_RATIO,
  UPDATE_CROP,
  STORE_IMAGE_DIMENSIONS,
  UPDATE_CROP_FULL_CENTERED,
} from '../actiontypes/editor';

const initialState = {
  crop: {
    aspect: 0,
    width: 0,
    x: 0,
    y: 0,
  },
  imageProps: {
    ref: null,
    height: 0,
    width: 0,
    naturalHeight: 0,
    naturalWidth: 0,
  }
};

export default function Editor(state = initialState, action) {
  switch (action.type) {
    // case UPDATE_SELECTED_FRAME: {
    //   return {
    //     ...state,
    //     selectedFrame,
    //     selectedFrameIndex,
    //     aspectRatio,
    //     crop: {
    //       ...state.crop,
    //       aspect: selectedFrame[0] / selectedFrame[1],
    //       width: dimensions.width,
    //       height: dimensions.height,
    //       x,
    //       y,
    //     }
    //
    //   };
    // }
    case STORE_IMAGE_DIMENSIONS: {
      return {
        ...state,
        imageProps: {
          ...state.imageProps,
          ...action.imageProps
        },
      };
    }
    case UPDATE_CROP: {
      return {
        ...state,
        crop: {
          ...state.crop,
          ...action.crop,
        },
      };
    }
    case UPDATE_CROP_FULL_CENTERED: {
      return {
        ...state,
        crop: {
          ...action.crop,
        }
      }
    }
    default: {
      return state;
    }
  }
}
