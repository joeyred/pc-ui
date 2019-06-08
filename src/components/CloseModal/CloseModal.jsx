import React from "react";
// import PropTypes from "prop-types";

import MicroModal from "micromodal";

import { AppAtts } from '../../globals';
import styles from "./CloseModal.module.scss";

const CloseModal = () => {
  return (
    <button
      type='button'
      className={styles.button}
      aria-label='Close modal'
      onClick={() => MicroModal.close(AppAtts.MODAL_ID)}
    />
  );
};

export default CloseModal;
