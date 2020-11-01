import { LANG_SET } from '../assets/constants/lang';
import renderTemplate from './renderTemplate';
import * as T from '../data/index';

const init = () => {
  const langStore = sessionStorage.getItem(`${LANG_SET}`);

  if (!langStore) {
    sessionStorage.setItem(`${LANG_SET}`, 'ru');
  }

  renderTemplate(T.textAreaTemplate);
  renderTemplate(T.keyBoardTemplate());
};

export default init;
