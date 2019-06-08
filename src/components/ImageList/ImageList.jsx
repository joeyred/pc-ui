import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
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
    className,
  } = props;
  const small = itemsPerRow.small ?
  `small-up-${itemsPerRow.small}` :
  `small-up-${itemsPerRow}`;
  const gridClasses = classnames(
    small,
    itemsPerRow.medium ? `medium-up-${itemsPerRow.medium}` : null,
    itemsPerRow.large ? `large-up-${itemsPerRow.large}` : null,
    itemsPerRow.xlarge ? `xlarge-up-${itemsPerRow.xlarge}` : null,
    itemsPerRow.xxlarge ? `xxlarge-up-${itemsPerRow.xxlarge}` : null,
    'grid-padding-x',
    className,
  );

  const thumbnails = _.map(images.allIds, id => {
    const image = images.byId[id];
    if (isEditing) {
      return (
        <Cell key={image.id} style={{textAlign: 'center', marginBottom: '1rem'}}>
          <Product
            src={image.url}
            isEdited={image.edited}
            handleClick={() => handleClick(image.id)}
            mode='edit'

          />
        </Cell>
      );
    }
    if (image.edited) {
      return (
        <Cell key={image.id} style={{textAlign: 'center', marginBottom: '1rem'}}>
          <Product
            src={image.url}
            isEdited={image.edited}
            mode='cart'
            frame={image.frame}
          />
          <div className={styles.counter}>
            <Counter id={image.id} handleCountUpdate={handleCountUpdate} count={image.count} />
          </div>
        </Cell>
      );
    }
    return null;
  });
  return (
    <Grid className={gridClasses} alignX='center' alignY='middle'>
      {thumbnails}
    </Grid>
  );
}

ImageList.defaultProps = {
  images: [],
  itemsPerRow: 3,
  handleClick: (id) => {console.log(`Thumbnail Clicked: ${id}`)},
  handleCountUpdate: (id, count) => console.log(`Count Updated Clicked: ${id} - ${count}`),
};

ImageList.propTypes = {
  images:      PropTypes.shape({
    byId:   PropTypes.object,
    allIds: PropTypes.array,
  }),
  isEditing:   PropTypes.bool.isRequired,
  itemsPerRow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number)
  ]),
  handleClick: PropTypes.func,
  handleCountUpdate: PropTypes.func,
};

export default ImageList;
