import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Filestack from '../components/Filestack';
import PictureFrame from '../components/FrameSelector/PictureFrame';
import FrameSelector from '../components/FrameSelector';
import UploadThumbnail from '../components/UploadThumbnail';
import ImageList from '../components/ImageList';

import styles from './foundation.module.scss';

addDecorator((storyFn) => <div className={styles.storybook}>{storyFn()}</div>);

storiesOf('Frame', module)
.add('8x16', () => {
  return (
    <div style={{height: '300px', width: '300px'}}>
      <PictureFrame dimensions={[8, 16]} />
    </div>
  );
});

storiesOf('Frame Selector', module)
.add('basic', () => {
  const frames = [
    [8, 8],
    [8, 12],
    [12, 8],
    [8, 16],
    [16, 8]
  ];
  return (
    <FrameSelector frames={frames} />
  );
});
const filestackAPIKey = 'AA1ZGkqsZT1Ca96rjT6mKz';
storiesOf('Filestack', module)
.addDecorator((story) =>
  <div style={{width: '100vw', height: '100vh'}}>
    {story()}
  </div>
)
.add('Upload', () => {
  return(
    <Filestack.Upload apiKey={filestackAPIKey} />
  );
})
.add('Edit', () => {
  return(
    <Filestack.Edit apiKey={filestackAPIKey} file='https://cdn.filestackcontent.com/UfxVvzDDTkqquiJL3CSI'/>
  );
})
;
const imageExample = 'https://cdn.filestackcontent.com/UfxVvzDDTkqquiJL3CSI';
storiesOf('Thumbnail', module)
.addDecorator((story) =>
  <div style={{width: '30%', padding: '1rem'}}>
    {story()}
  </div>
)
.add('unedited', () => <UploadThumbnail src={imageExample} isEdited={false} />)
.add('edited', () => <UploadThumbnail src={imageExample} isEdited={true} />);
const images = [
  {
    edited: false,
    metadata: {
      "filename":"myfile.png",
      "handle":"AFrHW1QRsWxmu5ZLU2qg",
      "mimetype":"image/png",
      "originalPath":"picker_transformation.png",
      "size":1277297,
      "source":"local_file_system",
      "url": imageExample,
      "uploadId":"cfcc198e63b7328c17f09f1af519fcdf",
      "originalFile":{
        "name":"myfile",
        "type":"image/png",
        "size":1277297
      }
    }
  },
  {
    edited: true,
    metadata: {
      "filename":"myfile.png",
      "handle":"AFrHW1QRsWxmu5ZLU2qg",
      "mimetype":"image/png",
      "originalPath":"picker_transformation.png",
      "size":1277297,
      "source":"local_file_system",
      "url": imageExample,
      "uploadId":"cfcc198e63b7328c17f09f1af519fcdf",
      "originalFile":{
        "name":"myfile",
        "type":"image/png",
        "size":1277297
      }
    }
  },
  {
    edited: false,
    metadata: {
      "filename":"myfile.png",
      "handle":"AFrHW1QRsWxmu5ZLU2qg",
      "mimetype":"image/png",
      "originalPath":"picker_transformation.png",
      "size":1277297,
      "source":"local_file_system",
      "url": imageExample,
      "uploadId":"cfcc198e63b7328c17f09f1af519fcdf",
      "originalFile":{
        "name":"myfile",
        "type":"image/png",
        "size":1277297
      }
    }
  },
  {
    edited: true,
    metadata: {
      "filename":"myfile.png",
      "handle":"AFrHW1QRsWxmu5ZLU2qg",
      "mimetype":"image/png",
      "originalPath":"picker_transformation.png",
      "size":1277297,
      "source":"local_file_system",
      "url": imageExample,
      "uploadId":"cfcc198e63b7328c17f09f1af519fcdf",
      "originalFile":{
        "name":"myfile",
        "type":"image/png",
        "size":1277297
      }
    }
  }
];
storiesOf('ImageList', module)
.add('default per row', () => <ImageList images={images} />);
