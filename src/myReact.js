import * as R from 'ramda';

const TEXT_DOCUMENT = 'TEXT_DOCUMENT';

const isListener = name => name.startsWith('on');
const isAttribute = name => !isListener(name) && name != 'children';

const addEventHelper = R.curry((parent, props, name) =>
  parent.addEventListener(
    R.compose(
      R.slice(0, 2),
      R.toLower,
    )(name),
    R.props(name, props),
  ),
);

const addEventListenerToDom = R.curry((element, parent) =>
  R.compose(
    R.forEach(addEventHelper(parent, R.props('props', element))),
    R.filter(isListener),
    R.keys,
    R.prop('props'),
  )(element),
);

const addAttributeToDom = R.curry((element, parent) =>
  R.compose(
    R.forEach(val => (parent[val] = R.path(['props', val], element))),
    R.filter(isAttribute),
    R.keys,
    R.prop('props'),
  )(element),
);

const renderChildren = R.curry((element, dom) =>
  R.compose(
    R.forEach(R.flip(render)(dom)),
    R.pathOr(['props', 'children']),
  )(element),
);

const render = (element, parentDom) =>
  R.compose(
    R.bind(parentDom.appendChild, parentDom),
    R.tap(renderChildren(element)),
    R.tap(addAttributeToDom(element)),
    R.tap(addEventListenerToDom(element)),
    R.ifElse(
      R.propSatisfies(R.equals(TEXT_DOCUMENT), 'type'),
      () => document.createTextNode(''),
      R.compose(
        R.bind(document.createElement, document),
        R.prop('type'),
      ),
    ),
  )(element);

const stories = [
  { name: 'Didact introduction', url: 'http://bit.ly/2pX7HNn' },
  { name: 'Rendering DOM elements ', url: 'http://bit.ly/2qCOejH' },
  { name: 'Element creation and JSX', url: 'http://bit.ly/2qGbw8S' },
  { name: 'Instances and reconciliation', url: 'http://bit.ly/2q4A746' },
  { name: 'Components and state', url: 'http://bit.ly/2rE16nh' },
];

const storyElement = ({ name, url }) => {
  const likes = Math.ceil(Math.random() * 100);
  const buttonElement = {
    type: 'button',
    props: {
      children: [
        { type: TEXT_DOCUMENT, props: { nodeValue: likes } },
        { type: TEXT_DOCUMENT, props: { nodeValue: '❤️' } },
      ],
    },
  };
  const linkElement = {
    type: 'a',
    props: {
      href: url,
      children: [{ type: TEXT_DOCUMENT, props: { nodeValue: name } }],
    },
  };

  return {
    type: 'li',
    props: {
      children: [buttonElement, linkElement],
    },
  };
};

const appElement = {
  type: 'div',
  props: {
    children: [
      {
        type: 'ul',
        props: {
          children: stories.map(storyElement),
        },
      },
    ],
  },
};

render(appElement, document.getElementById('root'));
