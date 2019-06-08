import React from "react";
import PropTypes from "prop-types"; // eslint-disable-line
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Grid,
  Cell,
  Button,
  Colors
} from "react-foundation";

import * as NavActionCreators from '../redux/actions/nav';
import { Views } from '../globals';
import EditPreview from '../components/EditPreview';

import styles from './Preview.module.scss';

const mapStateToProps = (state) => ({
  imageProps: state.editor.imageProps,
  crop: state.editor.crop,
  images: state.image.images,
  currentIdBeingEdited: state.gallery.currentIdBeingEdited,

});

const Preview = (props) => {
  const {
    imageProps,
    crop,
    dispatch,
    images,
    currentIdBeingEdited,
  } = props;

  const updateView = bindActionCreators(
    NavActionCreators.updateView,
    dispatch
  );

  const imageSrc = images.byId[currentIdBeingEdited].url;
  return (
    <Grid vertical className={styles.container}>
      <Cell>
        <h1>Like what you see?</h1>
      </Cell>
      <Cell className={styles.preview}>
        <EditPreview
          imageSrc={imageSrc}
          imageProps={imageProps}
          crop={crop}
        />
      </Cell>
      <Cell>
        <Grid className='align-center-middle text-center'>
          <Cell className='auto'>
            <Button
              color={Colors.SECONDARY}
              onClick={() => updateView(Views.EDIT)}
            >
              Revert
            </Button>
          </Cell>
          <Cell className='auto'>
            {/* TODO Redux - Add Reducer to Save button */}
            <Button
              color={Colors.PRIMARY}
            >
              Save
            </Button>
          </Cell>
        </Grid>
      </Cell>
    </Grid>

  );
}

export default connect(mapStateToProps)(Preview);
