import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Filestack from '../components/Filestack';

import PictureFrame from '../components/FrameSelector/PictureFrame';

import FrameSelector from '../components/FrameSelector';

import ThemeLayout from './ThemeLayout';

import '../semantic/dist/semantic.min.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Semantic UI Theme', module).add('ThemeLayout', () => <ThemeLayout />);

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
