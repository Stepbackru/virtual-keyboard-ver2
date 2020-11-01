import './style.scss';
import init from './components/init';
import documentListener from './components/documentListener';
import keyPress from './components/keyPress';
import textAreaListener from './components/textAreaListener';

window.onload = () => {
  init();
  documentListener();
  keyPress();
  textAreaListener();
};
