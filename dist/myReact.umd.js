(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('ramda')) :
	typeof define === 'function' && define.amd ? define(['ramda'], factory) :
	(factory(global.R));
}(this, (function (R) { 'use strict';

R = 'default' in R ? R['default'] : R;

const TEXT_DOCUMENT = 'TEXT_DOCUMENT';

const isListener = name => name.startsWith('on');
const isAttribute = name => !isListener(name) && name != 'children';

const addEventHelper = R.curry((parent, name) =>
  parent.addEventListener(
    R.compose(
      R.slice(0, 2),
      R.toLower,
    )(name),
  ),
);

const addEventListenerToDom = R.curry((element, parent) =>
  R.compose(
    R.forEach(addEventHelper(parent)),
    R.filter(isListener),
    R.keys,
    R.prop('props'),
  )(element),
);

const addAttributeToDom = R.curry((element, parent) =>
  R.compose(
    R.forEach(addEventHelper(parent)),
    R.filter(isAttribute),
    R.keys,
    R.prop('props'),
  )(element),
);

const renderChildren = R.curry((element, dom) =>
  R.compose(
    R.forEach(R.flip(render, dom)),
    R.propOr('props', []),
  )(element),
);

const render = (element, parentDom) =>
  R.compose(
    parentDom.appendChild,
    R.tap(renderChildren),
    R.tap(addAttributeToDom(element)),
    R.tap(addEventListenerToDom(element)),
    R.ifElse(
      R.propSatisfies(R.equals(TEXT_DOCUMENT), 'type'),
      document.createTextNode(''),
      document.createElement(R.prop('type')),
    ),
    R.prop('type'),
  )(parentDom);

})));
