(function () {
'use strict';

function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/_curry1(function always(val) {
  return function () {
    return val;
  };
});

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = /*#__PURE__*/always(false);

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = /*#__PURE__*/always(true);

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/_curry2(function add(a, b) {
  return Number(a) + Number(b);
});

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
}

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

var _xfBase = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/_curry2(function max(a, b) {
  return b > a ? b : a;
});

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }
  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
  return new XMap(f, xf);
});

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var toString = Object.prototype.toString;
var _isArguments = function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
};

// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
} : function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
};
var keys = /*#__PURE__*/_curry1(_keys);

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/_curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
  return path([p], obj);
});

/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/_curry2(function pluck(p, list) {
  return map(prop(p), list);
});

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/_curry3(_reduce);

/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/_curry2(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } :
  // else
  _reduce(function (acc, f) {
    return _concat(acc, map(f, applyX));
  }, [], applyF);
});

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */

function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/_curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function () {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
var lift = /*#__PURE__*/_curry1(function lift(fn) {
  return liftN(fn.length, fn);
});

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curry$1 = /*#__PURE__*/_curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/curry$1(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});

/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

var preservingReduced = function (xf) {
  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
    }
  };
};

var _xchain = /*#__PURE__*/_curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});

/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map(fn, monad));
}));

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/_curry1(function not(a) {
  return !a;
});

/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/lift(not);

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/_curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
}

function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = /*#__PURE__*/_curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !_containsWith(function (b, aItem) {
    return !_containsWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys(filterable)) :
  // else
  _filter(pred, filterable);
}));

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys$$1) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys$$1.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return (/^\d+$/.test(k)
        );
      }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
}

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString$1 = /*#__PURE__*/_curry1(function toString(val) {
  return _toString(val, []);
});

/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/_curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});

var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return XReduceBy;
}();

var _xreduceBy = /*#__PURE__*/_curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});

/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = /*#__PURE__*/_curryN(4, [], /*#__PURE__*/_dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
  return _reduce(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));

/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/reduceBy(function (acc, elem) {
  return acc + 1;
}, 0);

/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/add(-1);

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
var last = /*#__PURE__*/nth(-1);

/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/_curry1(function flip(fn) {
  return curryN(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));

/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
var head = /*#__PURE__*/nth(0);

function _identity(x) {
  return x;
}

/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/_curry1(_identity);

/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
var ifElse = /*#__PURE__*/_curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});

/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/add(1);

/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/reduceBy(function (acc, elem) {
  return elem;
}, null);

/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/slice(0, -1);

var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!_contains(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/_curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});

/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/uniqBy(identity);

/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/_curry2(function invoker(arity, method) {
  return curryN(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
  });
});

/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/invoker(1, 'join');

/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/_curry1(function juxt(fns) {
  return converge(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});

/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/reduce(add, 0);

/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = /*#__PURE__*/_curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function () {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});

/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = /*#__PURE__*/memoizeWith(function () {
  return toString$1(arguments);
});

/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/_curry2(function multiply(a, b) {
  return a * b;
});

/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/juxt([filter, reject]);

/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/_curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});

/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/reduce(multiply, 1);

/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/_curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});

/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/_curry3(function propOr(val, p, obj) {
  return obj != null && _has(p, obj) ? obj[p] : val;
});

/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/_curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});

/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/_curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/invoker(1, 'split');

var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = _xfBase.init;
  XTap.prototype['@@transducer/result'] = _xfBase.result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  return XTap;
}();

var _xtap = /*#__PURE__*/_curry2(function _xtap(f, xf) {
  return new XTap(f, xf);
});

/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xtap, function tap(fn, x) {
  fn(x);
  return x;
}));

/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/invoker(0, 'toLowerCase');

/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/invoker(0, 'toUpperCase');

/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});

var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function trim(str) {
  return str.trim();
};

/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/chain(_identity);

const TEXT_DOCUMENT = 'TEXT_DOCUMENT';

const isListener = name => name.startsWith('on');
const isAttribute = name => !isListener(name) && name != 'children';

const addEventHelper = curry$1((parent, props$$1, name) =>
  parent.addEventListener(
    compose(
      slice(0, 2),
      toLower,
    )(name),
    props(name, props$$1),
  ),
);

const addEventListenerToDom = curry$1((element, parent) =>
  compose(
    forEach(addEventHelper(parent, props('props', element))),
    filter(isListener),
    keys,
    prop('props'),
  )(element),
);

const addAttributeToDom = curry$1((element, parent) =>
  compose(
    forEach(val => (console.log(val), parent[val] = path(['props', val], element))),
    filter(isAttribute),
    keys,
    prop('props'),
  )(element),
);

const renderChildren = curry$1((element, dom) =>
  compose(
    forEach(flip(render)(dom)),
    propOr([], 'children'),
    prop('props'),
  )(element),
);

const render = (element, parentDom) =>
  compose(
    bind(parentDom.appendChild, parentDom),
    tap(renderChildren(element)),
    tap(addAttributeToDom(element)),
    tap(addEventListenerToDom(element)),
    ifElse(
      propSatisfies(equals(TEXT_DOCUMENT), 'type'),
      compose(
        bind(document.createTextNode, document),
        () => '',
      ),
      compose(
        bind(document.createElement, document),
        prop('type'),
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

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZWFjdC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc1BsYWNlaG9sZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19jdXJyeTEuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvYWx3YXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL0YuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvVC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9fXy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY3VycnkyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2FkZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY29uY2F0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19hcml0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY3VycnlOLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2N1cnJ5Ti5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY3VycnkzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc1RyYW5zZm9ybWVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19kaXNwYXRjaGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3hmQmFzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9tYXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX21hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNTdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2lzQXJyYXlMaWtlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL194d3JhcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9iaW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19yZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3htYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMva2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9tYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wcm9wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3BsdWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3JlZHVjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNJbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc0Z1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2xpZnROLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2xpZnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvY3VycnkuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvY2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fbWFrZUZsYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2ZvcmNlUmVkdWNlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fZmxhdENhdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9feGNoYWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2NoYWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbm90LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2NvbXBsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3BpcGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3NsaWNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3RhaWwuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcGlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9yZXZlcnNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2NvbXBvc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2FycmF5RnJvbUl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19jb250YWluc1dpdGguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2Z1bmN0aW9uTmFtZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pZGVudGljYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2VxdWFscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9lcXVhbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2luZGV4T2YuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2NvbnRhaW5zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19xdW90ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fdG9JU09TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2NvbXBsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2ZpbHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3hmaWx0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvZmlsdGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3JlamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fdG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvY29udmVyZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3hyZWR1Y2VCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9yZWR1Y2VCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9jb3VudEJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2RlYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9udGguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbGFzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9mbGlwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ZvckVhY2guanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaGVhZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faWRlbnRpdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaWRlbnRpdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaWZFbHNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2luYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbmRleEJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2luaXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy91bmlxQnkuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdW5pcS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnZva2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2pvaW4uanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvanV4dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9zdW0uanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbWVtb2l6ZVdpdGguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbWVtb2l6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9tdWx0aXBseS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wYXJ0aXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcGlja0FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wcm9kdWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3VzZVdpdGguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcHJvamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wcm9wT3IuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcHJvcFNhdGlzZmllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9zcGxpdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9feHRhcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy90YXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdG9Mb3dlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy90b1VwcGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3RyYW5zZHVjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy90cmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3VubmVzdC5qcyIsIi4uL3NyYy9teVJlYWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc1BsYWNlaG9sZGVyKGEpIHtcbiAgICAgICByZXR1cm4gYSAhPSBudWxsICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZTtcbn0iLCJpbXBvcnQgX2lzUGxhY2Vob2xkZXIgZnJvbSAnLi9faXNQbGFjZWhvbGRlcic7XG5cbi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIG9uZS1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jdXJyeTEoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYxKGEpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBfaXNQbGFjZWhvbGRlcihhKSkge1xuICAgICAgcmV0dXJuIGYxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhbHdheXMgcmV0dXJucyB0aGUgZ2l2ZW4gdmFsdWUuIE5vdGUgdGhhdCBmb3JcbiAqIG5vbi1wcmltaXRpdmVzIHRoZSB2YWx1ZSByZXR1cm5lZCBpcyBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBrbm93biBhcyBgY29uc3RgLCBgY29uc3RhbnRgLCBvciBgS2AgKGZvciBLIGNvbWJpbmF0b3IpIGluXG4gKiBvdGhlciBsYW5ndWFnZXMgYW5kIGxpYnJhcmllcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBhIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gd3JhcCBpbiBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBGdW5jdGlvbiA6OiAqIC0+IHZhbC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdCA9IFIuYWx3YXlzKCdUZWUnKTtcbiAqICAgICAgdCgpOyAvLz0+ICdUZWUnXG4gKi9cbnZhciBhbHdheXMgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MShmdW5jdGlvbiBhbHdheXModmFsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgYWx3YXlzOyIsImltcG9ydCBhbHdheXMgZnJvbSAnLi9hbHdheXMnO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhbHdheXMgcmV0dXJucyBgZmFsc2VgLiBBbnkgcGFzc2VkIGluIHBhcmFtZXRlcnMgYXJlIGlnbm9yZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmFsd2F5cywgUi5UXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5GKCk7IC8vPT4gZmFsc2VcbiAqL1xudmFyIEYgPSAvKiNfX1BVUkVfXyovYWx3YXlzKGZhbHNlKTtcbmV4cG9ydCBkZWZhdWx0IEY7IiwiaW1wb3J0IGFsd2F5cyBmcm9tICcuL2Fsd2F5cyc7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIGB0cnVlYC4gQW55IHBhc3NlZCBpbiBwYXJhbWV0ZXJzIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5hbHdheXMsIFIuRlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuVCgpOyAvLz0+IHRydWVcbiAqL1xudmFyIFQgPSAvKiNfX1BVUkVfXyovYWx3YXlzKHRydWUpO1xuZXhwb3J0IGRlZmF1bHQgVDsiLCIvKipcbiAqIEEgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSB1c2VkIHRvIHNwZWNpZnkgXCJnYXBzXCIgd2l0aGluIGN1cnJpZWQgZnVuY3Rpb25zLFxuICogYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLCByZWdhcmRsZXNzIG9mXG4gKiB0aGVpciBwb3NpdGlvbnMuXG4gKlxuICogSWYgYGdgIGlzIGEgY3VycmllZCB0ZXJuYXJ5IGZ1bmN0aW9uIGFuZCBgX2AgaXMgYFIuX19gLCB0aGUgZm9sbG93aW5nIGFyZVxuICogZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKiAgIC0gYGcoXywgMiwgMykoMSlgXG4gKiAgIC0gYGcoXywgXywgMykoMSkoMilgXG4gKiAgIC0gYGcoXywgXywgMykoMSwgMilgXG4gKiAgIC0gYGcoXywgMiwgXykoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoMSkoMylgXG4gKiAgIC0gYGcoXywgMikoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoXywgMykoMSlgXG4gKlxuICogQGNvbnN0YW50XG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjYuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdyZWV0ID0gUi5yZXBsYWNlKCd7bmFtZX0nLCBSLl9fLCAnSGVsbG8sIHtuYW1lfSEnKTtcbiAqICAgICAgZ3JlZXQoJ0FsaWNlJyk7IC8vPT4gJ0hlbGxvLCBBbGljZSEnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHsgJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlcic6IHRydWUgfTsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL19jdXJyeTEnO1xuaW1wb3J0IF9pc1BsYWNlaG9sZGVyIGZyb20gJy4vX2lzUGxhY2Vob2xkZXInO1xuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0d28tYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3VycnkyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMihhLCBiKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmMjtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpID8gZjIgOiBfY3VycnkxKGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBfYik7XG4gICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpICYmIF9pc1BsYWNlaG9sZGVyKGIpID8gZjIgOiBfaXNQbGFjZWhvbGRlcihhKSA/IF9jdXJyeTEoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKF9hLCBiKTtcbiAgICAgICAgfSkgOiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTEoZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIF9iKTtcbiAgICAgICAgfSkgOiBmbihhLCBiKTtcbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBBZGRzIHR3byB2YWx1ZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAc2VlIFIuc3VidHJhY3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmFkZCgyLCAzKTsgICAgICAgLy89PiAgNVxuICogICAgICBSLmFkZCg3KSgxMCk7ICAgICAgLy89PiAxN1xuICovXG52YXIgYWRkID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgcmV0dXJuIE51bWJlcihhKSArIE51bWJlcihiKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgYWRkOyIsIi8qKlxuICogUHJpdmF0ZSBgY29uY2F0YCBmdW5jdGlvbiB0byBtZXJnZSB0d28gYXJyYXktbGlrZSBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fEFyZ3VtZW50c30gW3NldDE9W11dIEFuIGFycmF5LWxpa2Ugb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IFtzZXQyPVtdXSBBbiBhcnJheS1saWtlIG9iamVjdC5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldywgbWVyZ2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9jb25jYXQoWzQsIDUsIDZdLCBbMSwgMiwgM10pOyAvLz0+IFs0LCA1LCA2LCAxLCAyLCAzXVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY29uY2F0KHNldDEsIHNldDIpIHtcbiAgc2V0MSA9IHNldDEgfHwgW107XG4gIHNldDIgPSBzZXQyIHx8IFtdO1xuICB2YXIgaWR4O1xuICB2YXIgbGVuMSA9IHNldDEubGVuZ3RoO1xuICB2YXIgbGVuMiA9IHNldDIubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbjEpIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzZXQxW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbjIpIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzZXQyW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJpdHkobiwgZm4pIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYTApIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgODpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIGNhc2UgMTA6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byBfYXJpdHkgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIG5vIGdyZWF0ZXIgdGhhbiB0ZW4nKTtcbiAgfVxufSIsImltcG9ydCBfYXJpdHkgZnJvbSAnLi9fYXJpdHknO1xuaW1wb3J0IF9pc1BsYWNlaG9sZGVyIGZyb20gJy4vX2lzUGxhY2Vob2xkZXInO1xuXG4vKipcbiAqIEludGVybmFsIGN1cnJ5TiBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBvZiB0aGUgY3VycmllZCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHJlY2VpdmVkIEFuIGFycmF5IG9mIGFyZ3VtZW50cyByZWNlaXZlZCB0aHVzIGZhci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2N1cnJ5TihsZW5ndGgsIHJlY2VpdmVkLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb21iaW5lZCA9IFtdO1xuICAgIHZhciBhcmdzSWR4ID0gMDtcbiAgICB2YXIgbGVmdCA9IGxlbmd0aDtcbiAgICB2YXIgY29tYmluZWRJZHggPSAwO1xuICAgIHdoaWxlIChjb21iaW5lZElkeCA8IHJlY2VpdmVkLmxlbmd0aCB8fCBhcmdzSWR4IDwgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIGlmIChjb21iaW5lZElkeCA8IHJlY2VpdmVkLmxlbmd0aCAmJiAoIV9pc1BsYWNlaG9sZGVyKHJlY2VpdmVkW2NvbWJpbmVkSWR4XSkgfHwgYXJnc0lkeCA+PSBhcmd1bWVudHMubGVuZ3RoKSkge1xuICAgICAgICByZXN1bHQgPSByZWNlaXZlZFtjb21iaW5lZElkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhcmd1bWVudHNbYXJnc0lkeF07XG4gICAgICAgIGFyZ3NJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIGNvbWJpbmVkW2NvbWJpbmVkSWR4XSA9IHJlc3VsdDtcbiAgICAgIGlmICghX2lzUGxhY2Vob2xkZXIocmVzdWx0KSkge1xuICAgICAgICBsZWZ0IC09IDE7XG4gICAgICB9XG4gICAgICBjb21iaW5lZElkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdCA8PSAwID8gZm4uYXBwbHkodGhpcywgY29tYmluZWQpIDogX2FyaXR5KGxlZnQsIF9jdXJyeU4obGVuZ3RoLCBjb21iaW5lZCwgZm4pKTtcbiAgfTtcbn0iLCJpbXBvcnQgX2FyaXR5IGZyb20gJy4vaW50ZXJuYWwvX2FyaXR5JztcbmltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9jdXJyeU4gZnJvbSAnLi9pbnRlcm5hbC9fY3VycnlOJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBlcXVpdmFsZW50IG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvbiwgd2l0aCB0aGUgc3BlY2lmaWVkXG4gKiBhcml0eS4gVGhlIGN1cnJpZWQgZnVuY3Rpb24gaGFzIHR3byB1bnVzdWFsIGNhcGFiaWxpdGllcy4gRmlyc3QsIGl0c1xuICogYXJndW1lbnRzIG5lZWRuJ3QgYmUgcHJvdmlkZWQgb25lIGF0IGEgdGltZS4gSWYgYGdgIGlzIGBSLmN1cnJ5TigzLCBmKWAsIHRoZVxuICogZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxKSgyKSgzKWBcbiAqICAgLSBgZygxKSgyLCAzKWBcbiAqICAgLSBgZygxLCAyKSgzKWBcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqXG4gKiBTZWNvbmRseSwgdGhlIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgW2BSLl9fYF0oI19fKSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5XG4gKiBcImdhcHNcIiwgYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLFxuICogcmVnYXJkbGVzcyBvZiB0aGVpciBwb3NpdGlvbnMuIElmIGBnYCBpcyBhcyBhYm92ZSBhbmQgYF9gIGlzIFtgUi5fX2BdKCNfXyksXG4gKiB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC41LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKCogLT4gYSkgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGFyaXR5IGZvciB0aGUgcmV0dXJuZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgc3VtQXJncyA9ICguLi5hcmdzKSA9PiBSLnN1bShhcmdzKTtcbiAqXG4gKiAgICAgIHZhciBjdXJyaWVkQWRkRm91ck51bWJlcnMgPSBSLmN1cnJ5Tig0LCBzdW1BcmdzKTtcbiAqICAgICAgdmFyIGYgPSBjdXJyaWVkQWRkRm91ck51bWJlcnMoMSwgMik7XG4gKiAgICAgIHZhciBnID0gZigzKTtcbiAqICAgICAgZyg0KTsgLy89PiAxMFxuICovXG52YXIgY3VycnlOID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gY3VycnlOKGxlbmd0aCwgZm4pIHtcbiAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBfY3VycnkxKGZuKTtcbiAgfVxuICByZXR1cm4gX2FyaXR5KGxlbmd0aCwgX2N1cnJ5TihsZW5ndGgsIFtdLCBmbikpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBjdXJyeU47IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9fY3VycnkxJztcbmltcG9ydCBfY3VycnkyIGZyb20gJy4vX2N1cnJ5Mic7XG5pbXBvcnQgX2lzUGxhY2Vob2xkZXIgZnJvbSAnLi9faXNQbGFjZWhvbGRlcic7XG5cbi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIHRocmVlLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2N1cnJ5Myhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjMoYSwgYiwgYykge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZjM7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSA/IGYzIDogX2N1cnJ5MihmdW5jdGlvbiAoX2IsIF9jKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIF9iLCBfYyk7XG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gX2lzUGxhY2Vob2xkZXIoYSkgJiYgX2lzUGxhY2Vob2xkZXIoYikgPyBmMyA6IF9pc1BsYWNlaG9sZGVyKGEpID8gX2N1cnJ5MihmdW5jdGlvbiAoX2EsIF9jKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKF9hLCBiLCBfYyk7XG4gICAgICAgIH0pIDogX2lzUGxhY2Vob2xkZXIoYikgPyBfY3VycnkyKGZ1bmN0aW9uIChfYiwgX2MpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgX2IsIF9jKTtcbiAgICAgICAgfSkgOiBfY3VycnkxKGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBfYyk7XG4gICAgICAgIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpICYmIF9pc1BsYWNlaG9sZGVyKGIpICYmIF9pc1BsYWNlaG9sZGVyKGMpID8gZjMgOiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTIoZnVuY3Rpb24gKF9hLCBfYikge1xuICAgICAgICAgIHJldHVybiBmbihfYSwgX2IsIGMpO1xuICAgICAgICB9KSA6IF9pc1BsYWNlaG9sZGVyKGEpICYmIF9pc1BsYWNlaG9sZGVyKGMpID8gX2N1cnJ5MihmdW5jdGlvbiAoX2EsIF9jKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKF9hLCBiLCBfYyk7XG4gICAgICAgIH0pIDogX2lzUGxhY2Vob2xkZXIoYikgJiYgX2lzUGxhY2Vob2xkZXIoYykgPyBfY3VycnkyKGZ1bmN0aW9uIChfYiwgX2MpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgX2IsIF9jKTtcbiAgICAgICAgfSkgOiBfaXNQbGFjZWhvbGRlcihhKSA/IF9jdXJyeTEoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKF9hLCBiLCBjKTtcbiAgICAgICAgfSkgOiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTEoZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIF9iLCBjKTtcbiAgICAgICAgfSkgOiBfaXNQbGFjZWhvbGRlcihjKSA/IF9jdXJyeTEoZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIF9jKTtcbiAgICAgICAgfSkgOiBmbihhLCBiLCBjKTtcbiAgICB9XG4gIH07XG59IiwiLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCBhbiBvYmplY3QgaXMgYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgdmFsYCBpcyBhbiBhcnJheSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgX2lzQXJyYXkoW10pOyAvLz0+IHRydWVcbiAqICAgICAgX2lzQXJyYXkobnVsbCk7IC8vPT4gZmFsc2VcbiAqICAgICAgX2lzQXJyYXkoe30pOyAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gX2lzQXJyYXkodmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID49IDAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc1RyYW5zZm9ybWVyKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9ialsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9PT0gJ2Z1bmN0aW9uJztcbn0iLCJpbXBvcnQgX2lzQXJyYXkgZnJvbSAnLi9faXNBcnJheSc7XG5pbXBvcnQgX2lzVHJhbnNmb3JtZXIgZnJvbSAnLi9faXNUcmFuc2Zvcm1lcic7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZGlzcGF0Y2hlcyB3aXRoIGRpZmZlcmVudCBzdHJhdGVnaWVzIGJhc2VkIG9uIHRoZVxuICogb2JqZWN0IGluIGxpc3QgcG9zaXRpb24gKGxhc3QgYXJndW1lbnQpLiBJZiBpdCBpcyBhbiBhcnJheSwgZXhlY3V0ZXMgW2ZuXS5cbiAqIE90aGVyd2lzZSwgaWYgaXQgaGFzIGEgZnVuY3Rpb24gd2l0aCBvbmUgb2YgdGhlIGdpdmVuIG1ldGhvZCBuYW1lcywgaXQgd2lsbFxuICogZXhlY3V0ZSB0aGF0IGZ1bmN0aW9uIChmdW5jdG9yIGNhc2UpLiBPdGhlcndpc2UsIGlmIGl0IGlzIGEgdHJhbnNmb3JtZXIsXG4gKiB1c2VzIHRyYW5zZHVjZXIgW3hmXSB0byByZXR1cm4gYSBuZXcgdHJhbnNmb3JtZXIgKHRyYW5zZHVjZXIgY2FzZSkuXG4gKiBPdGhlcndpc2UsIGl0IHdpbGwgZGVmYXVsdCB0byBleGVjdXRpbmcgW2ZuXS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gbWV0aG9kTmFtZXMgcHJvcGVydGllcyB0byBjaGVjayBmb3IgYSBjdXN0b20gaW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIHRyYW5zZHVjZXIgdG8gaW5pdGlhbGl6ZSBpZiBvYmplY3QgaXMgdHJhbnNmb3JtZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIGRlZmF1bHQgcmFtZGEgaW1wbGVtZW50YXRpb25cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgZGlzcGF0Y2hlcyBvbiBvYmplY3QgaW4gbGlzdCBwb3NpdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGlzcGF0Y2hhYmxlKG1ldGhvZE5hbWVzLCB4ZiwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB2YXIgb2JqID0gYXJncy5wb3AoKTtcbiAgICBpZiAoIV9pc0FycmF5KG9iaikpIHtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgd2hpbGUgKGlkeCA8IG1ldGhvZE5hbWVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialttZXRob2ROYW1lc1tpZHhdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBvYmpbbWV0aG9kTmFtZXNbaWR4XV0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChfaXNUcmFuc2Zvcm1lcihvYmopKSB7XG4gICAgICAgIHZhciB0cmFuc2R1Y2VyID0geGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIHJldHVybiB0cmFuc2R1Y2VyKG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvaW5pdCddKCk7XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfVxufTsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhcmdlciBvZiBpdHMgdHdvIGFyZ3VtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gYVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIubWF4QnksIFIubWluXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tYXgoNzg5LCAxMjMpOyAvLz0+IDc4OVxuICogICAgICBSLm1heCgnYScsICdiJyk7IC8vPT4gJ2InXG4gKi9cbnZhciBtYXggPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBtYXgoYSwgYikge1xuICByZXR1cm4gYiA+IGEgPyBiIDogYTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbWF4OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9tYXAoZm4sIGZ1bmN0b3IpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBmdW5jdG9yLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbik7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICByZXN1bHRbaWR4XSA9IGZuKGZ1bmN0b3JbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNTdHJpbmcoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBTdHJpbmddJztcbn0iLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL19jdXJyeTEnO1xuaW1wb3J0IF9pc0FycmF5IGZyb20gJy4vX2lzQXJyYXknO1xuaW1wb3J0IF9pc1N0cmluZyBmcm9tICcuL19pc1N0cmluZyc7XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IGlzIHNpbWlsYXIgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAqIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHhgIGhhcyBhIG51bWVyaWMgbGVuZ3RoIHByb3BlcnR5IGFuZCBleHRyZW1lIGluZGljZXMgZGVmaW5lZDsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgX2lzQXJyYXlMaWtlKFtdKTsgLy89PiB0cnVlXG4gKiAgICAgIF9pc0FycmF5TGlrZSh0cnVlKTsgLy89PiBmYWxzZVxuICogICAgICBfaXNBcnJheUxpa2Uoe30pOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5TGlrZSh7bGVuZ3RoOiAxMH0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5TGlrZSh7MDogJ3plcm8nLCA5OiAnbmluZScsIGxlbmd0aDogMTB9KTsgLy89PiB0cnVlXG4gKi9cbnZhciBfaXNBcnJheUxpa2UgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MShmdW5jdGlvbiBpc0FycmF5TGlrZSh4KSB7XG4gIGlmIChfaXNBcnJheSh4KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICgheCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChfaXNTdHJpbmcoeCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubm9kZVR5cGUgPT09IDEpIHtcbiAgICByZXR1cm4gISF4Lmxlbmd0aDtcbiAgfVxuICBpZiAoeC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHguaGFzT3duUHJvcGVydHkoMCkgJiYgeC5oYXNPd25Qcm9wZXJ0eSh4Lmxlbmd0aCAtIDEpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgX2lzQXJyYXlMaWtlOyIsInZhciBYV3JhcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFhXcmFwKGZuKSB7XG4gICAgdGhpcy5mID0gZm47XG4gIH1cbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdCBub3QgaW1wbGVtZW50ZWQgb24gWFdyYXAnKTtcbiAgfTtcbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIGFjYztcbiAgfTtcbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24gKGFjYywgeCkge1xuICAgIHJldHVybiB0aGlzLmYoYWNjLCB4KTtcbiAgfTtcblxuICByZXR1cm4gWFdyYXA7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF94d3JhcChmbikge1xuICByZXR1cm4gbmV3IFhXcmFwKGZuKTtcbn0iLCJpbXBvcnQgX2FyaXR5IGZyb20gJy4vaW50ZXJuYWwvX2FyaXR5JztcbmltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaXMgYm91bmQgdG8gYSBjb250ZXh0LlxuICogTm90ZTogYFIuYmluZGAgZG9lcyBub3QgcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBhcmd1bWVudC1iaW5kaW5nIGNhcGFiaWxpdGllcyBvZlxuICogW0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoKiAtPiAqKSAtPiB7Kn0gLT4gKCogLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBiaW5kIHRvIGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzT2JqIFRoZSBjb250ZXh0IHRvIGJpbmQgYGZuYCB0b1xuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB3aWxsIGV4ZWN1dGUgaW4gdGhlIGNvbnRleHQgb2YgYHRoaXNPYmpgLlxuICogQHNlZSBSLnBhcnRpYWxcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbG9nID0gUi5iaW5kKGNvbnNvbGUubG9nLCBjb25zb2xlKTtcbiAqICAgICAgUi5waXBlKFIuYXNzb2MoJ2EnLCAyKSwgUi50YXAobG9nKSwgUi5hc3NvYygnYScsIDMpKSh7YTogMX0pOyAvLz0+IHthOiAzfVxuICogICAgICAvLyBsb2dzIHthOiAyfVxuICogQHN5bWIgUi5iaW5kKGYsIG8pKGEsIGIpID0gZi5jYWxsKG8sIGEsIGIpXG4gKi9cbnZhciBiaW5kID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gYmluZChmbiwgdGhpc09iaikge1xuICByZXR1cm4gX2FyaXR5KGZuLmxlbmd0aCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzT2JqLCBhcmd1bWVudHMpO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgYmluZDsiLCJpbXBvcnQgX2lzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlJztcbmltcG9ydCBfeHdyYXAgZnJvbSAnLi9feHdyYXAnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi4vYmluZCc7XG5cbmZ1bmN0aW9uIF9hcnJheVJlZHVjZSh4ZiwgYWNjLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBhY2MgPSB4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShhY2MsIGxpc3RbaWR4XSk7XG4gICAgaWYgKGFjYyAmJiBhY2NbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgIGFjYyA9IGFjY1snQEB0cmFuc2R1Y2VyL3ZhbHVlJ107XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10oYWNjKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlUmVkdWNlKHhmLCBhY2MsIGl0ZXIpIHtcbiAgdmFyIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSB4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgIGlmIChhY2MgJiYgYWNjWydAQHRyYW5zZHVjZXIvcmVkdWNlZCddKSB7XG4gICAgICBhY2MgPSBhY2NbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShhY2MpO1xufVxuXG5mdW5jdGlvbiBfbWV0aG9kUmVkdWNlKHhmLCBhY2MsIG9iaiwgbWV0aG9kTmFtZSkge1xuICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShvYmpbbWV0aG9kTmFtZV0oYmluZCh4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSwgeGYpLCBhY2MpKTtcbn1cblxudmFyIHN5bUl0ZXJhdG9yID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWR1Y2UoZm4sIGFjYywgbGlzdCkge1xuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm4gPSBfeHdyYXAoZm4pO1xuICB9XG4gIGlmIChfaXNBcnJheUxpa2UobGlzdCkpIHtcbiAgICByZXR1cm4gX2FycmF5UmVkdWNlKGZuLCBhY2MsIGxpc3QpO1xuICB9XG4gIGlmICh0eXBlb2YgbGlzdFsnZmFudGFzeS1sYW5kL3JlZHVjZSddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tZXRob2RSZWR1Y2UoZm4sIGFjYywgbGlzdCwgJ2ZhbnRhc3ktbGFuZC9yZWR1Y2UnKTtcbiAgfVxuICBpZiAobGlzdFtzeW1JdGVyYXRvcl0gIT0gbnVsbCkge1xuICAgIHJldHVybiBfaXRlcmFibGVSZWR1Y2UoZm4sIGFjYywgbGlzdFtzeW1JdGVyYXRvcl0oKSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBsaXN0Lm5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX2l0ZXJhYmxlUmVkdWNlKGZuLCBhY2MsIGxpc3QpO1xuICB9XG4gIGlmICh0eXBlb2YgbGlzdC5yZWR1Y2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX21ldGhvZFJlZHVjZShmbiwgYWNjLCBsaXN0LCAncmVkdWNlJyk7XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWR1Y2U6IGxpc3QgbXVzdCBiZSBhcnJheSBvciBpdGVyYWJsZScpO1xufSIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vX2N1cnJ5Mic7XG5pbXBvcnQgX3hmQmFzZSBmcm9tICcuL194ZkJhc2UnO1xuXG52YXIgWE1hcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFhNYXAoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYTWFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYTWFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uIChyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmYoaW5wdXQpKTtcbiAgfTtcblxuICByZXR1cm4gWE1hcDtcbn0oKTtcblxudmFyIF94bWFwID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gX3htYXAoZiwgeGYpIHtcbiAgcmV0dXJuIG5ldyBYTWFwKGYsIHhmKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgX3htYXA7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2hhcyhwcm9wLCBvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufSIsImltcG9ydCBfaGFzIGZyb20gJy4vX2hhcyc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgX2lzQXJndW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcmd1bWVudHMpID09PSAnW29iamVjdCBBcmd1bWVudHNdJyA/IGZ1bmN0aW9uIF9pc0FyZ3VtZW50cyh4KSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuICB9IDogZnVuY3Rpb24gX2lzQXJndW1lbnRzKHgpIHtcbiAgICByZXR1cm4gX2hhcygnY2FsbGVlJywgeCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBfaXNBcmd1bWVudHM7IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBfaGFzIGZyb20gJy4vaW50ZXJuYWwvX2hhcyc7XG5pbXBvcnQgX2lzQXJndW1lbnRzIGZyb20gJy4vaW50ZXJuYWwvX2lzQXJndW1lbnRzJztcblxuLy8gY292ZXIgSUUgPCA5IGtleXMgaXNzdWVzXG52YXIgaGFzRW51bUJ1ZyA9ICEgLyojX19QVVJFX18qL3sgdG9TdHJpbmc6IG51bGwgfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbnZhciBub25FbnVtZXJhYmxlUHJvcHMgPSBbJ2NvbnN0cnVjdG9yJywgJ3ZhbHVlT2YnLCAnaXNQcm90b3R5cGVPZicsICd0b1N0cmluZycsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuLy8gU2FmYXJpIGJ1Z1xudmFyIGhhc0FyZ3NFbnVtQnVnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHJldHVybiBhcmd1bWVudHMucHJvcGVydHlJc0VudW1lcmFibGUoJ2xlbmd0aCcpO1xufSgpO1xuXG52YXIgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhsaXN0LCBpdGVtKSB7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICBpZiAobGlzdFtpZHhdID09PSBpdGVtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBjb250YWluaW5nIHRoZSBuYW1lcyBvZiBhbGwgdGhlIGVudW1lcmFibGUgb3duIHByb3BlcnRpZXMgb2ZcbiAqIHRoZSBzdXBwbGllZCBvYmplY3QuXG4gKiBOb3RlIHRoYXQgdGhlIG9yZGVyIG9mIHRoZSBvdXRwdXQgYXJyYXkgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgY29uc2lzdGVudFxuICogYWNyb3NzIGRpZmZlcmVudCBKUyBwbGF0Zm9ybXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiB2fSAtPiBba11cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIHRoZSBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAqIEBzZWUgUi5rZXlzSW4sIFIudmFsdWVzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5rZXlzKHthOiAxLCBiOiAyLCBjOiAzfSk7IC8vPT4gWydhJywgJ2InLCAnYyddXG4gKi9cbnZhciBfa2V5cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiAhaGFzQXJnc0VudW1CdWcgPyBmdW5jdGlvbiBrZXlzKG9iaikge1xuICByZXR1cm4gT2JqZWN0KG9iaikgIT09IG9iaiA/IFtdIDogT2JqZWN0LmtleXMob2JqKTtcbn0gOiBmdW5jdGlvbiBrZXlzKG9iaikge1xuICBpZiAoT2JqZWN0KG9iaikgIT09IG9iaikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcHJvcCwgbklkeDtcbiAgdmFyIGtzID0gW107XG4gIHZhciBjaGVja0FyZ3NMZW5ndGggPSBoYXNBcmdzRW51bUJ1ZyAmJiBfaXNBcmd1bWVudHMob2JqKTtcbiAgZm9yIChwcm9wIGluIG9iaikge1xuICAgIGlmIChfaGFzKHByb3AsIG9iaikgJiYgKCFjaGVja0FyZ3NMZW5ndGggfHwgcHJvcCAhPT0gJ2xlbmd0aCcpKSB7XG4gICAgICBrc1trcy5sZW5ndGhdID0gcHJvcDtcbiAgICB9XG4gIH1cbiAgaWYgKGhhc0VudW1CdWcpIHtcbiAgICBuSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKG5JZHggPj0gMCkge1xuICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tuSWR4XTtcbiAgICAgIGlmIChfaGFzKHByb3AsIG9iaikgJiYgIWNvbnRhaW5zKGtzLCBwcm9wKSkge1xuICAgICAgICBrc1trcy5sZW5ndGhdID0gcHJvcDtcbiAgICAgIH1cbiAgICAgIG5JZHggLT0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtzO1xufTtcbnZhciBrZXlzID0gLyojX19QVVJFX18qL19jdXJyeTEoX2tleXMpO1xuZXhwb3J0IGRlZmF1bHQga2V5czsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9kaXNwYXRjaGFibGUgZnJvbSAnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJztcbmltcG9ydCBfbWFwIGZyb20gJy4vaW50ZXJuYWwvX21hcCc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICcuL2ludGVybmFsL19yZWR1Y2UnO1xuaW1wb3J0IF94bWFwIGZyb20gJy4vaW50ZXJuYWwvX3htYXAnO1xuaW1wb3J0IGN1cnJ5TiBmcm9tICcuL2N1cnJ5Tic7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnO1xuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYW5kXG4gKiBhIFtmdW5jdG9yXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2Z1bmN0b3IpLFxuICogYXBwbGllcyB0aGUgZnVuY3Rpb24gdG8gZWFjaCBvZiB0aGUgZnVuY3RvcidzIHZhbHVlcywgYW5kIHJldHVybnNcbiAqIGEgZnVuY3RvciBvZiB0aGUgc2FtZSBzaGFwZS5cbiAqXG4gKiBSYW1kYSBwcm92aWRlcyBzdWl0YWJsZSBgbWFwYCBpbXBsZW1lbnRhdGlvbnMgZm9yIGBBcnJheWAgYW5kIGBPYmplY3RgLFxuICogc28gdGhpcyBmdW5jdGlvbiBtYXkgYmUgYXBwbGllZCB0byBgWzEsIDIsIDNdYCBvciBge3g6IDEsIHk6IDIsIHo6IDN9YC5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgbWFwYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQWxzbyB0cmVhdHMgZnVuY3Rpb25zIGFzIGZ1bmN0b3JzIGFuZCB3aWxsIGNvbXBvc2UgdGhlbSB0b2dldGhlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIEZ1bmN0b3IgZiA9PiAoYSAtPiBiKSAtPiBmIGEgLT4gZiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGlucHV0IGBsaXN0YC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gYmUgaXRlcmF0ZWQgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGxpc3QuXG4gKiBAc2VlIFIudHJhbnNkdWNlLCBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRvdWJsZSA9IHggPT4geCAqIDI7XG4gKlxuICogICAgICBSLm1hcChkb3VibGUsIFsxLCAyLCAzXSk7IC8vPT4gWzIsIDQsIDZdXG4gKlxuICogICAgICBSLm1hcChkb3VibGUsIHt4OiAxLCB5OiAyLCB6OiAzfSk7IC8vPT4ge3g6IDIsIHk6IDQsIHo6IDZ9XG4gKiBAc3ltYiBSLm1hcChmLCBbYSwgYl0pID0gW2YoYSksIGYoYildXG4gKiBAc3ltYiBSLm1hcChmLCB7IHg6IGEsIHk6IGIgfSkgPSB7IHg6IGYoYSksIHk6IGYoYikgfVxuICogQHN5bWIgUi5tYXAoZiwgZnVuY3Rvcl9vKSA9IGZ1bmN0b3Jfby5tYXAoZilcbiAqL1xudmFyIG1hcCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKCAvKiNfX1BVUkVfXyovX2Rpc3BhdGNoYWJsZShbJ2ZhbnRhc3ktbGFuZC9tYXAnLCAnbWFwJ10sIF94bWFwLCBmdW5jdGlvbiBtYXAoZm4sIGZ1bmN0b3IpIHtcbiAgc3dpdGNoIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuY3RvcikpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZ1bmN0aW9uXSc6XG4gICAgICByZXR1cm4gY3VycnlOKGZ1bmN0b3IubGVuZ3RoLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGZ1bmN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9KTtcbiAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgcmV0dXJuIF9yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gZm4oZnVuY3RvcltrZXldKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9LCBrZXlzKGZ1bmN0b3IpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIF9tYXAoZm4sIGZ1bmN0b3IpO1xuICB9XG59KSk7XG5leHBvcnQgZGVmYXVsdCBtYXA7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgdmFsdWUgYXQgYSBnaXZlbiBwYXRoLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHR5cGVkZWZuIElkeCA9IFN0cmluZyB8IEludFxuICogQHNpZyBbSWR4XSAtPiB7YX0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCB0byB1c2UuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcmV0cmlldmUgdGhlIG5lc3RlZCBwcm9wZXJ0eSBmcm9tLlxuICogQHJldHVybiB7Kn0gVGhlIGRhdGEgYXQgYHBhdGhgLlxuICogQHNlZSBSLnByb3BcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnBhdGgoWydhJywgJ2InXSwge2E6IHtiOiAyfX0pOyAvLz0+IDJcbiAqICAgICAgUi5wYXRoKFsnYScsICdiJ10sIHtjOiB7YjogMn19KTsgLy89PiB1bmRlZmluZWRcbiAqL1xudmFyIHBhdGggPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBwYXRoKHBhdGhzLCBvYmopIHtcbiAgdmFyIHZhbCA9IG9iajtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBwYXRocy5sZW5ndGgpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsID0gdmFsW3BhdGhzW2lkeF1dO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiB2YWw7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHBhdGg7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBwYXRoIGZyb20gJy4vcGF0aCc7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2hlbiBzdXBwbGllZCBhbiBvYmplY3QgcmV0dXJucyB0aGUgaW5kaWNhdGVkXG4gKiBwcm9wZXJ0eSBvZiB0aGF0IG9iamVjdCwgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBzIC0+IHtzOiBhfSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gcCBUaGUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHF1ZXJ5XG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgYXQgYG9iai5wYC5cbiAqIEBzZWUgUi5wYXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wKCd4Jywge3g6IDEwMH0pOyAvLz0+IDEwMFxuICogICAgICBSLnByb3AoJ3gnLCB7fSk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cblxudmFyIHByb3AgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBwcm9wKHAsIG9iaikge1xuICByZXR1cm4gcGF0aChbcF0sIG9iaik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHByb3A7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHByb3AgZnJvbSAnLi9wcm9wJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgYnkgcGx1Y2tpbmcgdGhlIHNhbWUgbmFtZWQgcHJvcGVydHkgb2ZmIGFsbCBvYmplY3RzIGluXG4gKiB0aGUgbGlzdCBzdXBwbGllZC5cbiAqXG4gKiBgcGx1Y2tgIHdpbGwgd29yayBvblxuICogYW55IFtmdW5jdG9yXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2Z1bmN0b3IpIGluXG4gKiBhZGRpdGlvbiB0byBhcnJheXMsIGFzIGl0IGlzIGVxdWl2YWxlbnQgdG8gYFIubWFwKFIucHJvcChrKSwgZilgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRnVuY3RvciBmID0+IGsgLT4gZiB7azogdn0gLT4gZiB2XG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleSBUaGUga2V5IG5hbWUgdG8gcGx1Y2sgb2ZmIG9mIGVhY2ggb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheX0gZiBUaGUgYXJyYXkgb3IgZnVuY3RvciB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBrZXkuXG4gKiBAc2VlIFIucHJvcHNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnBsdWNrKCdhJykoW3thOiAxfSwge2E6IDJ9XSk7IC8vPT4gWzEsIDJdXG4gKiAgICAgIFIucGx1Y2soMCkoW1sxLCAyXSwgWzMsIDRdXSk7ICAgLy89PiBbMSwgM11cbiAqICAgICAgUi5wbHVjaygndmFsJywge2E6IHt2YWw6IDN9LCBiOiB7dmFsOiA1fX0pOyAvLz0+IHthOiAzLCBiOiA1fVxuICogQHN5bWIgUi5wbHVjaygneCcsIFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiA0fSwge3g6IDUsIHk6IDZ9XSkgPSBbMSwgMywgNV1cbiAqIEBzeW1iIFIucGx1Y2soMCwgW1sxLCAyXSwgWzMsIDRdLCBbNSwgNl1dKSA9IFsxLCAzLCA1XVxuICovXG52YXIgcGx1Y2sgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBwbHVjayhwLCBsaXN0KSB7XG4gIHJldHVybiBtYXAocHJvcChwKSwgbGlzdCk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHBsdWNrOyIsImltcG9ydCBfY3VycnkzIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Myc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICcuL2ludGVybmFsL19yZWR1Y2UnO1xuXG4vKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgbGlzdCwgc3VjY2Vzc2l2ZWx5IGNhbGxpbmdcbiAqIHRoZSBpdGVyYXRvciBmdW5jdGlvbiBhbmQgcGFzc2luZyBpdCBhbiBhY2N1bXVsYXRvciB2YWx1ZSBhbmQgdGhlIGN1cnJlbnRcbiAqIHZhbHVlIGZyb20gdGhlIGFycmF5LCBhbmQgdGhlbiBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIG5leHQgY2FsbC5cbiAqXG4gKiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gcmVjZWl2ZXMgdHdvIHZhbHVlczogKihhY2MsIHZhbHVlKSouIEl0IG1heSB1c2VcbiAqIFtgUi5yZWR1Y2VkYF0oI3JlZHVjZWQpIHRvIHNob3J0Y3V0IHRoZSBpdGVyYXRpb24uXG4gKlxuICogVGhlIGFyZ3VtZW50cycgb3JkZXIgb2YgW2ByZWR1Y2VSaWdodGBdKCNyZWR1Y2VSaWdodCkncyBpdGVyYXRvciBmdW5jdGlvblxuICogaXMgKih2YWx1ZSwgYWNjKSouXG4gKlxuICogTm90ZTogYFIucmVkdWNlYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2VcbiAqIGFycmF5cyksIHVubGlrZSB0aGUgbmF0aXZlIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2QuIEZvciBtb3JlIGRldGFpbHNcbiAqIG9uIHRoaXMgYmVoYXZpb3IsIHNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZSNEZXNjcmlwdGlvblxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGByZWR1Y2VgIG1ldGhvZCBvZiB0aGUgdGhpcmQgYXJndW1lbnQsIGlmIHByZXNlbnQuIFdoZW5cbiAqIGRvaW5nIHNvLCBpdCBpcyB1cCB0byB0aGUgdXNlciB0byBoYW5kbGUgdGhlIFtgUi5yZWR1Y2VkYF0oI3JlZHVjZWQpXG4gKiBzaG9ydGN1dGluZywgYXMgdGhpcyBpcyBub3QgaW1wbGVtZW50ZWQgYnkgYHJlZHVjZWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGFjY3VtdWxhdG9yIGFuZCB0aGVcbiAqICAgICAgICBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlZCwgUi5hZGRJbmRleCwgUi5yZWR1Y2VSaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucmVkdWNlKFIuc3VidHJhY3QsIDAsIFsxLCAyLCAzLCA0XSkgLy8gPT4gKCgoKDAgLSAxKSAtIDIpIC0gMykgLSA0KSA9IC0xMFxuICogICAgICAvLyAgICAgICAgICAtICAgICAgICAgICAgICAgLTEwXG4gKiAgICAgIC8vICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAvLyAgICAgICAgLSAgIDQgICAgICAgICAgIC02ICAgNFxuICogICAgICAvLyAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgIC8vICAgICAgLSAgIDMgICA9PT4gICAgIC0zICAgM1xuICogICAgICAvLyAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAvLyAgICAtICAgMiAgICAgICAgICAgLTEgICAyXG4gKiAgICAgIC8vICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAvLyAgMCAgIDEgICAgICAgICAgICAwICAgMVxuICpcbiAqIEBzeW1iIFIucmVkdWNlKGYsIGEsIFtiLCBjLCBkXSkgPSBmKGYoZihhLCBiKSwgYyksIGQpXG4gKi9cbnZhciByZWR1Y2UgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MyhfcmVkdWNlKTtcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZTsiLCJpbXBvcnQgX2NvbmNhdCBmcm9tICcuL2ludGVybmFsL19jb25jYXQnO1xuaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfcmVkdWNlIGZyb20gJy4vaW50ZXJuYWwvX3JlZHVjZSc7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcblxuLyoqXG4gKiBhcCBhcHBsaWVzIGEgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYSBsaXN0IG9mIHZhbHVlcy5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgYXBgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LiBBbHNvXG4gKiB0cmVhdHMgY3VycmllZCBmdW5jdGlvbnMgYXMgYXBwbGljYXRpdmVzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjMuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIFthIC0+IGJdIC0+IFthXSAtPiBbYl1cbiAqIEBzaWcgQXBwbHkgZiA9PiBmIChhIC0+IGIpIC0+IGYgYSAtPiBmIGJcbiAqIEBzaWcgKGEgLT4gYiAtPiBjKSAtPiAoYSAtPiBiKSAtPiAoYSAtPiBjKVxuICogQHBhcmFtIHsqfSBhcHBseUZcbiAqIEBwYXJhbSB7Kn0gYXBwbHlYXG4gKiBAcmV0dXJuIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYXAoW1IubXVsdGlwbHkoMiksIFIuYWRkKDMpXSwgWzEsMiwzXSk7IC8vPT4gWzIsIDQsIDYsIDQsIDUsIDZdXG4gKiAgICAgIFIuYXAoW1IuY29uY2F0KCd0YXN0eSAnKSwgUi50b1VwcGVyXSwgWydwaXp6YScsICdzYWxhZCddKTsgLy89PiBbXCJ0YXN0eSBwaXp6YVwiLCBcInRhc3R5IHNhbGFkXCIsIFwiUElaWkFcIiwgXCJTQUxBRFwiXVxuICpcbiAqICAgICAgLy8gUi5hcCBjYW4gYWxzbyBiZSB1c2VkIGFzIFMgY29tYmluYXRvclxuICogICAgICAvLyB3aGVuIG9ubHkgdHdvIGZ1bmN0aW9ucyBhcmUgcGFzc2VkXG4gKiAgICAgIFIuYXAoUi5jb25jYXQsIFIudG9VcHBlcikoJ1JhbWRhJykgLy89PiAnUmFtZGFSQU1EQSdcbiAqIEBzeW1iIFIuYXAoW2YsIGddLCBbYSwgYl0pID0gW2YoYSksIGYoYiksIGcoYSksIGcoYildXG4gKi9cbnZhciBhcCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGFwKGFwcGx5RiwgYXBwbHlYKSB7XG4gIHJldHVybiB0eXBlb2YgYXBwbHlYWydmYW50YXN5LWxhbmQvYXAnXSA9PT0gJ2Z1bmN0aW9uJyA/IGFwcGx5WFsnZmFudGFzeS1sYW5kL2FwJ10oYXBwbHlGKSA6IHR5cGVvZiBhcHBseUYuYXAgPT09ICdmdW5jdGlvbicgPyBhcHBseUYuYXAoYXBwbHlYKSA6IHR5cGVvZiBhcHBseUYgPT09ICdmdW5jdGlvbicgPyBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBhcHBseUYoeCkoYXBwbHlYKHgpKTtcbiAgfSA6XG4gIC8vIGVsc2VcbiAgX3JlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgcmV0dXJuIF9jb25jYXQoYWNjLCBtYXAoZiwgYXBwbHlYKSk7XG4gIH0sIFtdLCBhcHBseUYpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBhcDsiLCIvKipcbiAqIERldGVybWluZSBpZiB0aGUgcGFzc2VkIGFyZ3VtZW50IGlzIGFuIGludGVnZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gblxuICogQGNhdGVnb3J5IFR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24gX2lzSW50ZWdlcihuKSB7XG4gIHJldHVybiBuIDw8IDAgPT09IG47XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn0iLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9yZWR1Y2UgZnJvbSAnLi9pbnRlcm5hbC9fcmVkdWNlJztcbmltcG9ydCBhcCBmcm9tICcuL2FwJztcbmltcG9ydCBjdXJyeU4gZnJvbSAnLi9jdXJyeU4nO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5cbi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gdG8gYmUgdGhlIHNwZWNpZmllZCBhcml0eSwgc28gdGhhdCBpdCBtYXkgXCJtYXAgb3ZlclwiIHRoYXRcbiAqIG1hbnkgbGlzdHMsIEZ1bmN0aW9ucyBvciBvdGhlciBvYmplY3RzIHRoYXQgc2F0aXNmeSB0aGUgW0ZhbnRhc3lMYW5kIEFwcGx5IHNwZWNdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjYXBwbHkpLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjcuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiAoKi4uLiAtPiAqKSAtPiAoWypdLi4uIC0+IFsqXSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBsaWZ0IGludG8gaGlnaGVyIGNvbnRleHRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgbGlmdGVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmxpZnQsIFIuYXBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbWFkZDMgPSBSLmxpZnROKDMsICguLi5hcmdzKSA9PiBSLnN1bShhcmdzKSk7XG4gKiAgICAgIG1hZGQzKFsxLDIsM10sIFsxLDIsM10sIFsxXSk7IC8vPT4gWzMsIDQsIDUsIDQsIDUsIDYsIDUsIDYsIDddXG4gKi9cbnZhciBsaWZ0TiA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGxpZnROKGFyaXR5LCBmbikge1xuICB2YXIgbGlmdGVkID0gY3VycnlOKGFyaXR5LCBmbik7XG4gIHJldHVybiBjdXJyeU4oYXJpdHksIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3JlZHVjZShhcCwgbWFwKGxpZnRlZCwgYXJndW1lbnRzWzBdKSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBsaWZ0TjsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuaW1wb3J0IGxpZnROIGZyb20gJy4vbGlmdE4nO1xuXG4vKipcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIG9mIGFyaXR5ID4gMSBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgYSBsaXN0LCBGdW5jdGlvbiBvciBvdGhlclxuICogb2JqZWN0IHRoYXQgc2F0aXNmaWVzIHRoZSBbRmFudGFzeUxhbmQgQXBwbHkgc3BlY10oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBseSkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbGlmdCBpbnRvIGhpZ2hlciBjb250ZXh0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGxpZnRlZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5saWZ0TlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYWRkMyA9IFIubGlmdCgoYSwgYiwgYykgPT4gYSArIGIgKyBjKTtcbiAqXG4gKiAgICAgIG1hZGQzKFsxLDIsM10sIFsxLDIsM10sIFsxXSk7IC8vPT4gWzMsIDQsIDUsIDQsIDUsIDYsIDUsIDYsIDddXG4gKlxuICogICAgICB2YXIgbWFkZDUgPSBSLmxpZnQoKGEsIGIsIGMsIGQsIGUpID0+IGEgKyBiICsgYyArIGQgKyBlKTtcbiAqXG4gKiAgICAgIG1hZGQ1KFsxLDJdLCBbM10sIFs0LCA1XSwgWzZdLCBbNywgOF0pOyAvLz0+IFsyMSwgMjIsIDIyLCAyMywgMjIsIDIzLCAyMywgMjRdXG4gKi9cbnZhciBsaWZ0ID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gbGlmdChmbikge1xuICByZXR1cm4gbGlmdE4oZm4ubGVuZ3RoLCBmbik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGxpZnQ7IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBjdXJyeU4gZnJvbSAnLi9jdXJyeU4nO1xuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgY3VycmllZCBmdW5jdGlvblxuICogaGFzIHR3byB1bnVzdWFsIGNhcGFiaWxpdGllcy4gRmlyc3QsIGl0cyBhcmd1bWVudHMgbmVlZG4ndCBiZSBwcm92aWRlZCBvbmVcbiAqIGF0IGEgdGltZS4gSWYgYGZgIGlzIGEgdGVybmFyeSBmdW5jdGlvbiBhbmQgYGdgIGlzIGBSLmN1cnJ5KGYpYCwgdGhlXG4gKiBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBbYFIuX19gXSgjX18pIG1heSBiZSB1c2VkIHRvIHNwZWNpZnlcbiAqIFwiZ2Fwc1wiLCBhbGxvd2luZyBwYXJ0aWFsIGFwcGxpY2F0aW9uIG9mIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMsXG4gKiByZWdhcmRsZXNzIG9mIHRoZWlyIHBvc2l0aW9ucy4gSWYgYGdgIGlzIGFzIGFib3ZlIGFuZCBgX2AgaXMgW2BSLl9fYF0oI19fKSxcbiAqIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEsIDIsIDMpYFxuICogICAtIGBnKF8sIDIsIDMpKDEpYFxuICogICAtIGBnKF8sIF8sIDMpKDEpKDIpYFxuICogICAtIGBnKF8sIF8sIDMpKDEsIDIpYFxuICogICAtIGBnKF8sIDIpKDEpKDMpYFxuICogICAtIGBnKF8sIDIpKDEsIDMpYFxuICogICAtIGBnKF8sIDIpKF8sIDMpKDEpYFxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlOXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFkZEZvdXJOdW1iZXJzID0gKGEsIGIsIGMsIGQpID0+IGEgKyBiICsgYyArIGQ7XG4gKlxuICogICAgICB2YXIgY3VycmllZEFkZEZvdXJOdW1iZXJzID0gUi5jdXJyeShhZGRGb3VyTnVtYmVycyk7XG4gKiAgICAgIHZhciBmID0gY3VycmllZEFkZEZvdXJOdW1iZXJzKDEsIDIpO1xuICogICAgICB2YXIgZyA9IGYoMyk7XG4gKiAgICAgIGcoNCk7IC8vPT4gMTBcbiAqL1xudmFyIGN1cnJ5ID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGN1cnJ5Tihmbi5sZW5ndGgsIGZuKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY3Vycnk7IiwiaW1wb3J0IGN1cnJ5IGZyb20gJy4vY3VycnknO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGl0cyBmaXJzdCBhcmd1bWVudCB3aXRoIHRoZSByZW1haW5pbmdcbiAqIGFyZ3VtZW50cy4gVGhpcyBpcyBvY2Nhc2lvbmFsbHkgdXNlZnVsIGFzIGEgY29udmVyZ2luZyBmdW5jdGlvbiBmb3JcbiAqIFtgUi5jb252ZXJnZWBdKCNjb252ZXJnZSk6IHRoZSBmaXJzdCBicmFuY2ggY2FuIHByb2R1Y2UgYSBmdW5jdGlvbiB3aGlsZSB0aGVcbiAqIHJlbWFpbmluZyBicmFuY2hlcyBwcm9kdWNlIHZhbHVlcyB0byBiZSBwYXNzZWQgdG8gdGhhdCBmdW5jdGlvbiBhcyBpdHNcbiAqIGFyZ3VtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKi4uLiAtPiBhKSwqLi4uIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgcmVtYWluaW5nIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBbnkgbnVtYmVyIG9mIHBvc2l0aW9uYWwgYXJndW1lbnRzLlxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5hcHBseVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuY2FsbChSLmFkZCwgMSwgMik7IC8vPT4gM1xuICpcbiAqICAgICAgdmFyIGluZGVudE4gPSBSLnBpcGUoUi5yZXBlYXQoJyAnKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5qb2luKCcnKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5yZXBsYWNlKC9eKD8hJCkvZ20pKTtcbiAqXG4gKiAgICAgIHZhciBmb3JtYXQgPSBSLmNvbnZlcmdlKFIuY2FsbCwgW1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5waXBlKFIucHJvcCgnaW5kZW50JyksIGluZGVudE4pLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5wcm9wKCd2YWx1ZScpXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICpcbiAqICAgICAgZm9ybWF0KHtpbmRlbnQ6IDIsIHZhbHVlOiAnZm9vXFxuYmFyXFxuYmF6XFxuJ30pOyAvLz0+ICcgIGZvb1xcbiAgYmFyXFxuICBiYXpcXG4nXG4gKiBAc3ltYiBSLmNhbGwoZiwgYSwgYikgPSBmKGEsIGIpXG4gKi9cbnZhciBjYWxsID0gLyojX19QVVJFX18qL2N1cnJ5KGZ1bmN0aW9uIGNhbGwoZm4pIHtcbiAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBjYWxsOyIsImltcG9ydCBfaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UnO1xuXG4vKipcbiAqIGBfbWFrZUZsYXRgIGlzIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG9uZS1sZXZlbCBvciBmdWxseSByZWN1cnNpdmVcbiAqIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBmbGFnIHBhc3NlZCBpbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbWFrZUZsYXQocmVjdXJzaXZlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmbGF0dChsaXN0KSB7XG4gICAgdmFyIHZhbHVlLCBqbGVuLCBqO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgaWxlbiA9IGxpc3QubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGlkeCA8IGlsZW4pIHtcbiAgICAgIGlmIChfaXNBcnJheUxpa2UobGlzdFtpZHhdKSkge1xuICAgICAgICB2YWx1ZSA9IHJlY3Vyc2l2ZSA/IGZsYXR0KGxpc3RbaWR4XSkgOiBsaXN0W2lkeF07XG4gICAgICAgIGogPSAwO1xuICAgICAgICBqbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaiA8IGpsZW4pIHtcbiAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZVtqXTtcbiAgICAgICAgICBqICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGxpc3RbaWR4XTtcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9mb3JjZVJlZHVjZWQoeCkge1xuICByZXR1cm4ge1xuICAgICdAQHRyYW5zZHVjZXIvdmFsdWUnOiB4LFxuICAgICdAQHRyYW5zZHVjZXIvcmVkdWNlZCc6IHRydWVcbiAgfTtcbn0iLCJpbXBvcnQgX2ZvcmNlUmVkdWNlZCBmcm9tICcuL19mb3JjZVJlZHVjZWQnO1xuaW1wb3J0IF9pc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZSc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICcuL19yZWR1Y2UnO1xuaW1wb3J0IF94ZkJhc2UgZnJvbSAnLi9feGZCYXNlJztcblxudmFyIHByZXNlcnZpbmdSZWR1Y2VkID0gZnVuY3Rpb24gKHhmKSB7XG4gIHJldHVybiB7XG4gICAgJ0BAdHJhbnNkdWNlci9pbml0JzogX3hmQmFzZS5pbml0LFxuICAgICdAQHRyYW5zZHVjZXIvcmVzdWx0JzogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgICB9LFxuICAgICdAQHRyYW5zZHVjZXIvc3RlcCc6IGZ1bmN0aW9uIChyZXN1bHQsIGlucHV0KSB7XG4gICAgICB2YXIgcmV0ID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gICAgICByZXR1cm4gcmV0WydAQHRyYW5zZHVjZXIvcmVkdWNlZCddID8gX2ZvcmNlUmVkdWNlZChyZXQpIDogcmV0O1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBfZmxhdENhdCA9IGZ1bmN0aW9uIF94Y2F0KHhmKSB7XG4gIHZhciByeGYgPSBwcmVzZXJ2aW5nUmVkdWNlZCh4Zik7XG4gIHJldHVybiB7XG4gICAgJ0BAdHJhbnNkdWNlci9pbml0JzogX3hmQmFzZS5pbml0LFxuICAgICdAQHRyYW5zZHVjZXIvcmVzdWx0JzogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJ4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gICAgfSxcbiAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbiAocmVzdWx0LCBpbnB1dCkge1xuICAgICAgcmV0dXJuICFfaXNBcnJheUxpa2UoaW5wdXQpID8gX3JlZHVjZShyeGYsIHJlc3VsdCwgW2lucHV0XSkgOiBfcmVkdWNlKHJ4ZiwgcmVzdWx0LCBpbnB1dCk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX2ZsYXRDYXQ7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9fY3VycnkyJztcbmltcG9ydCBfZmxhdENhdCBmcm9tICcuL19mbGF0Q2F0JztcbmltcG9ydCBtYXAgZnJvbSAnLi4vbWFwJztcblxudmFyIF94Y2hhaW4gPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBfeGNoYWluKGYsIHhmKSB7XG4gIHJldHVybiBtYXAoZiwgX2ZsYXRDYXQoeGYpKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgX3hjaGFpbjsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9kaXNwYXRjaGFibGUgZnJvbSAnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJztcbmltcG9ydCBfbWFrZUZsYXQgZnJvbSAnLi9pbnRlcm5hbC9fbWFrZUZsYXQnO1xuaW1wb3J0IF94Y2hhaW4gZnJvbSAnLi9pbnRlcm5hbC9feGNoYWluJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnO1xuXG4vKipcbiAqIGBjaGFpbmAgbWFwcyBhIGZ1bmN0aW9uIG92ZXIgYSBsaXN0IGFuZCBjb25jYXRlbmF0ZXMgdGhlIHJlc3VsdHMuIGBjaGFpbmBcbiAqIGlzIGFsc28ga25vd24gYXMgYGZsYXRNYXBgIGluIHNvbWUgbGlicmFyaWVzXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGNoYWluYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudCxcbiAqIGFjY29yZGluZyB0byB0aGUgW0ZhbnRhc3lMYW5kIENoYWluIHNwZWNdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY2hhaW4pLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjMuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgQ2hhaW4gbSA9PiAoYSAtPiBtIGIpIC0+IG0gYSAtPiBtIGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXAgd2l0aFxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBtYXAgb3ZlclxuICogQHJldHVybiB7QXJyYXl9IFRoZSByZXN1bHQgb2YgZmxhdC1tYXBwaW5nIGBsaXN0YCB3aXRoIGBmbmBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZHVwbGljYXRlID0gbiA9PiBbbiwgbl07XG4gKiAgICAgIFIuY2hhaW4oZHVwbGljYXRlLCBbMSwgMiwgM10pOyAvLz0+IFsxLCAxLCAyLCAyLCAzLCAzXVxuICpcbiAqICAgICAgUi5jaGFpbihSLmFwcGVuZCwgUi5oZWFkKShbMSwgMiwgM10pOyAvLz0+IFsxLCAyLCAzLCAxXVxuICovXG52YXIgY2hhaW4gPSAvKiNfX1BVUkVfXyovX2N1cnJ5MiggLyojX19QVVJFX18qL19kaXNwYXRjaGFibGUoWydmYW50YXN5LWxhbmQvY2hhaW4nLCAnY2hhaW4nXSwgX3hjaGFpbiwgZnVuY3Rpb24gY2hhaW4oZm4sIG1vbmFkKSB7XG4gIGlmICh0eXBlb2YgbW9uYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBmbihtb25hZCh4KSkoeCk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gX21ha2VGbGF0KGZhbHNlKShtYXAoZm4sIG1vbmFkKSk7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBjaGFpbjsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuXG4vKipcbiAqIEdpdmVzIGEgc2luZ2xlLXdvcmQgc3RyaW5nIGRlc2NyaXB0aW9uIG9mIHRoZSAobmF0aXZlKSB0eXBlIG9mIGEgdmFsdWUsXG4gKiByZXR1cm5pbmcgc3VjaCBhbnN3ZXJzIGFzICdPYmplY3QnLCAnTnVtYmVyJywgJ0FycmF5Jywgb3IgJ051bGwnLiBEb2VzIG5vdFxuICogYXR0ZW1wdCB0byBkaXN0aW5ndWlzaCB1c2VyIE9iamVjdCB0eXBlcyBhbnkgZnVydGhlciwgcmVwb3J0aW5nIHRoZW0gYWxsIGFzXG4gKiAnT2JqZWN0Jy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC44LjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnICgqIC0+IHsqfSkgLT4gU3RyaW5nXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudHlwZSh7fSk7IC8vPT4gXCJPYmplY3RcIlxuICogICAgICBSLnR5cGUoMSk7IC8vPT4gXCJOdW1iZXJcIlxuICogICAgICBSLnR5cGUoZmFsc2UpOyAvLz0+IFwiQm9vbGVhblwiXG4gKiAgICAgIFIudHlwZSgncycpOyAvLz0+IFwiU3RyaW5nXCJcbiAqICAgICAgUi50eXBlKG51bGwpOyAvLz0+IFwiTnVsbFwiXG4gKiAgICAgIFIudHlwZShbXSk7IC8vPT4gXCJBcnJheVwiXG4gKiAgICAgIFIudHlwZSgvW0Etel0vKTsgLy89PiBcIlJlZ0V4cFwiXG4gKiAgICAgIFIudHlwZSgoKSA9PiB7fSk7IC8vPT4gXCJGdW5jdGlvblwiXG4gKiAgICAgIFIudHlwZSh1bmRlZmluZWQpOyAvLz0+IFwiVW5kZWZpbmVkXCJcbiAqL1xudmFyIHR5cGUgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MShmdW5jdGlvbiB0eXBlKHZhbCkge1xuICByZXR1cm4gdmFsID09PSBudWxsID8gJ051bGwnIDogdmFsID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpLnNsaWNlKDgsIC0xKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgdHlwZTsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBgIWAgb2YgaXRzIGFyZ3VtZW50LiBJdCB3aWxsIHJldHVybiBgdHJ1ZWAgd2hlblxuICogcGFzc2VkIGZhbHNlLXkgdmFsdWUsIGFuZCBgZmFsc2VgIHdoZW4gcGFzc2VkIGEgdHJ1dGgteSBvbmUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IGEgYW55IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgbG9naWNhbCBpbnZlcnNlIG9mIHBhc3NlZCBhcmd1bWVudC5cbiAqIEBzZWUgUi5jb21wbGVtZW50XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5ub3QodHJ1ZSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5ub3QoZmFsc2UpOyAvLz0+IHRydWVcbiAqICAgICAgUi5ub3QoMCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm5vdCgxKTsgLy89PiBmYWxzZVxuICovXG52YXIgbm90ID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gbm90KGEpIHtcbiAgcmV0dXJuICFhO1xufSk7XG5leHBvcnQgZGVmYXVsdCBub3Q7IiwiaW1wb3J0IGxpZnQgZnJvbSAnLi9saWZ0JztcbmltcG9ydCBub3QgZnJvbSAnLi9ub3QnO1xuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYGZgIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gYGdgIHN1Y2ggdGhhdCBpZiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHNcbiAqIHdoZW4gYGZgIHJldHVybnMgYSBcInRydXRoeVwiIHZhbHVlLCBgZ2AgcmV0dXJucyBgZmFsc2VgIGFuZCB3aGVuIGBmYCByZXR1cm5zIGEgXCJmYWxzeVwiIHZhbHVlIGBnYCByZXR1cm5zIGB0cnVlYC5cbiAqXG4gKiBgUi5jb21wbGVtZW50YCBtYXkgYmUgYXBwbGllZCB0byBhbnkgZnVuY3RvclxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoKi4uLiAtPiAqKSAtPiAoKi4uLiAtPiBCb29sZWFuKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIubm90XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzTm90TmlsID0gUi5jb21wbGVtZW50KFIuaXNOaWwpO1xuICogICAgICBpc05pbChudWxsKTsgLy89PiB0cnVlXG4gKiAgICAgIGlzTm90TmlsKG51bGwpOyAvLz0+IGZhbHNlXG4gKiAgICAgIGlzTmlsKDcpOyAvLz0+IGZhbHNlXG4gKiAgICAgIGlzTm90TmlsKDcpOyAvLz0+IHRydWVcbiAqL1xudmFyIGNvbXBsZW1lbnQgPSAvKiNfX1BVUkVfXyovbGlmdChub3QpO1xuZXhwb3J0IGRlZmF1bHQgY29tcGxlbWVudDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcGlwZShmLCBnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGcuY2FsbCh0aGlzLCBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufSIsImltcG9ydCBfaXNBcnJheSBmcm9tICcuL19pc0FycmF5JztcblxuLyoqXG4gKiBUaGlzIGNoZWNrcyB3aGV0aGVyIGEgZnVuY3Rpb24gaGFzIGEgW21ldGhvZG5hbWVdIGZ1bmN0aW9uLiBJZiBpdCBpc24ndCBhblxuICogYXJyYXkgaXQgd2lsbCBleGVjdXRlIHRoYXQgZnVuY3Rpb24gb3RoZXJ3aXNlIGl0IHdpbGwgZGVmYXVsdCB0byB0aGUgcmFtZGFcbiAqIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiByYW1kYSBpbXBsZW10YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RuYW1lIHByb3BlcnR5IHRvIGNoZWNrIGZvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICogQHJldHVybiB7T2JqZWN0fSBXaGF0ZXZlciB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBtZXRob2QgaXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jaGVja0Zvck1ldGhvZChtZXRob2RuYW1lLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2xlbmd0aCAtIDFdO1xuICAgIHJldHVybiBfaXNBcnJheShvYmopIHx8IHR5cGVvZiBvYmpbbWV0aG9kbmFtZV0gIT09ICdmdW5jdGlvbicgPyBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogb2JqW21ldGhvZG5hbWVdLmFwcGx5KG9iaiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCBsZW5ndGggLSAxKSk7XG4gIH07XG59IiwiaW1wb3J0IF9jaGVja0Zvck1ldGhvZCBmcm9tICcuL2ludGVybmFsL19jaGVja0Zvck1ldGhvZCc7XG5pbXBvcnQgX2N1cnJ5MyBmcm9tICcuL2ludGVybmFsL19jdXJyeTMnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZyAob3Igb2JqZWN0IHdpdGggYSBgc2xpY2VgXG4gKiBtZXRob2QpIGZyb20gYGZyb21JbmRleGAgKGluY2x1c2l2ZSkgdG8gYHRvSW5kZXhgIChleGNsdXNpdmUpLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBzbGljZWAgbWV0aG9kIG9mIHRoZSB0aGlyZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjRcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gW2FdIC0+IFthXVxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXggVGhlIHN0YXJ0IGluZGV4IChpbmNsdXNpdmUpLlxuICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXggVGhlIGVuZCBpbmRleCAoZXhjbHVzaXZlKS5cbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnNsaWNlKDEsIDMsIFsnYScsICdiJywgJ2MnLCAnZCddKTsgICAgICAgIC8vPT4gWydiJywgJ2MnXVxuICogICAgICBSLnNsaWNlKDEsIEluZmluaXR5LCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7IC8vPT4gWydiJywgJ2MnLCAnZCddXG4gKiAgICAgIFIuc2xpY2UoMCwgLTEsIFsnYScsICdiJywgJ2MnLCAnZCddKTsgICAgICAgLy89PiBbJ2EnLCAnYicsICdjJ11cbiAqICAgICAgUi5zbGljZSgtMywgLTEsIFsnYScsICdiJywgJ2MnLCAnZCddKTsgICAgICAvLz0+IFsnYicsICdjJ11cbiAqICAgICAgUi5zbGljZSgwLCAzLCAncmFtZGEnKTsgICAgICAgICAgICAgICAgICAgICAvLz0+ICdyYW0nXG4gKi9cbnZhciBzbGljZSA9IC8qI19fUFVSRV9fKi9fY3VycnkzKCAvKiNfX1BVUkVfXyovX2NoZWNrRm9yTWV0aG9kKCdzbGljZScsIGZ1bmN0aW9uIHNsaWNlKGZyb21JbmRleCwgdG9JbmRleCwgbGlzdCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgZnJvbUluZGV4LCB0b0luZGV4KTtcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHNsaWNlOyIsImltcG9ydCBfY2hlY2tGb3JNZXRob2QgZnJvbSAnLi9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QnO1xuaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBzbGljZSBmcm9tICcuL3NsaWNlJztcblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBidXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGdpdmVuIGxpc3Qgb3Igc3RyaW5nIChvciBvYmplY3RcbiAqIHdpdGggYSBgdGFpbGAgbWV0aG9kKS5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgc2xpY2VgIG1ldGhvZCBvZiB0aGUgZmlyc3QgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5oZWFkLCBSLmluaXQsIFIubGFzdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGFpbChbMSwgMiwgM10pOyAgLy89PiBbMiwgM11cbiAqICAgICAgUi50YWlsKFsxLCAyXSk7ICAgICAvLz0+IFsyXVxuICogICAgICBSLnRhaWwoWzFdKTsgICAgICAgIC8vPT4gW11cbiAqICAgICAgUi50YWlsKFtdKTsgICAgICAgICAvLz0+IFtdXG4gKlxuICogICAgICBSLnRhaWwoJ2FiYycpOyAgLy89PiAnYmMnXG4gKiAgICAgIFIudGFpbCgnYWInKTsgICAvLz0+ICdiJ1xuICogICAgICBSLnRhaWwoJ2EnKTsgICAgLy89PiAnJ1xuICogICAgICBSLnRhaWwoJycpOyAgICAgLy89PiAnJ1xuICovXG52YXIgdGFpbCA9IC8qI19fUFVSRV9fKi9fY3VycnkxKCAvKiNfX1BVUkVfXyovX2NoZWNrRm9yTWV0aG9kKCd0YWlsJywgLyojX19QVVJFX18qL3NsaWNlKDEsIEluZmluaXR5KSkpO1xuZXhwb3J0IGRlZmF1bHQgdGFpbDsiLCJpbXBvcnQgX2FyaXR5IGZyb20gJy4vaW50ZXJuYWwvX2FyaXR5JztcbmltcG9ydCBfcGlwZSBmcm9tICcuL2ludGVybmFsL19waXBlJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnLi9yZWR1Y2UnO1xuaW1wb3J0IHRhaWwgZnJvbSAnLi90YWlsJztcblxuLyoqXG4gKiBQZXJmb3JtcyBsZWZ0LXRvLXJpZ2h0IGZ1bmN0aW9uIGNvbXBvc2l0aW9uLiBUaGUgbGVmdG1vc3QgZnVuY3Rpb24gbWF5IGhhdmVcbiAqIGFueSBhcml0eTsgdGhlIHJlbWFpbmluZyBmdW5jdGlvbnMgbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiBJbiBzb21lIGxpYnJhcmllcyB0aGlzIGZ1bmN0aW9uIGlzIG5hbWVkIGBzZXF1ZW5jZWAuXG4gKlxuICogKipOb3RlOioqIFRoZSByZXN1bHQgb2YgcGlwZSBpcyBub3QgYXV0b21hdGljYWxseSBjdXJyaWVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoKGEsIGIsIC4uLiwgbikgLT4gbyksIChvIC0+IHApLCAuLi4sICh4IC0+IHkpLCAoeSAtPiB6KSkgLT4gKChhLCBiLCAuLi4sIG4pIC0+IHopXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLmNvbXBvc2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZiA9IFIucGlwZShNYXRoLnBvdywgUi5uZWdhdGUsIFIuaW5jKTtcbiAqXG4gKiAgICAgIGYoMywgNCk7IC8vIC0oM140KSArIDFcbiAqIEBzeW1iIFIucGlwZShmLCBnLCBoKShhLCBiKSA9IGgoZyhmKGEsIGIpKSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlwZSgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3BpcGUgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50Jyk7XG4gIH1cbiAgcmV0dXJuIF9hcml0eShhcmd1bWVudHNbMF0ubGVuZ3RoLCByZWR1Y2UoX3BpcGUsIGFyZ3VtZW50c1swXSwgdGFpbChhcmd1bWVudHMpKSk7XG59IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBfaXNTdHJpbmcgZnJvbSAnLi9pbnRlcm5hbC9faXNTdHJpbmcnO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBvciBzdHJpbmcgd2l0aCB0aGUgZWxlbWVudHMgb3IgY2hhcmFjdGVycyBpbiByZXZlcnNlXG4gKiBvcmRlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGxpc3RcbiAqIEByZXR1cm4ge0FycmF5fFN0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnJldmVyc2UoWzEsIDIsIDNdKTsgIC8vPT4gWzMsIDIsIDFdXG4gKiAgICAgIFIucmV2ZXJzZShbMSwgMl0pOyAgICAgLy89PiBbMiwgMV1cbiAqICAgICAgUi5yZXZlcnNlKFsxXSk7ICAgICAgICAvLz0+IFsxXVxuICogICAgICBSLnJldmVyc2UoW10pOyAgICAgICAgIC8vPT4gW11cbiAqXG4gKiAgICAgIFIucmV2ZXJzZSgnYWJjJyk7ICAgICAgLy89PiAnY2JhJ1xuICogICAgICBSLnJldmVyc2UoJ2FiJyk7ICAgICAgIC8vPT4gJ2JhJ1xuICogICAgICBSLnJldmVyc2UoJ2EnKTsgICAgICAgIC8vPT4gJ2EnXG4gKiAgICAgIFIucmV2ZXJzZSgnJyk7ICAgICAgICAgLy89PiAnJ1xuICovXG52YXIgcmV2ZXJzZSA9IC8qI19fUFVSRV9fKi9fY3VycnkxKGZ1bmN0aW9uIHJldmVyc2UobGlzdCkge1xuICByZXR1cm4gX2lzU3RyaW5nKGxpc3QpID8gbGlzdC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCkucmV2ZXJzZSgpO1xufSk7XG5leHBvcnQgZGVmYXVsdCByZXZlcnNlOyIsImltcG9ydCBwaXBlIGZyb20gJy4vcGlwZSc7XG5pbXBvcnQgcmV2ZXJzZSBmcm9tICcuL3JldmVyc2UnO1xuXG4vKipcbiAqIFBlcmZvcm1zIHJpZ2h0LXRvLWxlZnQgZnVuY3Rpb24gY29tcG9zaXRpb24uIFRoZSByaWdodG1vc3QgZnVuY3Rpb24gbWF5IGhhdmVcbiAqIGFueSBhcml0eTsgdGhlIHJlbWFpbmluZyBmdW5jdGlvbnMgbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIHJlc3VsdCBvZiBjb21wb3NlIGlzIG5vdCBhdXRvbWF0aWNhbGx5IGN1cnJpZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCh5IC0+IHopLCAoeCAtPiB5KSwgLi4uLCAobyAtPiBwKSwgKChhLCBiLCAuLi4sIG4pIC0+IG8pKSAtPiAoKGEsIGIsIC4uLiwgbikgLT4geilcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IC4uLmZ1bmN0aW9ucyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLnBpcGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgY2xhc3N5R3JlZXRpbmcgPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4gXCJUaGUgbmFtZSdzIFwiICsgbGFzdE5hbWUgKyBcIiwgXCIgKyBmaXJzdE5hbWUgKyBcIiBcIiArIGxhc3ROYW1lXG4gKiAgICAgIHZhciB5ZWxsR3JlZXRpbmcgPSBSLmNvbXBvc2UoUi50b1VwcGVyLCBjbGFzc3lHcmVldGluZyk7XG4gKiAgICAgIHllbGxHcmVldGluZygnSmFtZXMnLCAnQm9uZCcpOyAvLz0+IFwiVEhFIE5BTUUnUyBCT05ELCBKQU1FUyBCT05EXCJcbiAqXG4gKiAgICAgIFIuY29tcG9zZShNYXRoLmFicywgUi5hZGQoMSksIFIubXVsdGlwbHkoMikpKC00KSAvLz0+IDdcbiAqXG4gKiBAc3ltYiBSLmNvbXBvc2UoZiwgZywgaCkoYSwgYikgPSBmKGcoaChhLCBiKSkpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb21wb3NlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCcpO1xuICB9XG4gIHJldHVybiBwaXBlLmFwcGx5KHRoaXMsIHJldmVyc2UoYXJndW1lbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5RnJvbUl0ZXJhdG9yKGl0ZXIpIHtcbiAgdmFyIGxpc3QgPSBbXTtcbiAgdmFyIG5leHQ7XG4gIHdoaWxlICghKG5leHQgPSBpdGVyLm5leHQoKSkuZG9uZSkge1xuICAgIGxpc3QucHVzaChuZXh0LnZhbHVlKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY29udGFpbnNXaXRoKHByZWQsIHgsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgaWYgKHByZWQoeCwgbGlzdFtpZHhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZnVuY3Rpb25OYW1lKGYpIHtcbiAgLy8gU3RyaW5nKHggPT4geCkgZXZhbHVhdGVzIHRvIFwieCA9PiB4XCIsIHNvIHRoZSBwYXR0ZXJuIG1heSBub3QgbWF0Y2guXG4gIHZhciBtYXRjaCA9IFN0cmluZyhmKS5tYXRjaCgvXmZ1bmN0aW9uIChcXHcqKS8pO1xuICByZXR1cm4gbWF0Y2ggPT0gbnVsbCA/ICcnIDogbWF0Y2hbMV07XG59IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgaXRzIGFyZ3VtZW50cyBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2UuIFZhbHVlcyBhcmVcbiAqIGlkZW50aWNhbCBpZiB0aGV5IHJlZmVyZW5jZSB0aGUgc2FtZSBtZW1vcnkuIGBOYU5gIGlzIGlkZW50aWNhbCB0byBgTmFOYDtcbiAqIGAwYCBhbmQgYC0wYCBhcmUgbm90IGlkZW50aWNhbC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgYSAtPiBhIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBvID0ge307XG4gKiAgICAgIFIuaWRlbnRpY2FsKG8sIG8pOyAvLz0+IHRydWVcbiAqICAgICAgUi5pZGVudGljYWwoMSwgMSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlkZW50aWNhbCgxLCAnMScpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaWRlbnRpY2FsKFtdLCBbXSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5pZGVudGljYWwoMCwgLTApOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaWRlbnRpY2FsKE5hTiwgTmFOKTsgLy89PiB0cnVlXG4gKi9cbnZhciBpZGVudGljYWwgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBpZGVudGljYWwoYSwgYikge1xuICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gIGlmIChhID09PSBiKSB7XG4gICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IGlkZW50aWNhbDsiLCJpbXBvcnQgX2FycmF5RnJvbUl0ZXJhdG9yIGZyb20gJy4vX2FycmF5RnJvbUl0ZXJhdG9yJztcbmltcG9ydCBfY29udGFpbnNXaXRoIGZyb20gJy4vX2NvbnRhaW5zV2l0aCc7XG5pbXBvcnQgX2Z1bmN0aW9uTmFtZSBmcm9tICcuL19mdW5jdGlvbk5hbWUnO1xuaW1wb3J0IF9oYXMgZnJvbSAnLi9faGFzJztcbmltcG9ydCBpZGVudGljYWwgZnJvbSAnLi4vaWRlbnRpY2FsJztcbmltcG9ydCBrZXlzIGZyb20gJy4uL2tleXMnO1xuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdHlwZSc7XG5cbi8qKlxuICogcHJpdmF0ZSBfdW5pcUNvbnRlbnRFcXVhbHMgZnVuY3Rpb24uXG4gKiBUaGF0IGZ1bmN0aW9uIGlzIGNoZWNraW5nIGVxdWFsaXR5IG9mIDIgaXRlcmF0b3IgY29udGVudHMgd2l0aCAyIGFzc3VtcHRpb25zXG4gKiAtIGl0ZXJhdG9ycyBsZW5ndGhzIGFyZSB0aGUgc2FtZVxuICogLSBpdGVyYXRvcnMgdmFsdWVzIGFyZSB1bmlxdWVcbiAqXG4gKiBmYWxzZS1wb3NpdGl2ZSByZXN1bHQgd2lsbCBiZSByZXR1cm5lZCBmb3IgY29tcGFyaXNpb24gb2YsIGUuZy5cbiAqIC0gWzEsMiwzXSBhbmQgWzEsMiwzLDRdXG4gKiAtIFsxLDEsMV0gYW5kIFsxLDIsM11cbiAqICovXG5cbmZ1bmN0aW9uIF91bmlxQ29udGVudEVxdWFscyhhSXRlcmF0b3IsIGJJdGVyYXRvciwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIGEgPSBfYXJyYXlGcm9tSXRlcmF0b3IoYUl0ZXJhdG9yKTtcbiAgdmFyIGIgPSBfYXJyYXlGcm9tSXRlcmF0b3IoYkl0ZXJhdG9yKTtcblxuICBmdW5jdGlvbiBlcShfYSwgX2IpIHtcbiAgICByZXR1cm4gX2VxdWFscyhfYSwgX2IsIHN0YWNrQS5zbGljZSgpLCBzdGFja0Iuc2xpY2UoKSk7XG4gIH1cblxuICAvLyBpZiAqYSogYXJyYXkgY29udGFpbnMgYW55IGVsZW1lbnQgdGhhdCBpcyBub3QgaW5jbHVkZWQgaW4gKmIqXG4gIHJldHVybiAhX2NvbnRhaW5zV2l0aChmdW5jdGlvbiAoYiwgYUl0ZW0pIHtcbiAgICByZXR1cm4gIV9jb250YWluc1dpdGgoZXEsIGFJdGVtLCBiKTtcbiAgfSwgYiwgYSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9lcXVhbHMoYSwgYiwgc3RhY2tBLCBzdGFja0IpIHtcbiAgaWYgKGlkZW50aWNhbChhLCBiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIHR5cGVBID0gdHlwZShhKTtcblxuICBpZiAodHlwZUEgIT09IHR5cGUoYikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYVsnZmFudGFzeS1sYW5kL2VxdWFscyddID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBiWydmYW50YXN5LWxhbmQvZXF1YWxzJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFbJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnXSA9PT0gJ2Z1bmN0aW9uJyAmJiBhWydmYW50YXN5LWxhbmQvZXF1YWxzJ10oYikgJiYgdHlwZW9mIGJbJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnXSA9PT0gJ2Z1bmN0aW9uJyAmJiBiWydmYW50YXN5LWxhbmQvZXF1YWxzJ10oYSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGEuZXF1YWxzID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBiLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlb2YgYS5lcXVhbHMgPT09ICdmdW5jdGlvbicgJiYgYS5lcXVhbHMoYikgJiYgdHlwZW9mIGIuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmIGIuZXF1YWxzKGEpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlQSkge1xuICAgIGNhc2UgJ0FyZ3VtZW50cyc6XG4gICAgY2FzZSAnQXJyYXknOlxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICBpZiAodHlwZW9mIGEuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiYgX2Z1bmN0aW9uTmFtZShhLmNvbnN0cnVjdG9yKSA9PT0gJ1Byb21pc2UnKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQm9vbGVhbic6XG4gICAgY2FzZSAnTnVtYmVyJzpcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgaWYgKCEodHlwZW9mIGEgPT09IHR5cGVvZiBiICYmIGlkZW50aWNhbChhLnZhbHVlT2YoKSwgYi52YWx1ZU9mKCkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdEYXRlJzpcbiAgICAgIGlmICghaWRlbnRpY2FsKGEudmFsdWVPZigpLCBiLnZhbHVlT2YoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRXJyb3InOlxuICAgICAgcmV0dXJuIGEubmFtZSA9PT0gYi5uYW1lICYmIGEubWVzc2FnZSA9PT0gYi5tZXNzYWdlO1xuICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICBpZiAoIShhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5nbG9iYWwgPT09IGIuZ2xvYmFsICYmIGEuaWdub3JlQ2FzZSA9PT0gYi5pZ25vcmVDYXNlICYmIGEubXVsdGlsaW5lID09PSBiLm11bHRpbGluZSAmJiBhLnN0aWNreSA9PT0gYi5zdGlja3kgJiYgYS51bmljb2RlID09PSBiLnVuaWNvZGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGlkeCA9IHN0YWNrQS5sZW5ndGggLSAxO1xuICB3aGlsZSAoaWR4ID49IDApIHtcbiAgICBpZiAoc3RhY2tBW2lkeF0gPT09IGEpIHtcbiAgICAgIHJldHVybiBzdGFja0JbaWR4XSA9PT0gYjtcbiAgICB9XG4gICAgaWR4IC09IDE7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVBKSB7XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdW5pcUNvbnRlbnRFcXVhbHMoYS5lbnRyaWVzKCksIGIuZW50cmllcygpLCBzdGFja0EuY29uY2F0KFthXSksIHN0YWNrQi5jb25jYXQoW2JdKSk7XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdW5pcUNvbnRlbnRFcXVhbHMoYS52YWx1ZXMoKSwgYi52YWx1ZXMoKSwgc3RhY2tBLmNvbmNhdChbYV0pLCBzdGFja0IuY29uY2F0KFtiXSkpO1xuICAgIGNhc2UgJ0FyZ3VtZW50cyc6XG4gICAgY2FzZSAnQXJyYXknOlxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgY2FzZSAnQm9vbGVhbic6XG4gICAgY2FzZSAnTnVtYmVyJzpcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgIGNhc2UgJ0RhdGUnOlxuICAgIGNhc2UgJ0Vycm9yJzpcbiAgICBjYXNlICdSZWdFeHAnOlxuICAgIGNhc2UgJ0ludDhBcnJheSc6XG4gICAgY2FzZSAnVWludDhBcnJheSc6XG4gICAgY2FzZSAnVWludDhDbGFtcGVkQXJyYXknOlxuICAgIGNhc2UgJ0ludDE2QXJyYXknOlxuICAgIGNhc2UgJ1VpbnQxNkFycmF5JzpcbiAgICBjYXNlICdJbnQzMkFycmF5JzpcbiAgICBjYXNlICdVaW50MzJBcnJheSc6XG4gICAgY2FzZSAnRmxvYXQzMkFycmF5JzpcbiAgICBjYXNlICdGbG9hdDY0QXJyYXknOlxuICAgIGNhc2UgJ0FycmF5QnVmZmVyJzpcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBWYWx1ZXMgb2Ygb3RoZXIgdHlwZXMgYXJlIG9ubHkgZXF1YWwgaWYgaWRlbnRpY2FsLlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0ga2V5cyhhKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5cyhiKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZXh0ZW5kZWRTdGFja0EgPSBzdGFja0EuY29uY2F0KFthXSk7XG4gIHZhciBleHRlbmRlZFN0YWNrQiA9IHN0YWNrQi5jb25jYXQoW2JdKTtcblxuICBpZHggPSBrZXlzQS5sZW5ndGggLSAxO1xuICB3aGlsZSAoaWR4ID49IDApIHtcbiAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcbiAgICBpZiAoIShfaGFzKGtleSwgYikgJiYgX2VxdWFscyhiW2tleV0sIGFba2V5XSwgZXh0ZW5kZWRTdGFja0EsIGV4dGVuZGVkU3RhY2tCKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWR4IC09IDE7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfZXF1YWxzIGZyb20gJy4vaW50ZXJuYWwvX2VxdWFscyc7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgaXRzIGFyZ3VtZW50cyBhcmUgZXF1aXZhbGVudCwgYGZhbHNlYCBvdGhlcndpc2UuIEhhbmRsZXNcbiAqIGN5Y2xpY2FsIGRhdGEgc3RydWN0dXJlcy5cbiAqXG4gKiBEaXNwYXRjaGVzIHN5bW1ldHJpY2FsbHkgdG8gdGhlIGBlcXVhbHNgIG1ldGhvZHMgb2YgYm90aCBhcmd1bWVudHMsIGlmXG4gKiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE1LjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBhIC0+IGIgLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5lcXVhbHMoMSwgMSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmVxdWFscygxLCAnMScpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuZXF1YWxzKFsxLCAyLCAzXSwgWzEsIDIsIDNdKTsgLy89PiB0cnVlXG4gKlxuICogICAgICB2YXIgYSA9IHt9OyBhLnYgPSBhO1xuICogICAgICB2YXIgYiA9IHt9OyBiLnYgPSBiO1xuICogICAgICBSLmVxdWFscyhhLCBiKTsgLy89PiB0cnVlXG4gKi9cbnZhciBlcXVhbHMgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICByZXR1cm4gX2VxdWFscyhhLCBiLCBbXSwgW10pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBlcXVhbHM7IiwiaW1wb3J0IGVxdWFscyBmcm9tICcuLi9lcXVhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5kZXhPZihsaXN0LCBhLCBpZHgpIHtcbiAgdmFyIGluZiwgaXRlbTtcbiAgLy8gQXJyYXkucHJvdG90eXBlLmluZGV4T2YgZG9lc24ndCBleGlzdCBiZWxvdyBJRTlcbiAgaWYgKHR5cGVvZiBsaXN0LmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBhKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpZiAoYSA9PT0gMCkge1xuICAgICAgICAgIC8vIG1hbnVhbGx5IGNyYXdsIHRoZSBsaXN0IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gKzAgYW5kIC0wXG4gICAgICAgICAgaW5mID0gMSAvIGE7XG4gICAgICAgICAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVtID0gbGlzdFtpZHhdO1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IDAgJiYgMSAvIGl0ZW0gPT09IGluZikge1xuICAgICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChhICE9PSBhKSB7XG4gICAgICAgICAgLy8gTmFOXG4gICAgICAgICAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBpdGVtID0gbGlzdFtpZHhdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnbnVtYmVyJyAmJiBpdGVtICE9PSBpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vbi16ZXJvIG51bWJlcnMgY2FuIHV0aWxpc2UgU2V0XG4gICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoYSwgaWR4KTtcblxuICAgICAgLy8gYWxsIHRoZXNlIHR5cGVzIGNhbiB1dGlsaXNlIFNldFxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihhLCBpZHgpO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoYSA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIG51bGwgY2FuIHV0aWxpc2UgU2V0XG4gICAgICAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihhLCBpZHgpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGFueXRoaW5nIGVsc2Ugbm90IGNvdmVyZWQgYWJvdmUsIGRlZmVyIHRvIFIuZXF1YWxzXG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGlmIChlcXVhbHMobGlzdFtpZHhdLCBhKSkge1xuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIC0xO1xufSIsImltcG9ydCBfaW5kZXhPZiBmcm9tICcuL19pbmRleE9mJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnRhaW5zKGEsIGxpc3QpIHtcbiAgcmV0dXJuIF9pbmRleE9mKGxpc3QsIGEsIDApID49IDA7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3F1b3RlKHMpIHtcbiAgdmFyIGVzY2FwZWQgPSBzLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvW1xcYl0vZywgJ1xcXFxiJykgLy8gXFxiIG1hdGNoZXMgd29yZCBib3VuZGFyeTsgW1xcYl0gbWF0Y2hlcyBiYWNrc3BhY2VcbiAgLnJlcGxhY2UoL1xcZi9nLCAnXFxcXGYnKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykucmVwbGFjZSgvXFxyL2csICdcXFxccicpLnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKS5yZXBsYWNlKC9cXHYvZywgJ1xcXFx2JykucmVwbGFjZSgvXFwwL2csICdcXFxcMCcpO1xuXG4gIHJldHVybiAnXCInICsgZXNjYXBlZC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCInO1xufSIsIi8qKlxuICogUG9seWZpbGwgZnJvbSA8aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS90b0lTT1N0cmluZz4uXG4gKi9cbnZhciBwYWQgPSBmdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gKG4gPCAxMCA/ICcwJyA6ICcnKSArIG47XG59O1xuXG52YXIgX3RvSVNPU3RyaW5nID0gdHlwZW9mIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nID8gZnVuY3Rpb24gX3RvSVNPU3RyaW5nKGQpIHtcbiAgcmV0dXJuIGQudG9JU09TdHJpbmcoKTtcbn0gOiBmdW5jdGlvbiBfdG9JU09TdHJpbmcoZCkge1xuICByZXR1cm4gZC5nZXRVVENGdWxsWWVhcigpICsgJy0nICsgcGFkKGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgcGFkKGQuZ2V0VVRDRGF0ZSgpKSArICdUJyArIHBhZChkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgcGFkKGQuZ2V0VVRDTWludXRlcygpKSArICc6JyArIHBhZChkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAoZC5nZXRVVENNaWxsaXNlY29uZHMoKSAvIDEwMDApLnRvRml4ZWQoMykuc2xpY2UoMiwgNSkgKyAnWic7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBfdG9JU09TdHJpbmc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbXBsZW1lbnQoZikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9maWx0ZXIoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBpZiAoZm4obGlzdFtpZHhdKSkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gbGlzdFtpZHhdO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc09iamVjdCh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufSIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vX2N1cnJ5Mic7XG5pbXBvcnQgX3hmQmFzZSBmcm9tICcuL194ZkJhc2UnO1xuXG52YXIgWEZpbHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFhGaWx0ZXIoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYRmlsdGVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYRmlsdGVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uIChyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZihpbnB1dCkgPyB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpIDogcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBYRmlsdGVyO1xufSgpO1xuXG52YXIgX3hmaWx0ZXIgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBfeGZpbHRlcihmLCB4Zikge1xuICByZXR1cm4gbmV3IFhGaWx0ZXIoZiwgeGYpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBfeGZpbHRlcjsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9kaXNwYXRjaGFibGUgZnJvbSAnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJztcbmltcG9ydCBfZmlsdGVyIGZyb20gJy4vaW50ZXJuYWwvX2ZpbHRlcic7XG5pbXBvcnQgX2lzT2JqZWN0IGZyb20gJy4vaW50ZXJuYWwvX2lzT2JqZWN0JztcbmltcG9ydCBfcmVkdWNlIGZyb20gJy4vaW50ZXJuYWwvX3JlZHVjZSc7XG5pbXBvcnQgX3hmaWx0ZXIgZnJvbSAnLi9pbnRlcm5hbC9feGZpbHRlcic7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMnO1xuXG4vKipcbiAqIFRha2VzIGEgcHJlZGljYXRlIGFuZCBhIGBGaWx0ZXJhYmxlYCwgYW5kIHJldHVybnMgYSBuZXcgZmlsdGVyYWJsZSBvZiB0aGVcbiAqIHNhbWUgdHlwZSBjb250YWluaW5nIHRoZSBtZW1iZXJzIG9mIHRoZSBnaXZlbiBmaWx0ZXJhYmxlIHdoaWNoIHNhdGlzZnkgdGhlXG4gKiBnaXZlbiBwcmVkaWNhdGUuIEZpbHRlcmFibGUgb2JqZWN0cyBpbmNsdWRlIHBsYWluIG9iamVjdHMgb3IgYW55IG9iamVjdFxuICogdGhhdCBoYXMgYSBmaWx0ZXIgbWV0aG9kIHN1Y2ggYXMgYEFycmF5YC5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgZmlsdGVyYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBGaWx0ZXJhYmxlIGYgPT4gKGEgLT4gQm9vbGVhbikgLT4gZiBhIC0+IGYgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZFxuICogQHBhcmFtIHtBcnJheX0gZmlsdGVyYWJsZVxuICogQHJldHVybiB7QXJyYXl9IEZpbHRlcmFibGVcbiAqIEBzZWUgUi5yZWplY3QsIFIudHJhbnNkdWNlLCBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzRXZlbiA9IG4gPT4gbiAlIDIgPT09IDA7XG4gKlxuICogICAgICBSLmZpbHRlcihpc0V2ZW4sIFsxLCAyLCAzLCA0XSk7IC8vPT4gWzIsIDRdXG4gKlxuICogICAgICBSLmZpbHRlcihpc0V2ZW4sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2I6IDIsIGQ6IDR9XG4gKi9cbnZhciBmaWx0ZXIgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MiggLyojX19QVVJFX18qL19kaXNwYXRjaGFibGUoWydmaWx0ZXInXSwgX3hmaWx0ZXIsIGZ1bmN0aW9uIChwcmVkLCBmaWx0ZXJhYmxlKSB7XG4gIHJldHVybiBfaXNPYmplY3QoZmlsdGVyYWJsZSkgPyBfcmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIGlmIChwcmVkKGZpbHRlcmFibGVba2V5XSkpIHtcbiAgICAgIGFjY1trZXldID0gZmlsdGVyYWJsZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSwga2V5cyhmaWx0ZXJhYmxlKSkgOlxuICAvLyBlbHNlXG4gIF9maWx0ZXIocHJlZCwgZmlsdGVyYWJsZSk7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBmaWx0ZXI7IiwiaW1wb3J0IF9jb21wbGVtZW50IGZyb20gJy4vaW50ZXJuYWwvX2NvbXBsZW1lbnQnO1xuaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xuXG4vKipcbiAqIFRoZSBjb21wbGVtZW50IG9mIFtgZmlsdGVyYF0oI2ZpbHRlcikuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLiBGaWx0ZXJhYmxlXG4gKiBvYmplY3RzIGluY2x1ZGUgcGxhaW4gb2JqZWN0cyBvciBhbnkgb2JqZWN0IHRoYXQgaGFzIGEgZmlsdGVyIG1ldGhvZCBzdWNoXG4gKiBhcyBgQXJyYXlgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBmIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNlZSBSLmZpbHRlciwgUi50cmFuc2R1Y2UsIFIuYWRkSW5kZXhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNPZGQgPSAobikgPT4gbiAlIDIgPT09IDE7XG4gKlxuICogICAgICBSLnJlamVjdChpc09kZCwgWzEsIDIsIDMsIDRdKTsgLy89PiBbMiwgNF1cbiAqXG4gKiAgICAgIFIucmVqZWN0KGlzT2RkLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHtiOiAyLCBkOiA0fVxuICovXG52YXIgcmVqZWN0ID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gcmVqZWN0KHByZWQsIGZpbHRlcmFibGUpIHtcbiAgcmV0dXJuIGZpbHRlcihfY29tcGxlbWVudChwcmVkKSwgZmlsdGVyYWJsZSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHJlamVjdDsiLCJpbXBvcnQgX2NvbnRhaW5zIGZyb20gJy4vX2NvbnRhaW5zJztcbmltcG9ydCBfbWFwIGZyb20gJy4vX21hcCc7XG5pbXBvcnQgX3F1b3RlIGZyb20gJy4vX3F1b3RlJztcbmltcG9ydCBfdG9JU09TdHJpbmcgZnJvbSAnLi9fdG9JU09TdHJpbmcnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi4va2V5cyc7XG5pbXBvcnQgcmVqZWN0IGZyb20gJy4uL3JlamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1N0cmluZyh4LCBzZWVuKSB7XG4gIHZhciByZWN1ciA9IGZ1bmN0aW9uIHJlY3VyKHkpIHtcbiAgICB2YXIgeHMgPSBzZWVuLmNvbmNhdChbeF0pO1xuICAgIHJldHVybiBfY29udGFpbnMoeSwgeHMpID8gJzxDaXJjdWxhcj4nIDogX3RvU3RyaW5nKHksIHhzKTtcbiAgfTtcblxuICAvLyAgbWFwUGFpcnMgOjogKE9iamVjdCwgW1N0cmluZ10pIC0+IFtTdHJpbmddXG4gIHZhciBtYXBQYWlycyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgICByZXR1cm4gX21hcChmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIF9xdW90ZShrKSArICc6ICcgKyByZWN1cihvYmpba10pO1xuICAgIH0sIGtleXMuc2xpY2UoKS5zb3J0KCkpO1xuICB9O1xuXG4gIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpKSB7XG4gICAgY2FzZSAnW29iamVjdCBBcmd1bWVudHNdJzpcbiAgICAgIHJldHVybiAnKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCcgKyBfbWFwKHJlY3VyLCB4KS5qb2luKCcsICcpICsgJykpJztcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6XG4gICAgICByZXR1cm4gJ1snICsgX21hcChyZWN1ciwgeCkuY29uY2F0KG1hcFBhaXJzKHgsIHJlamVjdChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gKC9eXFxkKyQvLnRlc3QoaylcbiAgICAgICAgKTtcbiAgICAgIH0sIGtleXMoeCkpKSkuam9pbignLCAnKSArICddJztcbiAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgPyAnbmV3IEJvb2xlYW4oJyArIHJlY3VyKHgudmFsdWVPZigpKSArICcpJyA6IHgudG9TdHJpbmcoKTtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIHJldHVybiAnbmV3IERhdGUoJyArIChpc05hTih4LnZhbHVlT2YoKSkgPyByZWN1cihOYU4pIDogX3F1b3RlKF90b0lTT1N0cmluZyh4KSkpICsgJyknO1xuICAgIGNhc2UgJ1tvYmplY3QgTnVsbF0nOlxuICAgICAgcmV0dXJuICdudWxsJztcbiAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/ICduZXcgTnVtYmVyKCcgKyByZWN1cih4LnZhbHVlT2YoKSkgKyAnKScgOiAxIC8geCA9PT0gLUluZmluaXR5ID8gJy0wJyA6IHgudG9TdHJpbmcoMTApO1xuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnID8gJ25ldyBTdHJpbmcoJyArIHJlY3VyKHgudmFsdWVPZigpKSArICcpJyA6IF9xdW90ZSh4KTtcbiAgICBjYXNlICdbb2JqZWN0IFVuZGVmaW5lZF0nOlxuICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHgudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHJlcHIgPSB4LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChyZXByICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgIHJldHVybiByZXByO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3snICsgbWFwUGFpcnMoeCwga2V5cyh4KSkuam9pbignLCAnKSArICd9JztcbiAgfVxufSIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgX3RvU3RyaW5nIGZyb20gJy4vaW50ZXJuYWwvX3RvU3RyaW5nJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHZhbHVlLiBgZXZhbGAnaW5nIHRoZSBvdXRwdXRcbiAqIHNob3VsZCByZXN1bHQgaW4gYSB2YWx1ZSBlcXVpdmFsZW50IHRvIHRoZSBpbnB1dCB2YWx1ZS4gTWFueSBvZiB0aGUgYnVpbHQtaW5cbiAqIGB0b1N0cmluZ2AgbWV0aG9kcyBkbyBub3Qgc2F0aXNmeSB0aGlzIHJlcXVpcmVtZW50LlxuICpcbiAqIElmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBgW29iamVjdCBPYmplY3RdYCB3aXRoIGEgYHRvU3RyaW5nYCBtZXRob2Qgb3RoZXJcbiAqIHRoYW4gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLCB0aGlzIG1ldGhvZCBpcyBpbnZva2VkIHdpdGggbm8gYXJndW1lbnRzXG4gKiB0byBwcm9kdWNlIHRoZSByZXR1cm4gdmFsdWUuIFRoaXMgbWVhbnMgdXNlci1kZWZpbmVkIGNvbnN0cnVjdG9yIGZ1bmN0aW9uc1xuICogY2FuIHByb3ZpZGUgYSBzdWl0YWJsZSBgdG9TdHJpbmdgIG1ldGhvZC4gRm9yIGV4YW1wbGU6XG4gKlxuICogICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAqICAgICAgIHRoaXMueCA9IHg7XG4gKiAgICAgICB0aGlzLnkgPSB5O1xuICogICAgIH1cbiAqXG4gKiAgICAgUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgICByZXR1cm4gJ25ldyBQb2ludCgnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAqICAgICB9O1xuICpcbiAqICAgICBSLnRvU3RyaW5nKG5ldyBQb2ludCgxLCAyKSk7IC8vPT4gJ25ldyBQb2ludCgxLCAyKSdcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAc2lnICogLT4gU3RyaW5nXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudG9TdHJpbmcoNDIpOyAvLz0+ICc0MidcbiAqICAgICAgUi50b1N0cmluZygnYWJjJyk7IC8vPT4gJ1wiYWJjXCInXG4gKiAgICAgIFIudG9TdHJpbmcoWzEsIDIsIDNdKTsgLy89PiAnWzEsIDIsIDNdJ1xuICogICAgICBSLnRvU3RyaW5nKHtmb286IDEsIGJhcjogMiwgYmF6OiAzfSk7IC8vPT4gJ3tcImJhclwiOiAyLCBcImJhelwiOiAzLCBcImZvb1wiOiAxfSdcbiAqICAgICAgUi50b1N0cmluZyhuZXcgRGF0ZSgnMjAwMS0wMi0wM1QwNDowNTowNlonKSk7IC8vPT4gJ25ldyBEYXRlKFwiMjAwMS0wMi0wM1QwNDowNTowNi4wMDBaXCIpJ1xuICovXG52YXIgdG9TdHJpbmcgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MShmdW5jdGlvbiB0b1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIF90b1N0cmluZyh2YWwsIFtdKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgdG9TdHJpbmc7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfbWFwIGZyb20gJy4vaW50ZXJuYWwvX21hcCc7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcbmltcG9ydCBtYXggZnJvbSAnLi9tYXgnO1xuaW1wb3J0IHBsdWNrIGZyb20gJy4vcGx1Y2snO1xuaW1wb3J0IHJlZHVjZSBmcm9tICcuL3JlZHVjZSc7XG5cbi8qKlxuICogQWNjZXB0cyBhIGNvbnZlcmdpbmcgZnVuY3Rpb24gYW5kIGEgbGlzdCBvZiBicmFuY2hpbmcgZnVuY3Rpb25zIGFuZCByZXR1cm5zXG4gKiBhIG5ldyBmdW5jdGlvbi4gV2hlbiBpbnZva2VkLCB0aGlzIG5ldyBmdW5jdGlvbiBpcyBhcHBsaWVkIHRvIHNvbWVcbiAqIGFyZ3VtZW50cywgZWFjaCBicmFuY2hpbmcgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aG9zZSBzYW1lIGFyZ3VtZW50cy4gVGhlXG4gKiByZXN1bHRzIG9mIGVhY2ggYnJhbmNoaW5nIGZ1bmN0aW9uIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIHRoZSBjb252ZXJnaW5nXG4gKiBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSByZXR1cm4gdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNC4yXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCh4MSwgeDIsIC4uLikgLT4geikgLT4gWygoYSwgYiwgLi4uKSAtPiB4MSksICgoYSwgYiwgLi4uKSAtPiB4MiksIC4uLl0gLT4gKGEgLT4gYiAtPiAuLi4gLT4geilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFmdGVyIEEgZnVuY3Rpb24uIGBhZnRlcmAgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIHJldHVybiB2YWx1ZXMgb2ZcbiAqICAgICAgICBgZm4xYCBhbmQgYGZuMmAgYXMgaXRzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7QXJyYXl9IGZ1bmN0aW9ucyBBIGxpc3Qgb2YgZnVuY3Rpb25zLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uLlxuICogQHNlZSBSLnVzZVdpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYXZlcmFnZSA9IFIuY29udmVyZ2UoUi5kaXZpZGUsIFtSLnN1bSwgUi5sZW5ndGhdKVxuICogICAgICBhdmVyYWdlKFsxLCAyLCAzLCA0LCA1LCA2LCA3XSkgLy89PiA0XG4gKlxuICogICAgICB2YXIgc3RyYW5nZUNvbmNhdCA9IFIuY29udmVyZ2UoUi5jb25jYXQsIFtSLnRvVXBwZXIsIFIudG9Mb3dlcl0pXG4gKiAgICAgIHN0cmFuZ2VDb25jYXQoXCJZb2RlbFwiKSAvLz0+IFwiWU9ERUx5b2RlbFwiXG4gKlxuICogQHN5bWIgUi5jb252ZXJnZShmLCBbZywgaF0pKGEsIGIpID0gZihnKGEsIGIpLCBoKGEsIGIpKVxuICovXG52YXIgY29udmVyZ2UgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBjb252ZXJnZShhZnRlciwgZm5zKSB7XG4gIHJldHVybiBjdXJyeU4ocmVkdWNlKG1heCwgMCwgcGx1Y2soJ2xlbmd0aCcsIGZucykpLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHJldHVybiBhZnRlci5hcHBseShjb250ZXh0LCBfbWFwKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGZucykpO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29udmVyZ2U7IiwiaW1wb3J0IF9jdXJyeU4gZnJvbSAnLi9fY3VycnlOJztcbmltcG9ydCBfaGFzIGZyb20gJy4vX2hhcyc7XG5pbXBvcnQgX3hmQmFzZSBmcm9tICcuL194ZkJhc2UnO1xuXG52YXIgWFJlZHVjZUJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gWFJlZHVjZUJ5KHZhbHVlRm4sIHZhbHVlQWNjLCBrZXlGbiwgeGYpIHtcbiAgICB0aGlzLnZhbHVlRm4gPSB2YWx1ZUZuO1xuICAgIHRoaXMudmFsdWVBY2MgPSB2YWx1ZUFjYztcbiAgICB0aGlzLmtleUZuID0ga2V5Rm47XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuaW5wdXRzID0ge307XG4gIH1cbiAgWFJlZHVjZUJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWFJlZHVjZUJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5pbnB1dHMpIHtcbiAgICAgIGlmIChfaGFzKGtleSwgdGhpcy5pbnB1dHMpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmlucHV0c1trZXldKTtcbiAgICAgICAgaWYgKHJlc3VsdFsnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFsnQEB0cmFuc2R1Y2VyL3ZhbHVlJ107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnB1dHMgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfTtcbiAgWFJlZHVjZUJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uIChyZXN1bHQsIGlucHV0KSB7XG4gICAgdmFyIGtleSA9IHRoaXMua2V5Rm4oaW5wdXQpO1xuICAgIHRoaXMuaW5wdXRzW2tleV0gPSB0aGlzLmlucHV0c1trZXldIHx8IFtrZXksIHRoaXMudmFsdWVBY2NdO1xuICAgIHRoaXMuaW5wdXRzW2tleV1bMV0gPSB0aGlzLnZhbHVlRm4odGhpcy5pbnB1dHNba2V5XVsxXSwgaW5wdXQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIFhSZWR1Y2VCeTtcbn0oKTtcblxudmFyIF94cmVkdWNlQnkgPSAvKiNfX1BVUkVfXyovX2N1cnJ5Tig0LCBbXSwgZnVuY3Rpb24gX3hyZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIHhmKSB7XG4gIHJldHVybiBuZXcgWFJlZHVjZUJ5KHZhbHVlRm4sIHZhbHVlQWNjLCBrZXlGbiwgeGYpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBfeHJlZHVjZUJ5OyIsImltcG9ydCBfY3VycnlOIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Tic7XG5pbXBvcnQgX2Rpc3BhdGNoYWJsZSBmcm9tICcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnO1xuaW1wb3J0IF9oYXMgZnJvbSAnLi9pbnRlcm5hbC9faGFzJztcbmltcG9ydCBfcmVkdWNlIGZyb20gJy4vaW50ZXJuYWwvX3JlZHVjZSc7XG5pbXBvcnQgX3hyZWR1Y2VCeSBmcm9tICcuL2ludGVybmFsL194cmVkdWNlQnknO1xuXG4vKipcbiAqIEdyb3VwcyB0aGUgZWxlbWVudHMgb2YgdGhlIGxpc3QgYWNjb3JkaW5nIHRvIHRoZSByZXN1bHQgb2YgY2FsbGluZ1xuICogdGhlIFN0cmluZy1yZXR1cm5pbmcgZnVuY3Rpb24gYGtleUZuYCBvbiBlYWNoIGVsZW1lbnQgYW5kIHJlZHVjZXMgdGhlIGVsZW1lbnRzXG4gKiBvZiBlYWNoIGdyb3VwIHRvIGEgc2luZ2xlIHZhbHVlIHZpYSB0aGUgcmVkdWNlciBmdW5jdGlvbiBgdmFsdWVGbmAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBiYXNpY2FsbHkgYSBtb3JlIGdlbmVyYWwgW2Bncm91cEJ5YF0oI2dyb3VwQnkpIGZ1bmN0aW9uLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gKGIgLT4gU3RyaW5nKSAtPiBbYl0gLT4ge1N0cmluZzogYX1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlRm4gVGhlIGZ1bmN0aW9uIHRoYXQgcmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgZWFjaCBncm91cCB0byBhIHNpbmdsZVxuICogICAgICAgIHZhbHVlLiBSZWNlaXZlcyB0d28gdmFsdWVzLCBhY2N1bXVsYXRvciBmb3IgYSBwYXJ0aWN1bGFyIGdyb3VwIGFuZCB0aGUgY3VycmVudCBlbGVtZW50LlxuICogQHBhcmFtIHsqfSBhY2MgVGhlIChpbml0aWFsKSBhY2N1bXVsYXRvciB2YWx1ZSBmb3IgZWFjaCBncm91cC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleUZuIFRoZSBmdW5jdGlvbiB0aGF0IG1hcHMgdGhlIGxpc3QncyBlbGVtZW50IGludG8gYSBrZXkuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBncm91cC5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggdGhlIG91dHB1dCBvZiBga2V5Rm5gIGZvciBrZXlzLCBtYXBwZWQgdG8gdGhlIG91dHB1dCBvZlxuICogICAgICAgICBgdmFsdWVGbmAgZm9yIGVsZW1lbnRzIHdoaWNoIHByb2R1Y2VkIHRoYXQga2V5IHdoZW4gcGFzc2VkIHRvIGBrZXlGbmAuXG4gKiBAc2VlIFIuZ3JvdXBCeSwgUi5yZWR1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgcmVkdWNlVG9OYW1lc0J5ID0gUi5yZWR1Y2VCeSgoYWNjLCBzdHVkZW50KSA9PiBhY2MuY29uY2F0KHN0dWRlbnQubmFtZSksIFtdKTtcbiAqICAgICAgdmFyIG5hbWVzQnlHcmFkZSA9IHJlZHVjZVRvTmFtZXNCeShmdW5jdGlvbihzdHVkZW50KSB7XG4gKiAgICAgICAgdmFyIHNjb3JlID0gc3R1ZGVudC5zY29yZTtcbiAqICAgICAgICByZXR1cm4gc2NvcmUgPCA2NSA/ICdGJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgNzAgPyAnRCcgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDgwID8gJ0MnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA5MCA/ICdCJyA6ICdBJztcbiAqICAgICAgfSk7XG4gKiAgICAgIHZhciBzdHVkZW50cyA9IFt7bmFtZTogJ0x1Y3knLCBzY29yZTogOTJ9LFxuICogICAgICAgICAgICAgICAgICAgICAge25hbWU6ICdEcmV3Jywgc2NvcmU6IDg1fSxcbiAqICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLlxuICogICAgICAgICAgICAgICAgICAgICAge25hbWU6ICdCYXJ0Jywgc2NvcmU6IDYyfV07XG4gKiAgICAgIG5hbWVzQnlHcmFkZShzdHVkZW50cyk7XG4gKiAgICAgIC8vIHtcbiAqICAgICAgLy8gICAnQSc6IFsnTHVjeSddLFxuICogICAgICAvLyAgICdCJzogWydEcmV3J11cbiAqICAgICAgLy8gICAvLyAuLi4sXG4gKiAgICAgIC8vICAgJ0YnOiBbJ0JhcnQnXVxuICogICAgICAvLyB9XG4gKi9cbnZhciByZWR1Y2VCeSA9IC8qI19fUFVSRV9fKi9fY3VycnlOKDQsIFtdLCAvKiNfX1BVUkVfXyovX2Rpc3BhdGNoYWJsZShbXSwgX3hyZWR1Y2VCeSwgZnVuY3Rpb24gcmVkdWNlQnkodmFsdWVGbiwgdmFsdWVBY2MsIGtleUZuLCBsaXN0KSB7XG4gIHJldHVybiBfcmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsdCkge1xuICAgIHZhciBrZXkgPSBrZXlGbihlbHQpO1xuICAgIGFjY1trZXldID0gdmFsdWVGbihfaGFzKGtleSwgYWNjKSA/IGFjY1trZXldIDogdmFsdWVBY2MsIGVsdCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30sIGxpc3QpO1xufSkpO1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlQnk7IiwiaW1wb3J0IHJlZHVjZUJ5IGZyb20gJy4vcmVkdWNlQnknO1xuXG4vKipcbiAqIENvdW50cyB0aGUgZWxlbWVudHMgb2YgYSBsaXN0IGFjY29yZGluZyB0byBob3cgbWFueSBtYXRjaCBlYWNoIHZhbHVlIG9mIGFcbiAqIGtleSBnZW5lcmF0ZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBSZXR1cm5zIGFuIG9iamVjdCBtYXBwaW5nIHRoZSBrZXlzXG4gKiBwcm9kdWNlZCBieSBgZm5gIHRvIHRoZSBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgaW4gdGhlIGxpc3QuIE5vdGUgdGhhdCBhbGxcbiAqIGtleXMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBiZWNhdXNlIG9mIGhvdyBKYXZhU2NyaXB0IG9iamVjdHMgd29yay5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgKGEgLT4gU3RyaW5nKSAtPiBbYV0gLT4geyp9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdXNlZCB0byBtYXAgdmFsdWVzIHRvIGtleXMuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGNvdW50IGVsZW1lbnRzIGZyb20uXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBtYXBwaW5nIGtleXMgdG8gbnVtYmVyIG9mIG9jY3VycmVuY2VzIGluIHRoZSBsaXN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBudW1iZXJzID0gWzEuMCwgMS4xLCAxLjIsIDIuMCwgMy4wLCAyLjJdO1xuICogICAgICBSLmNvdW50QnkoTWF0aC5mbG9vcikobnVtYmVycyk7ICAgIC8vPT4geycxJzogMywgJzInOiAyLCAnMyc6IDF9XG4gKlxuICogICAgICB2YXIgbGV0dGVycyA9IFsnYScsICdiJywgJ0EnLCAnYScsICdCJywgJ2MnXTtcbiAqICAgICAgUi5jb3VudEJ5KFIudG9Mb3dlcikobGV0dGVycyk7ICAgLy89PiB7J2EnOiAzLCAnYic6IDIsICdjJzogMX1cbiAqL1xudmFyIGNvdW50QnkgPSAvKiNfX1BVUkVfXyovcmVkdWNlQnkoZnVuY3Rpb24gKGFjYywgZWxlbSkge1xuICByZXR1cm4gYWNjICsgMTtcbn0sIDApO1xuZXhwb3J0IGRlZmF1bHQgY291bnRCeTsiLCJpbXBvcnQgYWRkIGZyb20gJy4vYWRkJztcblxuLyoqXG4gKiBEZWNyZW1lbnRzIGl0cyBhcmd1bWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IG4gLSAxXG4gKiBAc2VlIFIuaW5jXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5kZWMoNDIpOyAvLz0+IDQxXG4gKi9cbnZhciBkZWMgPSAvKiNfX1BVUkVfXyovYWRkKC0xKTtcbmV4cG9ydCBkZWZhdWx0IGRlYzsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9pc1N0cmluZyBmcm9tICcuL2ludGVybmFsL19pc1N0cmluZyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnRoIGVsZW1lbnQgb2YgdGhlIGdpdmVuIGxpc3Qgb3Igc3RyaW5nLiBJZiBuIGlzIG5lZ2F0aXZlIHRoZVxuICogZWxlbWVudCBhdCBpbmRleCBsZW5ndGggKyBuIGlzIHJldHVybmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IFthXSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGxpc3QgPSBbJ2ZvbycsICdiYXInLCAnYmF6JywgJ3F1dXgnXTtcbiAqICAgICAgUi5udGgoMSwgbGlzdCk7IC8vPT4gJ2JhcidcbiAqICAgICAgUi5udGgoLTEsIGxpc3QpOyAvLz0+ICdxdXV4J1xuICogICAgICBSLm50aCgtOTksIGxpc3QpOyAvLz0+IHVuZGVmaW5lZFxuICpcbiAqICAgICAgUi5udGgoMiwgJ2FiYycpOyAvLz0+ICdjJ1xuICogICAgICBSLm50aCgzLCAnYWJjJyk7IC8vPT4gJydcbiAqIEBzeW1iIFIubnRoKC0xLCBbYSwgYiwgY10pID0gY1xuICogQHN5bWIgUi5udGgoMCwgW2EsIGIsIGNdKSA9IGFcbiAqIEBzeW1iIFIubnRoKDEsIFthLCBiLCBjXSkgPSBiXG4gKi9cbnZhciBudGggPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBudGgob2Zmc2V0LCBsaXN0KSB7XG4gIHZhciBpZHggPSBvZmZzZXQgPCAwID8gbGlzdC5sZW5ndGggKyBvZmZzZXQgOiBvZmZzZXQ7XG4gIHJldHVybiBfaXNTdHJpbmcobGlzdCkgPyBsaXN0LmNoYXJBdChpZHgpIDogbGlzdFtpZHhdO1xufSk7XG5leHBvcnQgZGVmYXVsdCBudGg7IiwiaW1wb3J0IG50aCBmcm9tICcuL250aCc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjRcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5pbml0LCBSLmhlYWQsIFIudGFpbFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubGFzdChbJ2ZpJywgJ2ZvJywgJ2Z1bSddKTsgLy89PiAnZnVtJ1xuICogICAgICBSLmxhc3QoW10pOyAvLz0+IHVuZGVmaW5lZFxuICpcbiAqICAgICAgUi5sYXN0KCdhYmMnKTsgLy89PiAnYydcbiAqICAgICAgUi5sYXN0KCcnKTsgLy89PiAnJ1xuICovXG52YXIgbGFzdCA9IC8qI19fUFVSRV9fKi9udGgoLTEpO1xuZXhwb3J0IGRlZmF1bHQgbGFzdDsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuaW1wb3J0IGN1cnJ5TiBmcm9tICcuL2N1cnJ5Tic7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBmdW5jdGlvbiBtdWNoIGxpa2UgdGhlIHN1cHBsaWVkIG9uZSwgZXhjZXB0IHRoYXQgdGhlIGZpcnN0IHR3b1xuICogYXJndW1lbnRzJyBvcmRlciBpcyByZXZlcnNlZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKGEsIGIsIGMsIC4uLikgLT4geikgLT4gKGIgLT4gYSAtPiBjIC0+IC4uLiAtPiB6KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZSB3aXRoIGl0cyBmaXJzdCB0d28gcGFyYW1ldGVycyByZXZlcnNlZC5cbiAqIEByZXR1cm4geyp9IFRoZSByZXN1bHQgb2YgaW52b2tpbmcgYGZuYCB3aXRoIGl0cyBmaXJzdCB0d28gcGFyYW1ldGVycycgb3JkZXIgcmV2ZXJzZWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG1lcmdlVGhyZWUgPSAoYSwgYiwgYykgPT4gW10uY29uY2F0KGEsIGIsIGMpO1xuICpcbiAqICAgICAgbWVyZ2VUaHJlZSgxLCAyLCAzKTsgLy89PiBbMSwgMiwgM11cbiAqXG4gKiAgICAgIFIuZmxpcChtZXJnZVRocmVlKSgxLCAyLCAzKTsgLy89PiBbMiwgMSwgM11cbiAqIEBzeW1iIFIuZmxpcChmKShhLCBiLCBjKSA9IGYoYiwgYSwgYylcbiAqL1xudmFyIGZsaXAgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MShmdW5jdGlvbiBmbGlwKGZuKSB7XG4gIHJldHVybiBjdXJyeU4oZm4ubGVuZ3RoLCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICBhcmdzWzBdID0gYjtcbiAgICBhcmdzWzFdID0gYTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBmbGlwOyIsImltcG9ydCBfY2hlY2tGb3JNZXRob2QgZnJvbSAnLi9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QnO1xuaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gaW5wdXQgYGxpc3RgLCBjYWxsaW5nIGEgcHJvdmlkZWQgZnVuY3Rpb24gYGZuYCBmb3IgZWFjaFxuICogZWxlbWVudCBpbiB0aGUgbGlzdC5cbiAqXG4gKiBgZm5gIHJlY2VpdmVzIG9uZSBhcmd1bWVudDogKih2YWx1ZSkqLlxuICpcbiAqIE5vdGU6IGBSLmZvckVhY2hgIGRvZXMgbm90IHNraXAgZGVsZXRlZCBvciB1bmFzc2lnbmVkIGluZGljZXMgKHNwYXJzZVxuICogYXJyYXlzKSwgdW5saWtlIHRoZSBuYXRpdmUgYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QuIEZvciBtb3JlXG4gKiBkZXRhaWxzIG9uIHRoaXMgYmVoYXZpb3IsIHNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2gjRGVzY3JpcHRpb25cbiAqXG4gKiBBbHNvIG5vdGUgdGhhdCwgdW5saWtlIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAsIFJhbWRhJ3MgYGZvckVhY2hgIHJldHVybnNcbiAqIHRoZSBvcmlnaW5hbCBhcnJheS4gSW4gc29tZSBsaWJyYXJpZXMgdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgZWFjaGAuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGZvckVhY2hgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMVxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gKikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZS4gUmVjZWl2ZXMgb25lIGFyZ3VtZW50LCBgdmFsdWVgLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG9yaWdpbmFsIGxpc3QuXG4gKiBAc2VlIFIuYWRkSW5kZXhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgcHJpbnRYUGx1c0ZpdmUgPSB4ID0+IGNvbnNvbGUubG9nKHggKyA1KTtcbiAqICAgICAgUi5mb3JFYWNoKHByaW50WFBsdXNGaXZlLCBbMSwgMiwgM10pOyAvLz0+IFsxLCAyLCAzXVxuICogICAgICAvLyBsb2dzIDZcbiAqICAgICAgLy8gbG9ncyA3XG4gKiAgICAgIC8vIGxvZ3MgOFxuICogQHN5bWIgUi5mb3JFYWNoKGYsIFthLCBiLCBjXSkgPSBbYSwgYiwgY11cbiAqL1xudmFyIGZvckVhY2ggPSAvKiNfX1BVUkVfXyovX2N1cnJ5MiggLyojX19QVVJFX18qL19jaGVja0Zvck1ldGhvZCgnZm9yRWFjaCcsIGZ1bmN0aW9uIGZvckVhY2goZm4sIGxpc3QpIHtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGZuKGxpc3RbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBmb3JFYWNoOyIsImltcG9ydCBudGggZnJvbSAnLi9udGgnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGdpdmVuIGxpc3Qgb3Igc3RyaW5nLiBJbiBzb21lIGxpYnJhcmllc1xuICogdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgZmlyc3RgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IGEgfCBVbmRlZmluZWRcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIudGFpbCwgUi5pbml0LCBSLmxhc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmhlYWQoWydmaScsICdmbycsICdmdW0nXSk7IC8vPT4gJ2ZpJ1xuICogICAgICBSLmhlYWQoW10pOyAvLz0+IHVuZGVmaW5lZFxuICpcbiAqICAgICAgUi5oZWFkKCdhYmMnKTsgLy89PiAnYSdcbiAqICAgICAgUi5oZWFkKCcnKTsgLy89PiAnJ1xuICovXG52YXIgaGVhZCA9IC8qI19fUFVSRV9fKi9udGgoMCk7XG5leHBvcnQgZGVmYXVsdCBoZWFkOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pZGVudGl0eSh4KSB7XG4gIHJldHVybiB4O1xufSIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgX2lkZW50aXR5IGZyb20gJy4vaW50ZXJuYWwvX2lkZW50aXR5JztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCByZXR1cm4gdGhlIHBhcmFtZXRlciBzdXBwbGllZCB0byBpdC4gR29vZFxuICogYXMgYSBkZWZhdWx0IG9yIHBsYWNlaG9sZGVyIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIGEgLT4gYVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0byByZXR1cm4uXG4gKiBAcmV0dXJuIHsqfSBUaGUgaW5wdXQgdmFsdWUsIGB4YC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmlkZW50aXR5KDEpOyAvLz0+IDFcbiAqXG4gKiAgICAgIHZhciBvYmogPSB7fTtcbiAqICAgICAgUi5pZGVudGl0eShvYmopID09PSBvYmo7IC8vPT4gdHJ1ZVxuICogQHN5bWIgUi5pZGVudGl0eShhKSA9IGFcbiAqL1xudmFyIGlkZW50aXR5ID0gLyojX19QVVJFX18qL19jdXJyeTEoX2lkZW50aXR5KTtcbmV4cG9ydCBkZWZhdWx0IGlkZW50aXR5OyIsImltcG9ydCBfY3VycnkzIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Myc7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHByb2Nlc3MgZWl0aGVyIHRoZSBgb25UcnVlYCBvciB0aGUgYG9uRmFsc2VgXG4gKiBmdW5jdGlvbiBkZXBlbmRpbmcgdXBvbiB0aGUgcmVzdWx0IG9mIHRoZSBgY29uZGl0aW9uYCBwcmVkaWNhdGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKCouLi4gLT4gQm9vbGVhbikgLT4gKCouLi4gLT4gKikgLT4gKCouLi4gLT4gKikgLT4gKCouLi4gLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbmRpdGlvbiBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25UcnVlIEEgZnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIGBjb25kaXRpb25gIGV2YWx1YXRlcyB0byBhIHRydXRoeSB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uRmFsc2UgQSBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgYGNvbmRpdGlvbmAgZXZhbHVhdGVzIHRvIGEgZmFsc3kgdmFsdWUuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgdW5hcnkgZnVuY3Rpb24gdGhhdCB3aWxsIHByb2Nlc3MgZWl0aGVyIHRoZSBgb25UcnVlYCBvciB0aGUgYG9uRmFsc2VgXG4gKiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVwZW5kaW5nIHVwb24gdGhlIHJlc3VsdCBvZiB0aGUgYGNvbmRpdGlvbmAgcHJlZGljYXRlLlxuICogQHNlZSBSLnVubGVzcywgUi53aGVuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGluY0NvdW50ID0gUi5pZkVsc2UoXG4gKiAgICAgICAgUi5oYXMoJ2NvdW50JyksXG4gKiAgICAgICAgUi5vdmVyKFIubGVuc1Byb3AoJ2NvdW50JyksIFIuaW5jKSxcbiAqICAgICAgICBSLmFzc29jKCdjb3VudCcsIDEpXG4gKiAgICAgICk7XG4gKiAgICAgIGluY0NvdW50KHt9KTsgICAgICAgICAgIC8vPT4geyBjb3VudDogMSB9XG4gKiAgICAgIGluY0NvdW50KHsgY291bnQ6IDEgfSk7IC8vPT4geyBjb3VudDogMiB9XG4gKi9cbnZhciBpZkVsc2UgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MyhmdW5jdGlvbiBpZkVsc2UoY29uZGl0aW9uLCBvblRydWUsIG9uRmFsc2UpIHtcbiAgcmV0dXJuIGN1cnJ5TihNYXRoLm1heChjb25kaXRpb24ubGVuZ3RoLCBvblRydWUubGVuZ3RoLCBvbkZhbHNlLmxlbmd0aCksIGZ1bmN0aW9uIF9pZkVsc2UoKSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gb25UcnVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBvbkZhbHNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBpZkVsc2U7IiwiaW1wb3J0IGFkZCBmcm9tICcuL2FkZCc7XG5cbi8qKlxuICogSW5jcmVtZW50cyBpdHMgYXJndW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfSBuICsgMVxuICogQHNlZSBSLmRlY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaW5jKDQyKTsgLy89PiA0M1xuICovXG52YXIgaW5jID0gLyojX19QVVJFX18qL2FkZCgxKTtcbmV4cG9ydCBkZWZhdWx0IGluYzsiLCJpbXBvcnQgcmVkdWNlQnkgZnJvbSAnLi9yZWR1Y2VCeSc7XG5cbi8qKlxuICogR2l2ZW4gYSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyBhIGtleSwgdHVybnMgYSBsaXN0IG9mIG9iamVjdHMgaW50byBhblxuICogb2JqZWN0IGluZGV4aW5nIHRoZSBvYmplY3RzIGJ5IHRoZSBnaXZlbiBrZXkuIE5vdGUgdGhhdCBpZiBtdWx0aXBsZVxuICogb2JqZWN0cyBnZW5lcmF0ZSB0aGUgc2FtZSB2YWx1ZSBmb3IgdGhlIGluZGV4aW5nIGtleSBvbmx5IHRoZSBsYXN0IHZhbHVlXG4gKiB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBnZW5lcmF0ZWQgb2JqZWN0LlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBTdHJpbmcpIC0+IFt7azogdn1dIC0+IHtrOiB7azogdn19XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiA6OiBhIC0+IFN0cmluZ1xuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gaW5kZXhcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGluZGV4aW5nIGVhY2ggYXJyYXkgZWxlbWVudCBieSB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGxpc3QgPSBbe2lkOiAneHl6JywgdGl0bGU6ICdBJ30sIHtpZDogJ2FiYycsIHRpdGxlOiAnQid9XTtcbiAqICAgICAgUi5pbmRleEJ5KFIucHJvcCgnaWQnKSwgbGlzdCk7XG4gKiAgICAgIC8vPT4ge2FiYzoge2lkOiAnYWJjJywgdGl0bGU6ICdCJ30sIHh5ejoge2lkOiAneHl6JywgdGl0bGU6ICdBJ319XG4gKi9cbnZhciBpbmRleEJ5ID0gLyojX19QVVJFX18qL3JlZHVjZUJ5KGZ1bmN0aW9uIChhY2MsIGVsZW0pIHtcbiAgcmV0dXJuIGVsZW07XG59LCBudWxsKTtcbmV4cG9ydCBkZWZhdWx0IGluZGV4Qnk7IiwiaW1wb3J0IHNsaWNlIGZyb20gJy4vc2xpY2UnO1xuXG4vKipcbiAqIFJldHVybnMgYWxsIGJ1dCB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLmxhc3QsIFIuaGVhZCwgUi50YWlsXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pbml0KFsxLCAyLCAzXSk7ICAvLz0+IFsxLCAyXVxuICogICAgICBSLmluaXQoWzEsIDJdKTsgICAgIC8vPT4gWzFdXG4gKiAgICAgIFIuaW5pdChbMV0pOyAgICAgICAgLy89PiBbXVxuICogICAgICBSLmluaXQoW10pOyAgICAgICAgIC8vPT4gW11cbiAqXG4gKiAgICAgIFIuaW5pdCgnYWJjJyk7ICAvLz0+ICdhYidcbiAqICAgICAgUi5pbml0KCdhYicpOyAgIC8vPT4gJ2EnXG4gKiAgICAgIFIuaW5pdCgnYScpOyAgICAvLz0+ICcnXG4gKiAgICAgIFIuaW5pdCgnJyk7ICAgICAvLz0+ICcnXG4gKi9cbnZhciBpbml0ID0gLyojX19QVVJFX18qL3NsaWNlKDAsIC0xKTtcbmV4cG9ydCBkZWZhdWx0IGluaXQ7IiwiaW1wb3J0IF9jb250YWlucyBmcm9tICcuL19jb250YWlucyc7XG5cbnZhciBfU2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX1NldCgpIHtcbiAgICAvKiBnbG9iYWxzIFNldCAqL1xuICAgIHRoaXMuX25hdGl2ZVNldCA9IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgPyBuZXcgU2V0KCkgOiBudWxsO1xuICAgIHRoaXMuX2l0ZW1zID0ge307XG4gIH1cblxuICAvLyB1bnRpbCB3ZSBmaWd1cmUgb3V0IHdoeSBqc2RvYyBjaG9rZXMgb24gdGhpc1xuICAvLyBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBhZGQgdG8gdGhlIFNldFxuICAvLyBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgaXRlbSBkaWQgbm90IGV4aXN0IHByaW9yLCBvdGhlcndpc2UgZmFsc2VcbiAgLy9cbiAgX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gIWhhc09yQWRkKGl0ZW0sIHRydWUsIHRoaXMpO1xuICB9O1xuXG4gIC8vXG4gIC8vIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIGNoZWNrIGZvciBleGlzdGVuY2UgaW4gdGhlIFNldFxuICAvLyBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMgaW4gdGhlIFNldCwgb3RoZXJ3aXNlIGZhbHNlXG4gIC8vXG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGhhc09yQWRkKGl0ZW0sIGZhbHNlLCB0aGlzKTtcbiAgfTtcblxuICAvL1xuICAvLyBDb21iaW5lcyB0aGUgbG9naWMgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gaXRlbSBpcyBhIG1lbWJlciBvZiB0aGUgc2V0IGFuZFxuICAvLyBmb3IgYWRkaW5nIGEgbmV3IGl0ZW0gdG8gdGhlIHNldC5cbiAgLy9cbiAgLy8gQHBhcmFtIGl0ZW0gICAgICAgVGhlIGl0ZW0gdG8gY2hlY2sgb3IgYWRkIHRvIHRoZSBTZXQgaW5zdGFuY2UuXG4gIC8vIEBwYXJhbSBzaG91bGRBZGQgIElmIHRydWUsIHRoZSBpdGVtIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHNldCBpZiBpdCBkb2Vzbid0XG4gIC8vICAgICAgICAgICAgICAgICAgIGFscmVhZHkgZXhpc3QuXG4gIC8vIEBwYXJhbSBzZXQgICAgICAgIFRoZSBzZXQgaW5zdGFuY2UgdG8gY2hlY2sgb3IgYWRkIHRvLlxuICAvLyBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBpdGVtIGFscmVhZHkgZXhpc3RlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAvL1xuICByZXR1cm4gX1NldDtcbn0oKTtcblxuZnVuY3Rpb24gaGFzT3JBZGQoaXRlbSwgc2hvdWxkQWRkLCBzZXQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgdmFyIHByZXZTaXplLCBuZXdTaXplO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAvLyBkaXN0aW5ndWlzaCBiZXR3ZWVuICswIGFuZCAtMFxuICAgICAgaWYgKGl0ZW0gPT09IDAgJiYgMSAvIGl0ZW0gPT09IC1JbmZpbml0eSkge1xuICAgICAgICBpZiAoc2V0Ll9pdGVtc1snLTAnXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbJy0wJ10gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHRoZXNlIHR5cGVzIGNhbiBhbGwgdXRpbGlzZSB0aGUgbmF0aXZlIFNldFxuICAgICAgaWYgKHNldC5fbmF0aXZlU2V0ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICBwcmV2U2l6ZSA9IHNldC5fbmF0aXZlU2V0LnNpemU7XG4gICAgICAgICAgc2V0Ll9uYXRpdmVTZXQuYWRkKGl0ZW0pO1xuICAgICAgICAgIG5ld1NpemUgPSBzZXQuX25hdGl2ZVNldC5zaXplO1xuICAgICAgICAgIHJldHVybiBuZXdTaXplID09PSBwcmV2U2l6ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2V0Ll9uYXRpdmVTZXQuaGFzKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoISh0eXBlIGluIHNldC5faXRlbXMpKSB7XG4gICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXSA9IHt9O1xuICAgICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXVtpdGVtXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluIHNldC5faXRlbXNbdHlwZV0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdW2l0ZW1dID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIC8vIHNldC5faXRlbXNbJ2Jvb2xlYW4nXSBob2xkcyBhIHR3byBlbGVtZW50IGFycmF5XG4gICAgICAvLyByZXByZXNlbnRpbmcgWyBmYWxzZUV4aXN0cywgdHJ1ZUV4aXN0cyBdXG4gICAgICBpZiAodHlwZSBpbiBzZXQuX2l0ZW1zKSB7XG4gICAgICAgIHZhciBiSWR4ID0gaXRlbSA/IDEgOiAwO1xuICAgICAgICBpZiAoc2V0Ll9pdGVtc1t0eXBlXVtiSWR4XSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV1bYklkeF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gaXRlbSA/IFtmYWxzZSwgdHJ1ZV0gOiBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIC8vIGNvbXBhcmUgZnVuY3Rpb25zIGZvciByZWZlcmVuY2UgZXF1YWxpdHlcbiAgICAgIGlmIChzZXQuX25hdGl2ZVNldCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgcHJldlNpemUgPSBzZXQuX25hdGl2ZVNldC5zaXplO1xuICAgICAgICAgIHNldC5fbmF0aXZlU2V0LmFkZChpdGVtKTtcbiAgICAgICAgICBuZXdTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICByZXR1cm4gbmV3U2l6ZSA9PT0gcHJldlNpemU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNldC5fbmF0aXZlU2V0LmhhcyhpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEodHlwZSBpbiBzZXQuX2l0ZW1zKSkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSBbaXRlbV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9jb250YWlucyhpdGVtLCBzZXQuX2l0ZW1zW3R5cGVdKSkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0ucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIGlmIChzZXQuX2l0ZW1zW3R5cGVdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoIXNldC5faXRlbXNbJ251bGwnXSkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbJ251bGwnXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHJlZHVjZSB0aGUgc2VhcmNoIHNpemUgb2YgaGV0ZXJvZ2VuZW91cyBzZXRzIGJ5IGNyZWF0aW5nIGJ1Y2tldHNcbiAgICAgIC8vIGZvciBlYWNoIHR5cGUuXG4gICAgICB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pO1xuICAgICAgaWYgKCEodHlwZSBpbiBzZXQuX2l0ZW1zKSkge1xuICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXSA9IFtpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBzY2FuIHRocm91Z2ggYWxsIHByZXZpb3VzbHkgYXBwbGllZCBpdGVtc1xuICAgICAgaWYgKCFfY29udGFpbnMoaXRlbSwgc2V0Ll9pdGVtc1t0eXBlXSkpIHtcbiAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0ucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vLyBBIHNpbXBsZSBTZXQgdHlwZSB0aGF0IGhvbm91cnMgUi5lcXVhbHMgc2VtYW50aWNzXG5leHBvcnQgZGVmYXVsdCBfU2V0OyIsImltcG9ydCBfU2V0IGZyb20gJy4vaW50ZXJuYWwvX1NldCc7XG5pbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIG9ubHkgb25lIGNvcHkgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICogbGlzdCwgYmFzZWQgdXBvbiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHRvXG4gKiBlYWNoIGxpc3QgZWxlbWVudC4gUHJlZmVycyB0aGUgZmlyc3QgaXRlbSBpZiB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gcHJvZHVjZXNcbiAqIHRoZSBzYW1lIHZhbHVlIG9uIHR3byBpdGVtcy4gW2BSLmVxdWFsc2BdKCNlcXVhbHMpIGlzIHVzZWQgZm9yIGNvbXBhcmlzb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gYikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQSBmdW5jdGlvbiB1c2VkIHRvIHByb2R1Y2UgYSB2YWx1ZSB0byB1c2UgZHVyaW5nIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudW5pcUJ5KE1hdGguYWJzLCBbLTEsIC01LCAyLCAxMCwgMSwgMl0pOyAvLz0+IFstMSwgLTUsIDIsIDEwXVxuICovXG52YXIgdW5pcUJ5ID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gdW5pcUJ5KGZuLCBsaXN0KSB7XG4gIHZhciBzZXQgPSBuZXcgX1NldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpZHggPSAwO1xuICB2YXIgYXBwbGllZEl0ZW0sIGl0ZW07XG5cbiAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgaXRlbSA9IGxpc3RbaWR4XTtcbiAgICBhcHBsaWVkSXRlbSA9IGZuKGl0ZW0pO1xuICAgIGlmIChzZXQuYWRkKGFwcGxpZWRJdGVtKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHVuaXFCeTsiLCJpbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eSc7XG5pbXBvcnQgdW5pcUJ5IGZyb20gJy4vdW5pcUJ5JztcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyBvbmx5IG9uZSBjb3B5IG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAqIGxpc3QuIFtgUi5lcXVhbHNgXSgjZXF1YWxzKSBpcyB1c2VkIHRvIGRldGVybWluZSBlcXVhbGl0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBsaXN0IG9mIHVuaXF1ZSBpdGVtcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuaXEoWzEsIDEsIDIsIDFdKTsgLy89PiBbMSwgMl1cbiAqICAgICAgUi51bmlxKFsxLCAnMSddKTsgICAgIC8vPT4gWzEsICcxJ11cbiAqICAgICAgUi51bmlxKFtbNDJdLCBbNDJdXSk7IC8vPT4gW1s0Ml1dXG4gKi9cbnZhciB1bmlxID0gLyojX19QVVJFX18qL3VuaXFCeShpZGVudGl0eSk7XG5leHBvcnQgZGVmYXVsdCB1bmlxOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgX2lzRnVuY3Rpb24gZnJvbSAnLi9pbnRlcm5hbC9faXNGdW5jdGlvbic7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nJztcblxuLyoqXG4gKiBUdXJucyBhIG5hbWVkIG1ldGhvZCB3aXRoIGEgc3BlY2lmaWVkIGFyaXR5IGludG8gYSBmdW5jdGlvbiB0aGF0IGNhbiBiZVxuICogY2FsbGVkIGRpcmVjdGx5IHN1cHBsaWVkIHdpdGggYXJndW1lbnRzIGFuZCBhIHRhcmdldCBvYmplY3QuXG4gKlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGlzIGN1cnJpZWQgYW5kIGFjY2VwdHMgYGFyaXR5ICsgMWAgcGFyYW1ldGVycyB3aGVyZVxuICogdGhlIGZpbmFsIHBhcmFtZXRlciBpcyB0aGUgdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gU3RyaW5nIC0+IChhIC0+IGIgLT4gLi4uIC0+IG4gLT4gT2JqZWN0IC0+ICopXG4gKiBAcGFyYW0ge051bWJlcn0gYXJpdHkgTnVtYmVyIG9mIGFyZ3VtZW50cyB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gc2hvdWxkIHRha2VcbiAqICAgICAgICBiZWZvcmUgdGhlIHRhcmdldCBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kIE5hbWUgb2YgdGhlIG1ldGhvZCB0byBjYWxsLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY29uc3RydWN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHNsaWNlRnJvbSA9IFIuaW52b2tlcigxLCAnc2xpY2UnKTtcbiAqICAgICAgc2xpY2VGcm9tKDYsICdhYmNkZWZnaGlqa2xtJyk7IC8vPT4gJ2doaWprbG0nXG4gKiAgICAgIHZhciBzbGljZUZyb202ID0gUi5pbnZva2VyKDIsICdzbGljZScpKDYpO1xuICogICAgICBzbGljZUZyb202KDgsICdhYmNkZWZnaGlqa2xtJyk7IC8vPT4gJ2doJ1xuICogQHN5bWIgUi5pbnZva2VyKDAsICdtZXRob2QnKShvKSA9IG9bJ21ldGhvZCddKClcbiAqIEBzeW1iIFIuaW52b2tlcigxLCAnbWV0aG9kJykoYSwgbykgPSBvWydtZXRob2QnXShhKVxuICogQHN5bWIgUi5pbnZva2VyKDIsICdtZXRob2QnKShhLCBiLCBvKSA9IG9bJ21ldGhvZCddKGEsIGIpXG4gKi9cbnZhciBpbnZva2VyID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gaW52b2tlcihhcml0eSwgbWV0aG9kKSB7XG4gIHJldHVybiBjdXJyeU4oYXJpdHkgKyAxLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhcmdldCA9IGFyZ3VtZW50c1thcml0eV07XG4gICAgaWYgKHRhcmdldCAhPSBudWxsICYmIF9pc0Z1bmN0aW9uKHRhcmdldFttZXRob2RdKSkge1xuICAgICAgcmV0dXJuIHRhcmdldFttZXRob2RdLmFwcGx5KHRhcmdldCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCBhcml0eSkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRvU3RyaW5nKHRhcmdldCkgKyAnIGRvZXMgbm90IGhhdmUgYSBtZXRob2QgbmFtZWQgXCInICsgbWV0aG9kICsgJ1wiJyk7XG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBpbnZva2VyOyIsImltcG9ydCBpbnZva2VyIGZyb20gJy4vaW52b2tlcic7XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyBtYWRlIGJ5IGluc2VydGluZyB0aGUgYHNlcGFyYXRvcmAgYmV0d2VlbiBlYWNoIGVsZW1lbnQgYW5kXG4gKiBjb25jYXRlbmF0aW5nIGFsbCB0aGUgZWxlbWVudHMgaW50byBhIHNpbmdsZSBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBTdHJpbmcgLT4gW2FdIC0+IFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBzZXBhcmF0b3IgVGhlIHN0cmluZyB1c2VkIHRvIHNlcGFyYXRlIHRoZSBlbGVtZW50cy5cbiAqIEBwYXJhbSB7QXJyYXl9IHhzIFRoZSBlbGVtZW50cyB0byBqb2luIGludG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIG1hZGUgYnkgY29uY2F0ZW5hdGluZyBgeHNgIHdpdGggYHNlcGFyYXRvcmAuXG4gKiBAc2VlIFIuc3BsaXRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgc3BhY2VyID0gUi5qb2luKCcgJyk7XG4gKiAgICAgIHNwYWNlcihbJ2EnLCAyLCAzLjRdKTsgICAvLz0+ICdhIDIgMy40J1xuICogICAgICBSLmpvaW4oJ3wnLCBbMSwgMiwgM10pOyAgICAvLz0+ICcxfDJ8MydcbiAqL1xudmFyIGpvaW4gPSAvKiNfX1BVUkVfXyovaW52b2tlcigxLCAnam9pbicpO1xuZXhwb3J0IGRlZmF1bHQgam9pbjsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuaW1wb3J0IGNvbnZlcmdlIGZyb20gJy4vY29udmVyZ2UnO1xuXG4vKipcbiAqIGp1eHQgYXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIFsoYSwgYiwgLi4uLCBtKSAtPiBuXSAtPiAoKGEsIGIsIC4uLiwgbSkgLT4gW25dKVxuICogQHBhcmFtIHtBcnJheX0gZm5zIEFuIGFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbGlzdCBvZiB2YWx1ZXMgYWZ0ZXIgYXBwbHlpbmcgZWFjaCBvZiB0aGUgb3JpZ2luYWwgYGZuc2AgdG8gaXRzIHBhcmFtZXRlcnMuXG4gKiBAc2VlIFIuYXBwbHlTcGVjXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdldFJhbmdlID0gUi5qdXh0KFtNYXRoLm1pbiwgTWF0aC5tYXhdKTtcbiAqICAgICAgZ2V0UmFuZ2UoMywgNCwgOSwgLTMpOyAvLz0+IFstMywgOV1cbiAqIEBzeW1iIFIuanV4dChbZiwgZywgaF0pKGEsIGIpID0gW2YoYSwgYiksIGcoYSwgYiksIGgoYSwgYildXG4gKi9cbnZhciBqdXh0ID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24ganV4dChmbnMpIHtcbiAgcmV0dXJuIGNvbnZlcmdlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgfSwgZm5zKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQganV4dDsiLCJpbXBvcnQgYWRkIGZyb20gJy4vYWRkJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnLi9yZWR1Y2UnO1xuXG4vKipcbiAqIEFkZHMgdG9nZXRoZXIgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGxpc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHJldHVybiB7TnVtYmVyfSBUaGUgc3VtIG9mIGFsbCB0aGUgbnVtYmVycyBpbiB0aGUgbGlzdC5cbiAqIEBzZWUgUi5yZWR1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnN1bShbMiw0LDYsOCwxMDAsMV0pOyAvLz0+IDEyMVxuICovXG52YXIgc3VtID0gLyojX19QVVJFX18qL3JlZHVjZShhZGQsIDApO1xuZXhwb3J0IGRlZmF1bHQgc3VtOyIsImltcG9ydCBfYXJpdHkgZnJvbSAnLi9pbnRlcm5hbC9fYXJpdHknO1xuaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfaGFzIGZyb20gJy4vaW50ZXJuYWwvX2hhcyc7XG5cbi8qKlxuICogQSBjdXN0b21pc2FibGUgdmVyc2lvbiBvZiBbYFIubWVtb2l6ZWBdKCNtZW1vaXplKS4gYG1lbW9pemVXaXRoYCB0YWtlcyBhblxuICogYWRkaXRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byBhIGdpdmVuIGFyZ3VtZW50IHNldCBhbmQgdXNlZCB0b1xuICogY3JlYXRlIHRoZSBjYWNoZSBrZXkgdW5kZXIgd2hpY2ggdGhlIHJlc3VsdHMgb2YgdGhlIGZ1bmN0aW9uIHRvIGJlIG1lbW9pemVkXG4gKiB3aWxsIGJlIHN0b3JlZC4gQ2FyZSBtdXN0IGJlIHRha2VuIHdoZW4gaW1wbGVtZW50aW5nIGtleSBnZW5lcmF0aW9uIHRvIGF2b2lkXG4gKiBjbGFzaGVzIHRoYXQgbWF5IG92ZXJ3cml0ZSBwcmV2aW91cyBlbnRyaWVzIGVycm9uZW91c2x5LlxuICpcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yNC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gU3RyaW5nKSAtPiAoKi4uLiAtPiBhKSAtPiAoKi4uLiAtPiBhKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWVtb2l6ZS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBNZW1vaXplZCB2ZXJzaW9uIG9mIGBmbmAuXG4gKiBAc2VlIFIubWVtb2l6ZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIGxldCBjb3VudCA9IDA7XG4gKiAgICAgIGNvbnN0IGZhY3RvcmlhbCA9IFIubWVtb2l6ZVdpdGgoUi5pZGVudGl0eSwgbiA9PiB7XG4gKiAgICAgICAgY291bnQgKz0gMTtcbiAqICAgICAgICByZXR1cm4gUi5wcm9kdWN0KFIucmFuZ2UoMSwgbiArIDEpKTtcbiAqICAgICAgfSk7XG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGNvdW50OyAvLz0+IDFcbiAqL1xudmFyIG1lbW9pemVXaXRoID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gbWVtb2l6ZVdpdGgobUZuLCBmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIF9hcml0eShmbi5sZW5ndGgsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIga2V5ID0gbUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCFfaGFzKGtleSwgY2FjaGUpKSB7XG4gICAgICBjYWNoZVtrZXldID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBtZW1vaXplV2l0aDsiLCJpbXBvcnQgbWVtb2l6ZVdpdGggZnJvbSAnLi9tZW1vaXplV2l0aCc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnLi90b1N0cmluZyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB0aGF0LCB3aGVuIGludm9rZWQsIGNhY2hlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYGZuYFxuICogZm9yIGEgZ2l2ZW4gYXJndW1lbnQgc2V0IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlXG4gKiBtZW1vaXplZCBgZm5gIHdpdGggdGhlIHNhbWUgYXJndW1lbnQgc2V0IHdpbGwgbm90IHJlc3VsdCBpbiBhbiBhZGRpdGlvbmFsXG4gKiBjYWxsIHRvIGBmbmA7IGluc3RlYWQsIHRoZSBjYWNoZWQgcmVzdWx0IGZvciB0aGF0IHNldCBvZiBhcmd1bWVudHMgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSkgLT4gKCouLi4gLT4gYSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtZW1vaXplLlxuICogQHJldHVybiB7RnVuY3Rpb259IE1lbW9pemVkIHZlcnNpb24gb2YgYGZuYC5cbiAqIEBzZWUgUi5tZW1vaXplV2l0aFxuICogQGRlcHJlY2F0ZWQgc2luY2UgdjAuMjUuMFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIGxldCBjb3VudCA9IDA7XG4gKiAgICAgIGNvbnN0IGZhY3RvcmlhbCA9IFIubWVtb2l6ZShuID0+IHtcbiAqICAgICAgICBjb3VudCArPSAxO1xuICogICAgICAgIHJldHVybiBSLnByb2R1Y3QoUi5yYW5nZSgxLCBuICsgMSkpO1xuICogICAgICB9KTtcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgY291bnQ7IC8vPT4gMVxuICovXG52YXIgbWVtb2l6ZSA9IC8qI19fUFVSRV9fKi9tZW1vaXplV2l0aChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0b1N0cmluZyhhcmd1bWVudHMpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBtZW1vaXplOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbnVtYmVycy4gRXF1aXZhbGVudCB0byBgYSAqIGJgIGJ1dCBjdXJyaWVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgdmFsdWUuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByZXN1bHQgb2YgYGEgKiBiYC5cbiAqIEBzZWUgUi5kaXZpZGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZG91YmxlID0gUi5tdWx0aXBseSgyKTtcbiAqICAgICAgdmFyIHRyaXBsZSA9IFIubXVsdGlwbHkoMyk7XG4gKiAgICAgIGRvdWJsZSgzKTsgICAgICAgLy89PiAgNlxuICogICAgICB0cmlwbGUoNCk7ICAgICAgIC8vPT4gMTJcbiAqICAgICAgUi5tdWx0aXBseSgyLCA1KTsgIC8vPT4gMTBcbiAqL1xudmFyIG11bHRpcGx5ID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuICByZXR1cm4gYSAqIGI7XG59KTtcbmV4cG9ydCBkZWZhdWx0IG11bHRpcGx5OyIsImltcG9ydCBmaWx0ZXIgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IGp1eHQgZnJvbSAnLi9qdXh0JztcbmltcG9ydCByZWplY3QgZnJvbSAnLi9yZWplY3QnO1xuXG4vKipcbiAqIFRha2VzIGEgcHJlZGljYXRlIGFuZCBhIGxpc3Qgb3Igb3RoZXIgYEZpbHRlcmFibGVgIG9iamVjdCBhbmQgcmV0dXJucyB0aGVcbiAqIHBhaXIgb2YgZmlsdGVyYWJsZSBvYmplY3RzIG9mIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudHMgd2hpY2ggZG8gYW5kIGRvIG5vdFxuICogc2F0aXNmeSwgdGhlIHByZWRpY2F0ZSwgcmVzcGVjdGl2ZWx5LiBGaWx0ZXJhYmxlIG9iamVjdHMgaW5jbHVkZSBwbGFpbiBvYmplY3RzIG9yIGFueSBvYmplY3RcbiAqIHRoYXQgaGFzIGEgZmlsdGVyIG1ldGhvZCBzdWNoIGFzIGBBcnJheWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS40XG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBGaWx0ZXJhYmxlIGYgPT4gKGEgLT4gQm9vbGVhbikgLT4gZiBhIC0+IFtmIGEsIGYgYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdG8gZGV0ZXJtaW5lIHdoaWNoIHNpZGUgdGhlIGVsZW1lbnQgYmVsb25ncyB0by5cbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGUgdGhlIGxpc3QgKG9yIG90aGVyIGZpbHRlcmFibGUpIHRvIHBhcnRpdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSwgY29udGFpbmluZyBmaXJzdCB0aGUgc3Vic2V0IG9mIGVsZW1lbnRzIHRoYXQgc2F0aXNmeSB0aGVcbiAqICAgICAgICAgcHJlZGljYXRlLCBhbmQgc2Vjb25kIHRoZSBzdWJzZXQgb2YgZWxlbWVudHMgdGhhdCBkbyBub3Qgc2F0aXNmeS5cbiAqIEBzZWUgUi5maWx0ZXIsIFIucmVqZWN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYXJ0aXRpb24oUi5jb250YWlucygncycpLCBbJ3NzcycsICd0dHQnLCAnZm9vJywgJ2JhcnMnXSk7XG4gKiAgICAgIC8vID0+IFsgWyAnc3NzJywgJ2JhcnMnIF0sICBbICd0dHQnLCAnZm9vJyBdIF1cbiAqXG4gKiAgICAgIFIucGFydGl0aW9uKFIuY29udGFpbnMoJ3MnKSwgeyBhOiAnc3NzJywgYjogJ3R0dCcsIGZvbzogJ2JhcnMnIH0pO1xuICogICAgICAvLyA9PiBbIHsgYTogJ3NzcycsIGZvbzogJ2JhcnMnIH0sIHsgYjogJ3R0dCcgfSAgXVxuICovXG52YXIgcGFydGl0aW9uID0gLyojX19QVVJFX18qL2p1eHQoW2ZpbHRlciwgcmVqZWN0XSk7XG5leHBvcnQgZGVmYXVsdCBwYXJ0aXRpb247IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGBwaWNrYCBleGNlcHQgdGhhdCB0aGlzIG9uZSBpbmNsdWRlcyBhIGBrZXk6IHVuZGVmaW5lZGAgcGFpciBmb3JcbiAqIHByb3BlcnRpZXMgdGhhdCBkb24ndCBleGlzdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgW2tdIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7QXJyYXl9IG5hbWVzIGFuIGFycmF5IG9mIFN0cmluZyBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5IG9udG8gYSBuZXcgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY29weSBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCB3aXRoIG9ubHkgcHJvcGVydGllcyBmcm9tIGBuYW1lc2Agb24gaXQuXG4gKiBAc2VlIFIucGlja1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGlja0FsbChbJ2EnLCAnZCddLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHthOiAxLCBkOiA0fVxuICogICAgICBSLnBpY2tBbGwoWydhJywgJ2UnLCAnZiddLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHthOiAxLCBlOiB1bmRlZmluZWQsIGY6IHVuZGVmaW5lZH1cbiAqL1xudmFyIHBpY2tBbGwgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBwaWNrQWxsKG5hbWVzLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHZhciBuYW1lID0gbmFtZXNbaWR4XTtcbiAgICByZXN1bHRbbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcGlja0FsbDsiLCJpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi9tdWx0aXBseSc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJy4vcmVkdWNlJztcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHRvZ2V0aGVyIGFsbCB0aGUgZWxlbWVudHMgb2YgYSBsaXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IEFuIGFycmF5IG9mIG51bWJlcnNcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHByb2R1Y3Qgb2YgYWxsIHRoZSBudW1iZXJzIGluIHRoZSBsaXN0LlxuICogQHNlZSBSLnJlZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvZHVjdChbMiw0LDYsOCwxMDAsMV0pOyAvLz0+IDM4NDAwXG4gKi9cbnZhciBwcm9kdWN0ID0gLyojX19QVVJFX18qL3JlZHVjZShtdWx0aXBseSwgMSk7XG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0OyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcblxuLyoqXG4gKiBBY2NlcHRzIGEgZnVuY3Rpb24gYGZuYCBhbmQgYSBsaXN0IG9mIHRyYW5zZm9ybWVyIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyBhXG4gKiBuZXcgY3VycmllZCBmdW5jdGlvbi4gV2hlbiB0aGUgbmV3IGZ1bmN0aW9uIGlzIGludm9rZWQsIGl0IGNhbGxzIHRoZVxuICogZnVuY3Rpb24gYGZuYCB3aXRoIHBhcmFtZXRlcnMgY29uc2lzdGluZyBvZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgZWFjaFxuICogc3VwcGxpZWQgaGFuZGxlciBvbiBzdWNjZXNzaXZlIGFyZ3VtZW50cyB0byB0aGUgbmV3IGZ1bmN0aW9uLlxuICpcbiAqIElmIG1vcmUgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gdGhlIHJldHVybmVkIGZ1bmN0aW9uIHRoYW4gdHJhbnNmb3JtZXJcbiAqIGZ1bmN0aW9ucywgdGhvc2UgYXJndW1lbnRzIGFyZSBwYXNzZWQgZGlyZWN0bHkgdG8gYGZuYCBhcyBhZGRpdGlvbmFsXG4gKiBwYXJhbWV0ZXJzLiBJZiB5b3UgZXhwZWN0IGFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgZG9uJ3QgbmVlZCB0byBiZVxuICogdHJhbnNmb3JtZWQsIGFsdGhvdWdoIHlvdSBjYW4gaWdub3JlIHRoZW0sIGl0J3MgYmVzdCB0byBwYXNzIGFuIGlkZW50aXR5XG4gKiBmdW5jdGlvbiBzbyB0aGF0IHRoZSBuZXcgZnVuY3Rpb24gcmVwb3J0cyB0aGUgY29ycmVjdCBhcml0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKHgxLCB4MiwgLi4uKSAtPiB6KSAtPiBbKGEgLT4geDEpLCAoYiAtPiB4MiksIC4uLl0gLT4gKGEgLT4gYiAtPiAuLi4gLT4geilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtBcnJheX0gdHJhbnNmb3JtZXJzIEEgbGlzdCBvZiB0cmFuc2Zvcm1lciBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgd3JhcHBlZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5jb252ZXJnZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudXNlV2l0aChNYXRoLnBvdywgW1IuaWRlbnRpdHksIFIuaWRlbnRpdHldKSgzLCA0KTsgLy89PiA4MVxuICogICAgICBSLnVzZVdpdGgoTWF0aC5wb3csIFtSLmlkZW50aXR5LCBSLmlkZW50aXR5XSkoMykoNCk7IC8vPT4gODFcbiAqICAgICAgUi51c2VXaXRoKE1hdGgucG93LCBbUi5kZWMsIFIuaW5jXSkoMywgNCk7IC8vPT4gMzJcbiAqICAgICAgUi51c2VXaXRoKE1hdGgucG93LCBbUi5kZWMsIFIuaW5jXSkoMykoNCk7IC8vPT4gMzJcbiAqIEBzeW1iIFIudXNlV2l0aChmLCBbZywgaF0pKGEsIGIpID0gZihnKGEpLCBoKGIpKVxuICovXG52YXIgdXNlV2l0aCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIHVzZVdpdGgoZm4sIHRyYW5zZm9ybWVycykge1xuICByZXR1cm4gY3VycnlOKHRyYW5zZm9ybWVycy5sZW5ndGgsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCB0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICBhcmdzLnB1c2godHJhbnNmb3JtZXJzW2lkeF0uY2FsbCh0aGlzLCBhcmd1bWVudHNbaWR4XSkpO1xuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIHRyYW5zZm9ybWVycy5sZW5ndGgpKSk7XG4gIH0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCB1c2VXaXRoOyIsImltcG9ydCBfbWFwIGZyb20gJy4vaW50ZXJuYWwvX21hcCc7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSAnLi9pZGVudGl0eSc7XG5pbXBvcnQgcGlja0FsbCBmcm9tICcuL3BpY2tBbGwnO1xuaW1wb3J0IHVzZVdpdGggZnJvbSAnLi91c2VXaXRoJztcblxuLyoqXG4gKiBSZWFzb25hYmxlIGFuYWxvZyB0byBTUUwgYHNlbGVjdGAgc3RhdGVtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFtrXSAtPiBbe2s6IHZ9XSAtPiBbe2s6IHZ9XVxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIHByb2plY3RcbiAqIEBwYXJhbSB7QXJyYXl9IG9ianMgVGhlIG9iamVjdHMgdG8gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBvYmplY3RzIHdpdGgganVzdCB0aGUgYHByb3BzYCBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhYmJ5ID0ge25hbWU6ICdBYmJ5JywgYWdlOiA3LCBoYWlyOiAnYmxvbmQnLCBncmFkZTogMn07XG4gKiAgICAgIHZhciBmcmVkID0ge25hbWU6ICdGcmVkJywgYWdlOiAxMiwgaGFpcjogJ2Jyb3duJywgZ3JhZGU6IDd9O1xuICogICAgICB2YXIga2lkcyA9IFthYmJ5LCBmcmVkXTtcbiAqICAgICAgUi5wcm9qZWN0KFsnbmFtZScsICdncmFkZSddLCBraWRzKTsgLy89PiBbe25hbWU6ICdBYmJ5JywgZ3JhZGU6IDJ9LCB7bmFtZTogJ0ZyZWQnLCBncmFkZTogN31dXG4gKi9cbnZhciBwcm9qZWN0ID0gLyojX19QVVJFX18qL3VzZVdpdGgoX21hcCwgW3BpY2tBbGwsIGlkZW50aXR5XSk7IC8vIHBhc3NpbmcgYGlkZW50aXR5YCBnaXZlcyBjb3JyZWN0IGFyaXR5XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0OyIsImltcG9ydCBfY3VycnkzIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Myc7XG5pbXBvcnQgX2hhcyBmcm9tICcuL2ludGVybmFsL19oYXMnO1xuXG4vKipcbiAqIElmIHRoZSBnaXZlbiwgbm9uLW51bGwgb2JqZWN0IGhhcyBhbiBvd24gcHJvcGVydHkgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUsXG4gKiByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5LiBPdGhlcndpc2UgcmV0dXJucyB0aGUgcHJvdmlkZWQgZGVmYXVsdFxuICogdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNi4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIGEgLT4gU3RyaW5nIC0+IE9iamVjdCAtPiBhXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byByZXR1cm4uXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgZ2l2ZW4gcHJvcGVydHkgb2YgdGhlIHN1cHBsaWVkIG9iamVjdCBvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYWxpY2UgPSB7XG4gKiAgICAgICAgbmFtZTogJ0FMSUNFJyxcbiAqICAgICAgICBhZ2U6IDEwMVxuICogICAgICB9O1xuICogICAgICB2YXIgZmF2b3JpdGUgPSBSLnByb3AoJ2Zhdm9yaXRlTGlicmFyeScpO1xuICogICAgICB2YXIgZmF2b3JpdGVXaXRoRGVmYXVsdCA9IFIucHJvcE9yKCdSYW1kYScsICdmYXZvcml0ZUxpYnJhcnknKTtcbiAqXG4gKiAgICAgIGZhdm9yaXRlKGFsaWNlKTsgIC8vPT4gdW5kZWZpbmVkXG4gKiAgICAgIGZhdm9yaXRlV2l0aERlZmF1bHQoYWxpY2UpOyAgLy89PiAnUmFtZGEnXG4gKi9cbnZhciBwcm9wT3IgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MyhmdW5jdGlvbiBwcm9wT3IodmFsLCBwLCBvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIF9oYXMocCwgb2JqKSA/IG9ialtwXSA6IHZhbDtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcHJvcE9yOyIsImltcG9ydCBfY3VycnkzIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Myc7XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpZmllZCBvYmplY3QgcHJvcGVydHkgc2F0aXNmaWVzIHRoZSBnaXZlblxuICogcHJlZGljYXRlOyBgZmFsc2VgIG90aGVyd2lzZS4gWW91IGNhbiB0ZXN0IG11bHRpcGxlIHByb3BlcnRpZXMgd2l0aFxuICogW2BSLndoZXJlYF0oI3doZXJlKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gU3RyaW5nIC0+IHtTdHJpbmc6IGF9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi53aGVyZSwgUi5wcm9wRXEsIFIucHJvcElzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wU2F0aXNmaWVzKHggPT4geCA+IDAsICd4Jywge3g6IDEsIHk6IDJ9KTsgLy89PiB0cnVlXG4gKi9cbnZhciBwcm9wU2F0aXNmaWVzID0gLyojX19QVVJFX18qL19jdXJyeTMoZnVuY3Rpb24gcHJvcFNhdGlzZmllcyhwcmVkLCBuYW1lLCBvYmopIHtcbiAgcmV0dXJuIHByZWQob2JqW25hbWVdKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcHJvcFNhdGlzZmllczsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuXG4vKipcbiAqIEFjdHMgYXMgbXVsdGlwbGUgYHByb3BgOiBhcnJheSBvZiBrZXlzIGluLCBhcnJheSBvZiB2YWx1ZXMgb3V0LiBQcmVzZXJ2ZXNcbiAqIG9yZGVyLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBba10gLT4ge2s6IHZ9IC0+IFt2XVxuICogQHBhcmFtIHtBcnJheX0gcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGZldGNoXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgb3IgcGFydGlhbGx5IGFwcGxpZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wcyhbJ3gnLCAneSddLCB7eDogMSwgeTogMn0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnByb3BzKFsnYycsICdhJywgJ2InXSwge2I6IDIsIGE6IDF9KTsgLy89PiBbdW5kZWZpbmVkLCAxLCAyXVxuICpcbiAqICAgICAgdmFyIGZ1bGxOYW1lID0gUi5jb21wb3NlKFIuam9pbignICcpLCBSLnByb3BzKFsnZmlyc3QnLCAnbGFzdCddKSk7XG4gKiAgICAgIGZ1bGxOYW1lKHtsYXN0OiAnQnVsbGV0LVRvb3RoJywgYWdlOiAzMywgZmlyc3Q6ICdUb255J30pOyAvLz0+ICdUb255IEJ1bGxldC1Ub290aCdcbiAqL1xudmFyIHByb3BzID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gcHJvcHMocHMsIG9iaikge1xuICB2YXIgbGVuID0gcHMubGVuZ3RoO1xuICB2YXIgb3V0ID0gW107XG4gIHZhciBpZHggPSAwO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBvdXRbaWR4XSA9IG9ialtwc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHByb3BzOyIsImltcG9ydCBpbnZva2VyIGZyb20gJy4vaW52b2tlcic7XG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBiYXNlZCBvbiB0aGUgZ2l2ZW5cbiAqIHNlcGFyYXRvci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgKFN0cmluZyB8IFJlZ0V4cCkgLT4gU3RyaW5nIC0+IFtTdHJpbmddXG4gKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IHNlcCBUaGUgcGF0dGVybi5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZXBhcmF0ZSBpbnRvIGFuIGFycmF5LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBhcnJheSBvZiBzdHJpbmdzIGZyb20gYHN0cmAgc2VwYXJhdGVkIGJ5IGBzdHJgLlxuICogQHNlZSBSLmpvaW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgcGF0aENvbXBvbmVudHMgPSBSLnNwbGl0KCcvJyk7XG4gKiAgICAgIFIudGFpbChwYXRoQ29tcG9uZW50cygnL3Vzci9sb2NhbC9iaW4vbm9kZScpKTsgLy89PiBbJ3VzcicsICdsb2NhbCcsICdiaW4nLCAnbm9kZSddXG4gKlxuICogICAgICBSLnNwbGl0KCcuJywgJ2EuYi5jLnh5ei5kJyk7IC8vPT4gWydhJywgJ2InLCAnYycsICd4eXonLCAnZCddXG4gKi9cbnZhciBzcGxpdCA9IC8qI19fUFVSRV9fKi9pbnZva2VyKDEsICdzcGxpdCcpO1xuZXhwb3J0IGRlZmF1bHQgc3BsaXQ7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9fY3VycnkyJztcbmltcG9ydCBfeGZCYXNlIGZyb20gJy4vX3hmQmFzZSc7XG5cbnZhciBYVGFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gWFRhcChmLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmYgPSBmO1xuICB9XG4gIFhUYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYVGFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gX3hmQmFzZS5yZXN1bHQ7XG4gIFhUYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24gKHJlc3VsdCwgaW5wdXQpIHtcbiAgICB0aGlzLmYoaW5wdXQpO1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICB9O1xuXG4gIHJldHVybiBYVGFwO1xufSgpO1xuXG52YXIgX3h0YXAgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBfeHRhcChmLCB4Zikge1xuICByZXR1cm4gbmV3IFhUYXAoZiwgeGYpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBfeHRhcDsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9kaXNwYXRjaGFibGUgZnJvbSAnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJztcbmltcG9ydCBfeHRhcCBmcm9tICcuL2ludGVybmFsL194dGFwJztcblxuLyoqXG4gKiBSdW5zIHRoZSBnaXZlbiBmdW5jdGlvbiB3aXRoIHRoZSBzdXBwbGllZCBvYmplY3QsIHRoZW4gcmV0dXJucyB0aGUgb2JqZWN0LlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gYXMgc2Vjb25kIHBhcmFtZXRlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYSAtPiAqKSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdpdGggYHhgLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGBmbmAgd2lsbCBiZSB0aHJvd24gYXdheS5cbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn0gYHhgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBzYXlYID0geCA9PiBjb25zb2xlLmxvZygneCBpcyAnICsgeCk7XG4gKiAgICAgIFIudGFwKHNheVgsIDEwMCk7IC8vPT4gMTAwXG4gKiAgICAgIC8vIGxvZ3MgJ3ggaXMgMTAwJ1xuICogQHN5bWIgUi50YXAoZiwgYSkgPSBhXG4gKi9cbnZhciB0YXAgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MiggLyojX19QVVJFX18qL19kaXNwYXRjaGFibGUoW10sIF94dGFwLCBmdW5jdGlvbiB0YXAoZm4sIHgpIHtcbiAgZm4oeCk7XG4gIHJldHVybiB4O1xufSkpO1xuZXhwb3J0IGRlZmF1bHQgdGFwOyIsImltcG9ydCBpbnZva2VyIGZyb20gJy4vaW52b2tlcic7XG5cbi8qKlxuICogVGhlIGxvd2VyIGNhc2UgdmVyc2lvbiBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGxvd2VyIGNhc2UuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBsb3dlciBjYXNlIHZlcnNpb24gb2YgYHN0cmAuXG4gKiBAc2VlIFIudG9VcHBlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudG9Mb3dlcignWFlaJyk7IC8vPT4gJ3h5eidcbiAqL1xudmFyIHRvTG93ZXIgPSAvKiNfX1BVUkVfXyovaW52b2tlcigwLCAndG9Mb3dlckNhc2UnKTtcbmV4cG9ydCBkZWZhdWx0IHRvTG93ZXI7IiwiaW1wb3J0IGludm9rZXIgZnJvbSAnLi9pbnZva2VyJztcblxuLyoqXG4gKiBUaGUgdXBwZXIgY2FzZSB2ZXJzaW9uIG9mIGEgc3RyaW5nLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gdXBwZXIgY2FzZS5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHVwcGVyIGNhc2UgdmVyc2lvbiBvZiBgc3RyYC5cbiAqIEBzZWUgUi50b0xvd2VyXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50b1VwcGVyKCdhYmMnKTsgLy89PiAnQUJDJ1xuICovXG52YXIgdG9VcHBlciA9IC8qI19fUFVSRV9fKi9pbnZva2VyKDAsICd0b1VwcGVyQ2FzZScpO1xuZXhwb3J0IGRlZmF1bHQgdG9VcHBlcjsiLCJpbXBvcnQgX3JlZHVjZSBmcm9tICcuL2ludGVybmFsL19yZWR1Y2UnO1xuaW1wb3J0IF94d3JhcCBmcm9tICcuL2ludGVybmFsL194d3JhcCc7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhIHRyYW5zZHVjZXIgdXNpbmcgc3VwcGxpZWQgaXRlcmF0b3IgZnVuY3Rpb24uIFJldHVybnMgYSBzaW5nbGVcbiAqIGl0ZW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nIHRoZSB0cmFuc2Zvcm1lZFxuICogaXRlcmF0b3IgZnVuY3Rpb24gYW5kIHBhc3NpbmcgaXQgYW4gYWNjdW11bGF0b3IgdmFsdWUgYW5kIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBmcm9tIHRoZSBhcnJheSwgYW5kIHRoZW4gcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IGNhbGwuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byB2YWx1ZXM6ICooYWNjLCB2YWx1ZSkqLiBJdCB3aWxsIGJlXG4gKiB3cmFwcGVkIGFzIGEgdHJhbnNmb3JtZXIgdG8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNkdWNlci4gQSB0cmFuc2Zvcm1lciBjYW4gYmVcbiAqIHBhc3NlZCBkaXJlY3RseSBpbiBwbGFjZSBvZiBhbiBpdGVyYXRvciBmdW5jdGlvbi4gSW4gYm90aCBjYXNlcywgaXRlcmF0aW9uXG4gKiBtYXkgYmUgc3RvcHBlZCBlYXJseSB3aXRoIHRoZSBbYFIucmVkdWNlZGBdKCNyZWR1Y2VkKSBmdW5jdGlvbi5cbiAqXG4gKiBBIHRyYW5zZHVjZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB0cmFuc2Zvcm1lciBhbmQgcmV0dXJucyBhXG4gKiB0cmFuc2Zvcm1lciBhbmQgY2FuIGJlIGNvbXBvc2VkIGRpcmVjdGx5LlxuICpcbiAqIEEgdHJhbnNmb3JtZXIgaXMgYW4gYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYSAyLWFyaXR5IHJlZHVjaW5nIGl0ZXJhdG9yXG4gKiBmdW5jdGlvbiwgc3RlcCwgMC1hcml0eSBpbml0aWFsIHZhbHVlIGZ1bmN0aW9uLCBpbml0LCBhbmQgMS1hcml0eSByZXN1bHRcbiAqIGV4dHJhY3Rpb24gZnVuY3Rpb24sIHJlc3VsdC4gVGhlIHN0ZXAgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgaXRlcmF0b3JcbiAqIGZ1bmN0aW9uIGluIHJlZHVjZS4gVGhlIHJlc3VsdCBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIGZpbmFsXG4gKiBhY2N1bXVsYXRvciBpbnRvIHRoZSByZXR1cm4gdHlwZSBhbmQgaW4gbW9zdCBjYXNlcyBpc1xuICogW2BSLmlkZW50aXR5YF0oI2lkZW50aXR5KS4gVGhlIGluaXQgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBhblxuICogaW5pdGlhbCBhY2N1bXVsYXRvciwgYnV0IGlzIGlnbm9yZWQgYnkgdHJhbnNkdWNlLlxuICpcbiAqIFRoZSBpdGVyYXRpb24gaXMgcGVyZm9ybWVkIHdpdGggW2BSLnJlZHVjZWBdKCNyZWR1Y2UpIGFmdGVyIGluaXRpYWxpemluZyB0aGUgdHJhbnNkdWNlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYyAtPiBjKSAtPiAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBSZWNlaXZlcyBhIHRyYW5zZm9ybWVyIGFuZCByZXR1cm5zIGEgdHJhbnNmb3JtZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uIFJlY2VpdmVzIHR3byB2YWx1ZXMsIHRoZSBhY2N1bXVsYXRvciBhbmQgdGhlXG4gKiAgICAgICAgY3VycmVudCBlbGVtZW50IGZyb20gdGhlIGFycmF5LiBXcmFwcGVkIGFzIHRyYW5zZm9ybWVyLCBpZiBuZWNlc3NhcnksIGFuZCB1c2VkIHRvXG4gKiAgICAgICAgaW5pdGlhbGl6ZSB0aGUgdHJhbnNkdWNlclxuICogQHBhcmFtIHsqfSBhY2MgVGhlIGluaXRpYWwgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlLCBSLnJlZHVjZWQsIFIuaW50b1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBudW1iZXJzID0gWzEsIDIsIDMsIDRdO1xuICogICAgICB2YXIgdHJhbnNkdWNlciA9IFIuY29tcG9zZShSLm1hcChSLmFkZCgxKSksIFIudGFrZSgyKSk7XG4gKiAgICAgIFIudHJhbnNkdWNlKHRyYW5zZHVjZXIsIFIuZmxpcChSLmFwcGVuZCksIFtdLCBudW1iZXJzKTsgLy89PiBbMiwgM11cbiAqXG4gKiAgICAgIHZhciBpc09kZCA9ICh4KSA9PiB4ICUgMiA9PT0gMTtcbiAqICAgICAgdmFyIGZpcnN0T2RkVHJhbnNkdWNlciA9IFIuY29tcG9zZShSLmZpbHRlcihpc09kZCksIFIudGFrZSgxKSk7XG4gKiAgICAgIFIudHJhbnNkdWNlKGZpcnN0T2RkVHJhbnNkdWNlciwgUi5mbGlwKFIuYXBwZW5kKSwgW10sIFIucmFuZ2UoMCwgMTAwKSk7IC8vPT4gWzFdXG4gKi9cbnZhciB0cmFuc2R1Y2UgPSAvKiNfX1BVUkVfXyovY3VycnlOKDQsIGZ1bmN0aW9uIHRyYW5zZHVjZSh4ZiwgZm4sIGFjYywgbGlzdCkge1xuICByZXR1cm4gX3JlZHVjZSh4Zih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBfeHdyYXAoZm4pIDogZm4pLCBhY2MsIGxpc3QpO1xufSk7XG5leHBvcnQgZGVmYXVsdCB0cmFuc2R1Y2U7IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcblxudmFyIHdzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcgKyAnXFx1MjAyOVxcdUZFRkYnO1xudmFyIHplcm9XaWR0aCA9ICdcXHUyMDBiJztcbnZhciBoYXNQcm90b1RyaW0gPSB0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS50cmltID09PSAnZnVuY3Rpb24nO1xuLyoqXG4gKiBSZW1vdmVzIChzdHJpcHMpIHdoaXRlc3BhY2UgZnJvbSBib3RoIGVuZHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRyaW1tZWQgdmVyc2lvbiBvZiBgc3RyYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRyaW0oJyAgIHh5eiAgJyk7IC8vPT4gJ3h5eidcbiAqICAgICAgUi5tYXAoUi50cmltLCBSLnNwbGl0KCcsJywgJ3gsIHksIHonKSk7IC8vPT4gWyd4JywgJ3knLCAneiddXG4gKi9cbnZhciBfdHJpbSA9ICFoYXNQcm90b1RyaW0gfHwgLyojX19QVVJFX18qL3dzLnRyaW0oKSB8fCAhIC8qI19fUFVSRV9fKi96ZXJvV2lkdGgudHJpbSgpID8gZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgdmFyIGJlZ2luUnggPSBuZXcgUmVnRXhwKCdeWycgKyB3cyArICddWycgKyB3cyArICddKicpO1xuICB2YXIgZW5kUnggPSBuZXcgUmVnRXhwKCdbJyArIHdzICsgJ11bJyArIHdzICsgJ10qJCcpO1xuICByZXR1cm4gc3RyLnJlcGxhY2UoYmVnaW5SeCwgJycpLnJlcGxhY2UoZW5kUngsICcnKTtcbn0gOiBmdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnRyaW0oKTtcbn07XG52YXIgdHJpbSA9IC8qI19fUFVSRV9fKi9fY3VycnkxKF90cmltKTtcbmV4cG9ydCBkZWZhdWx0IHRyaW07IiwiaW1wb3J0IF9pZGVudGl0eSBmcm9tICcuL2ludGVybmFsL19pZGVudGl0eSc7XG5pbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBgUi5jaGFpbihSLmlkZW50aXR5KWAsIHdoaWNoIHJlbW92ZXMgb25lIGxldmVsIG9mIG5lc3RpbmcgZnJvbVxuICogYW55IFtDaGFpbl0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNjaGFpbikuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBDaGFpbiBjID0+IGMgKGMgYSkgLT4gYyBhXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuZmxhdHRlbiwgUi5jaGFpblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudW5uZXN0KFsxLCBbMl0sIFtbM11dXSk7IC8vPT4gWzEsIDIsIFszXV1cbiAqICAgICAgUi51bm5lc3QoW1sxLCAyXSwgWzMsIDRdLCBbNSwgNl1dKTsgLy89PiBbMSwgMiwgMywgNCwgNSwgNl1cbiAqL1xudmFyIHVubmVzdCA9IC8qI19fUFVSRV9fKi9jaGFpbihfaWRlbnRpdHkpO1xuZXhwb3J0IGRlZmF1bHQgdW5uZXN0OyIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnO1xuXG5jb25zdCBURVhUX0RPQ1VNRU5UID0gJ1RFWFRfRE9DVU1FTlQnO1xuXG5jb25zdCBpc0xpc3RlbmVyID0gbmFtZSA9PiBuYW1lLnN0YXJ0c1dpdGgoJ29uJyk7XG5jb25zdCBpc0F0dHJpYnV0ZSA9IG5hbWUgPT4gIWlzTGlzdGVuZXIobmFtZSkgJiYgbmFtZSAhPSAnY2hpbGRyZW4nO1xuXG5jb25zdCBhZGRFdmVudEhlbHBlciA9IFIuY3VycnkoKHBhcmVudCwgcHJvcHMsIG5hbWUpID0+XG4gIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFIuY29tcG9zZShcbiAgICAgIFIuc2xpY2UoMCwgMiksXG4gICAgICBSLnRvTG93ZXIsXG4gICAgKShuYW1lKSxcbiAgICBSLnByb3BzKG5hbWUsIHByb3BzKSxcbiAgKSxcbik7XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJUb0RvbSA9IFIuY3VycnkoKGVsZW1lbnQsIHBhcmVudCkgPT5cbiAgUi5jb21wb3NlKFxuICAgIFIuZm9yRWFjaChhZGRFdmVudEhlbHBlcihwYXJlbnQsIFIucHJvcHMoJ3Byb3BzJywgZWxlbWVudCkpKSxcbiAgICBSLmZpbHRlcihpc0xpc3RlbmVyKSxcbiAgICBSLmtleXMsXG4gICAgUi5wcm9wKCdwcm9wcycpLFxuICApKGVsZW1lbnQpLFxuKTtcblxuY29uc3QgYWRkQXR0cmlidXRlVG9Eb20gPSBSLmN1cnJ5KChlbGVtZW50LCBwYXJlbnQpID0+XG4gIFIuY29tcG9zZShcbiAgICBSLmZvckVhY2godmFsID0+IChjb25zb2xlLmxvZyh2YWwpLCBwYXJlbnRbdmFsXSA9IFIucGF0aChbJ3Byb3BzJywgdmFsXSwgZWxlbWVudCkpKSxcbiAgICBSLmZpbHRlcihpc0F0dHJpYnV0ZSksXG4gICAgUi5rZXlzLFxuICAgIFIucHJvcCgncHJvcHMnKSxcbiAgKShlbGVtZW50KSxcbik7XG5cbmNvbnN0IHJlbmRlckNoaWxkcmVuID0gUi5jdXJyeSgoZWxlbWVudCwgZG9tKSA9PlxuICBSLmNvbXBvc2UoXG4gICAgUi5mb3JFYWNoKFIuZmxpcChyZW5kZXIpKGRvbSkpLFxuICAgIFIucHJvcE9yKFtdLCAnY2hpbGRyZW4nKSxcbiAgICBSLnByb3AoJ3Byb3BzJyksXG4gICkoZWxlbWVudCksXG4pO1xuXG5jb25zdCByZW5kZXIgPSAoZWxlbWVudCwgcGFyZW50RG9tKSA9PlxuICBSLmNvbXBvc2UoXG4gICAgUi5iaW5kKHBhcmVudERvbS5hcHBlbmRDaGlsZCwgcGFyZW50RG9tKSxcbiAgICBSLnRhcChyZW5kZXJDaGlsZHJlbihlbGVtZW50KSksXG4gICAgUi50YXAoYWRkQXR0cmlidXRlVG9Eb20oZWxlbWVudCkpLFxuICAgIFIudGFwKGFkZEV2ZW50TGlzdGVuZXJUb0RvbShlbGVtZW50KSksXG4gICAgUi5pZkVsc2UoXG4gICAgICBSLnByb3BTYXRpc2ZpZXMoUi5lcXVhbHMoVEVYVF9ET0NVTUVOVCksICd0eXBlJyksXG4gICAgICBSLmNvbXBvc2UoXG4gICAgICAgIFIuYmluZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSwgZG9jdW1lbnQpLFxuICAgICAgICAoKSA9PiAnJyxcbiAgICAgICksXG4gICAgICBSLmNvbXBvc2UoXG4gICAgICAgIFIuYmluZChkb2N1bWVudC5jcmVhdGVFbGVtZW50LCBkb2N1bWVudCksXG4gICAgICAgIFIucHJvcCgndHlwZScpLFxuICAgICAgKSxcbiAgICApLFxuICApKGVsZW1lbnQpO1xuXG5jb25zdCBzdG9yaWVzID0gW1xuICB7IG5hbWU6ICdEaWRhY3QgaW50cm9kdWN0aW9uJywgdXJsOiAnaHR0cDovL2JpdC5seS8ycFg3SE5uJyB9LFxuICB7IG5hbWU6ICdSZW5kZXJpbmcgRE9NIGVsZW1lbnRzICcsIHVybDogJ2h0dHA6Ly9iaXQubHkvMnFDT2VqSCcgfSxcbiAgeyBuYW1lOiAnRWxlbWVudCBjcmVhdGlvbiBhbmQgSlNYJywgdXJsOiAnaHR0cDovL2JpdC5seS8ycUdidzhTJyB9LFxuICB7IG5hbWU6ICdJbnN0YW5jZXMgYW5kIHJlY29uY2lsaWF0aW9uJywgdXJsOiAnaHR0cDovL2JpdC5seS8ycTRBNzQ2JyB9LFxuICB7IG5hbWU6ICdDb21wb25lbnRzIGFuZCBzdGF0ZScsIHVybDogJ2h0dHA6Ly9iaXQubHkvMnJFMTZuaCcgfSxcbl07XG5cbmNvbnN0IHN0b3J5RWxlbWVudCA9ICh7IG5hbWUsIHVybCB9KSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICBjb25zdCBidXR0b25FbGVtZW50ID0ge1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIHByb3BzOiB7XG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHR5cGU6IFRFWFRfRE9DVU1FTlQsIHByb3BzOiB7IG5vZGVWYWx1ZTogbGlrZXMgfSB9LFxuICAgICAgICB7IHR5cGU6IFRFWFRfRE9DVU1FTlQsIHByb3BzOiB7IG5vZGVWYWx1ZTogJ+KdpO+4jycgfSB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xuICBjb25zdCBsaW5rRWxlbWVudCA9IHtcbiAgICB0eXBlOiAnYScsXG4gICAgcHJvcHM6IHtcbiAgICAgIGhyZWY6IHVybCxcbiAgICAgIGNoaWxkcmVuOiBbeyB0eXBlOiBURVhUX0RPQ1VNRU5ULCBwcm9wczogeyBub2RlVmFsdWU6IG5hbWUgfSB9XSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2xpJyxcbiAgICBwcm9wczoge1xuICAgICAgY2hpbGRyZW46IFtidXR0b25FbGVtZW50LCBsaW5rRWxlbWVudF0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IGFwcEVsZW1lbnQgPSB7XG4gIHR5cGU6ICdkaXYnLFxuICBwcm9wczoge1xuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd1bCcsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgY2hpbGRyZW46IHN0b3JpZXMubWFwKHN0b3J5RWxlbWVudCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG5yZW5kZXIoYXBwRWxlbWVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4iXSwibmFtZXMiOlsiY3VycnkiLCJrZXlzIiwidG9TdHJpbmciLCJSLmN1cnJ5IiwicHJvcHMiLCJSLmNvbXBvc2UiLCJSLnNsaWNlIiwiUi50b0xvd2VyIiwiUi5wcm9wcyIsIlIuZm9yRWFjaCIsIlIuZmlsdGVyIiwiUi5rZXlzIiwiUi5wcm9wIiwiUi5wYXRoIiwiUi5mbGlwIiwiUi5wcm9wT3IiLCJSLmJpbmQiLCJSLnRhcCIsIlIuaWZFbHNlIiwiUi5wcm9wU2F0aXNmaWVzIiwiUi5lcXVhbHMiXSwibWFwcGluZ3MiOiI7OztBQUFlLFNBQVMsY0FBYyxDQUFDLENBQUMsRUFBRTtPQUNuQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLElBQUksQ0FBQzs7O0FDQzNGOzs7Ozs7OztBQVFBLEFBQWUsU0FBUyxPQUFPLENBQUMsRUFBRSxFQUFFO0VBQ2xDLE9BQU8sU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ3BCLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQy9DLE9BQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTTtNQUNMLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbEM7R0FDRixDQUFDOzs7QUNmSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFJLE1BQU0sZ0JBQWdCLE9BQU8sQ0FBQyxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7RUFDckQsT0FBTyxZQUFZO0lBQ2pCLE9BQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQztDQUNILENBQUMsQ0FBQyxBQUNIOztBQ3hCQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsSUFBSSxDQUFDLGdCQUFnQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQUFDbkM7O0FDaEJBOzs7Ozs7Ozs7Ozs7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Q0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDdkIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztPQUNsQyxDQUFDO0lBQ0osS0FBSyxDQUFDO01BQ0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzNCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7T0FDbEMsQ0FBQztJQUNKLEtBQUssQ0FBQztNQUNKLE9BQU8sVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDL0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztPQUNsQyxDQUFDO0lBQ0osS0FBSyxDQUFDO01BQ0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDbkMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztPQUNsQyxDQUFDO0lBQ0osS0FBSyxDQUFDO01BQ0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7T0FDbEMsQ0FBQztJQUNKLEtBQUssQ0FBQztNQUNKLE9BQU8sVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDM0MsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztPQUNsQyxDQUFDO0lBQ0osS0FBSyxDQUFDO01BQ0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUs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
