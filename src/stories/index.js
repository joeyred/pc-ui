import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import PictureFrame from '../components/PictureFrame';

import ThemeLayout from './ThemeLayout';

import '../semantic/dist/semantic.min.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Semantic UI Theme', module).add('ThemeLayout', () => <ThemeLayout />);

storiesOf('Frame', module)
  .add('8x16', () => {
    return (
      <div style='padding: 4rem'>
        <PictureFrame dimensions={[8, 16]} />
      </div>
    );
  });
