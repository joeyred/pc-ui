import reducer from './image';
import * as types from '../actiontypes/image';

const mockImage = {
  id: 'hfhjdkkslsoios',
  edited: false,
  filename: 'foo.jpg',
  handle: 'hfhdjisidhjjdk',
  url: 'https://example.com/path/to/foo',
  mimetype: 'image/jpg',
  currentSavedEditId: null,
  edits: []
}

const mockPayload = {
  id: '34563yhrff8eg7',
  filename: 'hello.png',
  handle: 's8p9e5c9i20a3lh6',
  url: 'https://example.com',
  mimetype: 'image/png',
}

const initialState = {
  images: {
    byId: {},
    allIds: []
  },
};

describe('image reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it('should handle ADD_IMAGE', () => {
    // Expect image data to be added to empty/initial state
    expect(reducer(initialState, {
      type: types.ADD_IMAGE,
      payload: mockPayload,
    })).toEqual({
      images: {
        byId: {
          [mockPayload.id]: {
            id: mockPayload.id,
            edited: false,
            filename: mockPayload.filename,
            handle: mockPayload.handle,
            url: mockPayload.url,
            mimetype: mockPayload.mimetype,
            currentSavedEditId: null,
            edits: [],
          },
        },
        allIds: [
          mockPayload.id
        ]
      }
    });
    // Expect image data to be properly added to an active state
    expect(reducer(
      // State
      {
        images: {
          byId: {
            [mockImage.id]: mockImage
          },
          allIds: [
            mockImage.id
          ]
        }
      },
      // Action
      {
        type: types.ADD_IMAGE,
        payload: mockPayload
      }
    )).toEqual({
      images: {
        byId: {
          [mockImage.id]: mockImage,
          [mockPayload.id]: {
            id: mockPayload.id,
            edited: false,
            filename: mockPayload.filename,
            handle: mockPayload.handle,
            url: mockPayload.url,
            mimetype: mockPayload.mimetype,
            currentSavedEditId: null,
            edits: [],
          },
        },
        allIds: [
          mockImage.id,
          mockPayload.id,
        ]
      }
    })
  });
});
