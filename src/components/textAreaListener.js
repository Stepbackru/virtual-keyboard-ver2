import { TEXTAREA, KEYBOARD, KEYBOARD_ACT } from '../assets/constants/classes';

const textAreaListener = () => {
  const textarea = document.querySelector(`.${TEXTAREA}`);
  const keyboard = document.querySelector(`.${KEYBOARD}`);

  textarea.addEventListener('focus', () => {
    if (!keyboard.classList.contains(`${KEYBOARD_ACT}`)) {
      keyboard.classList.add(`${KEYBOARD_ACT}`);
    }
  });
};

export default textAreaListener;
