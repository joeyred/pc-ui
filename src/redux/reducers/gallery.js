import * as GalleryActionTypes from '../actiontypes/gallery';
import imgMock from '../../imgs/IMG_0408.jpg';

const initialState = {
  images: [
    {
      edited: false,
      metadata: {
        "filename":"myfile.png",
        "handle":"AFrHW1QRsWxmu5ZLU2qg",
        "mimetype":"image/png",
        "originalPath":"picker_transformation.png",
        "size":1277297,
        "source":"local_file_system",
        "url": imgMock,
        "uploadId":"cfcc198e63b7328c17f09f1af519fcdf",
        "originalFile":{
          "name":"myfile",
          "type":"image/png",
          "size":1277297
        },
        "status":"Stored"
      }
    }
  ]
};

export default function Gallery(state=initialState, action) {
  switch(action.type) {
    case GalleryActionTypes.ADD_IMAGES: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
