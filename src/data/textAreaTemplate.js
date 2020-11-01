const textAreaTemplate = [
  {
    el: 'div',
    classNames: 'wrapper',
    parent: 'body',
    child: [
      {
        el: 'textarea',
        classNames: 'textarea',
        dataAttr: [['placeholder', 'Click here...']],
      },
    ],
  },
];

export default textAreaTemplate;
