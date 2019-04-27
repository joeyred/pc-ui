import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Filestack from '../components/Filestack';
import PictureFrame from '../components/FrameSelector/PictureFrame';
import FrameSelector from '../components/FrameSelector';
import Thumbnail from '../components/Gallery/Thumbnail';

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
  <div style={{width: '200px', height: '200px', padding: '1rem'}}>
    {story()}
  </div>
)
.add('unedited', () => <Thumbnail imageSrc={imageExample} isEdited={false} />)
.add('edited', () => <Thumbnail imageSrc={imageExample} isEdited={true} />);
