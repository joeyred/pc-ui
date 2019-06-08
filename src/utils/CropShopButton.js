import MicroModal from 'micromodal';

import store from '../redux/store';
import { updateSelectedCollection } from '../redux/actions/frame';

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
    this.appContainer.setAttribute('data-cropshop-collection', this.collection);
    store.dispatch(updateSelectedCollection(this.collection));
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
