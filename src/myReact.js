/** @jsx createElement */

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
    R.pathOr([], ['props', 'children']),
  )(element),
);

const render = (element, parentDom) =>
  R.compose(
    R.bind(parentDom.appendChild, parentDom),
    R.tap(renderChildren(element)),
    R.tap(addAttributeToDom(element)),
    R.tap(addEventListenerToDom(element)),
    R.ifElse(
      R.compose(R.propSatisfies(R.equals(TEXT_DOCUMENT), 'type')),
      () => document.createTextNode(''),
      R.compose(
        R.bind(document.createElement, document),
        R.prop('type'),
      ),
    ),
  )(element);

// function createElement(type, config, ...args) {
//   const props = Object.assign({}, config);
//   const hasChildren = args.length > 0;
//   const rawChildren = hasChildren ? [].concat(...args) : [];
//   props.children = rawChildren
//     .filter(c => c != null && c !== false)
//     .map(c => c instanceof Object ? c : createTextElement(c));
//   return { type, props };
// }

// function createTextElement(value) {
//   return createElement(TEXT_ELEMENT, { nodeValue: value });
// }

const createTextElement = value =>
  createElement(TEXT_DOCUMENT, { nodeValue: value });

const createElement = (type, config, ...args) =>
  R.compose(
    children => ({
      type,
      props: {
        ...config,
        children,
      },
    }),
    R.map(R.unless(R.is(Object), createTextElement)),
    R.filter(c => R.not(R.or(R.isNil(c), R.equals(c, false)))),
  )(R.defaultTo([], args));

const tot = <div>mdr</div>;

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

render(tot, document.getElementById('root'));
