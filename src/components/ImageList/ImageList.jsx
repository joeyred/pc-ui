import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import {
  Grid,
  Cell,
} from 'react-foundation';

// import UploadThumbnail from '../UploadThumbnail';
import Product from '../Product';
import Counter from '../Counter';

import styles from './ImageList.module.scss';

const ImageList = (props) => {
  const {
    images,
    itemsPerRow,
    handleClick,
    handleCountUpdate,
    isEditing,
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
    'grid-padding-x',
    props.className
  );

  const thumbnails = images.map(image => (
    isEditing ?
      <Cell key={image.handle} style={{textAlign: 'center', marginBottom: '1rem'}}>
        <Product
          src={image.url}
          isEdited={image.edited}
          handleClick={() => handleClick(image.handle)}
          mode='edit'

        />
      </Cell> : image.edited ?
      <Cell key={image.handle} style={{textAlign: 'center', marginBottom: '1rem'}}>
        <Product
          src={image.url}
          isEdited={image.edited}
          mode='cart'
          frame={image.frame}
        />
        <div className={styles.counter}>
          <Counter id={image.handle} handleCountUpdate={handleCountUpdate} count={image.count} />
        </div>
      </Cell> : null

  ));
  return (
    <Grid className={className} alignX='center' alignY='middle'>
      {thumbnails}
    </Grid>
  );
}

ImageList.defaultProps = {
  images: [],
  itemsPerRow: 3,
  handleClick: (handle) => {console.log(`Thumbnail Clicked: ${handle}`)},
  handleCountUpdate: (id, count) => console.log(`Count Updated Clicked: ${id} - ${count}`),
};

ImageList.propTypes = {
  images:      PropTypes.array,
  isEditing:   PropTypes.bool.isRequired,
  itemsPerRow: PropTypes.oneOfType(
    [
      PropTypes.number,
      PropTypes.objectOf(PropTypes.number)
    ]
  ),
  handleClick: PropTypes.func,
};

export default ImageList;
