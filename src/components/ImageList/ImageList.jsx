import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import _ from 'lodash';
import {
  Grid,
  Cell,
  Callout,

} from 'react-foundation';

import UploadThumbnail from '../UploadThumbnail';

const ImageList = (props) => {
  const {
    images,
    itemsPerRow,
    handleClick
  } = props;
  const small = itemsPerRow.small ?
  `small-up-${itemsPerRow.small}` :
  `small-up-${itemsPerRow}`;
  const className = classnames(
    small,
    itemsPerRow.medium ? `medium-up-${itemsPerRow.medium}` : null,
    itemsPerRow.large ? `large-up-${itemsPerRow.large}` : null,
    itemsPerRow.xlarge ? `xlarge-up-${itemsPerRow.xlarge}` : null,
    itemsPerRow.xxlarge ? `xxlarge-up-${itemsPerRow.xxlarge}` : null,
    props.className
  );
  const thumbnails = images.map(image => (
      <Cell>
        <UploadThumbnail
          src={image.metadata.url}
          isEdited={image.edited}
          handleClick={() => handleClick(image.metadata.handle)}
        />
      </Cell>
  ));
  return (
    <Grid className={className}>
      {thumbnails}
    </Grid>
  );
}

ImageList.defaultProps = {
  images: [],
  itemsPerRow: 3,
  handleClick: console.log('Thumbnail Clicked')
};

ImageList.propTypes = {
  images:      PropTypes.array,
  itemsPerRow: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),
  handleClick: PropTypes.func,
};

export default ImageList;
