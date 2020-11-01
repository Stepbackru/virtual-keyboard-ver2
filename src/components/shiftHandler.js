import buttons from '../data/buttons';
import { LANG_SET } from '../assets/constants/lang';
import { KEY_CONTENT_SHIFT } from '../assets/constants/classes';

const shiftHandler = (itemsArr, shiftPress) => {
  const items = itemsArr;
  const langStore = sessionStorage.getItem(`${LANG_SET}`);
  for (let i = 0; i < items.length; i++) {
    if (buttons[i].type !== 'functional') {
      if (shiftPress) {
        items[i].innerText = buttons[i].altContent[langStore];
        items[i].classList.toggle(`${KEY_CONTENT_SHIFT}`);
      } else {
        items[i].innerText = buttons[i].content[langStore];
        items[i].classList.toggle(`${KEY_CONTENT_SHIFT}`);
      }
    }
  }
};

export default shiftHandler;
