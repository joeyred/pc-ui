import {
  // FETCH_FRAMES,
  // UPDATE_ASPECT_RATIO,
  // UPDATE_SELECTED_FRAME,
  UPDATE_CROP,
  STORE_IMAGE_DIMENSIONS,
  UPDATE_CROP_FULL_CENTERED,
} from '../actiontypes/editor';
import { calcCropFullCentered } from '../../utils/crop';
// export const updateSelectedFrame = id => {
//   return {
//     type: UPDATE_SELECTED_FRAME,
//     id
//   }
// };

export const updateCrop = crop => {
  return {
    type: UPDATE_CROP,
    crop
  };
};

export const updateCropFullCenter = (newRatio, image) => {
  const crop = calcCropFullCentered(
      newRatio[0],
      newRatio[1],
      image.width,
      image.height
    );
  return {
    type: UPDATE_CROP_FULL_CENTERED,
    crop: {
      ...crop,
      aspect: newRatio[0] / newRatio[1],
    },
  };
};

export const storeImageDimensions = imageProps => {
  return {
    type: STORE_IMAGE_DIMENSIONS,
    imageProps
  };
};
