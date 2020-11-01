import { KEYBOARD, KEYBOARD_ACT } from '../assets/constants/classes';

const bodyListener = () => {
  const keyboard = document.querySelector(`.${KEYBOARD}`);

  document.addEventListener('click', (e) => {
    const item = e.target;
    const keyboardActClass = keyboard.classList.contains(`${KEYBOARD_ACT}`);

    if (keyboardActClass) {
      if (!item.className) {
        keyboard.classList.remove(`${KEYBOARD_ACT}`);
      }
    }
  });
};

export default bodyListener;
