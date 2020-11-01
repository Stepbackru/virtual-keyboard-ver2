import {
  TEXTAREA,
  KEYBOARD,
  KEYBOARD_KEY,
  KEY_CONTENT,
} from '../assets/constants/classes';
import * as C from '../assets/constants/keys';
import capsLockHandler from './capsLockHandler';
import shiftHandler from './shiftHandler';

const writeToTextArea = () => {
  const textarea = document.querySelector(`.${TEXTAREA}`);
  const keyboard = document.querySelector(`.${KEYBOARD}`);
  let capsPress = false;
  let shiftPress = false;

  keyboard.addEventListener('click', (e) => {
    const item = e.target;
    const containsKey = item.classList.contains(`${KEYBOARD_KEY}`);
    const containsKeyContent = item.classList.contains(`${KEY_CONTENT}`);
    const keysContent = [...document.querySelectorAll(`.${KEY_CONTENT}`)];

    if (containsKey || containsKeyContent) {
      const { value, selectionStart, selectionEnd } = textarea;
      const left = value.slice(0, selectionStart);
      const right = value.slice(selectionEnd);

      switch (item.innerText) {
        case C.TAB:
          textarea.value = `${left}\t${right}`;
          setPositionCursor(textarea, selectionStart + 1);
          break;
        case C.ENTER:
          textarea.value = `${left}\n${right}`;
          setPositionCursor(textarea, selectionStart + 1);
          break;
        case C.BACKSPACE:
          if (selectionStart === selectionEnd) {
            textarea.value = `${left.slice(0, -1)}${right}`;
            setPositionCursor(textarea, selectionStart - 1);
          } else {
            textarea.value = `${left}${right}`;
          }
          break;
        case C.DEL:
          if (selectionStart !== selectionEnd) {
            textarea.value = `${left}${right}`;
          } else if (selectionEnd !== value.length) {
            textarea.value = `${left}${value.slice(selectionStart + 1)}`;
          }
          setPositionCursor(textarea, selectionStart);
          break;
        case C.ARROWLEFT:
          setPositionCursor(textarea, selectionStart - 1);
          break;
        case C.ARROWDOWN:
          setPositionCursor(textarea, textarea.value.length);
          break;
        case C.ARROWRIGHT:
          setPositionCursor(textarea, selectionStart + 1);
          break;
        case C.ARROWUP:
          setPositionCursor(textarea, 0);
          break;
        case C.CAPSLOCK:
          capsPress = !capsPress;
          capsLockHandler(keysContent, capsPress);
          break;
        case C.SHIFT:
          shiftPress = !shiftPress;
          shiftHandler(keysContent, shiftPress);
          break;
        case C.CTRL:
          break;
        case C.ALT:
          break;
        case C.WIN:
          break;
        default:
          textarea.value += item.innerText;
      }
      textarea.focus();
    }
  });
};

const setPositionCursor = (textarea, position) => {
  const tx = textarea;
  tx.focus();
  tx.selectionStart = position;
  tx.selectionEnd = position;
};

export default writeToTextArea;
