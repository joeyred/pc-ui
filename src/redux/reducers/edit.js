import * as EditActionTypes from '../actiontypes/edit';
import _ from 'lodash';

import {
  aspectRatioFill,
  getPosition
} from '../../utils/crop';

// TODO - Shopify API
// Replace with data fetchers
const initialState = {
  frames: [
    [8, 8],
    [8, 12],
    [12, 8],
    [8, 16],
    [16, 8],
  ],
  selectedFrameIndex: 0,
  selectedFrame: [8, 8],
  aspectRatio: [8, 8],
  file: 'https://unsplash.com/photos/sf7TIaIwbjs',
  // crop: {
  //   aspectRatio: 8/8,
  // }
  crop: {
    aspect: 8/8,
    x: 0,
    y: 50,
    width: 100
  },
  image: {}
};

export default function Edit(state = initialState, action) {
  switch (action.type) {
    case EditActionTypes.UPDATE_SELECTED_FRAME: {
      const selectedFrame = state.frames[action.index];
      const aspectRatio = state.frames[action.index];
      const selectedFrameIndex = action.index;
      // delete state.selectedFrame;
      // console.log(state);
      // const crop = _.extend(state.crop, {aspect: aspectRatio[0]/aspectRatio[1]})
      const height = state.image.height ? state.image.height : 0;
      const width = state.image.width ? state.image.width : 0;
      const dimensions = aspectRatioFill(selectedFrame[0], selectedFrame[1], width, height);
      const x = getPosition(width, dimensions.width);
      const y = getPosition(height, dimensions.height);
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
    case EditActionTypes.STORE_IMAGE_DIMENSIONS: {
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
    case EditActionTypes.UPDATE_CROP: {
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
