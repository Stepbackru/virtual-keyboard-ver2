import './style.scss';
import init from './components/init';
import bodyListener from './components/bodyListener';
import textAreaListener from './components/textAreaListener';

window.onload = () => {
  init();
  bodyListener();
  textAreaListener();
};
