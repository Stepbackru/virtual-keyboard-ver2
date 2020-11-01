import buttons from '../data/buttons';
import {
  SHIFT_LEFT_CODE,
  SHIFT_RIGHT_CODE,
  CAPSLOCK_CODE,
} from '../assets/constants/keys';
import {
  KEYBOARD_KEY,
  KEYBOARD_KEY_ACT,
} from '../assets/constants/classes';
import { LANG_SET } from '../assets/constants/lang';

const keyPress = () => {
  const langStore = sessionStorage.getItem(`${LANG_SET}`);
  const keyboardKeys = [...document.querySelectorAll(`.${KEYBOARD_KEY}`)];

  document.addEventListener('keydown', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    if (button) {
      e.preventDefault();
      if ((e.code === SHIFT_LEFT_CODE || e.code === SHIFT_RIGHT_CODE)
         && (e.repeat)) {
        return;
      }
      if ((e.code === CAPSLOCK_CODE) && (e.repeat)) {
        return;
      }
      const keyClick = keyboardKeys
        .find((el) => el.innerText === button.content[`${langStore}`]);

      keyClick.classList.add(`${KEYBOARD_KEY_ACT}`);
      keyClick.click();
    }
  });

  document.addEventListener('keyup', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    if (button) {
      const keyClick = keyboardKeys
        .find((el) => el.innerText === button.content[`${langStore}`]);

      keyClick.classList.add(`${KEYBOARD_KEY_ACT}`);
      keyClick.click();
      keyClick.classList.remove(`${KEYBOARD_KEY_ACT}`);
    }
  });
};

export default keyPress;
