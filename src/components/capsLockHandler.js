import buttons from '../data/buttons';
import { KEY_CONTENT_SHIFT } from '../assets/constants/classes';

const capslockHandler = (itemsArr, capsPress) => {
  const items = itemsArr;
  for (let i = 0; i < items.length; i++) {
    if (buttons[i].type !== 'functional') {
      if (capsPress) {
        items[i].classList.add(`${KEY_CONTENT_SHIFT}`);
      } else {
        items[i].classList.remove(`${KEY_CONTENT_SHIFT}`);
      }
    }
  }
};

export default capslockHandler;
