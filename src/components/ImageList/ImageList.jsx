import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Cell,
  Callout,

} from 'react-foundation';

import UploadThumbnail from '../UploadThumbnail';

const ImageList = (props) => {
  const {
    images,
    handleClick
  } = props;

  const thumbnails = images.map(image => {
    return (
      <Cell>
        <UploadThumbnail
          src={image.metadata.url}
          isEdited={image.edited}
          handleClick={() => handleClick(image.metadata.handle)}
        />
      </Cell>
    );
  });
  return (
    <Grid>
      {thumbnails}
    </Grid>
  );
}

ImageList.defaultProps = {
  images: [],
  handleClick: console.log('Thumbnail Clicked')
};

ImageList.propTypes = {
  images: PropTypes.array,
  handleClick: PropTypes.func,
};

export default ImageList;
