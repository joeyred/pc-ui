import MicroModal from 'micromodal';

import store from '../redux/store';
import { updateSelectedCollection } from '../redux/actions/frame';
import { updateAppVisibility } from '../redux/actions/nav';

const dev = process.env.NODE_ENV !== 'production';

export default class CropShopButton {
  constructor(button, appContainer, modalId) {
    this.element = button;
    this.collection = button.getAttribute('data-cropshop-collection');
    this.appContainer = appContainer;
    this.modalId = modalId;
    this.modalConfig = {
      openTrigger: 'data-cropshop-open',
      closeTrigger: 'data-cropshop-close',
      disableScroll: true,
      disableFocus: true,
      awaitCloseAnimation: true
    };
  }

  openModal() {
    const { images } = store.getState().image;
    const imageHasBeenUploaded = images.allIds.length > 0;
    // console.log(imageHasBeenUploaded);
    this.appContainer.setAttribute('data-cropshop-collection', this.collection);
    store.dispatch(updateSelectedCollection(this.collection));
    store.dispatch(updateAppVisibility(true, imageHasBeenUploaded));
    MicroModal.show(this.modalId, {
      disableScroll: true,
      disableFocus: true,
      awaitCloseAnimation: true,
      debugMode: dev
    });
  }

  events() {
    this.element.addEventListener('click', () => {
      this.openModal();
    });
  }

  init() {
    this.events();
  }
}

export const closeModal = modalId => {
  const { images } = store.getState().image;
  const imageHasBeenUploaded = images.allIds.length > 0;
  console.log(imageHasBeenUploaded);

  MicroModal.close(modalId);
  store.dispatch(updateAppVisibility(false, imageHasBeenUploaded));
};
