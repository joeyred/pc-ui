import {
  TOGGLE_OPTION,
  UPDATE_ROTATION,
  UPDATE_CROP,
  UPDATE_ZOOM,
  STORE_IMAGE_DIMENSIONS,
  UPDATE_CROP_FULL_CENTERED
} from '../actiontypes/editor';
import { calcCropFullCentered } from '../../utils/crop';

export const toggleOption = option => ({
  type: TOGGLE_OPTION,
  option
});

export const updateRotation = degree => {
  console.log(degree);
  let output = degree;
  if (degree < 0) {
    output = 360 + degree;
    console.log(output);
  }
  if (degree > 259) {
    output = 0;
    console.log(output);
  }
  return {
    type: UPDATE_ROTATION,
    degree: output
  };
};

export const updateZoom = scale => ({
  type: UPDATE_ZOOM,
  scale: scale < 1 ? 1 : scale
});

export const updateCrop = crop => ({
  type: UPDATE_CROP,
  crop
});

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
      aspect: newRatio[0] / newRatio[1]
    }
  };
};

export const storeImageDimensions = imageProps => ({
  type: STORE_IMAGE_DIMENSIONS,
  imageProps
});
