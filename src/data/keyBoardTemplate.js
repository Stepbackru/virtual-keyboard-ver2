import buttons from './buttons';
import { LANG_SET } from '../assets/constants/lang';

const keyBoardTemplate = () => {
  const langStore = sessionStorage.getItem(`${LANG_SET}`);
  const line1 = buttons.filter((el) => el.row === 1);
  const line2 = buttons.filter((el) => el.row === 2);
  const line3 = buttons.filter((el) => el.row === 3);
  const line4 = buttons.filter((el) => el.row === 4);
  const line5 = buttons.filter((el) => el.row === 5);

  return ([
    {
      el: 'div',
      classNames: 'keyboard',
      parent: 'wrapper',
      child: [
        {
          el: 'div',
          classNames: 'keyboard__line',
          dataAttr: [['line', '1']],
          child: line1.map((el) => {
            return (
              {
                el: 'div',
                classNames: `keyboard__key keyboard__key-${el.width}`,
                child: [
                  {
                    el: 'span',
                    classNames: 'key__content',
                    text: el.content[`${langStore}`],
                  },
                ],
              });
          }),
        },
        {
          el: 'div',
          classNames: 'keyboard__line',
          dataAttr: [['line', '2']],
          child: line2.map((el) => {
            return (
              {
                el: 'div',
                classNames: `keyboard__key keyboard__key-${el.width}`,
                child: [
                  {
                    el: 'span',
                    classNames: 'key__content',
                    text: el.content[`${langStore}`],
                  },
                ],
              });
          }),
        },
        {
          el: 'div',
          classNames: 'keyboard__line',
          dataAttr: [['line', '3']],
          child: line3.map((el) => {
            return (
              {
                el: 'div',
                classNames: `keyboard__key keyboard__key-${el.width}`,
                child: [
                  {
                    el: 'span',
                    classNames: 'key__content',
                    text: el.content[`${langStore}`],
                  },
                ],
              });
          }),
        },
        {
          el: 'div',
          classNames: 'keyboard__line',
          dataAttr: [['line', '4']],
          child: line4.map((el) => {
            return (
              {
                el: 'div',
                classNames: `keyboard__key keyboard__key-${el.width}`,
                child: [
                  {
                    el: 'span',
                    classNames: 'key__content',
                    text: el.content[`${langStore}`],
                  },
                ],
              });
          }),
        },
        {
          el: 'div',
          classNames: 'keyboard__line',
          dataAttr: [['line', '5']],
          child: line5.map((el) => {
            return (
              {
                el: 'div',
                classNames: `keyboard__key keyboard__key-${el.width}`,
                child: [
                  {
                    el: 'span',
                    classNames: 'key__content',
                    text: el.content[`${langStore}`],
                  },
                ],
              });
          }),
        },
      ],
    },
  ]);
};

export default keyBoardTemplate;
