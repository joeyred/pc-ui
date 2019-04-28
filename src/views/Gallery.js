import React from 'react';
import PropTypes from 'prop-types';

import {
  TopBar,
  TopBarLeft,
  Button,
  Colors
} from 'react-foundation';
import { MdFileUpload } from 'react-icons/md';

const Gallery = (props) => {
  return (
    <div>
      {/* Top Bar */}
      <TopBar>
        <TopBarLeft>
          {/* TODO Add onClick */}
          <Button color={Colors.PRIMARY}>
            <MdFileUpload /> Upload More Images
          </Button>
        </TopBarLeft>
      </TopBar>
      {/* Main Gallery */}
    </div>
  );
}

Gallery.propTypes = {

};

export default Gallery;
