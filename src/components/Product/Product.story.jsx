import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Product from './Product';

import imgMockHorizontal from '../../imgs/mock-img-horizontal.jpg';
// import imgMockVertical from '../../imgs/mock-img-vertical.jpg';

storiesOf('Components|Product', module)
.addDecorator((story) =>
  <div style={{maxWidth: '300px', maxHeight: '300px', padding: '1rem'}}>
    {story()}
  </div>
)
.add('edit mode - unedited', () =>
  <Product
    src={imgMockHorizontal}
    handleClick={action('clicked')}
  />
)
.add('edit mode - edited', () =>
  <Product
    src={imgMockHorizontal}
    handleClick={action('clicked')}
    isEdited={true}
  />
)
.add('cart mode', () =>
  <Product
    src={imgMockHorizontal}
    handleClick={action('clicked')}
    mode='cart'
  />
)

;
