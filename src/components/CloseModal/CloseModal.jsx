import React from 'react';
// import PropTypes from "prop-types";

// import MicroModal from "micromodal";

import { AppAtts } from '../../globals';
import { closeModal } from '../../utils/CropShopButton';

import styles from './CloseModal.module.scss';

const CloseModal = () => {
  return (
    <button
      type='button'
      className={styles.button}
      aria-label='Close modal'
      onClick={() => closeModal(AppAtts.MODAL_ID)}
    />
  );
};

export default CloseModal;
