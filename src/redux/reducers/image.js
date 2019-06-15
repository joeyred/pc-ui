import _ from 'lodash';
import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  SAVE_EDIT,
  REMOVE_EDIT,
  UPDATE_PREVIEW,
  UPDATE_QUANTITY
} from '../actiontypes/image';

import mockImg from '../../imgs/mock-img-vertical.jpg';

// import imgMock from '../../imgs/IMG_0408.jpg';

const initialState = {
  images: {
    byId: {
      hfhjdkkslsoios: {
        id: 'hfhjdkkslsoios',
        edited: false,
        filename: 'foo.jpg',
        handle: 'hfhdjisidhjjdk',
        url: mockImg,
        mimetype: 'image/jpg',
        frameId: null,
        currentSavedEditId: null,
        edit: null,
        previewUrl: null,
        quantity: 1
      },
      jwuoqaln: {
        id: 'jwuoqaln',
        edited: false,
        filename: 'IMG_0116.jpg',
        handle: 'EF44w5g1TSWfaVz1iFZi',
        url: 'https://cdn.filestackcontent.com/EF44w5g1TSWfaVz1iFZi',
        mimetype: 'image/jpeg',
        frameId: null,
        currentSavedEditId: null,
        edit: null,
        quantity: 1
      }
    },
    allIds: ['hfhjdkkslsoios', 'jwuoqaln']
  }
};

export default function Image(state = initialState, action) {
  switch (action.type) {
    // TODO No Duplicate Images
    // Add a check to make sure the handle of the image doesnt match
    // previously uploaded images.
    case ADD_IMAGE: {
      const { id, filename, handle, url, mimetype } = action.payload;

      return {
        ...state,
        images: {
          byId: {
            ...state.images.byId,
            [id]: {
              id,
              edited: false,
              filename,
              handle,
              url,
              mimetype,
              frameId: null,
              currentSavedEditId: null,
              edit: null,
              quantity: 1
            }
          },
          allIds: [...state.images.allIds, id]
        }
      };
    }
    case REMOVE_IMAGE: {
      const RemoveImageIndex = _.indexOf(state.images.allIds, action.id);
      const newList = [
        ...state.images.slice(0, RemoveImageIndex),
        ...state.images.slice(RemoveImageIndex + 1)
      ];
      const newImagesById = _.omit(state.images.byId, action.id);
      return {
        ...state,
        images: {
          byId: newImagesById,
          allIds: newList
        }
      };
    }
    case SAVE_EDIT: {
      const {
        imageId,
        frameId,
        collectionId,
        previewSrc,
        transformations
      } = action;
      return {
        ...state,
        images: {
          byId: {
            ...state.images.byId,
            [imageId]: {
              ...state.images.byId[imageId],
              edited: {
                ...state.images.byId[imageId].edited,
                [collectionId]: true
              },
              edit: {
                ...state.images.byId[imageId].edit,
                [collectionId]: {
                  previewSrc,
                  frameId,
                  // This is what will be applied with filestack
                  transformations
                }
              }
            }
          },
          allIds: [...state.images.allIds]
        }
      };
    }
    case REMOVE_EDIT: {
      const { imageId } = action;
      return {
        ...state,
        images: {
          ...state.images,
          byId: {
            ...state.images.byId,
            [imageId]: {
              ...state.images.byId[imageId],
              isEdited: false
            }
          },
          allIds: [...state.images.allIds]
        }
      };
    }
    case UPDATE_PREVIEW: {
      const { url, imageId } = action;
      return {
        ...state,
        images: {
          ...state.images,
          byId: {
            ...state.images.byId,
            [imageId]: {
              ...state.images.byId[imageId],
              previewUrl: url
            }
          },
          allIds: [...state.images.allIds]
        }
      };
    }
    case UPDATE_QUANTITY: {
      const { imageId, quantity } = action;
      return {
        ...state,
        images: {
          ...state.images,
          byId: {
            ...state.images.byId,
            [imageId]: {
              ...state.images.byId[imageId],
              quantity
            }
          },
          allIds: [...state.images.allIds]
        }
      };
    }
    default: {
      return state;
    }
  }
}
