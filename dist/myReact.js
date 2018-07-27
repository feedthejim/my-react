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
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/_curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

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
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/_curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});

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
    forEach(val => (parent[val] = path(['props', val], element))),
    filter(isAttribute),
    keys,
    prop('props'),
  )(element),
);

const renderChildren = curry$1((element, dom) =>
  compose(
    forEach(flip(render)(dom)),
    pathOr(['props', 'children']),
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
      () => document.createTextNode(''),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlSZWFjdC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc1BsYWNlaG9sZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19jdXJyeTEuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvYWx3YXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL0YuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvVC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9fXy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY3VycnkyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2FkZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY29uY2F0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19hcml0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY3VycnlOLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2N1cnJ5Ti5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fY3VycnkzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc1RyYW5zZm9ybWVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19kaXNwYXRjaGFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3hmQmFzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9tYXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX21hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNTdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2lzQXJyYXlMaWtlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL194d3JhcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9iaW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19yZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3htYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMva2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9tYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wcm9wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3BsdWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3JlZHVjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNJbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19pc0Z1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2xpZnROLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2xpZnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvY3VycnkuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvY2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fbWFrZUZsYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2ZvcmNlUmVkdWNlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fZmxhdENhdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9feGNoYWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2NoYWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbm90LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2NvbXBsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3BpcGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3NsaWNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3RhaWwuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcGlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9yZXZlcnNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2NvbXBvc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2FycmF5RnJvbUl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19jb250YWluc1dpdGguanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2Z1bmN0aW9uTmFtZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pZGVudGljYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2VxdWFscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9lcXVhbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2luZGV4T2YuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2NvbnRhaW5zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19xdW90ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fdG9JU09TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2NvbXBsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2ZpbHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9faXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3hmaWx0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvZmlsdGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3JlamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbnRlcm5hbC9fdG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvY29udmVyZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3hyZWR1Y2VCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9yZWR1Y2VCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9jb3VudEJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2RlYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9kZWZhdWx0VG8uanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbnRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2xhc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvZmxpcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9mb3JFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2hlYWQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2lmRWxzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbmMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW5kZXhCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9pbml0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2ludGVybmFsL19TZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdW5pcUJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3VuaXEuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW52b2tlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9qb2luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL2p1eHQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvc3VtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL21lbW9pemVXaXRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL21lbW9pemUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvbXVsdGlwbHkuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcGFydGl0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3BhdGhPci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9waWNrQWxsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3Byb2R1Y3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdXNlV2l0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy9wcm9qZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3Byb3BTYXRpc2ZpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvcHJvcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvc3BsaXQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvaW50ZXJuYWwvX3h0YXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdGFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JhbWRhL2VzL3RvTG93ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdG9VcHBlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy90cmFuc2R1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvcmFtZGEvZXMvdHJpbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYW1kYS9lcy91bm5lc3QuanMiLCIuLi9zcmMvbXlSZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNQbGFjZWhvbGRlcihhKSB7XG4gICAgICAgcmV0dXJuIGEgIT0gbnVsbCAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWU7XG59IiwiaW1wb3J0IF9pc1BsYWNlaG9sZGVyIGZyb20gJy4vX2lzUGxhY2Vob2xkZXInO1xuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCBvbmUtYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3VycnkxKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMShhKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHwgX2lzUGxhY2Vob2xkZXIoYSkpIHtcbiAgICAgIHJldHVybiBmMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgdGhlIGdpdmVuIHZhbHVlLiBOb3RlIHRoYXQgZm9yXG4gKiBub24tcHJpbWl0aXZlcyB0aGUgdmFsdWUgcmV0dXJuZWQgaXMgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMga25vd24gYXMgYGNvbnN0YCwgYGNvbnN0YW50YCwgb3IgYEtgIChmb3IgSyBjb21iaW5hdG9yKSBpblxuICogb3RoZXIgbGFuZ3VhZ2VzIGFuZCBsaWJyYXJpZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHdyYXAgaW4gYSBmdW5jdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IEEgRnVuY3Rpb24gOjogKiAtPiB2YWwuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHQgPSBSLmFsd2F5cygnVGVlJyk7XG4gKiAgICAgIHQoKTsgLy89PiAnVGVlJ1xuICovXG52YXIgYWx3YXlzID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gYWx3YXlzKHZhbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2YWw7XG4gIH07XG59KTtcbmV4cG9ydCBkZWZhdWx0IGFsd2F5czsiLCJpbXBvcnQgYWx3YXlzIGZyb20gJy4vYWx3YXlzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYGZhbHNlYC4gQW55IHBhc3NlZCBpbiBwYXJhbWV0ZXJzIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5hbHdheXMsIFIuVFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuRigpOyAvLz0+IGZhbHNlXG4gKi9cbnZhciBGID0gLyojX19QVVJFX18qL2Fsd2F5cyhmYWxzZSk7XG5leHBvcnQgZGVmYXVsdCBGOyIsImltcG9ydCBhbHdheXMgZnJvbSAnLi9hbHdheXMnO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAuIEFueSBwYXNzZWQgaW4gcGFyYW1ldGVycyBhcmUgaWdub3JlZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAqIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn1cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIuYWx3YXlzLCBSLkZcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLlQoKTsgLy89PiB0cnVlXG4gKi9cbnZhciBUID0gLyojX19QVVJFX18qL2Fsd2F5cyh0cnVlKTtcbmV4cG9ydCBkZWZhdWx0IFQ7IiwiLyoqXG4gKiBBIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgdXNlZCB0byBzcGVjaWZ5IFwiZ2Fwc1wiIHdpdGhpbiBjdXJyaWVkIGZ1bmN0aW9ucyxcbiAqIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cywgcmVnYXJkbGVzcyBvZlxuICogdGhlaXIgcG9zaXRpb25zLlxuICpcbiAqIElmIGBnYCBpcyBhIGN1cnJpZWQgdGVybmFyeSBmdW5jdGlvbiBhbmQgYF9gIGlzIGBSLl9fYCwgdGhlIGZvbGxvd2luZyBhcmVcbiAqIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEsIDIsIDMpYFxuICogICAtIGBnKF8sIDIsIDMpKDEpYFxuICogICAtIGBnKF8sIF8sIDMpKDEpKDIpYFxuICogICAtIGBnKF8sIF8sIDMpKDEsIDIpYFxuICogICAtIGBnKF8sIDIsIF8pKDEsIDMpYFxuICogICAtIGBnKF8sIDIpKDEpKDMpYFxuICogICAtIGBnKF8sIDIpKDEsIDMpYFxuICogICAtIGBnKF8sIDIpKF8sIDMpKDEpYFxuICpcbiAqIEBjb25zdGFudFxuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBncmVldCA9IFIucmVwbGFjZSgne25hbWV9JywgUi5fXywgJ0hlbGxvLCB7bmFtZX0hJyk7XG4gKiAgICAgIGdyZWV0KCdBbGljZScpOyAvLz0+ICdIZWxsbywgQWxpY2UhJ1xuICovXG5leHBvcnQgZGVmYXVsdCB7ICdAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInOiB0cnVlIH07IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9fY3VycnkxJztcbmltcG9ydCBfaXNQbGFjZWhvbGRlciBmcm9tICcuL19pc1BsYWNlaG9sZGVyJztcblxuLyoqXG4gKiBPcHRpbWl6ZWQgaW50ZXJuYWwgdHdvLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2N1cnJ5Mihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjIoYSwgYikge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZjI7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSA/IGYyIDogX2N1cnJ5MShmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgX2IpO1xuICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSA/IGYyIDogX2lzUGxhY2Vob2xkZXIoYSkgPyBfY3VycnkxKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgIHJldHVybiBmbihfYSwgYik7XG4gICAgICAgIH0pIDogX2lzUGxhY2Vob2xkZXIoYikgPyBfY3VycnkxKGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBfYik7XG4gICAgICAgIH0pIDogZm4oYSwgYik7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogQWRkcyB0d28gdmFsdWVzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7TnVtYmVyfVxuICogQHNlZSBSLnN1YnRyYWN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hZGQoMiwgMyk7ICAgICAgIC8vPT4gIDVcbiAqICAgICAgUi5hZGQoNykoMTApOyAgICAgIC8vPT4gMTdcbiAqL1xudmFyIGFkZCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGFkZChhLCBiKSB7XG4gIHJldHVybiBOdW1iZXIoYSkgKyBOdW1iZXIoYik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGFkZDsiLCIvKipcbiAqIFByaXZhdGUgYGNvbmNhdGAgZnVuY3Rpb24gdG8gbWVyZ2UgdHdvIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IFtzZXQxPVtdXSBBbiBhcnJheS1saWtlIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl8QXJndW1lbnRzfSBbc2V0Mj1bXV0gQW4gYXJyYXktbGlrZSBvYmplY3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcsIG1lcmdlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBfY29uY2F0KFs0LCA1LCA2XSwgWzEsIDIsIDNdKTsgLy89PiBbNCwgNSwgNiwgMSwgMiwgM11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbmNhdChzZXQxLCBzZXQyKSB7XG4gIHNldDEgPSBzZXQxIHx8IFtdO1xuICBzZXQyID0gc2V0MiB8fCBbXTtcbiAgdmFyIGlkeDtcbiAgdmFyIGxlbjEgPSBzZXQxLmxlbmd0aDtcbiAgdmFyIGxlbjIgPSBzZXQyLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsZW4xKSB7XG4gICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc2V0MVtpZHhdO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsZW4yKSB7XG4gICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc2V0MltpZHhdO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FyaXR5KG4sIGZuKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDc6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDg6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNykge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICBjYXNlIDEwOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gX2FyaXR5IG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciBubyBncmVhdGVyIHRoYW4gdGVuJyk7XG4gIH1cbn0iLCJpbXBvcnQgX2FyaXR5IGZyb20gJy4vX2FyaXR5JztcbmltcG9ydCBfaXNQbGFjZWhvbGRlciBmcm9tICcuL19pc1BsYWNlaG9sZGVyJztcblxuLyoqXG4gKiBJbnRlcm5hbCBjdXJyeU4gZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgYXJpdHkgb2YgdGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSByZWNlaXZlZCBBbiBhcnJheSBvZiBhcmd1bWVudHMgcmVjZWl2ZWQgdGh1cyBmYXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jdXJyeU4obGVuZ3RoLCByZWNlaXZlZCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29tYmluZWQgPSBbXTtcbiAgICB2YXIgYXJnc0lkeCA9IDA7XG4gICAgdmFyIGxlZnQgPSBsZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkSWR4ID0gMDtcbiAgICB3aGlsZSAoY29tYmluZWRJZHggPCByZWNlaXZlZC5sZW5ndGggfHwgYXJnc0lkeCA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICBpZiAoY29tYmluZWRJZHggPCByZWNlaXZlZC5sZW5ndGggJiYgKCFfaXNQbGFjZWhvbGRlcihyZWNlaXZlZFtjb21iaW5lZElkeF0pIHx8IGFyZ3NJZHggPj0gYXJndW1lbnRzLmxlbmd0aCkpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjZWl2ZWRbY29tYmluZWRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gYXJndW1lbnRzW2FyZ3NJZHhdO1xuICAgICAgICBhcmdzSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICBjb21iaW5lZFtjb21iaW5lZElkeF0gPSByZXN1bHQ7XG4gICAgICBpZiAoIV9pc1BsYWNlaG9sZGVyKHJlc3VsdCkpIHtcbiAgICAgICAgbGVmdCAtPSAxO1xuICAgICAgfVxuICAgICAgY29tYmluZWRJZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQgPD0gMCA/IGZuLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IF9hcml0eShsZWZ0LCBfY3VycnlOKGxlbmd0aCwgY29tYmluZWQsIGZuKSk7XG4gIH07XG59IiwiaW1wb3J0IF9hcml0eSBmcm9tICcuL2ludGVybmFsL19hcml0eSc7XG5pbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfY3VycnlOIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Tic7XG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZXF1aXZhbGVudCBvZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24sIHdpdGggdGhlIHNwZWNpZmllZFxuICogYXJpdHkuIFRoZSBjdXJyaWVkIGZ1bmN0aW9uIGhhcyB0d28gdW51c3VhbCBjYXBhYmlsaXRpZXMuIEZpcnN0LCBpdHNcbiAqIGFyZ3VtZW50cyBuZWVkbid0IGJlIHByb3ZpZGVkIG9uZSBhdCBhIHRpbWUuIElmIGBnYCBpcyBgUi5jdXJyeU4oMywgZilgLCB0aGVcbiAqIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSkoMikoMylgXG4gKiAgIC0gYGcoMSkoMiwgMylgXG4gKiAgIC0gYGcoMSwgMikoMylgXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKlxuICogU2Vjb25kbHksIHRoZSBzcGVjaWFsIHBsYWNlaG9sZGVyIHZhbHVlIFtgUi5fX2BdKCNfXykgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeVxuICogXCJnYXBzXCIsIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLiBJZiBgZ2AgaXMgYXMgYWJvdmUgYW5kIGBfYCBpcyBbYFIuX19gXSgjX18pLFxuICogdGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKiAgIC0gYGcoXywgMiwgMykoMSlgXG4gKiAgIC0gYGcoXywgXywgMykoMSkoMilgXG4gKiAgIC0gYGcoXywgXywgMykoMSwgMilgXG4gKiAgIC0gYGcoXywgMikoMSkoMylgXG4gKiAgIC0gYGcoXywgMikoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoXywgMykoMSlgXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBmb3IgdGhlIHJldHVybmVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHN1bUFyZ3MgPSAoLi4uYXJncykgPT4gUi5zdW0oYXJncyk7XG4gKlxuICogICAgICB2YXIgY3VycmllZEFkZEZvdXJOdW1iZXJzID0gUi5jdXJyeU4oNCwgc3VtQXJncyk7XG4gKiAgICAgIHZhciBmID0gY3VycmllZEFkZEZvdXJOdW1iZXJzKDEsIDIpO1xuICogICAgICB2YXIgZyA9IGYoMyk7XG4gKiAgICAgIGcoNCk7IC8vPT4gMTBcbiAqL1xudmFyIGN1cnJ5TiA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGN1cnJ5TihsZW5ndGgsIGZuKSB7XG4gIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gX2N1cnJ5MShmbik7XG4gIH1cbiAgcmV0dXJuIF9hcml0eShsZW5ndGgsIF9jdXJyeU4obGVuZ3RoLCBbXSwgZm4pKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY3VycnlOOyIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vX2N1cnJ5MSc7XG5pbXBvcnQgX2N1cnJ5MiBmcm9tICcuL19jdXJyeTInO1xuaW1wb3J0IF9pc1BsYWNlaG9sZGVyIGZyb20gJy4vX2lzUGxhY2Vob2xkZXInO1xuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0aHJlZS1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jdXJyeTMoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYzKGEsIGIsIGMpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGYzO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gX2lzUGxhY2Vob2xkZXIoYSkgPyBmMyA6IF9jdXJyeTIoZnVuY3Rpb24gKF9iLCBfYykge1xuICAgICAgICAgIHJldHVybiBmbihhLCBfYiwgX2MpO1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpICYmIF9pc1BsYWNlaG9sZGVyKGIpID8gZjMgOiBfaXNQbGFjZWhvbGRlcihhKSA/IF9jdXJyeTIoZnVuY3Rpb24gKF9hLCBfYykge1xuICAgICAgICAgIHJldHVybiBmbihfYSwgYiwgX2MpO1xuICAgICAgICB9KSA6IF9pc1BsYWNlaG9sZGVyKGIpID8gX2N1cnJ5MihmdW5jdGlvbiAoX2IsIF9jKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIF9iLCBfYyk7XG4gICAgICAgIH0pIDogX2N1cnJ5MShmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgX2MpO1xuICAgICAgICB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSAmJiBfaXNQbGFjZWhvbGRlcihjKSA/IGYzIDogX2lzUGxhY2Vob2xkZXIoYSkgJiYgX2lzUGxhY2Vob2xkZXIoYikgPyBfY3VycnkyKGZ1bmN0aW9uIChfYSwgX2IpIHtcbiAgICAgICAgICByZXR1cm4gZm4oX2EsIF9iLCBjKTtcbiAgICAgICAgfSkgOiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihjKSA/IF9jdXJyeTIoZnVuY3Rpb24gKF9hLCBfYykge1xuICAgICAgICAgIHJldHVybiBmbihfYSwgYiwgX2MpO1xuICAgICAgICB9KSA6IF9pc1BsYWNlaG9sZGVyKGIpICYmIF9pc1BsYWNlaG9sZGVyKGMpID8gX2N1cnJ5MihmdW5jdGlvbiAoX2IsIF9jKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIF9iLCBfYyk7XG4gICAgICAgIH0pIDogX2lzUGxhY2Vob2xkZXIoYSkgPyBfY3VycnkxKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgIHJldHVybiBmbihfYSwgYiwgYyk7XG4gICAgICAgIH0pIDogX2lzUGxhY2Vob2xkZXIoYikgPyBfY3VycnkxKGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBfYiwgYyk7XG4gICAgICAgIH0pIDogX2lzUGxhY2Vob2xkZXIoYykgPyBfY3VycnkxKGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBfYyk7XG4gICAgICAgIH0pIDogZm4oYSwgYiwgYyk7XG4gICAgfVxuICB9O1xufSIsIi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IGlzIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHZhbGAgaXMgYW4gYXJyYXksIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9pc0FycmF5KFtdKTsgLy89PiB0cnVlXG4gKiAgICAgIF9pc0FycmF5KG51bGwpOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5KHt9KTsgLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIF9pc0FycmF5KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+PSAwICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNUcmFuc2Zvcm1lcihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmpbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPT09ICdmdW5jdGlvbic7XG59IiwiaW1wb3J0IF9pc0FycmF5IGZyb20gJy4vX2lzQXJyYXknO1xuaW1wb3J0IF9pc1RyYW5zZm9ybWVyIGZyb20gJy4vX2lzVHJhbnNmb3JtZXInO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgd2l0aCBkaWZmZXJlbnQgc3RyYXRlZ2llcyBiYXNlZCBvbiB0aGVcbiAqIG9iamVjdCBpbiBsaXN0IHBvc2l0aW9uIChsYXN0IGFyZ3VtZW50KS4gSWYgaXQgaXMgYW4gYXJyYXksIGV4ZWN1dGVzIFtmbl0uXG4gKiBPdGhlcndpc2UsIGlmIGl0IGhhcyBhIGZ1bmN0aW9uIHdpdGggb25lIG9mIHRoZSBnaXZlbiBtZXRob2QgbmFtZXMsIGl0IHdpbGxcbiAqIGV4ZWN1dGUgdGhhdCBmdW5jdGlvbiAoZnVuY3RvciBjYXNlKS4gT3RoZXJ3aXNlLCBpZiBpdCBpcyBhIHRyYW5zZm9ybWVyLFxuICogdXNlcyB0cmFuc2R1Y2VyIFt4Zl0gdG8gcmV0dXJuIGEgbmV3IHRyYW5zZm9ybWVyICh0cmFuc2R1Y2VyIGNhc2UpLlxuICogT3RoZXJ3aXNlLCBpdCB3aWxsIGRlZmF1bHQgdG8gZXhlY3V0aW5nIFtmbl0uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IG1ldGhvZE5hbWVzIHByb3BlcnRpZXMgdG8gY2hlY2sgZm9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiB0cmFuc2R1Y2VyIHRvIGluaXRpYWxpemUgaWYgb2JqZWN0IGlzIHRyYW5zZm9ybWVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBkZWZhdWx0IHJhbWRhIGltcGxlbWVudGF0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgb24gb2JqZWN0IGluIGxpc3QgcG9zaXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Rpc3BhdGNoYWJsZShtZXRob2ROYW1lcywgeGYsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdmFyIG9iaiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKCFfaXNBcnJheShvYmopKSB7XG4gICAgICB2YXIgaWR4ID0gMDtcbiAgICAgIHdoaWxlIChpZHggPCBtZXRob2ROYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmpbbWV0aG9kTmFtZXNbaWR4XV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gb2JqW21ldGhvZE5hbWVzW2lkeF1dLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWR4ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAoX2lzVHJhbnNmb3JtZXIob2JqKSkge1xuICAgICAgICB2YXIgdHJhbnNkdWNlciA9IHhmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gdHJhbnNkdWNlcihvYmopO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL2luaXQnXSgpO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH1cbn07IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXIgb2YgaXRzIHR3byBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLm1heEJ5LCBSLm1pblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWF4KDc4OSwgMTIzKTsgLy89PiA3ODlcbiAqICAgICAgUi5tYXgoJ2EnLCAnYicpOyAvLz0+ICdiJ1xuICovXG52YXIgbWF4ID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gbWF4KGEsIGIpIHtcbiAgcmV0dXJuIGIgPiBhID8gYiA6IGE7XG59KTtcbmV4cG9ydCBkZWZhdWx0IG1heDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbWFwKGZuLCBmdW5jdG9yKSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gZnVuY3Rvci5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBBcnJheShsZW4pO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgcmVzdWx0W2lkeF0gPSBmbihmdW5jdG9yW2lkeF0pO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzU3RyaW5nKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9fY3VycnkxJztcbmltcG9ydCBfaXNBcnJheSBmcm9tICcuL19pc0FycmF5JztcbmltcG9ydCBfaXNTdHJpbmcgZnJvbSAnLi9faXNTdHJpbmcnO1xuXG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCBpcyBzaW1pbGFyIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgVHlwZVxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IHggVGhlIG9iamVjdCB0byB0ZXN0LlxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB4YCBoYXMgYSBudW1lcmljIGxlbmd0aCBwcm9wZXJ0eSBhbmQgZXh0cmVtZSBpbmRpY2VzIGRlZmluZWQ7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9pc0FycmF5TGlrZShbXSk7IC8vPT4gdHJ1ZVxuICogICAgICBfaXNBcnJheUxpa2UodHJ1ZSk7IC8vPT4gZmFsc2VcbiAqICAgICAgX2lzQXJyYXlMaWtlKHt9KTsgLy89PiBmYWxzZVxuICogICAgICBfaXNBcnJheUxpa2Uoe2xlbmd0aDogMTB9KTsgLy89PiBmYWxzZVxuICogICAgICBfaXNBcnJheUxpa2UoezA6ICd6ZXJvJywgOTogJ25pbmUnLCBsZW5ndGg6IDEwfSk7IC8vPT4gdHJ1ZVxuICovXG52YXIgX2lzQXJyYXlMaWtlID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gaXNBcnJheUxpa2UoeCkge1xuICBpZiAoX2lzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoX2lzU3RyaW5nKHgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgcmV0dXJuICEheC5sZW5ndGg7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB4Lmhhc093blByb3BlcnR5KDApICYmIHguaGFzT3duUHJvcGVydHkoeC5sZW5ndGggLSAxKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KTtcbmV4cG9ydCBkZWZhdWx0IF9pc0FycmF5TGlrZTsiLCJ2YXIgWFdyYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBYV3JhcChmbikge1xuICAgIHRoaXMuZiA9IGZuO1xuICB9XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXQgbm90IGltcGxlbWVudGVkIG9uIFhXcmFwJyk7XG4gIH07XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBhY2M7XG4gIH07XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uIChhY2MsIHgpIHtcbiAgICByZXR1cm4gdGhpcy5mKGFjYywgeCk7XG4gIH07XG5cbiAgcmV0dXJuIFhXcmFwO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfeHdyYXAoZm4pIHtcbiAgcmV0dXJuIG5ldyBYV3JhcChmbik7XG59IiwiaW1wb3J0IF9hcml0eSBmcm9tICcuL2ludGVybmFsL19hcml0eSc7XG5pbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGlzIGJvdW5kIHRvIGEgY29udGV4dC5cbiAqIE5vdGU6IGBSLmJpbmRgIGRvZXMgbm90IHByb3ZpZGUgdGhlIGFkZGl0aW9uYWwgYXJndW1lbnQtYmluZGluZyBjYXBhYmlsaXRpZXMgb2ZcbiAqIFtGdW5jdGlvbi5wcm90b3R5cGUuYmluZF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vYmluZCkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNi4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgKCogLT4gKikgLT4geyp9IC0+ICgqIC0+ICopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmluZCB0byBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc09iaiBUaGUgY29udGV4dCB0byBiaW5kIGBmbmAgdG9cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBleGVjdXRlIGluIHRoZSBjb250ZXh0IG9mIGB0aGlzT2JqYC5cbiAqIEBzZWUgUi5wYXJ0aWFsXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGxvZyA9IFIuYmluZChjb25zb2xlLmxvZywgY29uc29sZSk7XG4gKiAgICAgIFIucGlwZShSLmFzc29jKCdhJywgMiksIFIudGFwKGxvZyksIFIuYXNzb2MoJ2EnLCAzKSkoe2E6IDF9KTsgLy89PiB7YTogM31cbiAqICAgICAgLy8gbG9ncyB7YTogMn1cbiAqIEBzeW1iIFIuYmluZChmLCBvKShhLCBiKSA9IGYuY2FsbChvLCBhLCBiKVxuICovXG52YXIgYmluZCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNPYmopIHtcbiAgcmV0dXJuIF9hcml0eShmbi5sZW5ndGgsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJndW1lbnRzKTtcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGJpbmQ7IiwiaW1wb3J0IF9pc0FycmF5TGlrZSBmcm9tICcuL19pc0FycmF5TGlrZSc7XG5pbXBvcnQgX3h3cmFwIGZyb20gJy4vX3h3cmFwJztcbmltcG9ydCBiaW5kIGZyb20gJy4uL2JpbmQnO1xuXG5mdW5jdGlvbiBfYXJyYXlSZWR1Y2UoeGYsIGFjYywgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgYWNjID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10oYWNjLCBsaXN0W2lkeF0pO1xuICAgIGlmIChhY2MgJiYgYWNjWydAQHRyYW5zZHVjZXIvcmVkdWNlZCddKSB7XG4gICAgICBhY2MgPSBhY2NbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKGFjYyk7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVJlZHVjZSh4ZiwgYWNjLCBpdGVyKSB7XG4gIHZhciBzdGVwID0gaXRlci5uZXh0KCk7XG4gIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgYWNjID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoYWNjICYmIGFjY1snQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSkge1xuICAgICAgYWNjID0gYWNjWydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10oYWNjKTtcbn1cblxuZnVuY3Rpb24gX21ldGhvZFJlZHVjZSh4ZiwgYWNjLCBvYmosIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIHhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ob2JqW21ldGhvZE5hbWVdKGJpbmQoeGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10sIHhmKSwgYWNjKSk7XG59XG5cbnZhciBzeW1JdGVyYXRvciA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sLml0ZXJhdG9yIDogJ0BAaXRlcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVkdWNlKGZuLCBhY2MsIGxpc3QpIHtcbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gX3h3cmFwKGZuKTtcbiAgfVxuICBpZiAoX2lzQXJyYXlMaWtlKGxpc3QpKSB7XG4gICAgcmV0dXJuIF9hcnJheVJlZHVjZShmbiwgYWNjLCBsaXN0KTtcbiAgfVxuICBpZiAodHlwZW9mIGxpc3RbJ2ZhbnRhc3ktbGFuZC9yZWR1Y2UnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfbWV0aG9kUmVkdWNlKGZuLCBhY2MsIGxpc3QsICdmYW50YXN5LWxhbmQvcmVkdWNlJyk7XG4gIH1cbiAgaWYgKGxpc3Rbc3ltSXRlcmF0b3JdICE9IG51bGwpIHtcbiAgICByZXR1cm4gX2l0ZXJhYmxlUmVkdWNlKGZuLCBhY2MsIGxpc3Rbc3ltSXRlcmF0b3JdKCkpO1xuICB9XG4gIGlmICh0eXBlb2YgbGlzdC5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9pdGVyYWJsZVJlZHVjZShmbiwgYWNjLCBsaXN0KTtcbiAgfVxuICBpZiAodHlwZW9mIGxpc3QucmVkdWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tZXRob2RSZWR1Y2UoZm4sIGFjYywgbGlzdCwgJ3JlZHVjZScpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlOiBsaXN0IG11c3QgYmUgYXJyYXkgb3IgaXRlcmFibGUnKTtcbn0iLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL19jdXJyeTInO1xuaW1wb3J0IF94ZkJhc2UgZnJvbSAnLi9feGZCYXNlJztcblxudmFyIFhNYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBYTWFwKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhNYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbiAocmVzdWx0LCBpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5mKGlucHV0KSk7XG4gIH07XG5cbiAgcmV0dXJuIFhNYXA7XG59KCk7XG5cbnZhciBfeG1hcCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIF94bWFwKGYsIHhmKSB7XG4gIHJldHVybiBuZXcgWE1hcChmLCB4Zik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IF94bWFwOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9oYXMocHJvcCwgb2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn0iLCJpbXBvcnQgX2hhcyBmcm9tICcuL19oYXMnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIF9pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgPyBmdW5jdGlvbiBfaXNBcmd1bWVudHMoeCkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbiAgfSA6IGZ1bmN0aW9uIF9pc0FyZ3VtZW50cyh4KSB7XG4gICAgcmV0dXJuIF9oYXMoJ2NhbGxlZScsIHgpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX2lzQXJndW1lbnRzOyIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgX2hhcyBmcm9tICcuL2ludGVybmFsL19oYXMnO1xuaW1wb3J0IF9pc0FyZ3VtZW50cyBmcm9tICcuL2ludGVybmFsL19pc0FyZ3VtZW50cyc7XG5cbi8vIGNvdmVyIElFIDwgOSBrZXlzIGlzc3Vlc1xudmFyIGhhc0VudW1CdWcgPSAhIC8qI19fUFVSRV9fKi97IHRvU3RyaW5nOiBudWxsIH0ucHJvcGVydHlJc0VudW1lcmFibGUoJ3RvU3RyaW5nJyk7XG52YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWydjb25zdHJ1Y3RvcicsICd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcbi8vIFNhZmFyaSBidWdcbnZhciBoYXNBcmdzRW51bUJ1ZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByZXR1cm4gYXJndW1lbnRzLnByb3BlcnR5SXNFbnVtZXJhYmxlKCdsZW5ndGgnKTtcbn0oKTtcblxudmFyIGNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMobGlzdCwgaXRlbSkge1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgaWYgKGxpc3RbaWR4XSA9PT0gaXRlbSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3QgY29udGFpbmluZyB0aGUgbmFtZXMgb2YgYWxsIHRoZSBlbnVtZXJhYmxlIG93biBwcm9wZXJ0aWVzIG9mXG4gKiB0aGUgc3VwcGxpZWQgb2JqZWN0LlxuICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnRcbiAqIGFjcm9zcyBkaWZmZXJlbnQgSlMgcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7azogdn0gLT4gW2tdXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gZXh0cmFjdCBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiB0aGUgb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gKiBAc2VlIFIua2V5c0luLCBSLnZhbHVlc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIua2V5cyh7YTogMSwgYjogMiwgYzogM30pOyAvLz0+IFsnYScsICdiJywgJ2MnXVxuICovXG52YXIgX2tleXMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgIWhhc0FyZ3NFbnVtQnVnID8gZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdChvYmopICE9PSBvYmogPyBbXSA6IE9iamVjdC5rZXlzKG9iaik7XG59IDogZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgaWYgKE9iamVjdChvYmopICE9PSBvYmopIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHByb3AsIG5JZHg7XG4gIHZhciBrcyA9IFtdO1xuICB2YXIgY2hlY2tBcmdzTGVuZ3RoID0gaGFzQXJnc0VudW1CdWcgJiYgX2lzQXJndW1lbnRzKG9iaik7XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICBpZiAoX2hhcyhwcm9wLCBvYmopICYmICghY2hlY2tBcmdzTGVuZ3RoIHx8IHByb3AgIT09ICdsZW5ndGgnKSkge1xuICAgICAga3Nba3MubGVuZ3RoXSA9IHByb3A7XG4gICAgfVxuICB9XG4gIGlmIChoYXNFbnVtQnVnKSB7XG4gICAgbklkeCA9IG5vbkVudW1lcmFibGVQcm9wcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChuSWR4ID49IDApIHtcbiAgICAgIHByb3AgPSBub25FbnVtZXJhYmxlUHJvcHNbbklkeF07XG4gICAgICBpZiAoX2hhcyhwcm9wLCBvYmopICYmICFjb250YWlucyhrcywgcHJvcCkpIHtcbiAgICAgICAga3Nba3MubGVuZ3RoXSA9IHByb3A7XG4gICAgICB9XG4gICAgICBuSWR4IC09IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBrcztcbn07XG52YXIga2V5cyA9IC8qI19fUFVSRV9fKi9fY3VycnkxKF9rZXlzKTtcbmV4cG9ydCBkZWZhdWx0IGtleXM7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfZGlzcGF0Y2hhYmxlIGZyb20gJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZSc7XG5pbXBvcnQgX21hcCBmcm9tICcuL2ludGVybmFsL19tYXAnO1xuaW1wb3J0IF9yZWR1Y2UgZnJvbSAnLi9pbnRlcm5hbC9fcmVkdWNlJztcbmltcG9ydCBfeG1hcCBmcm9tICcuL2ludGVybmFsL194bWFwJztcbmltcG9ydCBjdXJyeU4gZnJvbSAnLi9jdXJyeU4nO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJztcblxuLyoqXG4gKiBUYWtlcyBhIGZ1bmN0aW9uIGFuZFxuICogYSBbZnVuY3Rvcl0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNmdW5jdG9yKSxcbiAqIGFwcGxpZXMgdGhlIGZ1bmN0aW9uIHRvIGVhY2ggb2YgdGhlIGZ1bmN0b3IncyB2YWx1ZXMsIGFuZCByZXR1cm5zXG4gKiBhIGZ1bmN0b3Igb2YgdGhlIHNhbWUgc2hhcGUuXG4gKlxuICogUmFtZGEgcHJvdmlkZXMgc3VpdGFibGUgYG1hcGAgaW1wbGVtZW50YXRpb25zIGZvciBgQXJyYXlgIGFuZCBgT2JqZWN0YCxcbiAqIHNvIHRoaXMgZnVuY3Rpb24gbWF5IGJlIGFwcGxpZWQgdG8gYFsxLCAyLCAzXWAgb3IgYHt4OiAxLCB5OiAyLCB6OiAzfWAuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYG1hcGAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEFsc28gdHJlYXRzIGZ1bmN0aW9ucyBhcyBmdW5jdG9ycyBhbmQgd2lsbCBjb21wb3NlIHRoZW0gdG9nZXRoZXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBGdW5jdG9yIGYgPT4gKGEgLT4gYikgLT4gZiBhIC0+IGYgYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBlbGVtZW50IG9mIHRoZSBpbnB1dCBgbGlzdGAuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGJlIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG5ldyBsaXN0LlxuICogQHNlZSBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkb3VibGUgPSB4ID0+IHggKiAyO1xuICpcbiAqICAgICAgUi5tYXAoZG91YmxlLCBbMSwgMiwgM10pOyAvLz0+IFsyLCA0LCA2XVxuICpcbiAqICAgICAgUi5tYXAoZG91YmxlLCB7eDogMSwgeTogMiwgejogM30pOyAvLz0+IHt4OiAyLCB5OiA0LCB6OiA2fVxuICogQHN5bWIgUi5tYXAoZiwgW2EsIGJdKSA9IFtmKGEpLCBmKGIpXVxuICogQHN5bWIgUi5tYXAoZiwgeyB4OiBhLCB5OiBiIH0pID0geyB4OiBmKGEpLCB5OiBmKGIpIH1cbiAqIEBzeW1iIFIubWFwKGYsIGZ1bmN0b3JfbykgPSBmdW5jdG9yX28ubWFwKGYpXG4gKi9cbnZhciBtYXAgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MiggLyojX19QVVJFX18qL19kaXNwYXRjaGFibGUoWydmYW50YXN5LWxhbmQvbWFwJywgJ21hcCddLCBfeG1hcCwgZnVuY3Rpb24gbWFwKGZuLCBmdW5jdG9yKSB7XG4gIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0b3IpKSB7XG4gICAgY2FzZSAnW29iamVjdCBGdW5jdGlvbl0nOlxuICAgICAgcmV0dXJuIGN1cnJ5TihmdW5jdG9yLmxlbmd0aCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBmdW5jdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfSk7XG4gICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgIHJldHVybiBfcmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBhY2Nba2V5XSA9IGZuKGZ1bmN0b3Jba2V5XSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSwga2V5cyhmdW5jdG9yKSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfbWFwKGZuLCBmdW5jdG9yKTtcbiAgfVxufSkpO1xuZXhwb3J0IGRlZmF1bHQgbWFwOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHZhbHVlIGF0IGEgZ2l2ZW4gcGF0aC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBJZHggPSBTdHJpbmcgfCBJbnRcbiAqIEBzaWcgW0lkeF0gLT4ge2F9IC0+IGEgfCBVbmRlZmluZWRcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHJldHJpZXZlIHRoZSBuZXN0ZWQgcHJvcGVydHkgZnJvbS5cbiAqIEByZXR1cm4geyp9IFRoZSBkYXRhIGF0IGBwYXRoYC5cbiAqIEBzZWUgUi5wcm9wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYXRoKFsnYScsICdiJ10sIHthOiB7YjogMn19KTsgLy89PiAyXG4gKiAgICAgIFIucGF0aChbJ2EnLCAnYiddLCB7Yzoge2I6IDJ9fSk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cbnZhciBwYXRoID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gcGF0aChwYXRocywgb2JqKSB7XG4gIHZhciB2YWwgPSBvYmo7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgcGF0aHMubGVuZ3RoKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbCA9IHZhbFtwYXRoc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gdmFsO1xufSk7XG5leHBvcnQgZGVmYXVsdCBwYXRoOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgcGF0aCBmcm9tICcuL3BhdGgnO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdoZW4gc3VwcGxpZWQgYW4gb2JqZWN0IHJldHVybnMgdGhlIGluZGljYXRlZFxuICogcHJvcGVydHkgb2YgdGhhdCBvYmplY3QsIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgcyAtPiB7czogYX0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHBhcmFtIHtTdHJpbmd9IHAgVGhlIHByb3BlcnR5IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeVxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIGF0IGBvYmoucGAuXG4gKiBAc2VlIFIucGF0aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvcCgneCcsIHt4OiAxMDB9KTsgLy89PiAxMDBcbiAqICAgICAgUi5wcm9wKCd4Jywge30pOyAvLz0+IHVuZGVmaW5lZFxuICovXG5cbnZhciBwcm9wID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gcHJvcChwLCBvYmopIHtcbiAgcmV0dXJuIHBhdGgoW3BdLCBvYmopO1xufSk7XG5leHBvcnQgZGVmYXVsdCBwcm9wOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBwcm9wIGZyb20gJy4vcHJvcCc7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGJ5IHBsdWNraW5nIHRoZSBzYW1lIG5hbWVkIHByb3BlcnR5IG9mZiBhbGwgb2JqZWN0cyBpblxuICogdGhlIGxpc3Qgc3VwcGxpZWQuXG4gKlxuICogYHBsdWNrYCB3aWxsIHdvcmsgb25cbiAqIGFueSBbZnVuY3Rvcl0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNmdW5jdG9yKSBpblxuICogYWRkaXRpb24gdG8gYXJyYXlzLCBhcyBpdCBpcyBlcXVpdmFsZW50IHRvIGBSLm1hcChSLnByb3AoayksIGYpYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIEZ1bmN0b3IgZiA9PiBrIC0+IGYge2s6IHZ9IC0+IGYgdlxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXkgVGhlIGtleSBuYW1lIHRvIHBsdWNrIG9mZiBvZiBlYWNoIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGYgVGhlIGFycmF5IG9yIGZ1bmN0b3IgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3Qgb2YgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5LlxuICogQHNlZSBSLnByb3BzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wbHVjaygnYScpKFt7YTogMX0sIHthOiAyfV0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnBsdWNrKDApKFtbMSwgMl0sIFszLCA0XV0pOyAgIC8vPT4gWzEsIDNdXG4gKiAgICAgIFIucGx1Y2soJ3ZhbCcsIHthOiB7dmFsOiAzfSwgYjoge3ZhbDogNX19KTsgLy89PiB7YTogMywgYjogNX1cbiAqIEBzeW1iIFIucGx1Y2soJ3gnLCBbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogNH0sIHt4OiA1LCB5OiA2fV0pID0gWzEsIDMsIDVdXG4gKiBAc3ltYiBSLnBsdWNrKDAsIFtbMSwgMl0sIFszLCA0XSwgWzUsIDZdXSkgPSBbMSwgMywgNV1cbiAqL1xudmFyIHBsdWNrID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gcGx1Y2socCwgbGlzdCkge1xuICByZXR1cm4gbWFwKHByb3AocCksIGxpc3QpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBwbHVjazsiLCJpbXBvcnQgX2N1cnJ5MyBmcm9tICcuL2ludGVybmFsL19jdXJyeTMnO1xuaW1wb3J0IF9yZWR1Y2UgZnJvbSAnLi9pbnRlcm5hbC9fcmVkdWNlJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nXG4gKiB0aGUgaXRlcmF0b3IgZnVuY3Rpb24gYW5kIHBhc3NpbmcgaXQgYW4gYWNjdW11bGF0b3IgdmFsdWUgYW5kIHRoZSBjdXJyZW50XG4gKiB2YWx1ZSBmcm9tIHRoZSBhcnJheSwgYW5kIHRoZW4gcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IGNhbGwuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byB2YWx1ZXM6ICooYWNjLCB2YWx1ZSkqLiBJdCBtYXkgdXNlXG4gKiBbYFIucmVkdWNlZGBdKCNyZWR1Y2VkKSB0byBzaG9ydGN1dCB0aGUgaXRlcmF0aW9uLlxuICpcbiAqIFRoZSBhcmd1bWVudHMnIG9yZGVyIG9mIFtgcmVkdWNlUmlnaHRgXSgjcmVkdWNlUmlnaHQpJ3MgaXRlcmF0b3IgZnVuY3Rpb25cbiAqIGlzICoodmFsdWUsIGFjYykqLlxuICpcbiAqIE5vdGU6IGBSLnJlZHVjZWAgZG9lcyBub3Qgc2tpcCBkZWxldGVkIG9yIHVuYXNzaWduZWQgaW5kaWNlcyAoc3BhcnNlXG4gKiBhcnJheXMpLCB1bmxpa2UgdGhlIG5hdGl2ZSBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kLiBGb3IgbW9yZSBkZXRhaWxzXG4gKiBvbiB0aGlzIGJlaGF2aW9yLCBzZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2UjRGVzY3JpcHRpb25cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgcmVkdWNlYCBtZXRob2Qgb2YgdGhlIHRoaXJkIGFyZ3VtZW50LCBpZiBwcmVzZW50LiBXaGVuXG4gKiBkb2luZyBzbywgaXQgaXMgdXAgdG8gdGhlIHVzZXIgdG8gaGFuZGxlIHRoZSBbYFIucmVkdWNlZGBdKCNyZWR1Y2VkKVxuICogc2hvcnRjdXRpbmcsIGFzIHRoaXMgaXMgbm90IGltcGxlbWVudGVkIGJ5IGByZWR1Y2VgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKChhLCBiKSAtPiBhKSAtPiBhIC0+IFtiXSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uIFJlY2VpdmVzIHR3byB2YWx1ZXMsIHRoZSBhY2N1bXVsYXRvciBhbmQgdGhlXG4gKiAgICAgICAgY3VycmVudCBlbGVtZW50IGZyb20gdGhlIGFycmF5LlxuICogQHBhcmFtIHsqfSBhY2MgVGhlIGFjY3VtdWxhdG9yIHZhbHVlLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHsqfSBUaGUgZmluYWwsIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHNlZSBSLnJlZHVjZWQsIFIuYWRkSW5kZXgsIFIucmVkdWNlUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnJlZHVjZShSLnN1YnRyYWN0LCAwLCBbMSwgMiwgMywgNF0pIC8vID0+ICgoKCgwIC0gMSkgLSAyKSAtIDMpIC0gNCkgPSAtMTBcbiAqICAgICAgLy8gICAgICAgICAgLSAgICAgICAgICAgICAgIC0xMFxuICogICAgICAvLyAgICAgICAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgLy8gICAgICAgIC0gICA0ICAgICAgICAgICAtNiAgIDRcbiAqICAgICAgLy8gICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAvLyAgICAgIC0gICAzICAgPT0+ICAgICAtMyAgIDNcbiAqICAgICAgLy8gICAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgLy8gICAgLSAgIDIgICAgICAgICAgIC0xICAgMlxuICogICAgICAvLyAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgLy8gIDAgICAxICAgICAgICAgICAgMCAgIDFcbiAqXG4gKiBAc3ltYiBSLnJlZHVjZShmLCBhLCBbYiwgYywgZF0pID0gZihmKGYoYSwgYiksIGMpLCBkKVxuICovXG52YXIgcmVkdWNlID0gLyojX19QVVJFX18qL19jdXJyeTMoX3JlZHVjZSk7XG5leHBvcnQgZGVmYXVsdCByZWR1Y2U7IiwiaW1wb3J0IF9jb25jYXQgZnJvbSAnLi9pbnRlcm5hbC9fY29uY2F0JztcbmltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICcuL2ludGVybmFsL19yZWR1Y2UnO1xuaW1wb3J0IG1hcCBmcm9tICcuL21hcCc7XG5cbi8qKlxuICogYXAgYXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFwYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC4gQWxzb1xuICogdHJlYXRzIGN1cnJpZWQgZnVuY3Rpb25zIGFzIGFwcGxpY2F0aXZlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAc2lnIEFwcGx5IGYgPT4gZiAoYSAtPiBiKSAtPiBmIGEgLT4gZiBiXG4gKiBAc2lnIChhIC0+IGIgLT4gYykgLT4gKGEgLT4gYikgLT4gKGEgLT4gYylcbiAqIEBwYXJhbSB7Kn0gYXBwbHlGXG4gKiBAcGFyYW0geyp9IGFwcGx5WFxuICogQHJldHVybiB7Kn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmFwKFtSLm11bHRpcGx5KDIpLCBSLmFkZCgzKV0sIFsxLDIsM10pOyAvLz0+IFsyLCA0LCA2LCA0LCA1LCA2XVxuICogICAgICBSLmFwKFtSLmNvbmNhdCgndGFzdHkgJyksIFIudG9VcHBlcl0sIFsncGl6emEnLCAnc2FsYWQnXSk7IC8vPT4gW1widGFzdHkgcGl6emFcIiwgXCJ0YXN0eSBzYWxhZFwiLCBcIlBJWlpBXCIsIFwiU0FMQURcIl1cbiAqXG4gKiAgICAgIC8vIFIuYXAgY2FuIGFsc28gYmUgdXNlZCBhcyBTIGNvbWJpbmF0b3JcbiAqICAgICAgLy8gd2hlbiBvbmx5IHR3byBmdW5jdGlvbnMgYXJlIHBhc3NlZFxuICogICAgICBSLmFwKFIuY29uY2F0LCBSLnRvVXBwZXIpKCdSYW1kYScpIC8vPT4gJ1JhbWRhUkFNREEnXG4gKiBAc3ltYiBSLmFwKFtmLCBnXSwgW2EsIGJdKSA9IFtmKGEpLCBmKGIpLCBnKGEpLCBnKGIpXVxuICovXG52YXIgYXAgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBhcChhcHBseUYsIGFwcGx5WCkge1xuICByZXR1cm4gdHlwZW9mIGFwcGx5WFsnZmFudGFzeS1sYW5kL2FwJ10gPT09ICdmdW5jdGlvbicgPyBhcHBseVhbJ2ZhbnRhc3ktbGFuZC9hcCddKGFwcGx5RikgOiB0eXBlb2YgYXBwbHlGLmFwID09PSAnZnVuY3Rpb24nID8gYXBwbHlGLmFwKGFwcGx5WCkgOiB0eXBlb2YgYXBwbHlGID09PSAnZnVuY3Rpb24nID8gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gYXBwbHlGKHgpKGFwcGx5WCh4KSk7XG4gIH0gOlxuICAvLyBlbHNlXG4gIF9yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgIHJldHVybiBfY29uY2F0KGFjYywgbWFwKGYsIGFwcGx5WCkpO1xuICB9LCBbXSwgYXBwbHlGKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgYXA7IiwiLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCBhcmd1bWVudCBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IG5cbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBOdW1iZXIuaXNJbnRlZ2VyIHx8IGZ1bmN0aW9uIF9pc0ludGVnZXIobikge1xuICByZXR1cm4gbiA8PCAwID09PSBuO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfcmVkdWNlIGZyb20gJy4vaW50ZXJuYWwvX3JlZHVjZSc7XG5pbXBvcnQgYXAgZnJvbSAnLi9hcCc7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcbmltcG9ydCBtYXAgZnJvbSAnLi9tYXAnO1xuXG4vKipcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIHRvIGJlIHRoZSBzcGVjaWZpZWQgYXJpdHksIHNvIHRoYXQgaXQgbWF5IFwibWFwIG92ZXJcIiB0aGF0XG4gKiBtYW55IGxpc3RzLCBGdW5jdGlvbnMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IHNhdGlzZnkgdGhlIFtGYW50YXN5TGFuZCBBcHBseSBzcGVjXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2FwcGx5KS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC43LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbGlmdCBpbnRvIGhpZ2hlciBjb250ZXh0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGxpZnRlZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5saWZ0LCBSLmFwXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG1hZGQzID0gUi5saWZ0TigzLCAoLi4uYXJncykgPT4gUi5zdW0oYXJncykpO1xuICogICAgICBtYWRkMyhbMSwyLDNdLCBbMSwyLDNdLCBbMV0pOyAvLz0+IFszLCA0LCA1LCA0LCA1LCA2LCA1LCA2LCA3XVxuICovXG52YXIgbGlmdE4gPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBsaWZ0Tihhcml0eSwgZm4pIHtcbiAgdmFyIGxpZnRlZCA9IGN1cnJ5Tihhcml0eSwgZm4pO1xuICByZXR1cm4gY3VycnlOKGFyaXR5LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9yZWR1Y2UoYXAsIG1hcChsaWZ0ZWQsIGFyZ3VtZW50c1swXSksIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbGlmdE47IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBsaWZ0TiBmcm9tICcuL2xpZnROJztcblxuLyoqXG4gKiBcImxpZnRzXCIgYSBmdW5jdGlvbiBvZiBhcml0eSA+IDEgc28gdGhhdCBpdCBtYXkgXCJtYXAgb3ZlclwiIGEgbGlzdCwgRnVuY3Rpb24gb3Igb3RoZXJcbiAqIG9iamVjdCB0aGF0IHNhdGlzZmllcyB0aGUgW0ZhbnRhc3lMYW5kIEFwcGx5IHNwZWNdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjYXBwbHkpLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjcuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGxpZnQgaW50byBoaWdoZXIgY29udGV4dFxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBsaWZ0ZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIubGlmdE5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbWFkZDMgPSBSLmxpZnQoKGEsIGIsIGMpID0+IGEgKyBiICsgYyk7XG4gKlxuICogICAgICBtYWRkMyhbMSwyLDNdLCBbMSwyLDNdLCBbMV0pOyAvLz0+IFszLCA0LCA1LCA0LCA1LCA2LCA1LCA2LCA3XVxuICpcbiAqICAgICAgdmFyIG1hZGQ1ID0gUi5saWZ0KChhLCBiLCBjLCBkLCBlKSA9PiBhICsgYiArIGMgKyBkICsgZSk7XG4gKlxuICogICAgICBtYWRkNShbMSwyXSwgWzNdLCBbNCwgNV0sIFs2XSwgWzcsIDhdKTsgLy89PiBbMjEsIDIyLCAyMiwgMjMsIDIyLCAyMywgMjMsIDI0XVxuICovXG52YXIgbGlmdCA9IC8qI19fUFVSRV9fKi9fY3VycnkxKGZ1bmN0aW9uIGxpZnQoZm4pIHtcbiAgcmV0dXJuIGxpZnROKGZuLmxlbmd0aCwgZm4pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBsaWZ0OyIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgY3VycnlOIGZyb20gJy4vY3VycnlOJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBlcXVpdmFsZW50IG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gVGhlIGN1cnJpZWQgZnVuY3Rpb25cbiAqIGhhcyB0d28gdW51c3VhbCBjYXBhYmlsaXRpZXMuIEZpcnN0LCBpdHMgYXJndW1lbnRzIG5lZWRuJ3QgYmUgcHJvdmlkZWQgb25lXG4gKiBhdCBhIHRpbWUuIElmIGBmYCBpcyBhIHRlcm5hcnkgZnVuY3Rpb24gYW5kIGBnYCBpcyBgUi5jdXJyeShmKWAsIHRoZVxuICogZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxKSgyKSgzKWBcbiAqICAgLSBgZygxKSgyLCAzKWBcbiAqICAgLSBgZygxLCAyKSgzKWBcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqXG4gKiBTZWNvbmRseSwgdGhlIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgW2BSLl9fYF0oI19fKSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5XG4gKiBcImdhcHNcIiwgYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLFxuICogcmVnYXJkbGVzcyBvZiB0aGVpciBwb3NpdGlvbnMuIElmIGBnYCBpcyBhcyBhYm92ZSBhbmQgYF9gIGlzIFtgUi5fX2BdKCNfXyksXG4gKiB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBhKSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5TlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhZGRGb3VyTnVtYmVycyA9IChhLCBiLCBjLCBkKSA9PiBhICsgYiArIGMgKyBkO1xuICpcbiAqICAgICAgdmFyIGN1cnJpZWRBZGRGb3VyTnVtYmVycyA9IFIuY3VycnkoYWRkRm91ck51bWJlcnMpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbnZhciBjdXJyeSA9IC8qI19fUFVSRV9fKi9fY3VycnkxKGZ1bmN0aW9uIGN1cnJ5KGZuKSB7XG4gIHJldHVybiBjdXJyeU4oZm4ubGVuZ3RoLCBmbik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGN1cnJ5OyIsImltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5JztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgY2FsbGluZyBpdHMgZmlyc3QgYXJndW1lbnQgd2l0aCB0aGUgcmVtYWluaW5nXG4gKiBhcmd1bWVudHMuIFRoaXMgaXMgb2NjYXNpb25hbGx5IHVzZWZ1bCBhcyBhIGNvbnZlcmdpbmcgZnVuY3Rpb24gZm9yXG4gKiBbYFIuY29udmVyZ2VgXSgjY29udmVyZ2UpOiB0aGUgZmlyc3QgYnJhbmNoIGNhbiBwcm9kdWNlIGEgZnVuY3Rpb24gd2hpbGUgdGhlXG4gKiByZW1haW5pbmcgYnJhbmNoZXMgcHJvZHVjZSB2YWx1ZXMgdG8gYmUgcGFzc2VkIHRvIHRoYXQgZnVuY3Rpb24gYXMgaXRzXG4gKiBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSksKi4uLiAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHJlbWFpbmluZyBhcmd1bWVudHMuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG51bWJlciBvZiBwb3NpdGlvbmFsIGFyZ3VtZW50cy5cbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuYXBwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmNhbGwoUi5hZGQsIDEsIDIpOyAvLz0+IDNcbiAqXG4gKiAgICAgIHZhciBpbmRlbnROID0gUi5waXBlKFIucmVwZWF0KCcgJyksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFIuam9pbignJyksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucmVwbGFjZSgvXig/ISQpL2dtKSk7XG4gKlxuICogICAgICB2YXIgZm9ybWF0ID0gUi5jb252ZXJnZShSLmNhbGwsIFtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucGlwZShSLnByb3AoJ2luZGVudCcpLCBpbmRlbnROKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucHJvcCgndmFsdWUnKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAqXG4gKiAgICAgIGZvcm1hdCh7aW5kZW50OiAyLCB2YWx1ZTogJ2Zvb1xcbmJhclxcbmJhelxcbid9KTsgLy89PiAnICBmb29cXG4gIGJhclxcbiAgYmF6XFxuJ1xuICogQHN5bWIgUi5jYWxsKGYsIGEsIGIpID0gZihhLCBiKVxuICovXG52YXIgY2FsbCA9IC8qI19fUFVSRV9fKi9jdXJyeShmdW5jdGlvbiBjYWxsKGZuKSB7XG4gIHJldHVybiBmbi5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY2FsbDsiLCJpbXBvcnQgX2lzQXJyYXlMaWtlIGZyb20gJy4vX2lzQXJyYXlMaWtlJztcblxuLyoqXG4gKiBgX21ha2VGbGF0YCBpcyBhIGhlbHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBvbmUtbGV2ZWwgb3IgZnVsbHkgcmVjdXJzaXZlXG4gKiBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgZmxhZyBwYXNzZWQgaW4uXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX21ha2VGbGF0KHJlY3Vyc2l2ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZmxhdHQobGlzdCkge1xuICAgIHZhciB2YWx1ZSwgamxlbiwgajtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIGlsZW4gPSBsaXN0Lmxlbmd0aDtcblxuICAgIHdoaWxlIChpZHggPCBpbGVuKSB7XG4gICAgICBpZiAoX2lzQXJyYXlMaWtlKGxpc3RbaWR4XSkpIHtcbiAgICAgICAgdmFsdWUgPSByZWN1cnNpdmUgPyBmbGF0dChsaXN0W2lkeF0pIDogbGlzdFtpZHhdO1xuICAgICAgICBqID0gMDtcbiAgICAgICAgamxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGogPCBqbGVuKSB7XG4gICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWVbal07XG4gICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsaXN0W2lkeF07XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZm9yY2VSZWR1Y2VkKHgpIHtcbiAgcmV0dXJuIHtcbiAgICAnQEB0cmFuc2R1Y2VyL3ZhbHVlJzogeCxcbiAgICAnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnOiB0cnVlXG4gIH07XG59IiwiaW1wb3J0IF9mb3JjZVJlZHVjZWQgZnJvbSAnLi9fZm9yY2VSZWR1Y2VkJztcbmltcG9ydCBfaXNBcnJheUxpa2UgZnJvbSAnLi9faXNBcnJheUxpa2UnO1xuaW1wb3J0IF9yZWR1Y2UgZnJvbSAnLi9fcmVkdWNlJztcbmltcG9ydCBfeGZCYXNlIGZyb20gJy4vX3hmQmFzZSc7XG5cbnZhciBwcmVzZXJ2aW5nUmVkdWNlZCA9IGZ1bmN0aW9uICh4Zikge1xuICByZXR1cm4ge1xuICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IF94ZkJhc2UuaW5pdCxcbiAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gICAgfSxcbiAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbiAocmVzdWx0LCBpbnB1dCkge1xuICAgICAgdmFyIHJldCA9IHhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICAgICAgcmV0dXJuIHJldFsnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSA/IF9mb3JjZVJlZHVjZWQocmV0KSA6IHJldDtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgX2ZsYXRDYXQgPSBmdW5jdGlvbiBfeGNhdCh4Zikge1xuICB2YXIgcnhmID0gcHJlc2VydmluZ1JlZHVjZWQoeGYpO1xuICByZXR1cm4ge1xuICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IF94ZkJhc2UuaW5pdCxcbiAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByeGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICAgIH0sXG4gICAgJ0BAdHJhbnNkdWNlci9zdGVwJzogZnVuY3Rpb24gKHJlc3VsdCwgaW5wdXQpIHtcbiAgICAgIHJldHVybiAhX2lzQXJyYXlMaWtlKGlucHV0KSA/IF9yZWR1Y2UocnhmLCByZXN1bHQsIFtpbnB1dF0pIDogX3JlZHVjZShyeGYsIHJlc3VsdCwgaW5wdXQpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IF9mbGF0Q2F0OyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vX2N1cnJ5Mic7XG5pbXBvcnQgX2ZsYXRDYXQgZnJvbSAnLi9fZmxhdENhdCc7XG5pbXBvcnQgbWFwIGZyb20gJy4uL21hcCc7XG5cbnZhciBfeGNoYWluID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gX3hjaGFpbihmLCB4Zikge1xuICByZXR1cm4gbWFwKGYsIF9mbGF0Q2F0KHhmKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IF94Y2hhaW47IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfZGlzcGF0Y2hhYmxlIGZyb20gJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZSc7XG5pbXBvcnQgX21ha2VGbGF0IGZyb20gJy4vaW50ZXJuYWwvX21ha2VGbGF0JztcbmltcG9ydCBfeGNoYWluIGZyb20gJy4vaW50ZXJuYWwvX3hjaGFpbic7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcblxuLyoqXG4gKiBgY2hhaW5gIG1hcHMgYSBmdW5jdGlvbiBvdmVyIGEgbGlzdCBhbmQgY29uY2F0ZW5hdGVzIHRoZSByZXN1bHRzLiBgY2hhaW5gXG4gKiBpcyBhbHNvIGtub3duIGFzIGBmbGF0TWFwYCBpbiBzb21lIGxpYnJhcmllc1xuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBjaGFpbmAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQsXG4gKiBhY2NvcmRpbmcgdG8gdGhlIFtGYW50YXN5TGFuZCBDaGFpbiBzcGVjXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2NoYWluKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIENoYWluIG0gPT4gKGEgLT4gbSBiKSAtPiBtIGEgLT4gbSBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFwIHdpdGhcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gbWFwIG92ZXJcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgcmVzdWx0IG9mIGZsYXQtbWFwcGluZyBgbGlzdGAgd2l0aCBgZm5gXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGR1cGxpY2F0ZSA9IG4gPT4gW24sIG5dO1xuICogICAgICBSLmNoYWluKGR1cGxpY2F0ZSwgWzEsIDIsIDNdKTsgLy89PiBbMSwgMSwgMiwgMiwgMywgM11cbiAqXG4gKiAgICAgIFIuY2hhaW4oUi5hcHBlbmQsIFIuaGVhZCkoWzEsIDIsIDNdKTsgLy89PiBbMSwgMiwgMywgMV1cbiAqL1xudmFyIGNoYWluID0gLyojX19QVVJFX18qL19jdXJyeTIoIC8qI19fUFVSRV9fKi9fZGlzcGF0Y2hhYmxlKFsnZmFudGFzeS1sYW5kL2NoYWluJywgJ2NoYWluJ10sIF94Y2hhaW4sIGZ1bmN0aW9uIGNoYWluKGZuLCBtb25hZCkge1xuICBpZiAodHlwZW9mIG1vbmFkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gZm4obW9uYWQoeCkpKHgpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIF9tYWtlRmxhdChmYWxzZSkobWFwKGZuLCBtb25hZCkpO1xufSkpO1xuZXhwb3J0IGRlZmF1bHQgY2hhaW47IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcblxuLyoqXG4gKiBHaXZlcyBhIHNpbmdsZS13b3JkIHN0cmluZyBkZXNjcmlwdGlvbiBvZiB0aGUgKG5hdGl2ZSkgdHlwZSBvZiBhIHZhbHVlLFxuICogcmV0dXJuaW5nIHN1Y2ggYW5zd2VycyBhcyAnT2JqZWN0JywgJ051bWJlcicsICdBcnJheScsIG9yICdOdWxsJy4gRG9lcyBub3RcbiAqIGF0dGVtcHQgdG8gZGlzdGluZ3Vpc2ggdXNlciBPYmplY3QgdHlwZXMgYW55IGZ1cnRoZXIsIHJlcG9ydGluZyB0aGVtIGFsbCBhc1xuICogJ09iamVjdCcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgVHlwZVxuICogQHNpZyAoKiAtPiB7Kn0pIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnR5cGUoe30pOyAvLz0+IFwiT2JqZWN0XCJcbiAqICAgICAgUi50eXBlKDEpOyAvLz0+IFwiTnVtYmVyXCJcbiAqICAgICAgUi50eXBlKGZhbHNlKTsgLy89PiBcIkJvb2xlYW5cIlxuICogICAgICBSLnR5cGUoJ3MnKTsgLy89PiBcIlN0cmluZ1wiXG4gKiAgICAgIFIudHlwZShudWxsKTsgLy89PiBcIk51bGxcIlxuICogICAgICBSLnR5cGUoW10pOyAvLz0+IFwiQXJyYXlcIlxuICogICAgICBSLnR5cGUoL1tBLXpdLyk7IC8vPT4gXCJSZWdFeHBcIlxuICogICAgICBSLnR5cGUoKCkgPT4ge30pOyAvLz0+IFwiRnVuY3Rpb25cIlxuICogICAgICBSLnR5cGUodW5kZWZpbmVkKTsgLy89PiBcIlVuZGVmaW5lZFwiXG4gKi9cbnZhciB0eXBlID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gdHlwZSh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PT0gbnVsbCA/ICdOdWxsJyA6IHZhbCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHR5cGU7IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYCFgIG9mIGl0cyBhcmd1bWVudC4gSXQgd2lsbCByZXR1cm4gYHRydWVgIHdoZW5cbiAqIHBhc3NlZCBmYWxzZS15IHZhbHVlLCBhbmQgYGZhbHNlYCB3aGVuIHBhc3NlZCBhIHRydXRoLXkgb25lLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSBhIGFueSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGxvZ2ljYWwgaW52ZXJzZSBvZiBwYXNzZWQgYXJndW1lbnQuXG4gKiBAc2VlIFIuY29tcGxlbWVudFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubm90KHRydWUpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIubm90KGZhbHNlKTsgLy89PiB0cnVlXG4gKiAgICAgIFIubm90KDApOyAvLz0+IHRydWVcbiAqICAgICAgUi5ub3QoMSk7IC8vPT4gZmFsc2VcbiAqL1xudmFyIG5vdCA9IC8qI19fUFVSRV9fKi9fY3VycnkxKGZ1bmN0aW9uIG5vdChhKSB7XG4gIHJldHVybiAhYTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbm90OyIsImltcG9ydCBsaWZ0IGZyb20gJy4vbGlmdCc7XG5pbXBvcnQgbm90IGZyb20gJy4vbm90JztcblxuLyoqXG4gKiBUYWtlcyBhIGZ1bmN0aW9uIGBmYCBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIGBnYCBzdWNoIHRoYXQgaWYgY2FsbGVkIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzXG4gKiB3aGVuIGBmYCByZXR1cm5zIGEgXCJ0cnV0aHlcIiB2YWx1ZSwgYGdgIHJldHVybnMgYGZhbHNlYCBhbmQgd2hlbiBgZmAgcmV0dXJucyBhIFwiZmFsc3lcIiB2YWx1ZSBgZ2AgcmV0dXJucyBgdHJ1ZWAuXG4gKlxuICogYFIuY29tcGxlbWVudGAgbWF5IGJlIGFwcGxpZWQgdG8gYW55IGZ1bmN0b3JcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMi4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKCouLi4gLT4gQm9vbGVhbilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLm5vdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc05vdE5pbCA9IFIuY29tcGxlbWVudChSLmlzTmlsKTtcbiAqICAgICAgaXNOaWwobnVsbCk7IC8vPT4gdHJ1ZVxuICogICAgICBpc05vdE5pbChudWxsKTsgLy89PiBmYWxzZVxuICogICAgICBpc05pbCg3KTsgLy89PiBmYWxzZVxuICogICAgICBpc05vdE5pbCg3KTsgLy89PiB0cnVlXG4gKi9cbnZhciBjb21wbGVtZW50ID0gLyojX19QVVJFX18qL2xpZnQobm90KTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBsZW1lbnQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3BpcGUoZiwgZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnLmNhbGwodGhpcywgZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn0iLCJpbXBvcnQgX2lzQXJyYXkgZnJvbSAnLi9faXNBcnJheSc7XG5cbi8qKlxuICogVGhpcyBjaGVja3Mgd2hldGhlciBhIGZ1bmN0aW9uIGhhcyBhIFttZXRob2RuYW1lXSBmdW5jdGlvbi4gSWYgaXQgaXNuJ3QgYW5cbiAqIGFycmF5IGl0IHdpbGwgZXhlY3V0ZSB0aGF0IGZ1bmN0aW9uIG90aGVyd2lzZSBpdCB3aWxsIGRlZmF1bHQgdG8gdGhlIHJhbWRhXG4gKiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gcmFtZGEgaW1wbGVtdGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kbmFtZSBwcm9wZXJ0eSB0byBjaGVjayBmb3IgYSBjdXN0b20gaW1wbGVtZW50YXRpb25cbiAqIEByZXR1cm4ge09iamVjdH0gV2hhdGV2ZXIgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbWV0aG9kIGlzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2hlY2tGb3JNZXRob2QobWV0aG9kbmFtZSwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tsZW5ndGggLSAxXTtcbiAgICByZXR1cm4gX2lzQXJyYXkob2JqKSB8fCB0eXBlb2Ygb2JqW21ldGhvZG5hbWVdICE9PSAnZnVuY3Rpb24nID8gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IG9ialttZXRob2RuYW1lXS5hcHBseShvYmosIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgbGVuZ3RoIC0gMSkpO1xuICB9O1xufSIsImltcG9ydCBfY2hlY2tGb3JNZXRob2QgZnJvbSAnLi9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QnO1xuaW1wb3J0IF9jdXJyeTMgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkzJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcgKG9yIG9iamVjdCB3aXRoIGEgYHNsaWNlYFxuICogbWV0aG9kKSBmcm9tIGBmcm9tSW5kZXhgIChpbmNsdXNpdmUpIHRvIGB0b0luZGV4YCAoZXhjbHVzaXZlKS5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgc2xpY2VgIG1ldGhvZCBvZiB0aGUgdGhpcmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS40XG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4IFRoZSBzdGFydCBpbmRleCAoaW5jbHVzaXZlKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4IFRoZSBlbmQgaW5kZXggKGV4Y2x1c2l2ZSkuXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zbGljZSgxLCAzLCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7ICAgICAgICAvLz0+IFsnYicsICdjJ11cbiAqICAgICAgUi5zbGljZSgxLCBJbmZpbml0eSwgWydhJywgJ2InLCAnYycsICdkJ10pOyAvLz0+IFsnYicsICdjJywgJ2QnXVxuICogICAgICBSLnNsaWNlKDAsIC0xLCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7ICAgICAgIC8vPT4gWydhJywgJ2InLCAnYyddXG4gKiAgICAgIFIuc2xpY2UoLTMsIC0xLCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7ICAgICAgLy89PiBbJ2InLCAnYyddXG4gKiAgICAgIFIuc2xpY2UoMCwgMywgJ3JhbWRhJyk7ICAgICAgICAgICAgICAgICAgICAgLy89PiAncmFtJ1xuICovXG52YXIgc2xpY2UgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MyggLyojX19QVVJFX18qL19jaGVja0Zvck1ldGhvZCgnc2xpY2UnLCBmdW5jdGlvbiBzbGljZShmcm9tSW5kZXgsIHRvSW5kZXgsIGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIGZyb21JbmRleCwgdG9JbmRleCk7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBzbGljZTsiLCJpbXBvcnQgX2NoZWNrRm9yTWV0aG9kIGZyb20gJy4vaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kJztcbmltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgc2xpY2UgZnJvbSAnLi9zbGljZSc7XG5cbi8qKlxuICogUmV0dXJucyBhbGwgYnV0IHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZyAob3Igb2JqZWN0XG4gKiB3aXRoIGEgYHRhaWxgIG1ldGhvZCkuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHNsaWNlYCBtZXRob2Qgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFthXVxuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuaGVhZCwgUi5pbml0LCBSLmxhc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRhaWwoWzEsIDIsIDNdKTsgIC8vPT4gWzIsIDNdXG4gKiAgICAgIFIudGFpbChbMSwgMl0pOyAgICAgLy89PiBbMl1cbiAqICAgICAgUi50YWlsKFsxXSk7ICAgICAgICAvLz0+IFtdXG4gKiAgICAgIFIudGFpbChbXSk7ICAgICAgICAgLy89PiBbXVxuICpcbiAqICAgICAgUi50YWlsKCdhYmMnKTsgIC8vPT4gJ2JjJ1xuICogICAgICBSLnRhaWwoJ2FiJyk7ICAgLy89PiAnYidcbiAqICAgICAgUi50YWlsKCdhJyk7ICAgIC8vPT4gJydcbiAqICAgICAgUi50YWlsKCcnKTsgICAgIC8vPT4gJydcbiAqL1xudmFyIHRhaWwgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MSggLyojX19QVVJFX18qL19jaGVja0Zvck1ldGhvZCgndGFpbCcsIC8qI19fUFVSRV9fKi9zbGljZSgxLCBJbmZpbml0eSkpKTtcbmV4cG9ydCBkZWZhdWx0IHRhaWw7IiwiaW1wb3J0IF9hcml0eSBmcm9tICcuL2ludGVybmFsL19hcml0eSc7XG5pbXBvcnQgX3BpcGUgZnJvbSAnLi9pbnRlcm5hbC9fcGlwZSc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJy4vcmVkdWNlJztcbmltcG9ydCB0YWlsIGZyb20gJy4vdGFpbCc7XG5cbi8qKlxuICogUGVyZm9ybXMgbGVmdC10by1yaWdodCBmdW5jdGlvbiBjb21wb3NpdGlvbi4gVGhlIGxlZnRtb3N0IGZ1bmN0aW9uIG1heSBoYXZlXG4gKiBhbnkgYXJpdHk7IHRoZSByZW1haW5pbmcgZnVuY3Rpb25zIG11c3QgYmUgdW5hcnkuXG4gKlxuICogSW4gc29tZSBsaWJyYXJpZXMgdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgc2VxdWVuY2VgLlxuICpcbiAqICoqTm90ZToqKiBUaGUgcmVzdWx0IG9mIHBpcGUgaXMgbm90IGF1dG9tYXRpY2FsbHkgY3VycmllZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKChhLCBiLCAuLi4sIG4pIC0+IG8pLCAobyAtPiBwKSwgLi4uLCAoeCAtPiB5KSwgKHkgLT4geikpIC0+ICgoYSwgYiwgLi4uLCBuKSAtPiB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3Rpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5jb21wb3NlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGYgPSBSLnBpcGUoTWF0aC5wb3csIFIubmVnYXRlLCBSLmluYyk7XG4gKlxuICogICAgICBmKDMsIDQpOyAvLyAtKDNeNCkgKyAxXG4gKiBAc3ltYiBSLnBpcGUoZiwgZywgaCkoYSwgYikgPSBoKGcoZihhLCBiKSkpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwaXBlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCcpO1xuICB9XG4gIHJldHVybiBfYXJpdHkoYXJndW1lbnRzWzBdLmxlbmd0aCwgcmVkdWNlKF9waXBlLCBhcmd1bWVudHNbMF0sIHRhaWwoYXJndW1lbnRzKSkpO1xufSIsImltcG9ydCBfY3VycnkxIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5MSc7XG5pbXBvcnQgX2lzU3RyaW5nIGZyb20gJy4vaW50ZXJuYWwvX2lzU3RyaW5nJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3Qgb3Igc3RyaW5nIHdpdGggdGhlIGVsZW1lbnRzIG9yIGNoYXJhY3RlcnMgaW4gcmV2ZXJzZVxuICogb3JkZXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBsaXN0XG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZXZlcnNlKFsxLCAyLCAzXSk7ICAvLz0+IFszLCAyLCAxXVxuICogICAgICBSLnJldmVyc2UoWzEsIDJdKTsgICAgIC8vPT4gWzIsIDFdXG4gKiAgICAgIFIucmV2ZXJzZShbMV0pOyAgICAgICAgLy89PiBbMV1cbiAqICAgICAgUi5yZXZlcnNlKFtdKTsgICAgICAgICAvLz0+IFtdXG4gKlxuICogICAgICBSLnJldmVyc2UoJ2FiYycpOyAgICAgIC8vPT4gJ2NiYSdcbiAqICAgICAgUi5yZXZlcnNlKCdhYicpOyAgICAgICAvLz0+ICdiYSdcbiAqICAgICAgUi5yZXZlcnNlKCdhJyk7ICAgICAgICAvLz0+ICdhJ1xuICogICAgICBSLnJldmVyc2UoJycpOyAgICAgICAgIC8vPT4gJydcbiAqL1xudmFyIHJldmVyc2UgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MShmdW5jdGlvbiByZXZlcnNlKGxpc3QpIHtcbiAgcmV0dXJuIF9pc1N0cmluZyhsaXN0KSA/IGxpc3Quc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSA6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDApLnJldmVyc2UoKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcmV2ZXJzZTsiLCJpbXBvcnQgcGlwZSBmcm9tICcuL3BpcGUnO1xuaW1wb3J0IHJldmVyc2UgZnJvbSAnLi9yZXZlcnNlJztcblxuLyoqXG4gKiBQZXJmb3JtcyByaWdodC10by1sZWZ0IGZ1bmN0aW9uIGNvbXBvc2l0aW9uLiBUaGUgcmlnaHRtb3N0IGZ1bmN0aW9uIG1heSBoYXZlXG4gKiBhbnkgYXJpdHk7IHRoZSByZW1haW5pbmcgZnVuY3Rpb25zIG11c3QgYmUgdW5hcnkuXG4gKlxuICogKipOb3RlOioqIFRoZSByZXN1bHQgb2YgY29tcG9zZSBpcyBub3QgYXV0b21hdGljYWxseSBjdXJyaWVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoeSAtPiB6KSwgKHggLT4geSksIC4uLiwgKG8gLT4gcCksICgoYSwgYiwgLi4uLCBuKSAtPiBvKSkgLT4gKChhLCBiLCAuLi4sIG4pIC0+IHopXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSAuLi5mdW5jdGlvbnMgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5waXBlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGNsYXNzeUdyZWV0aW5nID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUpID0+IFwiVGhlIG5hbWUncyBcIiArIGxhc3ROYW1lICsgXCIsIFwiICsgZmlyc3ROYW1lICsgXCIgXCIgKyBsYXN0TmFtZVxuICogICAgICB2YXIgeWVsbEdyZWV0aW5nID0gUi5jb21wb3NlKFIudG9VcHBlciwgY2xhc3N5R3JlZXRpbmcpO1xuICogICAgICB5ZWxsR3JlZXRpbmcoJ0phbWVzJywgJ0JvbmQnKTsgLy89PiBcIlRIRSBOQU1FJ1MgQk9ORCwgSkFNRVMgQk9ORFwiXG4gKlxuICogICAgICBSLmNvbXBvc2UoTWF0aC5hYnMsIFIuYWRkKDEpLCBSLm11bHRpcGx5KDIpKSgtNCkgLy89PiA3XG4gKlxuICogQHN5bWIgUi5jb21wb3NlKGYsIGcsIGgpKGEsIGIpID0gZihnKGgoYSwgYikpKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29tcG9zZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQnKTtcbiAgfVxuICByZXR1cm4gcGlwZS5hcHBseSh0aGlzLCByZXZlcnNlKGFyZ3VtZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUZyb21JdGVyYXRvcihpdGVyKSB7XG4gIHZhciBsaXN0ID0gW107XG4gIHZhciBuZXh0O1xuICB3aGlsZSAoIShuZXh0ID0gaXRlci5uZXh0KCkpLmRvbmUpIHtcbiAgICBsaXN0LnB1c2gobmV4dC52YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnRhaW5zV2l0aChwcmVkLCB4LCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGlmIChwcmVkKHgsIGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Z1bmN0aW9uTmFtZShmKSB7XG4gIC8vIFN0cmluZyh4ID0+IHgpIGV2YWx1YXRlcyB0byBcInggPT4geFwiLCBzbyB0aGUgcGF0dGVybiBtYXkgbm90IG1hdGNoLlxuICB2YXIgbWF0Y2ggPSBTdHJpbmcoZikubWF0Y2goL15mdW5jdGlvbiAoXFx3KikvKTtcbiAgcmV0dXJuIG1hdGNoID09IG51bGwgPyAnJyA6IG1hdGNoWzFdO1xufSIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGl0cyBhcmd1bWVudHMgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlLiBWYWx1ZXMgYXJlXG4gKiBpZGVudGljYWwgaWYgdGhleSByZWZlcmVuY2UgdGhlIHNhbWUgbWVtb3J5LiBgTmFOYCBpcyBpZGVudGljYWwgdG8gYE5hTmA7XG4gKiBgMGAgYW5kIGAtMGAgYXJlIG5vdCBpZGVudGljYWwuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTUuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIGEgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbyA9IHt9O1xuICogICAgICBSLmlkZW50aWNhbChvLCBvKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuaWRlbnRpY2FsKDEsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5pZGVudGljYWwoMSwgJzEnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlkZW50aWNhbChbXSwgW10pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaWRlbnRpY2FsKDAsIC0wKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlkZW50aWNhbChOYU4sIE5hTik7IC8vPT4gdHJ1ZVxuICovXG52YXIgaWRlbnRpY2FsID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gaWRlbnRpY2FsKGEsIGIpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoYSA9PT0gYikge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT09IDEgLyBiO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBpZGVudGljYWw7IiwiaW1wb3J0IF9hcnJheUZyb21JdGVyYXRvciBmcm9tICcuL19hcnJheUZyb21JdGVyYXRvcic7XG5pbXBvcnQgX2NvbnRhaW5zV2l0aCBmcm9tICcuL19jb250YWluc1dpdGgnO1xuaW1wb3J0IF9mdW5jdGlvbk5hbWUgZnJvbSAnLi9fZnVuY3Rpb25OYW1lJztcbmltcG9ydCBfaGFzIGZyb20gJy4vX2hhcyc7XG5pbXBvcnQgaWRlbnRpY2FsIGZyb20gJy4uL2lkZW50aWNhbCc7XG5pbXBvcnQga2V5cyBmcm9tICcuLi9rZXlzJztcbmltcG9ydCB0eXBlIGZyb20gJy4uL3R5cGUnO1xuXG4vKipcbiAqIHByaXZhdGUgX3VuaXFDb250ZW50RXF1YWxzIGZ1bmN0aW9uLlxuICogVGhhdCBmdW5jdGlvbiBpcyBjaGVja2luZyBlcXVhbGl0eSBvZiAyIGl0ZXJhdG9yIGNvbnRlbnRzIHdpdGggMiBhc3N1bXB0aW9uc1xuICogLSBpdGVyYXRvcnMgbGVuZ3RocyBhcmUgdGhlIHNhbWVcbiAqIC0gaXRlcmF0b3JzIHZhbHVlcyBhcmUgdW5pcXVlXG4gKlxuICogZmFsc2UtcG9zaXRpdmUgcmVzdWx0IHdpbGwgYmUgcmV0dXJuZWQgZm9yIGNvbXBhcmlzaW9uIG9mLCBlLmcuXG4gKiAtIFsxLDIsM10gYW5kIFsxLDIsMyw0XVxuICogLSBbMSwxLDFdIGFuZCBbMSwyLDNdXG4gKiAqL1xuXG5mdW5jdGlvbiBfdW5pcUNvbnRlbnRFcXVhbHMoYUl0ZXJhdG9yLCBiSXRlcmF0b3IsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBhID0gX2FycmF5RnJvbUl0ZXJhdG9yKGFJdGVyYXRvcik7XG4gIHZhciBiID0gX2FycmF5RnJvbUl0ZXJhdG9yKGJJdGVyYXRvcik7XG5cbiAgZnVuY3Rpb24gZXEoX2EsIF9iKSB7XG4gICAgcmV0dXJuIF9lcXVhbHMoX2EsIF9iLCBzdGFja0Euc2xpY2UoKSwgc3RhY2tCLnNsaWNlKCkpO1xuICB9XG5cbiAgLy8gaWYgKmEqIGFycmF5IGNvbnRhaW5zIGFueSBlbGVtZW50IHRoYXQgaXMgbm90IGluY2x1ZGVkIGluICpiKlxuICByZXR1cm4gIV9jb250YWluc1dpdGgoZnVuY3Rpb24gKGIsIGFJdGVtKSB7XG4gICAgcmV0dXJuICFfY29udGFpbnNXaXRoKGVxLCBhSXRlbSwgYik7XG4gIH0sIGIsIGEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXF1YWxzKGEsIGIsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIGlmIChpZGVudGljYWwoYSwgYikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciB0eXBlQSA9IHR5cGUoYSk7XG5cbiAgaWYgKHR5cGVBICE9PSB0eXBlKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGFbJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnXSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgYlsnZmFudGFzeS1sYW5kL2VxdWFscyddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhWydmYW50YXN5LWxhbmQvZXF1YWxzJ10gPT09ICdmdW5jdGlvbicgJiYgYVsnZmFudGFzeS1sYW5kL2VxdWFscyddKGIpICYmIHR5cGVvZiBiWydmYW50YXN5LWxhbmQvZXF1YWxzJ10gPT09ICdmdW5jdGlvbicgJiYgYlsnZmFudGFzeS1sYW5kL2VxdWFscyddKGEpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgYi5lcXVhbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZW9mIGEuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmIGEuZXF1YWxzKGIpICYmIHR5cGVvZiBiLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyAmJiBiLmVxdWFscyhhKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZUEpIHtcbiAgICBjYXNlICdBcmd1bWVudHMnOlxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgaWYgKHR5cGVvZiBhLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIF9mdW5jdGlvbk5hbWUoYS5jb25zdHJ1Y3RvcikgPT09ICdQcm9taXNlJykge1xuICAgICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgIGNhc2UgJ051bWJlcic6XG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgIGlmICghKHR5cGVvZiBhID09PSB0eXBlb2YgYiAmJiBpZGVudGljYWwoYS52YWx1ZU9mKCksIGIudmFsdWVPZigpKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRGF0ZSc6XG4gICAgICBpZiAoIWlkZW50aWNhbChhLnZhbHVlT2YoKSwgYi52YWx1ZU9mKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Vycm9yJzpcbiAgICAgIHJldHVybiBhLm5hbWUgPT09IGIubmFtZSAmJiBhLm1lc3NhZ2UgPT09IGIubWVzc2FnZTtcbiAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgaWYgKCEoYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZ2xvYmFsID09PSBiLmdsb2JhbCAmJiBhLmlnbm9yZUNhc2UgPT09IGIuaWdub3JlQ2FzZSAmJiBhLm11bHRpbGluZSA9PT0gYi5tdWx0aWxpbmUgJiYgYS5zdGlja3kgPT09IGIuc3RpY2t5ICYmIGEudW5pY29kZSA9PT0gYi51bmljb2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciBpZHggPSBzdGFja0EubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgaWYgKHN0YWNrQVtpZHhdID09PSBhKSB7XG4gICAgICByZXR1cm4gc3RhY2tCW2lkeF0gPT09IGI7XG4gICAgfVxuICAgIGlkeCAtPSAxO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlQSkge1xuICAgIGNhc2UgJ01hcCc6XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3VuaXFDb250ZW50RXF1YWxzKGEuZW50cmllcygpLCBiLmVudHJpZXMoKSwgc3RhY2tBLmNvbmNhdChbYV0pLCBzdGFja0IuY29uY2F0KFtiXSkpO1xuICAgIGNhc2UgJ1NldCc6XG4gICAgICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3VuaXFDb250ZW50RXF1YWxzKGEudmFsdWVzKCksIGIudmFsdWVzKCksIHN0YWNrQS5jb25jYXQoW2FdKSwgc3RhY2tCLmNvbmNhdChbYl0pKTtcbiAgICBjYXNlICdBcmd1bWVudHMnOlxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICBjYXNlICdPYmplY3QnOlxuICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgIGNhc2UgJ051bWJlcic6XG4gICAgY2FzZSAnU3RyaW5nJzpcbiAgICBjYXNlICdEYXRlJzpcbiAgICBjYXNlICdFcnJvcic6XG4gICAgY2FzZSAnUmVnRXhwJzpcbiAgICBjYXNlICdJbnQ4QXJyYXknOlxuICAgIGNhc2UgJ1VpbnQ4QXJyYXknOlxuICAgIGNhc2UgJ1VpbnQ4Q2xhbXBlZEFycmF5JzpcbiAgICBjYXNlICdJbnQxNkFycmF5JzpcbiAgICBjYXNlICdVaW50MTZBcnJheSc6XG4gICAgY2FzZSAnSW50MzJBcnJheSc6XG4gICAgY2FzZSAnVWludDMyQXJyYXknOlxuICAgIGNhc2UgJ0Zsb2F0MzJBcnJheSc6XG4gICAgY2FzZSAnRmxvYXQ2NEFycmF5JzpcbiAgICBjYXNlICdBcnJheUJ1ZmZlcic6XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gVmFsdWVzIG9mIG90aGVyIHR5cGVzIGFyZSBvbmx5IGVxdWFsIGlmIGlkZW50aWNhbC5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IGtleXMoYSk7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXMoYikubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGV4dGVuZGVkU3RhY2tBID0gc3RhY2tBLmNvbmNhdChbYV0pO1xuICB2YXIgZXh0ZW5kZWRTdGFja0IgPSBzdGFja0IuY29uY2F0KFtiXSk7XG5cbiAgaWR4ID0ga2V5c0EubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG4gICAgaWYgKCEoX2hhcyhrZXksIGIpICYmIF9lcXVhbHMoYltrZXldLCBhW2tleV0sIGV4dGVuZGVkU3RhY2tBLCBleHRlbmRlZFN0YWNrQikpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlkeCAtPSAxO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgX2VxdWFscyBmcm9tICcuL2ludGVybmFsL19lcXVhbHMnO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGl0cyBhcmd1bWVudHMgYXJlIGVxdWl2YWxlbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLiBIYW5kbGVzXG4gKiBjeWNsaWNhbCBkYXRhIHN0cnVjdHVyZXMuXG4gKlxuICogRGlzcGF0Y2hlcyBzeW1tZXRyaWNhbGx5IHRvIHRoZSBgZXF1YWxzYCBtZXRob2RzIG9mIGJvdGggYXJndW1lbnRzLCBpZlxuICogcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgYSAtPiBiIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZXF1YWxzKDEsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5lcXVhbHMoMSwgJzEnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmVxdWFscyhbMSwgMiwgM10sIFsxLCAyLCAzXSk7IC8vPT4gdHJ1ZVxuICpcbiAqICAgICAgdmFyIGEgPSB7fTsgYS52ID0gYTtcbiAqICAgICAgdmFyIGIgPSB7fTsgYi52ID0gYjtcbiAqICAgICAgUi5lcXVhbHMoYSwgYik7IC8vPT4gdHJ1ZVxuICovXG52YXIgZXF1YWxzID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIF9lcXVhbHMoYSwgYiwgW10sIFtdKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgZXF1YWxzOyIsImltcG9ydCBlcXVhbHMgZnJvbSAnLi4vZXF1YWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luZGV4T2YobGlzdCwgYSwgaWR4KSB7XG4gIHZhciBpbmYsIGl0ZW07XG4gIC8vIEFycmF5LnByb3RvdHlwZS5pbmRleE9mIGRvZXNuJ3QgZXhpc3QgYmVsb3cgSUU5XG4gIGlmICh0eXBlb2YgbGlzdC5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgYSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgICAvLyBtYW51YWxseSBjcmF3bCB0aGUgbGlzdCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuICswIGFuZCAtMFxuICAgICAgICAgIGluZiA9IDEgLyBhO1xuICAgICAgICAgIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlbSA9IGxpc3RbaWR4XTtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSAwICYmIDEgLyBpdGVtID09PSBpbmYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlkeCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoYSAhPT0gYSkge1xuICAgICAgICAgIC8vIE5hTlxuICAgICAgICAgIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlbSA9IGxpc3RbaWR4XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicgJiYgaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBub24temVybyBudW1iZXJzIGNhbiB1dGlsaXNlIFNldFxuICAgICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGEsIGlkeCk7XG5cbiAgICAgIC8vIGFsbCB0aGVzZSB0eXBlcyBjYW4gdXRpbGlzZSBTZXRcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoYSwgaWR4KTtcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKGEgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBudWxsIGNhbiB1dGlsaXNlIFNldFxuICAgICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoYSwgaWR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBhbnl0aGluZyBlbHNlIG5vdCBjb3ZlcmVkIGFib3ZlLCBkZWZlciB0byBSLmVxdWFsc1xuICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICBpZiAoZXF1YWxzKGxpc3RbaWR4XSwgYSkpIHtcbiAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiAtMTtcbn0iLCJpbXBvcnQgX2luZGV4T2YgZnJvbSAnLi9faW5kZXhPZic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb250YWlucyhhLCBsaXN0KSB7XG4gIHJldHVybiBfaW5kZXhPZihsaXN0LCBhLCAwKSA+PSAwO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9xdW90ZShzKSB7XG4gIHZhciBlc2NhcGVkID0gcy5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1tcXGJdL2csICdcXFxcYicpIC8vIFxcYiBtYXRjaGVzIHdvcmQgYm91bmRhcnk7IFtcXGJdIG1hdGNoZXMgYmFja3NwYWNlXG4gIC5yZXBsYWNlKC9cXGYvZywgJ1xcXFxmJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLnJlcGxhY2UoL1xcci9nLCAnXFxcXHInKS5yZXBsYWNlKC9cXHQvZywgJ1xcXFx0JykucmVwbGFjZSgvXFx2L2csICdcXFxcdicpLnJlcGxhY2UoL1xcMC9nLCAnXFxcXDAnKTtcblxuICByZXR1cm4gJ1wiJyArIGVzY2FwZWQucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpICsgJ1wiJztcbn0iLCIvKipcbiAqIFBvbHlmaWxsIGZyb20gPGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGUvdG9JU09TdHJpbmc+LlxuICovXG52YXIgcGFkID0gZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIChuIDwgMTAgPyAnMCcgOiAnJykgKyBuO1xufTtcblxudmFyIF90b0lTT1N0cmluZyA9IHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyA/IGZ1bmN0aW9uIF90b0lTT1N0cmluZyhkKSB7XG4gIHJldHVybiBkLnRvSVNPU3RyaW5nKCk7XG59IDogZnVuY3Rpb24gX3RvSVNPU3RyaW5nKGQpIHtcbiAgcmV0dXJuIGQuZ2V0VVRDRnVsbFllYXIoKSArICctJyArIHBhZChkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIHBhZChkLmdldFVUQ0RhdGUoKSkgKyAnVCcgKyBwYWQoZC5nZXRVVENIb3VycygpKSArICc6JyArIHBhZChkLmdldFVUQ01pbnV0ZXMoKSkgKyAnOicgKyBwYWQoZC5nZXRVVENTZWNvbmRzKCkpICsgJy4nICsgKGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgLyAxMDAwKS50b0ZpeGVkKDMpLnNsaWNlKDIsIDUpICsgJ1onO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX3RvSVNPU3RyaW5nOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb21wbGVtZW50KGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gIWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZmlsdGVyKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgaWYgKGZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGxpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNPYmplY3QoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBPYmplY3RdJztcbn0iLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL19jdXJyeTInO1xuaW1wb3J0IF94ZkJhc2UgZnJvbSAnLi9feGZCYXNlJztcblxudmFyIFhGaWx0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBYRmlsdGVyKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaWx0ZXIucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbiAocmVzdWx0LCBpbnB1dCkge1xuICAgIHJldHVybiB0aGlzLmYoaW5wdXQpID8gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIGlucHV0KSA6IHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gWEZpbHRlcjtcbn0oKTtcblxudmFyIF94ZmlsdGVyID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gX3hmaWx0ZXIoZiwgeGYpIHtcbiAgcmV0dXJuIG5ldyBYRmlsdGVyKGYsIHhmKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgX3hmaWx0ZXI7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfZGlzcGF0Y2hhYmxlIGZyb20gJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZSc7XG5pbXBvcnQgX2ZpbHRlciBmcm9tICcuL2ludGVybmFsL19maWx0ZXInO1xuaW1wb3J0IF9pc09iamVjdCBmcm9tICcuL2ludGVybmFsL19pc09iamVjdCc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICcuL2ludGVybmFsL19yZWR1Y2UnO1xuaW1wb3J0IF94ZmlsdGVyIGZyb20gJy4vaW50ZXJuYWwvX3hmaWx0ZXInO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzJztcblxuLyoqXG4gKiBUYWtlcyBhIHByZWRpY2F0ZSBhbmQgYSBgRmlsdGVyYWJsZWAsIGFuZCByZXR1cm5zIGEgbmV3IGZpbHRlcmFibGUgb2YgdGhlXG4gKiBzYW1lIHR5cGUgY29udGFpbmluZyB0aGUgbWVtYmVycyBvZiB0aGUgZ2l2ZW4gZmlsdGVyYWJsZSB3aGljaCBzYXRpc2Z5IHRoZVxuICogZ2l2ZW4gcHJlZGljYXRlLiBGaWx0ZXJhYmxlIG9iamVjdHMgaW5jbHVkZSBwbGFpbiBvYmplY3RzIG9yIGFueSBvYmplY3RcbiAqIHRoYXQgaGFzIGEgZmlsdGVyIG1ldGhvZCBzdWNoIGFzIGBBcnJheWAuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGZpbHRlcmAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBmIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGVcbiAqIEByZXR1cm4ge0FycmF5fSBGaWx0ZXJhYmxlXG4gKiBAc2VlIFIucmVqZWN0LCBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0V2ZW4gPSBuID0+IG4gJSAyID09PSAwO1xuICpcbiAqICAgICAgUi5maWx0ZXIoaXNFdmVuLCBbMSwgMiwgMywgNF0pOyAvLz0+IFsyLCA0XVxuICpcbiAqICAgICAgUi5maWx0ZXIoaXNFdmVuLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHtiOiAyLCBkOiA0fVxuICovXG52YXIgZmlsdGVyID0gLyojX19QVVJFX18qL19jdXJyeTIoIC8qI19fUFVSRV9fKi9fZGlzcGF0Y2hhYmxlKFsnZmlsdGVyJ10sIF94ZmlsdGVyLCBmdW5jdGlvbiAocHJlZCwgZmlsdGVyYWJsZSkge1xuICByZXR1cm4gX2lzT2JqZWN0KGZpbHRlcmFibGUpID8gX3JlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBpZiAocHJlZChmaWx0ZXJhYmxlW2tleV0pKSB7XG4gICAgICBhY2Nba2V5XSA9IGZpbHRlcmFibGVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30sIGtleXMoZmlsdGVyYWJsZSkpIDpcbiAgLy8gZWxzZVxuICBfZmlsdGVyKHByZWQsIGZpbHRlcmFibGUpO1xufSkpO1xuZXhwb3J0IGRlZmF1bHQgZmlsdGVyOyIsImltcG9ydCBfY29tcGxlbWVudCBmcm9tICcuL2ludGVybmFsL19jb21wbGVtZW50JztcbmltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyJztcblxuLyoqXG4gKiBUaGUgY29tcGxlbWVudCBvZiBbYGZpbHRlcmBdKCNmaWx0ZXIpLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi4gRmlsdGVyYWJsZVxuICogb2JqZWN0cyBpbmNsdWRlIHBsYWluIG9iamVjdHMgb3IgYW55IG9iamVjdCB0aGF0IGhhcyBhIGZpbHRlciBtZXRob2Qgc3VjaFxuICogYXMgYEFycmF5YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIEZpbHRlcmFibGUgZiA9PiAoYSAtPiBCb29sZWFuKSAtPiBmIGEgLT4gZiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkXG4gKiBAcGFyYW0ge0FycmF5fSBmaWx0ZXJhYmxlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzZWUgUi5maWx0ZXIsIFIudHJhbnNkdWNlLCBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzT2RkID0gKG4pID0+IG4gJSAyID09PSAxO1xuICpcbiAqICAgICAgUi5yZWplY3QoaXNPZGQsIFsxLCAyLCAzLCA0XSk7IC8vPT4gWzIsIDRdXG4gKlxuICogICAgICBSLnJlamVjdChpc09kZCwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YjogMiwgZDogNH1cbiAqL1xudmFyIHJlamVjdCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIHJlamVjdChwcmVkLCBmaWx0ZXJhYmxlKSB7XG4gIHJldHVybiBmaWx0ZXIoX2NvbXBsZW1lbnQocHJlZCksIGZpbHRlcmFibGUpO1xufSk7XG5leHBvcnQgZGVmYXVsdCByZWplY3Q7IiwiaW1wb3J0IF9jb250YWlucyBmcm9tICcuL19jb250YWlucyc7XG5pbXBvcnQgX21hcCBmcm9tICcuL19tYXAnO1xuaW1wb3J0IF9xdW90ZSBmcm9tICcuL19xdW90ZSc7XG5pbXBvcnQgX3RvSVNPU3RyaW5nIGZyb20gJy4vX3RvSVNPU3RyaW5nJztcbmltcG9ydCBrZXlzIGZyb20gJy4uL2tleXMnO1xuaW1wb3J0IHJlamVjdCBmcm9tICcuLi9yZWplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9TdHJpbmcoeCwgc2Vlbikge1xuICB2YXIgcmVjdXIgPSBmdW5jdGlvbiByZWN1cih5KSB7XG4gICAgdmFyIHhzID0gc2Vlbi5jb25jYXQoW3hdKTtcbiAgICByZXR1cm4gX2NvbnRhaW5zKHksIHhzKSA/ICc8Q2lyY3VsYXI+JyA6IF90b1N0cmluZyh5LCB4cyk7XG4gIH07XG5cbiAgLy8gIG1hcFBhaXJzIDo6IChPYmplY3QsIFtTdHJpbmddKSAtPiBbU3RyaW5nXVxuICB2YXIgbWFwUGFpcnMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gICAgcmV0dXJuIF9tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBfcXVvdGUoaykgKyAnOiAnICsgcmVjdXIob2JqW2tdKTtcbiAgICB9LCBrZXlzLnNsaWNlKCkuc29ydCgpKTtcbiAgfTtcblxuICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSkge1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6XG4gICAgICByZXR1cm4gJyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgnICsgX21hcChyZWN1ciwgeCkuam9pbignLCAnKSArICcpKSc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgcmV0dXJuICdbJyArIF9tYXAocmVjdXIsIHgpLmNvbmNhdChtYXBQYWlycyh4LCByZWplY3QoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0dXJuICgvXlxcZCskLy50ZXN0KGspXG4gICAgICAgICk7XG4gICAgICB9LCBrZXlzKHgpKSkpLmpvaW4oJywgJykgKyAnXSc7XG4gICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnID8gJ25ldyBCb29sZWFuKCcgKyByZWN1cih4LnZhbHVlT2YoKSkgKyAnKScgOiB4LnRvU3RyaW5nKCk7XG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICByZXR1cm4gJ25ldyBEYXRlKCcgKyAoaXNOYU4oeC52YWx1ZU9mKCkpID8gcmVjdXIoTmFOKSA6IF9xdW90ZShfdG9JU09TdHJpbmcoeCkpKSArICcpJztcbiAgICBjYXNlICdbb2JqZWN0IE51bGxdJzpcbiAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgPyAnbmV3IE51bWJlcignICsgcmVjdXIoeC52YWx1ZU9mKCkpICsgJyknIDogMSAvIHggPT09IC1JbmZpbml0eSA/ICctMCcgOiB4LnRvU3RyaW5nKDEwKTtcbiAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/ICduZXcgU3RyaW5nKCcgKyByZWN1cih4LnZhbHVlT2YoKSkgKyAnKScgOiBfcXVvdGUoeCk7XG4gICAgY2FzZSAnW29iamVjdCBVbmRlZmluZWRdJzpcbiAgICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiB4LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciByZXByID0geC50b1N0cmluZygpO1xuICAgICAgICBpZiAocmVwciAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgICByZXR1cm4gcmVwcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICd7JyArIG1hcFBhaXJzKHgsIGtleXMoeCkpLmpvaW4oJywgJykgKyAnfSc7XG4gIH1cbn0iLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuaW1wb3J0IF90b1N0cmluZyBmcm9tICcuL2ludGVybmFsL190b1N0cmluZyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiB2YWx1ZS4gYGV2YWxgJ2luZyB0aGUgb3V0cHV0XG4gKiBzaG91bGQgcmVzdWx0IGluIGEgdmFsdWUgZXF1aXZhbGVudCB0byB0aGUgaW5wdXQgdmFsdWUuIE1hbnkgb2YgdGhlIGJ1aWx0LWluXG4gKiBgdG9TdHJpbmdgIG1ldGhvZHMgZG8gbm90IHNhdGlzZnkgdGhpcyByZXF1aXJlbWVudC5cbiAqXG4gKiBJZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYFtvYmplY3QgT2JqZWN0XWAgd2l0aCBhIGB0b1N0cmluZ2AgbWV0aG9kIG90aGVyXG4gKiB0aGFuIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCwgdGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aXRoIG5vIGFyZ3VtZW50c1xuICogdG8gcHJvZHVjZSB0aGUgcmV0dXJuIHZhbHVlLiBUaGlzIG1lYW5zIHVzZXItZGVmaW5lZCBjb25zdHJ1Y3RvciBmdW5jdGlvbnNcbiAqIGNhbiBwcm92aWRlIGEgc3VpdGFibGUgYHRvU3RyaW5nYCBtZXRob2QuIEZvciBleGFtcGxlOlxuICpcbiAqICAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XG4gKiAgICAgICB0aGlzLnggPSB4O1xuICogICAgICAgdGhpcy55ID0geTtcbiAqICAgICB9XG4gKlxuICogICAgIFBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICogICAgICAgcmV0dXJuICduZXcgUG9pbnQoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gKiAgICAgfTtcbiAqXG4gKiAgICAgUi50b1N0cmluZyhuZXcgUG9pbnQoMSwgMikpOyAvLz0+ICduZXcgUG9pbnQoMSwgMiknXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyAqIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRvU3RyaW5nKDQyKTsgLy89PiAnNDInXG4gKiAgICAgIFIudG9TdHJpbmcoJ2FiYycpOyAvLz0+ICdcImFiY1wiJ1xuICogICAgICBSLnRvU3RyaW5nKFsxLCAyLCAzXSk7IC8vPT4gJ1sxLCAyLCAzXSdcbiAqICAgICAgUi50b1N0cmluZyh7Zm9vOiAxLCBiYXI6IDIsIGJhejogM30pOyAvLz0+ICd7XCJiYXJcIjogMiwgXCJiYXpcIjogMywgXCJmb29cIjogMX0nXG4gKiAgICAgIFIudG9TdHJpbmcobmV3IERhdGUoJzIwMDEtMDItMDNUMDQ6MDU6MDZaJykpOyAvLz0+ICduZXcgRGF0ZShcIjIwMDEtMDItMDNUMDQ6MDU6MDYuMDAwWlwiKSdcbiAqL1xudmFyIHRvU3RyaW5nID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gdG9TdHJpbmcodmFsKSB7XG4gIHJldHVybiBfdG9TdHJpbmcodmFsLCBbXSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHRvU3RyaW5nOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgX21hcCBmcm9tICcuL2ludGVybmFsL19tYXAnO1xuaW1wb3J0IGN1cnJ5TiBmcm9tICcuL2N1cnJ5Tic7XG5pbXBvcnQgbWF4IGZyb20gJy4vbWF4JztcbmltcG9ydCBwbHVjayBmcm9tICcuL3BsdWNrJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnLi9yZWR1Y2UnO1xuXG4vKipcbiAqIEFjY2VwdHMgYSBjb252ZXJnaW5nIGZ1bmN0aW9uIGFuZCBhIGxpc3Qgb2YgYnJhbmNoaW5nIGZ1bmN0aW9ucyBhbmQgcmV0dXJuc1xuICogYSBuZXcgZnVuY3Rpb24uIFdoZW4gaW52b2tlZCwgdGhpcyBuZXcgZnVuY3Rpb24gaXMgYXBwbGllZCB0byBzb21lXG4gKiBhcmd1bWVudHMsIGVhY2ggYnJhbmNoaW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQgdG8gdGhvc2Ugc2FtZSBhcmd1bWVudHMuIFRoZVxuICogcmVzdWx0cyBvZiBlYWNoIGJyYW5jaGluZyBmdW5jdGlvbiBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50cyB0byB0aGUgY29udmVyZ2luZ1xuICogZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMlxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoeDEsIHgyLCAuLi4pIC0+IHopIC0+IFsoKGEsIGIsIC4uLikgLT4geDEpLCAoKGEsIGIsIC4uLikgLT4geDIpLCAuLi5dIC0+IChhIC0+IGIgLT4gLi4uIC0+IHopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZnRlciBBIGZ1bmN0aW9uLiBgYWZ0ZXJgIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWVzIG9mXG4gKiAgICAgICAgYGZuMWAgYW5kIGBmbjJgIGFzIGl0cyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSBmdW5jdGlvbnMgQSBsaXN0IG9mIGZ1bmN0aW9ucy5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbi5cbiAqIEBzZWUgUi51c2VXaXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGF2ZXJhZ2UgPSBSLmNvbnZlcmdlKFIuZGl2aWRlLCBbUi5zdW0sIFIubGVuZ3RoXSlcbiAqICAgICAgYXZlcmFnZShbMSwgMiwgMywgNCwgNSwgNiwgN10pIC8vPT4gNFxuICpcbiAqICAgICAgdmFyIHN0cmFuZ2VDb25jYXQgPSBSLmNvbnZlcmdlKFIuY29uY2F0LCBbUi50b1VwcGVyLCBSLnRvTG93ZXJdKVxuICogICAgICBzdHJhbmdlQ29uY2F0KFwiWW9kZWxcIikgLy89PiBcIllPREVMeW9kZWxcIlxuICpcbiAqIEBzeW1iIFIuY29udmVyZ2UoZiwgW2csIGhdKShhLCBiKSA9IGYoZyhhLCBiKSwgaChhLCBiKSlcbiAqL1xudmFyIGNvbnZlcmdlID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gY29udmVyZ2UoYWZ0ZXIsIGZucykge1xuICByZXR1cm4gY3VycnlOKHJlZHVjZShtYXgsIDAsIHBsdWNrKCdsZW5ndGgnLCBmbnMpKSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICByZXR1cm4gYWZ0ZXIuYXBwbHkoY29udGV4dCwgX21hcChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9LCBmbnMpKTtcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbnZlcmdlOyIsImltcG9ydCBfY3VycnlOIGZyb20gJy4vX2N1cnJ5Tic7XG5pbXBvcnQgX2hhcyBmcm9tICcuL19oYXMnO1xuaW1wb3J0IF94ZkJhc2UgZnJvbSAnLi9feGZCYXNlJztcblxudmFyIFhSZWR1Y2VCeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFhSZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIHhmKSB7XG4gICAgdGhpcy52YWx1ZUZuID0gdmFsdWVGbjtcbiAgICB0aGlzLnZhbHVlQWNjID0gdmFsdWVBY2M7XG4gICAgdGhpcy5rZXlGbiA9IGtleUZuO1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmlucHV0cyA9IHt9O1xuICB9XG4gIFhSZWR1Y2VCeS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhSZWR1Y2VCeS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICB2YXIga2V5O1xuICAgIGZvciAoa2V5IGluIHRoaXMuaW5wdXRzKSB7XG4gICAgICBpZiAoX2hhcyhrZXksIHRoaXMuaW5wdXRzKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5pbnB1dHNba2V5XSk7XG4gICAgICAgIGlmIChyZXN1bHRbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXRzID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhSZWR1Y2VCeS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbiAocmVzdWx0LCBpbnB1dCkge1xuICAgIHZhciBrZXkgPSB0aGlzLmtleUZuKGlucHV0KTtcbiAgICB0aGlzLmlucHV0c1trZXldID0gdGhpcy5pbnB1dHNba2V5XSB8fCBba2V5LCB0aGlzLnZhbHVlQWNjXTtcbiAgICB0aGlzLmlucHV0c1trZXldWzFdID0gdGhpcy52YWx1ZUZuKHRoaXMuaW5wdXRzW2tleV1bMV0sIGlucHV0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBYUmVkdWNlQnk7XG59KCk7XG5cbnZhciBfeHJlZHVjZUJ5ID0gLyojX19QVVJFX18qL19jdXJyeU4oNCwgW10sIGZ1bmN0aW9uIF94cmVkdWNlQnkodmFsdWVGbiwgdmFsdWVBY2MsIGtleUZuLCB4Zikge1xuICByZXR1cm4gbmV3IFhSZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIHhmKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgX3hyZWR1Y2VCeTsiLCJpbXBvcnQgX2N1cnJ5TiBmcm9tICcuL2ludGVybmFsL19jdXJyeU4nO1xuaW1wb3J0IF9kaXNwYXRjaGFibGUgZnJvbSAnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJztcbmltcG9ydCBfaGFzIGZyb20gJy4vaW50ZXJuYWwvX2hhcyc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICcuL2ludGVybmFsL19yZWR1Y2UnO1xuaW1wb3J0IF94cmVkdWNlQnkgZnJvbSAnLi9pbnRlcm5hbC9feHJlZHVjZUJ5JztcblxuLyoqXG4gKiBHcm91cHMgdGhlIGVsZW1lbnRzIG9mIHRoZSBsaXN0IGFjY29yZGluZyB0byB0aGUgcmVzdWx0IG9mIGNhbGxpbmdcbiAqIHRoZSBTdHJpbmctcmV0dXJuaW5nIGZ1bmN0aW9uIGBrZXlGbmAgb24gZWFjaCBlbGVtZW50IGFuZCByZWR1Y2VzIHRoZSBlbGVtZW50c1xuICogb2YgZWFjaCBncm91cCB0byBhIHNpbmdsZSB2YWx1ZSB2aWEgdGhlIHJlZHVjZXIgZnVuY3Rpb24gYHZhbHVlRm5gLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYmFzaWNhbGx5IGEgbW9yZSBnZW5lcmFsIFtgZ3JvdXBCeWBdKCNncm91cEJ5KSBmdW5jdGlvbi5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjAuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKChhLCBiKSAtPiBhKSAtPiBhIC0+IChiIC0+IFN0cmluZykgLT4gW2JdIC0+IHtTdHJpbmc6IGF9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZUZuIFRoZSBmdW5jdGlvbiB0aGF0IHJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIGVhY2ggZ3JvdXAgdG8gYSBzaW5nbGVcbiAqICAgICAgICB2YWx1ZS4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgYWNjdW11bGF0b3IgZm9yIGEgcGFydGljdWxhciBncm91cCBhbmQgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Kn0gYWNjIFRoZSAoaW5pdGlhbCkgYWNjdW11bGF0b3IgdmFsdWUgZm9yIGVhY2ggZ3JvdXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlGbiBUaGUgZnVuY3Rpb24gdGhhdCBtYXBzIHRoZSBsaXN0J3MgZWxlbWVudCBpbnRvIGEga2V5LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gZ3JvdXAuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHRoZSBvdXRwdXQgb2YgYGtleUZuYCBmb3Iga2V5cywgbWFwcGVkIHRvIHRoZSBvdXRwdXQgb2ZcbiAqICAgICAgICAgYHZhbHVlRm5gIGZvciBlbGVtZW50cyB3aGljaCBwcm9kdWNlZCB0aGF0IGtleSB3aGVuIHBhc3NlZCB0byBga2V5Rm5gLlxuICogQHNlZSBSLmdyb3VwQnksIFIucmVkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHJlZHVjZVRvTmFtZXNCeSA9IFIucmVkdWNlQnkoKGFjYywgc3R1ZGVudCkgPT4gYWNjLmNvbmNhdChzdHVkZW50Lm5hbWUpLCBbXSk7XG4gKiAgICAgIHZhciBuYW1lc0J5R3JhZGUgPSByZWR1Y2VUb05hbWVzQnkoZnVuY3Rpb24oc3R1ZGVudCkge1xuICogICAgICAgIHZhciBzY29yZSA9IHN0dWRlbnQuc2NvcmU7XG4gKiAgICAgICAgcmV0dXJuIHNjb3JlIDwgNjUgPyAnRicgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDcwID8gJ0QnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA4MCA/ICdDJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgOTAgPyAnQicgOiAnQSc7XG4gKiAgICAgIH0pO1xuICogICAgICB2YXIgc3R1ZGVudHMgPSBbe25hbWU6ICdMdWN5Jywgc2NvcmU6IDkyfSxcbiAqICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnRHJldycsIHNjb3JlOiA4NX0sXG4gKiAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnQmFydCcsIHNjb3JlOiA2Mn1dO1xuICogICAgICBuYW1lc0J5R3JhZGUoc3R1ZGVudHMpO1xuICogICAgICAvLyB7XG4gKiAgICAgIC8vICAgJ0EnOiBbJ0x1Y3knXSxcbiAqICAgICAgLy8gICAnQic6IFsnRHJldyddXG4gKiAgICAgIC8vICAgLy8gLi4uLFxuICogICAgICAvLyAgICdGJzogWydCYXJ0J11cbiAqICAgICAgLy8gfVxuICovXG52YXIgcmVkdWNlQnkgPSAvKiNfX1BVUkVfXyovX2N1cnJ5Tig0LCBbXSwgLyojX19QVVJFX18qL19kaXNwYXRjaGFibGUoW10sIF94cmVkdWNlQnksIGZ1bmN0aW9uIHJlZHVjZUJ5KHZhbHVlRm4sIHZhbHVlQWNjLCBrZXlGbiwgbGlzdCkge1xuICByZXR1cm4gX3JlZHVjZShmdW5jdGlvbiAoYWNjLCBlbHQpIHtcbiAgICB2YXIga2V5ID0ga2V5Rm4oZWx0KTtcbiAgICBhY2Nba2V5XSA9IHZhbHVlRm4oX2hhcyhrZXksIGFjYykgPyBhY2Nba2V5XSA6IHZhbHVlQWNjLCBlbHQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9LCBsaXN0KTtcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZUJ5OyIsImltcG9ydCByZWR1Y2VCeSBmcm9tICcuL3JlZHVjZUJ5JztcblxuLyoqXG4gKiBDb3VudHMgdGhlIGVsZW1lbnRzIG9mIGEgbGlzdCBhY2NvcmRpbmcgdG8gaG93IG1hbnkgbWF0Y2ggZWFjaCB2YWx1ZSBvZiBhXG4gKiBrZXkgZ2VuZXJhdGVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gUmV0dXJucyBhbiBvYmplY3QgbWFwcGluZyB0aGUga2V5c1xuICogcHJvZHVjZWQgYnkgYGZuYCB0byB0aGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzIGluIHRoZSBsaXN0LiBOb3RlIHRoYXQgYWxsXG4gKiBrZXlzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgYmVjYXVzZSBvZiBob3cgSmF2YVNjcmlwdCBvYmplY3RzIHdvcmsuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIChhIC0+IFN0cmluZykgLT4gW2FdIC0+IHsqfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gbWFwIHZhbHVlcyB0byBrZXlzLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBjb3VudCBlbGVtZW50cyBmcm9tLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgbWFwcGluZyBrZXlzIHRvIG51bWJlciBvZiBvY2N1cnJlbmNlcyBpbiB0aGUgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbnVtYmVycyA9IFsxLjAsIDEuMSwgMS4yLCAyLjAsIDMuMCwgMi4yXTtcbiAqICAgICAgUi5jb3VudEJ5KE1hdGguZmxvb3IpKG51bWJlcnMpOyAgICAvLz0+IHsnMSc6IDMsICcyJzogMiwgJzMnOiAxfVxuICpcbiAqICAgICAgdmFyIGxldHRlcnMgPSBbJ2EnLCAnYicsICdBJywgJ2EnLCAnQicsICdjJ107XG4gKiAgICAgIFIuY291bnRCeShSLnRvTG93ZXIpKGxldHRlcnMpOyAgIC8vPT4geydhJzogMywgJ2InOiAyLCAnYyc6IDF9XG4gKi9cbnZhciBjb3VudEJ5ID0gLyojX19QVVJFX18qL3JlZHVjZUJ5KGZ1bmN0aW9uIChhY2MsIGVsZW0pIHtcbiAgcmV0dXJuIGFjYyArIDE7XG59LCAwKTtcbmV4cG9ydCBkZWZhdWx0IGNvdW50Qnk7IiwiaW1wb3J0IGFkZCBmcm9tICcuL2FkZCc7XG5cbi8qKlxuICogRGVjcmVtZW50cyBpdHMgYXJndW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfSBuIC0gMVxuICogQHNlZSBSLmluY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZGVjKDQyKTsgLy89PiA0MVxuICovXG52YXIgZGVjID0gLyojX19QVVJFX18qL2FkZCgtMSk7XG5leHBvcnQgZGVmYXVsdCBkZWM7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzZWNvbmQgYXJndW1lbnQgaWYgaXQgaXMgbm90IGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmA7XG4gKiBvdGhlcndpc2UgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJldHVybmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyBhIC0+IGIgLT4gYSB8IGJcbiAqIEBwYXJhbSB7YX0gZGVmYXVsdCBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBwYXJhbSB7Yn0gdmFsIGB2YWxgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBgZGVmYXVsdGAgdW5sZXNzIGB2YWxgIGlzIGBudWxsYCwgYHVuZGVmaW5lZGAgb3IgYE5hTmAuXG4gKiBAcmV0dXJuIHsqfSBUaGUgc2Vjb25kIHZhbHVlIGlmIGl0IGlzIG5vdCBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLCBvdGhlcndpc2UgdGhlIGRlZmF1bHQgdmFsdWVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZGVmYXVsdFRvNDIgPSBSLmRlZmF1bHRUbyg0Mik7XG4gKlxuICogICAgICBkZWZhdWx0VG80MihudWxsKTsgIC8vPT4gNDJcbiAqICAgICAgZGVmYXVsdFRvNDIodW5kZWZpbmVkKTsgIC8vPT4gNDJcbiAqICAgICAgZGVmYXVsdFRvNDIoJ1JhbWRhJyk7ICAvLz0+ICdSYW1kYSdcbiAqICAgICAgLy8gcGFyc2VJbnQoJ3N0cmluZycpIHJlc3VsdHMgaW4gTmFOXG4gKiAgICAgIGRlZmF1bHRUbzQyKHBhcnNlSW50KCdzdHJpbmcnKSk7IC8vPT4gNDJcbiAqL1xudmFyIGRlZmF1bHRUbyA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGRlZmF1bHRUbyhkLCB2KSB7XG4gIHJldHVybiB2ID09IG51bGwgfHwgdiAhPT0gdiA/IGQgOiB2O1xufSk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VG87IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBfaXNTdHJpbmcgZnJvbSAnLi9pbnRlcm5hbC9faXNTdHJpbmcnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG50aCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy4gSWYgbiBpcyBuZWdhdGl2ZSB0aGVcbiAqIGVsZW1lbnQgYXQgaW5kZXggbGVuZ3RoICsgbiBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHNpZyBOdW1iZXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldFxuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBsaXN0ID0gWydmb28nLCAnYmFyJywgJ2JheicsICdxdXV4J107XG4gKiAgICAgIFIubnRoKDEsIGxpc3QpOyAvLz0+ICdiYXInXG4gKiAgICAgIFIubnRoKC0xLCBsaXN0KTsgLy89PiAncXV1eCdcbiAqICAgICAgUi5udGgoLTk5LCBsaXN0KTsgLy89PiB1bmRlZmluZWRcbiAqXG4gKiAgICAgIFIubnRoKDIsICdhYmMnKTsgLy89PiAnYydcbiAqICAgICAgUi5udGgoMywgJ2FiYycpOyAvLz0+ICcnXG4gKiBAc3ltYiBSLm50aCgtMSwgW2EsIGIsIGNdKSA9IGNcbiAqIEBzeW1iIFIubnRoKDAsIFthLCBiLCBjXSkgPSBhXG4gKiBAc3ltYiBSLm50aCgxLCBbYSwgYiwgY10pID0gYlxuICovXG52YXIgbnRoID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gbnRoKG9mZnNldCwgbGlzdCkge1xuICB2YXIgaWR4ID0gb2Zmc2V0IDwgMCA/IGxpc3QubGVuZ3RoICsgb2Zmc2V0IDogb2Zmc2V0O1xuICByZXR1cm4gX2lzU3RyaW5nKGxpc3QpID8gbGlzdC5jaGFyQXQoaWR4KSA6IGxpc3RbaWR4XTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbnRoOyIsImltcG9ydCBudGggZnJvbSAnLi9udGgnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS40XG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuaW5pdCwgUi5oZWFkLCBSLnRhaWxcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmxhc3QoWydmaScsICdmbycsICdmdW0nXSk7IC8vPT4gJ2Z1bSdcbiAqICAgICAgUi5sYXN0KFtdKTsgLy89PiB1bmRlZmluZWRcbiAqXG4gKiAgICAgIFIubGFzdCgnYWJjJyk7IC8vPT4gJ2MnXG4gKiAgICAgIFIubGFzdCgnJyk7IC8vPT4gJydcbiAqL1xudmFyIGxhc3QgPSAvKiNfX1BVUkVfXyovbnRoKC0xKTtcbmV4cG9ydCBkZWZhdWx0IGxhc3Q7IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBjdXJyeU4gZnJvbSAnLi9jdXJyeU4nO1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgZnVuY3Rpb24gbXVjaCBsaWtlIHRoZSBzdXBwbGllZCBvbmUsIGV4Y2VwdCB0aGF0IHRoZSBmaXJzdCB0d29cbiAqIGFyZ3VtZW50cycgb3JkZXIgaXMgcmV2ZXJzZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKChhLCBiLCBjLCAuLi4pIC0+IHopIC0+IChiIC0+IGEgLT4gYyAtPiAuLi4gLT4geilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2Ugd2l0aCBpdHMgZmlyc3QgdHdvIHBhcmFtZXRlcnMgcmV2ZXJzZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgcmVzdWx0IG9mIGludm9raW5nIGBmbmAgd2l0aCBpdHMgZmlyc3QgdHdvIHBhcmFtZXRlcnMnIG9yZGVyIHJldmVyc2VkLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtZXJnZVRocmVlID0gKGEsIGIsIGMpID0+IFtdLmNvbmNhdChhLCBiLCBjKTtcbiAqXG4gKiAgICAgIG1lcmdlVGhyZWUoMSwgMiwgMyk7IC8vPT4gWzEsIDIsIDNdXG4gKlxuICogICAgICBSLmZsaXAobWVyZ2VUaHJlZSkoMSwgMiwgMyk7IC8vPT4gWzIsIDEsIDNdXG4gKiBAc3ltYiBSLmZsaXAoZikoYSwgYiwgYykgPSBmKGIsIGEsIGMpXG4gKi9cbnZhciBmbGlwID0gLyojX19QVVJFX18qL19jdXJyeTEoZnVuY3Rpb24gZmxpcChmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgYXJnc1swXSA9IGI7XG4gICAgYXJnc1sxXSA9IGE7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgZmxpcDsiLCJpbXBvcnQgX2NoZWNrRm9yTWV0aG9kIGZyb20gJy4vaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kJztcbmltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIGlucHV0IGBsaXN0YCwgY2FsbGluZyBhIHByb3ZpZGVkIGZ1bmN0aW9uIGBmbmAgZm9yIGVhY2hcbiAqIGVsZW1lbnQgaW4gdGhlIGxpc3QuXG4gKlxuICogYGZuYCByZWNlaXZlcyBvbmUgYXJndW1lbnQ6ICoodmFsdWUpKi5cbiAqXG4gKiBOb3RlOiBgUi5mb3JFYWNoYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2VcbiAqIGFycmF5cyksIHVubGlrZSB0aGUgbmF0aXZlIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kLiBGb3IgbW9yZVxuICogZGV0YWlscyBvbiB0aGlzIGJlaGF2aW9yLCBzZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoI0Rlc2NyaXB0aW9uXG4gKlxuICogQWxzbyBub3RlIHRoYXQsIHVubGlrZSBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgLCBSYW1kYSdzIGBmb3JFYWNoYCByZXR1cm5zXG4gKiB0aGUgb3JpZ2luYWwgYXJyYXkuIEluIHNvbWUgbGlicmFyaWVzIHRoaXMgZnVuY3Rpb24gaXMgbmFtZWQgYGVhY2hgLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBmb3JFYWNoYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjFcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+ICopIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuIFJlY2VpdmVzIG9uZSBhcmd1bWVudCwgYHZhbHVlYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBvcmlnaW5hbCBsaXN0LlxuICogQHNlZSBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHByaW50WFBsdXNGaXZlID0geCA9PiBjb25zb2xlLmxvZyh4ICsgNSk7XG4gKiAgICAgIFIuZm9yRWFjaChwcmludFhQbHVzRml2ZSwgWzEsIDIsIDNdKTsgLy89PiBbMSwgMiwgM11cbiAqICAgICAgLy8gbG9ncyA2XG4gKiAgICAgIC8vIGxvZ3MgN1xuICogICAgICAvLyBsb2dzIDhcbiAqIEBzeW1iIFIuZm9yRWFjaChmLCBbYSwgYiwgY10pID0gW2EsIGIsIGNdXG4gKi9cbnZhciBmb3JFYWNoID0gLyojX19QVVJFX18qL19jdXJyeTIoIC8qI19fUFVSRV9fKi9fY2hlY2tGb3JNZXRob2QoJ2ZvckVhY2gnLCBmdW5jdGlvbiBmb3JFYWNoKGZuLCBsaXN0KSB7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBmbihsaXN0W2lkeF0pO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBsaXN0O1xufSkpO1xuZXhwb3J0IGRlZmF1bHQgZm9yRWFjaDsiLCJpbXBvcnQgbnRoIGZyb20gJy4vbnRoJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy4gSW4gc29tZSBsaWJyYXJpZXNcbiAqIHRoaXMgZnVuY3Rpb24gaXMgbmFtZWQgYGZpcnN0YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLnRhaWwsIFIuaW5pdCwgUi5sYXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5oZWFkKFsnZmknLCAnZm8nLCAnZnVtJ10pOyAvLz0+ICdmaSdcbiAqICAgICAgUi5oZWFkKFtdKTsgLy89PiB1bmRlZmluZWRcbiAqXG4gKiAgICAgIFIuaGVhZCgnYWJjJyk7IC8vPT4gJ2EnXG4gKiAgICAgIFIuaGVhZCgnJyk7IC8vPT4gJydcbiAqL1xudmFyIGhlYWQgPSAvKiNfX1BVUkVfXyovbnRoKDApO1xuZXhwb3J0IGRlZmF1bHQgaGVhZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn0iLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuaW1wb3J0IF9pZGVudGl0eSBmcm9tICcuL2ludGVybmFsL19pZGVudGl0eSc7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGRvZXMgbm90aGluZyBidXQgcmV0dXJuIHRoZSBwYXJhbWV0ZXIgc3VwcGxpZWQgdG8gaXQuIEdvb2RcbiAqIGFzIGEgZGVmYXVsdCBvciBwbGFjZWhvbGRlciBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdG8gcmV0dXJuLlxuICogQHJldHVybiB7Kn0gVGhlIGlucHV0IHZhbHVlLCBgeGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pZGVudGl0eSgxKTsgLy89PiAxXG4gKlxuICogICAgICB2YXIgb2JqID0ge307XG4gKiAgICAgIFIuaWRlbnRpdHkob2JqKSA9PT0gb2JqOyAvLz0+IHRydWVcbiAqIEBzeW1iIFIuaWRlbnRpdHkoYSkgPSBhXG4gKi9cbnZhciBpZGVudGl0eSA9IC8qI19fUFVSRV9fKi9fY3VycnkxKF9pZGVudGl0eSk7XG5leHBvcnQgZGVmYXVsdCBpZGVudGl0eTsiLCJpbXBvcnQgX2N1cnJ5MyBmcm9tICcuL2ludGVybmFsL19jdXJyeTMnO1xuaW1wb3J0IGN1cnJ5TiBmcm9tICcuL2N1cnJ5Tic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9jZXNzIGVpdGhlciB0aGUgYG9uVHJ1ZWAgb3IgdGhlIGBvbkZhbHNlYFxuICogZnVuY3Rpb24gZGVwZW5kaW5nIHVwb24gdGhlIHJlc3VsdCBvZiB0aGUgYGNvbmRpdGlvbmAgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+ICopIC0+ICgqLi4uIC0+ICopIC0+ICgqLi4uIC0+ICopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25kaXRpb24gQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJ1ZSBBIGZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIHRoZSBgY29uZGl0aW9uYCBldmFsdWF0ZXMgdG8gYSB0cnV0aHkgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZhbHNlIEEgZnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIGBjb25kaXRpb25gIGV2YWx1YXRlcyB0byBhIGZhbHN5IHZhbHVlLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IHVuYXJ5IGZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9jZXNzIGVpdGhlciB0aGUgYG9uVHJ1ZWAgb3IgdGhlIGBvbkZhbHNlYFxuICogICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlcGVuZGluZyB1cG9uIHRoZSByZXN1bHQgb2YgdGhlIGBjb25kaXRpb25gIHByZWRpY2F0ZS5cbiAqIEBzZWUgUi51bmxlc3MsIFIud2hlblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpbmNDb3VudCA9IFIuaWZFbHNlKFxuICogICAgICAgIFIuaGFzKCdjb3VudCcpLFxuICogICAgICAgIFIub3ZlcihSLmxlbnNQcm9wKCdjb3VudCcpLCBSLmluYyksXG4gKiAgICAgICAgUi5hc3NvYygnY291bnQnLCAxKVxuICogICAgICApO1xuICogICAgICBpbmNDb3VudCh7fSk7ICAgICAgICAgICAvLz0+IHsgY291bnQ6IDEgfVxuICogICAgICBpbmNDb3VudCh7IGNvdW50OiAxIH0pOyAvLz0+IHsgY291bnQ6IDIgfVxuICovXG52YXIgaWZFbHNlID0gLyojX19QVVJFX18qL19jdXJyeTMoZnVuY3Rpb24gaWZFbHNlKGNvbmRpdGlvbiwgb25UcnVlLCBvbkZhbHNlKSB7XG4gIHJldHVybiBjdXJyeU4oTWF0aC5tYXgoY29uZGl0aW9uLmxlbmd0aCwgb25UcnVlLmxlbmd0aCwgb25GYWxzZS5sZW5ndGgpLCBmdW5jdGlvbiBfaWZFbHNlKCkge1xuICAgIHJldHVybiBjb25kaXRpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSA/IG9uVHJ1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogb25GYWxzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgaWZFbHNlOyIsImltcG9ydCBhZGQgZnJvbSAnLi9hZGQnO1xuXG4vKipcbiAqIEluY3JlbWVudHMgaXRzIGFyZ3VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn0gbiArIDFcbiAqIEBzZWUgUi5kZWNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmluYyg0Mik7IC8vPT4gNDNcbiAqL1xudmFyIGluYyA9IC8qI19fUFVSRV9fKi9hZGQoMSk7XG5leHBvcnQgZGVmYXVsdCBpbmM7IiwiaW1wb3J0IHJlZHVjZUJ5IGZyb20gJy4vcmVkdWNlQnknO1xuXG4vKipcbiAqIEdpdmVuIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYSBrZXksIHR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGludG8gYW5cbiAqIG9iamVjdCBpbmRleGluZyB0aGUgb2JqZWN0cyBieSB0aGUgZ2l2ZW4ga2V5LiBOb3RlIHRoYXQgaWYgbXVsdGlwbGVcbiAqIG9iamVjdHMgZ2VuZXJhdGUgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZSBpbmRleGluZyBrZXkgb25seSB0aGUgbGFzdCB2YWx1ZVxuICogd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgZ2VuZXJhdGVkIG9iamVjdC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gU3RyaW5nKSAtPiBbe2s6IHZ9XSAtPiB7azoge2s6IHZ9fVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gOjogYSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIGluZGV4XG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBpbmRleGluZyBlYWNoIGFycmF5IGVsZW1lbnQgYnkgdGhlIGdpdmVuIHByb3BlcnR5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBsaXN0ID0gW3tpZDogJ3h5eicsIHRpdGxlOiAnQSd9LCB7aWQ6ICdhYmMnLCB0aXRsZTogJ0InfV07XG4gKiAgICAgIFIuaW5kZXhCeShSLnByb3AoJ2lkJyksIGxpc3QpO1xuICogICAgICAvLz0+IHthYmM6IHtpZDogJ2FiYycsIHRpdGxlOiAnQid9LCB4eXo6IHtpZDogJ3h5eicsIHRpdGxlOiAnQSd9fVxuICovXG52YXIgaW5kZXhCeSA9IC8qI19fUFVSRV9fKi9yZWR1Y2VCeShmdW5jdGlvbiAoYWNjLCBlbGVtKSB7XG4gIHJldHVybiBlbGVtO1xufSwgbnVsbCk7XG5leHBvcnQgZGVmYXVsdCBpbmRleEJ5OyIsImltcG9ydCBzbGljZSBmcm9tICcuL3NsaWNlJztcblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBidXQgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5sYXN0LCBSLmhlYWQsIFIudGFpbFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaW5pdChbMSwgMiwgM10pOyAgLy89PiBbMSwgMl1cbiAqICAgICAgUi5pbml0KFsxLCAyXSk7ICAgICAvLz0+IFsxXVxuICogICAgICBSLmluaXQoWzFdKTsgICAgICAgIC8vPT4gW11cbiAqICAgICAgUi5pbml0KFtdKTsgICAgICAgICAvLz0+IFtdXG4gKlxuICogICAgICBSLmluaXQoJ2FiYycpOyAgLy89PiAnYWInXG4gKiAgICAgIFIuaW5pdCgnYWInKTsgICAvLz0+ICdhJ1xuICogICAgICBSLmluaXQoJ2EnKTsgICAgLy89PiAnJ1xuICogICAgICBSLmluaXQoJycpOyAgICAgLy89PiAnJ1xuICovXG52YXIgaW5pdCA9IC8qI19fUFVSRV9fKi9zbGljZSgwLCAtMSk7XG5leHBvcnQgZGVmYXVsdCBpbml0OyIsImltcG9ydCBfY29udGFpbnMgZnJvbSAnLi9fY29udGFpbnMnO1xuXG52YXIgX1NldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9TZXQoKSB7XG4gICAgLyogZ2xvYmFscyBTZXQgKi9cbiAgICB0aGlzLl9uYXRpdmVTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nID8gbmV3IFNldCgpIDogbnVsbDtcbiAgICB0aGlzLl9pdGVtcyA9IHt9O1xuICB9XG5cbiAgLy8gdW50aWwgd2UgZmlndXJlIG91dCB3aHkganNkb2MgY2hva2VzIG9uIHRoaXNcbiAgLy8gQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gYWRkIHRvIHRoZSBTZXRcbiAgLy8gQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gZGlkIG5vdCBleGlzdCBwcmlvciwgb3RoZXJ3aXNlIGZhbHNlXG4gIC8vXG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuICFoYXNPckFkZChpdGVtLCB0cnVlLCB0aGlzKTtcbiAgfTtcblxuICAvL1xuICAvLyBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBjaGVjayBmb3IgZXhpc3RlbmNlIGluIHRoZSBTZXRcbiAgLy8gQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gZXhpc3RzIGluIHRoZSBTZXQsIG90aGVyd2lzZSBmYWxzZVxuICAvL1xuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBoYXNPckFkZChpdGVtLCBmYWxzZSwgdGhpcyk7XG4gIH07XG5cbiAgLy9cbiAgLy8gQ29tYmluZXMgdGhlIGxvZ2ljIGZvciBjaGVja2luZyB3aGV0aGVyIGFuIGl0ZW0gaXMgYSBtZW1iZXIgb2YgdGhlIHNldCBhbmRcbiAgLy8gZm9yIGFkZGluZyBhIG5ldyBpdGVtIHRvIHRoZSBzZXQuXG4gIC8vXG4gIC8vIEBwYXJhbSBpdGVtICAgICAgIFRoZSBpdGVtIHRvIGNoZWNrIG9yIGFkZCB0byB0aGUgU2V0IGluc3RhbmNlLlxuICAvLyBAcGFyYW0gc2hvdWxkQWRkICBJZiB0cnVlLCB0aGUgaXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzZXQgaWYgaXQgZG9lc24ndFxuICAvLyAgICAgICAgICAgICAgICAgICBhbHJlYWR5IGV4aXN0LlxuICAvLyBAcGFyYW0gc2V0ICAgICAgICBUaGUgc2V0IGluc3RhbmNlIHRvIGNoZWNrIG9yIGFkZCB0by5cbiAgLy8gQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0ZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgLy9cbiAgcmV0dXJuIF9TZXQ7XG59KCk7XG5cbmZ1bmN0aW9uIGhhc09yQWRkKGl0ZW0sIHNob3VsZEFkZCwgc2V0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGl0ZW07XG4gIHZhciBwcmV2U2l6ZSwgbmV3U2l6ZTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiArMCBhbmQgLTBcbiAgICAgIGlmIChpdGVtID09PSAwICYmIDEgLyBpdGVtID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgaWYgKHNldC5faXRlbXNbJy0wJ10pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zWyctMCddID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0aGVzZSB0eXBlcyBjYW4gYWxsIHV0aWxpc2UgdGhlIG5hdGl2ZSBTZXRcbiAgICAgIGlmIChzZXQuX25hdGl2ZVNldCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgcHJldlNpemUgPSBzZXQuX25hdGl2ZVNldC5zaXplO1xuICAgICAgICAgIHNldC5fbmF0aXZlU2V0LmFkZChpdGVtKTtcbiAgICAgICAgICBuZXdTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICByZXR1cm4gbmV3U2l6ZSA9PT0gcHJldlNpemU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNldC5fbmF0aXZlU2V0LmhhcyhpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEodHlwZSBpbiBzZXQuX2l0ZW1zKSkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSB7fTtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV1baXRlbV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSBpbiBzZXQuX2l0ZW1zW3R5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXVtpdGVtXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAvLyBzZXQuX2l0ZW1zWydib29sZWFuJ10gaG9sZHMgYSB0d28gZWxlbWVudCBhcnJheVxuICAgICAgLy8gcmVwcmVzZW50aW5nIFsgZmFsc2VFeGlzdHMsIHRydWVFeGlzdHMgXVxuICAgICAgaWYgKHR5cGUgaW4gc2V0Ll9pdGVtcykge1xuICAgICAgICB2YXIgYklkeCA9IGl0ZW0gPyAxIDogMDtcbiAgICAgICAgaWYgKHNldC5faXRlbXNbdHlwZV1bYklkeF0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdW2JJZHhdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXSA9IGl0ZW0gPyBbZmFsc2UsIHRydWVdIDogW3RydWUsIGZhbHNlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAvLyBjb21wYXJlIGZ1bmN0aW9ucyBmb3IgcmVmZXJlbmNlIGVxdWFsaXR5XG4gICAgICBpZiAoc2V0Ll9uYXRpdmVTZXQgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgIHByZXZTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICBzZXQuX25hdGl2ZVNldC5hZGQoaXRlbSk7XG4gICAgICAgICAgbmV3U2l6ZSA9IHNldC5fbmF0aXZlU2V0LnNpemU7XG4gICAgICAgICAgcmV0dXJuIG5ld1NpemUgPT09IHByZXZTaXplO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzZXQuX25hdGl2ZVNldC5oYXMoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghKHR5cGUgaW4gc2V0Ll9pdGVtcykpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfY29udGFpbnMoaXRlbSwgc2V0Ll9pdGVtc1t0eXBlXSkpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICBpZiAoc2V0Ll9pdGVtc1t0eXBlXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgaWYgKCFzZXQuX2l0ZW1zWydudWxsJ10pIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zWydudWxsJ10gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyByZWR1Y2UgdGhlIHNlYXJjaCBzaXplIG9mIGhldGVyb2dlbmVvdXMgc2V0cyBieSBjcmVhdGluZyBidWNrZXRzXG4gICAgICAvLyBmb3IgZWFjaCB0eXBlLlxuICAgICAgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKTtcbiAgICAgIGlmICghKHR5cGUgaW4gc2V0Ll9pdGVtcykpIHtcbiAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSBbaXRlbV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gc2NhbiB0aHJvdWdoIGFsbCBwcmV2aW91c2x5IGFwcGxpZWQgaXRlbXNcbiAgICAgIGlmICghX2NvbnRhaW5zKGl0ZW0sIHNldC5faXRlbXNbdHlwZV0pKSB7XG4gICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLy8gQSBzaW1wbGUgU2V0IHR5cGUgdGhhdCBob25vdXJzIFIuZXF1YWxzIHNlbWFudGljc1xuZXhwb3J0IGRlZmF1bHQgX1NldDsiLCJpbXBvcnQgX1NldCBmcm9tICcuL2ludGVybmFsL19TZXQnO1xuaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyBvbmx5IG9uZSBjb3B5IG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAqIGxpc3QsIGJhc2VkIHVwb24gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGFwcGx5aW5nIHRoZSBzdXBwbGllZCBmdW5jdGlvbiB0b1xuICogZWFjaCBsaXN0IGVsZW1lbnQuIFByZWZlcnMgdGhlIGZpcnN0IGl0ZW0gaWYgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHByb2R1Y2VzXG4gKiB0aGUgc2FtZSB2YWx1ZSBvbiB0d28gaXRlbXMuIFtgUi5lcXVhbHNgXSgjZXF1YWxzKSBpcyB1c2VkIGZvciBjb21wYXJpc29uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IGIpIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgZnVuY3Rpb24gdXNlZCB0byBwcm9kdWNlIGEgdmFsdWUgdG8gdXNlIGR1cmluZyBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBsaXN0IG9mIHVuaXF1ZSBpdGVtcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuaXFCeShNYXRoLmFicywgWy0xLCAtNSwgMiwgMTAsIDEsIDJdKTsgLy89PiBbLTEsIC01LCAyLCAxMF1cbiAqL1xudmFyIHVuaXFCeSA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIHVuaXFCeShmbiwgbGlzdCkge1xuICB2YXIgc2V0ID0gbmV3IF9TZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGFwcGxpZWRJdGVtLCBpdGVtO1xuXG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgYXBwbGllZEl0ZW0gPSBmbihpdGVtKTtcbiAgICBpZiAoc2V0LmFkZChhcHBsaWVkSXRlbSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5leHBvcnQgZGVmYXVsdCB1bmlxQnk7IiwiaW1wb3J0IGlkZW50aXR5IGZyb20gJy4vaWRlbnRpdHknO1xuaW1wb3J0IHVuaXFCeSBmcm9tICcuL3VuaXFCeSc7XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgb25seSBvbmUgY29weSBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIG9yaWdpbmFsXG4gKiBsaXN0LiBbYFIuZXF1YWxzYF0oI2VxdWFscykgaXMgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiB1bmlxdWUgaXRlbXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51bmlxKFsxLCAxLCAyLCAxXSk7IC8vPT4gWzEsIDJdXG4gKiAgICAgIFIudW5pcShbMSwgJzEnXSk7ICAgICAvLz0+IFsxLCAnMSddXG4gKiAgICAgIFIudW5pcShbWzQyXSwgWzQyXV0pOyAvLz0+IFtbNDJdXVxuICovXG52YXIgdW5pcSA9IC8qI19fUFVSRV9fKi91bmlxQnkoaWRlbnRpdHkpO1xuZXhwb3J0IGRlZmF1bHQgdW5pcTsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuaW1wb3J0IF9pc0Z1bmN0aW9uIGZyb20gJy4vaW50ZXJuYWwvX2lzRnVuY3Rpb24nO1xuaW1wb3J0IGN1cnJ5TiBmcm9tICcuL2N1cnJ5Tic7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnLi90b1N0cmluZyc7XG5cbi8qKlxuICogVHVybnMgYSBuYW1lZCBtZXRob2Qgd2l0aCBhIHNwZWNpZmllZCBhcml0eSBpbnRvIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmVcbiAqIGNhbGxlZCBkaXJlY3RseSBzdXBwbGllZCB3aXRoIGFyZ3VtZW50cyBhbmQgYSB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpcyBjdXJyaWVkIGFuZCBhY2NlcHRzIGBhcml0eSArIDFgIHBhcmFtZXRlcnMgd2hlcmVcbiAqIHRoZSBmaW5hbCBwYXJhbWV0ZXIgaXMgdGhlIHRhcmdldCBvYmplY3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiAoYSAtPiBiIC0+IC4uLiAtPiBuIC0+IE9iamVjdCAtPiAqKVxuICogQHBhcmFtIHtOdW1iZXJ9IGFyaXR5IE51bWJlciBvZiBhcmd1bWVudHMgdGhlIHJldHVybmVkIGZ1bmN0aW9uIHNob3VsZCB0YWtlXG4gKiAgICAgICAgYmVmb3JlIHRoZSB0YXJnZXQgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZCBOYW1lIG9mIHRoZSBtZXRob2QgdG8gY2FsbC5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmNvbnN0cnVjdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBzbGljZUZyb20gPSBSLmludm9rZXIoMSwgJ3NsaWNlJyk7XG4gKiAgICAgIHNsaWNlRnJvbSg2LCAnYWJjZGVmZ2hpamtsbScpOyAvLz0+ICdnaGlqa2xtJ1xuICogICAgICB2YXIgc2xpY2VGcm9tNiA9IFIuaW52b2tlcigyLCAnc2xpY2UnKSg2KTtcbiAqICAgICAgc2xpY2VGcm9tNig4LCAnYWJjZGVmZ2hpamtsbScpOyAvLz0+ICdnaCdcbiAqIEBzeW1iIFIuaW52b2tlcigwLCAnbWV0aG9kJykobykgPSBvWydtZXRob2QnXSgpXG4gKiBAc3ltYiBSLmludm9rZXIoMSwgJ21ldGhvZCcpKGEsIG8pID0gb1snbWV0aG9kJ10oYSlcbiAqIEBzeW1iIFIuaW52b2tlcigyLCAnbWV0aG9kJykoYSwgYiwgbykgPSBvWydtZXRob2QnXShhLCBiKVxuICovXG52YXIgaW52b2tlciA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIGludm9rZXIoYXJpdHksIG1ldGhvZCkge1xuICByZXR1cm4gY3VycnlOKGFyaXR5ICsgMSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0YXJnZXQgPSBhcmd1bWVudHNbYXJpdHldO1xuICAgIGlmICh0YXJnZXQgIT0gbnVsbCAmJiBfaXNGdW5jdGlvbih0YXJnZXRbbWV0aG9kXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXRbbWV0aG9kXS5hcHBseSh0YXJnZXQsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgYXJpdHkpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcih0b1N0cmluZyh0YXJnZXQpICsgJyBkb2VzIG5vdCBoYXZlIGEgbWV0aG9kIG5hbWVkIFwiJyArIG1ldGhvZCArICdcIicpO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgaW52b2tlcjsiLCJpbXBvcnQgaW52b2tlciBmcm9tICcuL2ludm9rZXInO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgbWFkZSBieSBpbnNlcnRpbmcgdGhlIGBzZXBhcmF0b3JgIGJldHdlZW4gZWFjaCBlbGVtZW50IGFuZFxuICogY29uY2F0ZW5hdGluZyBhbGwgdGhlIGVsZW1lbnRzIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgU3RyaW5nIC0+IFthXSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gc2VwYXJhdG9yIFRoZSBzdHJpbmcgdXNlZCB0byBzZXBhcmF0ZSB0aGUgZWxlbWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSB4cyBUaGUgZWxlbWVudHMgdG8gam9pbiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyBtYWRlIGJ5IGNvbmNhdGVuYXRpbmcgYHhzYCB3aXRoIGBzZXBhcmF0b3JgLlxuICogQHNlZSBSLnNwbGl0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHNwYWNlciA9IFIuam9pbignICcpO1xuICogICAgICBzcGFjZXIoWydhJywgMiwgMy40XSk7ICAgLy89PiAnYSAyIDMuNCdcbiAqICAgICAgUi5qb2luKCd8JywgWzEsIDIsIDNdKTsgICAgLy89PiAnMXwyfDMnXG4gKi9cbnZhciBqb2luID0gLyojX19QVVJFX18qL2ludm9rZXIoMSwgJ2pvaW4nKTtcbmV4cG9ydCBkZWZhdWx0IGpvaW47IiwiaW1wb3J0IF9jdXJyeTEgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkxJztcbmltcG9ydCBjb252ZXJnZSBmcm9tICcuL2NvbnZlcmdlJztcblxuLyoqXG4gKiBqdXh0IGFwcGxpZXMgYSBsaXN0IG9mIGZ1bmN0aW9ucyB0byBhIGxpc3Qgb2YgdmFsdWVzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBbKGEsIGIsIC4uLiwgbSkgLT4gbl0gLT4gKChhLCBiLCAuLi4sIG0pIC0+IFtuXSlcbiAqIEBwYXJhbSB7QXJyYXl9IGZucyBBbiBhcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGxpc3Qgb2YgdmFsdWVzIGFmdGVyIGFwcGx5aW5nIGVhY2ggb2YgdGhlIG9yaWdpbmFsIGBmbnNgIHRvIGl0cyBwYXJhbWV0ZXJzLlxuICogQHNlZSBSLmFwcGx5U3BlY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBnZXRSYW5nZSA9IFIuanV4dChbTWF0aC5taW4sIE1hdGgubWF4XSk7XG4gKiAgICAgIGdldFJhbmdlKDMsIDQsIDksIC0zKTsgLy89PiBbLTMsIDldXG4gKiBAc3ltYiBSLmp1eHQoW2YsIGcsIGhdKShhLCBiKSA9IFtmKGEsIGIpLCBnKGEsIGIpLCBoKGEsIGIpXVxuICovXG52YXIganV4dCA9IC8qI19fUFVSRV9fKi9fY3VycnkxKGZ1bmN0aW9uIGp1eHQoZm5zKSB7XG4gIHJldHVybiBjb252ZXJnZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIH0sIGZucyk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGp1eHQ7IiwiaW1wb3J0IGFkZCBmcm9tICcuL2FkZCc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJy4vcmVkdWNlJztcblxuLyoqXG4gKiBBZGRzIHRvZ2V0aGVyIGFsbCB0aGUgZWxlbWVudHMgb2YgYSBsaXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IEFuIGFycmF5IG9mIG51bWJlcnNcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHN1bSBvZiBhbGwgdGhlIG51bWJlcnMgaW4gdGhlIGxpc3QuXG4gKiBAc2VlIFIucmVkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zdW0oWzIsNCw2LDgsMTAwLDFdKTsgLy89PiAxMjFcbiAqL1xudmFyIHN1bSA9IC8qI19fUFVSRV9fKi9yZWR1Y2UoYWRkLCAwKTtcbmV4cG9ydCBkZWZhdWx0IHN1bTsiLCJpbXBvcnQgX2FyaXR5IGZyb20gJy4vaW50ZXJuYWwvX2FyaXR5JztcbmltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgX2hhcyBmcm9tICcuL2ludGVybmFsL19oYXMnO1xuXG4vKipcbiAqIEEgY3VzdG9taXNhYmxlIHZlcnNpb24gb2YgW2BSLm1lbW9pemVgXSgjbWVtb2l6ZSkuIGBtZW1vaXplV2l0aGAgdGFrZXMgYW5cbiAqIGFkZGl0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYSBnaXZlbiBhcmd1bWVudCBzZXQgYW5kIHVzZWQgdG9cbiAqIGNyZWF0ZSB0aGUgY2FjaGUga2V5IHVuZGVyIHdoaWNoIHRoZSByZXN1bHRzIG9mIHRoZSBmdW5jdGlvbiB0byBiZSBtZW1vaXplZFxuICogd2lsbCBiZSBzdG9yZWQuIENhcmUgbXVzdCBiZSB0YWtlbiB3aGVuIGltcGxlbWVudGluZyBrZXkgZ2VuZXJhdGlvbiB0byBhdm9pZFxuICogY2xhc2hlcyB0aGF0IG1heSBvdmVyd3JpdGUgcHJldmlvdXMgZW50cmllcyBlcnJvbmVvdXNseS5cbiAqXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjQuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqLi4uIC0+IFN0cmluZykgLT4gKCouLi4gLT4gYSkgLT4gKCouLi4gLT4gYSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgY2FjaGUga2V5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemUuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gTWVtb2l6ZWQgdmVyc2lvbiBvZiBgZm5gLlxuICogQHNlZSBSLm1lbW9pemVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBsZXQgY291bnQgPSAwO1xuICogICAgICBjb25zdCBmYWN0b3JpYWwgPSBSLm1lbW9pemVXaXRoKFIuaWRlbnRpdHksIG4gPT4ge1xuICogICAgICAgIGNvdW50ICs9IDE7XG4gKiAgICAgICAgcmV0dXJuIFIucHJvZHVjdChSLnJhbmdlKDEsIG4gKyAxKSk7XG4gKiAgICAgIH0pO1xuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBjb3VudDsgLy89PiAxXG4gKi9cbnZhciBtZW1vaXplV2l0aCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIG1lbW9pemVXaXRoKG1GbiwgZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBfYXJpdHkoZm4ubGVuZ3RoLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSA9IG1Gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICghX2hhcyhrZXksIGNhY2hlKSkge1xuICAgICAgY2FjaGVba2V5XSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVtrZXldO1xuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZVdpdGg7IiwiaW1wb3J0IG1lbW9pemVXaXRoIGZyb20gJy4vbWVtb2l6ZVdpdGgnO1xuaW1wb3J0IHRvU3RyaW5nIGZyb20gJy4vdG9TdHJpbmcnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZnVuY3Rpb24gdGhhdCwgd2hlbiBpbnZva2VkLCBjYWNoZXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGBmbmBcbiAqIGZvciBhIGdpdmVuIGFyZ3VtZW50IHNldCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZVxuICogbWVtb2l6ZWQgYGZuYCB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50IHNldCB3aWxsIG5vdCByZXN1bHQgaW4gYW4gYWRkaXRpb25hbFxuICogY2FsbCB0byBgZm5gOyBpbnN0ZWFkLCB0aGUgY2FjaGVkIHJlc3VsdCBmb3IgdGhhdCBzZXQgb2YgYXJndW1lbnRzIHdpbGwgYmVcbiAqIHJldHVybmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqLi4uIC0+IGEpIC0+ICgqLi4uIC0+IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWVtb2l6ZS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBNZW1vaXplZCB2ZXJzaW9uIG9mIGBmbmAuXG4gKiBAc2VlIFIubWVtb2l6ZVdpdGhcbiAqIEBkZXByZWNhdGVkIHNpbmNlIHYwLjI1LjBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBsZXQgY291bnQgPSAwO1xuICogICAgICBjb25zdCBmYWN0b3JpYWwgPSBSLm1lbW9pemUobiA9PiB7XG4gKiAgICAgICAgY291bnQgKz0gMTtcbiAqICAgICAgICByZXR1cm4gUi5wcm9kdWN0KFIucmFuZ2UoMSwgbiArIDEpKTtcbiAqICAgICAgfSk7XG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGNvdW50OyAvLz0+IDFcbiAqL1xudmFyIG1lbW9pemUgPSAvKiNfX1BVUkVfXyovbWVtb2l6ZVdpdGgoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdG9TdHJpbmcoYXJndW1lbnRzKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG51bWJlcnMuIEVxdWl2YWxlbnQgdG8gYGEgKiBiYCBidXQgY3VycmllZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIHZhbHVlLlxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgcmVzdWx0IG9mIGBhICogYmAuXG4gKiBAc2VlIFIuZGl2aWRlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRvdWJsZSA9IFIubXVsdGlwbHkoMik7XG4gKiAgICAgIHZhciB0cmlwbGUgPSBSLm11bHRpcGx5KDMpO1xuICogICAgICBkb3VibGUoMyk7ICAgICAgIC8vPT4gIDZcbiAqICAgICAgdHJpcGxlKDQpOyAgICAgICAvLz0+IDEyXG4gKiAgICAgIFIubXVsdGlwbHkoMiwgNSk7ICAvLz0+IDEwXG4gKi9cbnZhciBtdWx0aXBseSA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIpIHtcbiAgcmV0dXJuIGEgKiBiO1xufSk7XG5leHBvcnQgZGVmYXVsdCBtdWx0aXBseTsiLCJpbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCBqdXh0IGZyb20gJy4vanV4dCc7XG5pbXBvcnQgcmVqZWN0IGZyb20gJy4vcmVqZWN0JztcblxuLyoqXG4gKiBUYWtlcyBhIHByZWRpY2F0ZSBhbmQgYSBsaXN0IG9yIG90aGVyIGBGaWx0ZXJhYmxlYCBvYmplY3QgYW5kIHJldHVybnMgdGhlXG4gKiBwYWlyIG9mIGZpbHRlcmFibGUgb2JqZWN0cyBvZiB0aGUgc2FtZSB0eXBlIG9mIGVsZW1lbnRzIHdoaWNoIGRvIGFuZCBkbyBub3RcbiAqIHNhdGlzZnksIHRoZSBwcmVkaWNhdGUsIHJlc3BlY3RpdmVseS4gRmlsdGVyYWJsZSBvYmplY3RzIGluY2x1ZGUgcGxhaW4gb2JqZWN0cyBvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGhhcyBhIGZpbHRlciBtZXRob2Qgc3VjaCBhcyBgQXJyYXlgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuNFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBbZiBhLCBmIGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHRvIGRldGVybWluZSB3aGljaCBzaWRlIHRoZSBlbGVtZW50IGJlbG9uZ3MgdG8uXG4gKiBAcGFyYW0ge0FycmF5fSBmaWx0ZXJhYmxlIHRoZSBsaXN0IChvciBvdGhlciBmaWx0ZXJhYmxlKSB0byBwYXJ0aXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXksIGNvbnRhaW5pbmcgZmlyc3QgdGhlIHN1YnNldCBvZiBlbGVtZW50cyB0aGF0IHNhdGlzZnkgdGhlXG4gKiAgICAgICAgIHByZWRpY2F0ZSwgYW5kIHNlY29uZCB0aGUgc3Vic2V0IG9mIGVsZW1lbnRzIHRoYXQgZG8gbm90IHNhdGlzZnkuXG4gKiBAc2VlIFIuZmlsdGVyLCBSLnJlamVjdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGFydGl0aW9uKFIuY29udGFpbnMoJ3MnKSwgWydzc3MnLCAndHR0JywgJ2ZvbycsICdiYXJzJ10pO1xuICogICAgICAvLyA9PiBbIFsgJ3NzcycsICdiYXJzJyBdLCAgWyAndHR0JywgJ2ZvbycgXSBdXG4gKlxuICogICAgICBSLnBhcnRpdGlvbihSLmNvbnRhaW5zKCdzJyksIHsgYTogJ3NzcycsIGI6ICd0dHQnLCBmb286ICdiYXJzJyB9KTtcbiAqICAgICAgLy8gPT4gWyB7IGE6ICdzc3MnLCBmb286ICdiYXJzJyB9LCB7IGI6ICd0dHQnIH0gIF1cbiAqL1xudmFyIHBhcnRpdGlvbiA9IC8qI19fUFVSRV9fKi9qdXh0KFtmaWx0ZXIsIHJlamVjdF0pO1xuZXhwb3J0IGRlZmF1bHQgcGFydGl0aW9uOyIsImltcG9ydCBfY3VycnkzIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Myc7XG5pbXBvcnQgZGVmYXVsdFRvIGZyb20gJy4vZGVmYXVsdFRvJztcbmltcG9ydCBwYXRoIGZyb20gJy4vcGF0aCc7XG5cbi8qKlxuICogSWYgdGhlIGdpdmVuLCBub24tbnVsbCBvYmplY3QgaGFzIGEgdmFsdWUgYXQgdGhlIGdpdmVuIHBhdGgsIHJldHVybnMgdGhlXG4gKiB2YWx1ZSBhdCB0aGF0IHBhdGguIE90aGVyd2lzZSByZXR1cm5zIHRoZSBwcm92aWRlZCBkZWZhdWx0IHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE4LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBJZHggPSBTdHJpbmcgfCBJbnRcbiAqIEBzaWcgYSAtPiBbSWR4XSAtPiB7YX0gLT4gYVxuICogQHBhcmFtIHsqfSBkIFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHBhcmFtIHtBcnJheX0gcCBUaGUgcGF0aCB0byB1c2UuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcmV0cmlldmUgdGhlIG5lc3RlZCBwcm9wZXJ0eSBmcm9tLlxuICogQHJldHVybiB7Kn0gVGhlIGRhdGEgYXQgYHBhdGhgIG9mIHRoZSBzdXBwbGllZCBvYmplY3Qgb3IgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYXRoT3IoJ04vQScsIFsnYScsICdiJ10sIHthOiB7YjogMn19KTsgLy89PiAyXG4gKiAgICAgIFIucGF0aE9yKCdOL0EnLCBbJ2EnLCAnYiddLCB7Yzoge2I6IDJ9fSk7IC8vPT4gXCJOL0FcIlxuICovXG52YXIgcGF0aE9yID0gLyojX19QVVJFX18qL19jdXJyeTMoZnVuY3Rpb24gcGF0aE9yKGQsIHAsIG9iaikge1xuICByZXR1cm4gZGVmYXVsdFRvKGQsIHBhdGgocCwgb2JqKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHBhdGhPcjsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL2ludGVybmFsL19jdXJyeTInO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gYHBpY2tgIGV4Y2VwdCB0aGF0IHRoaXMgb25lIGluY2x1ZGVzIGEgYGtleTogdW5kZWZpbmVkYCBwYWlyIGZvclxuICogcHJvcGVydGllcyB0aGF0IGRvbid0IGV4aXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBba10gLT4ge2s6IHZ9IC0+IHtrOiB2fVxuICogQHBhcmFtIHtBcnJheX0gbmFtZXMgYW4gYXJyYXkgb2YgU3RyaW5nIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkgb250byBhIG5ldyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggb25seSBwcm9wZXJ0aWVzIGZyb20gYG5hbWVzYCBvbiBpdC5cbiAqIEBzZWUgUi5waWNrXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5waWNrQWxsKFsnYScsICdkJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2E6IDEsIGQ6IDR9XG4gKiAgICAgIFIucGlja0FsbChbJ2EnLCAnZScsICdmJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2E6IDEsIGU6IHVuZGVmaW5lZCwgZjogdW5kZWZpbmVkfVxuICovXG52YXIgcGlja0FsbCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIHBpY2tBbGwobmFtZXMsIG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgdmFyIG5hbWUgPSBuYW1lc1tpZHhdO1xuICAgIHJlc3VsdFtuYW1lXSA9IG9ialtuYW1lXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5leHBvcnQgZGVmYXVsdCBwaWNrQWxsOyIsImltcG9ydCBtdWx0aXBseSBmcm9tICcuL211bHRpcGx5JztcbmltcG9ydCByZWR1Y2UgZnJvbSAnLi9yZWR1Y2UnO1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdG9nZXRoZXIgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGxpc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHJldHVybiB7TnVtYmVyfSBUaGUgcHJvZHVjdCBvZiBhbGwgdGhlIG51bWJlcnMgaW4gdGhlIGxpc3QuXG4gKiBAc2VlIFIucmVkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9kdWN0KFsyLDQsNiw4LDEwMCwxXSk7IC8vPT4gMzg0MDBcbiAqL1xudmFyIHByb2R1Y3QgPSAvKiNfX1BVUkVfXyovcmVkdWNlKG11bHRpcGx5LCAxKTtcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3Q7IiwiaW1wb3J0IF9jdXJyeTIgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkyJztcbmltcG9ydCBjdXJyeU4gZnJvbSAnLi9jdXJyeU4nO1xuXG4vKipcbiAqIEFjY2VwdHMgYSBmdW5jdGlvbiBgZm5gIGFuZCBhIGxpc3Qgb2YgdHJhbnNmb3JtZXIgZnVuY3Rpb25zIGFuZCByZXR1cm5zIGFcbiAqIG5ldyBjdXJyaWVkIGZ1bmN0aW9uLiBXaGVuIHRoZSBuZXcgZnVuY3Rpb24gaXMgaW52b2tlZCwgaXQgY2FsbHMgdGhlXG4gKiBmdW5jdGlvbiBgZm5gIHdpdGggcGFyYW1ldGVycyBjb25zaXN0aW5nIG9mIHRoZSByZXN1bHQgb2YgY2FsbGluZyBlYWNoXG4gKiBzdXBwbGllZCBoYW5kbGVyIG9uIHN1Y2Nlc3NpdmUgYXJndW1lbnRzIHRvIHRoZSBuZXcgZnVuY3Rpb24uXG4gKlxuICogSWYgbW9yZSBhcmd1bWVudHMgYXJlIHBhc3NlZCB0byB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gdGhhbiB0cmFuc2Zvcm1lclxuICogZnVuY3Rpb25zLCB0aG9zZSBhcmd1bWVudHMgYXJlIHBhc3NlZCBkaXJlY3RseSB0byBgZm5gIGFzIGFkZGl0aW9uYWxcbiAqIHBhcmFtZXRlcnMuIElmIHlvdSBleHBlY3QgYWRkaXRpb25hbCBhcmd1bWVudHMgdGhhdCBkb24ndCBuZWVkIHRvIGJlXG4gKiB0cmFuc2Zvcm1lZCwgYWx0aG91Z2ggeW91IGNhbiBpZ25vcmUgdGhlbSwgaXQncyBiZXN0IHRvIHBhc3MgYW4gaWRlbnRpdHlcbiAqIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIG5ldyBmdW5jdGlvbiByZXBvcnRzIHRoZSBjb3JyZWN0IGFyaXR5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoeDEsIHgyLCAuLi4pIC0+IHopIC0+IFsoYSAtPiB4MSksIChiIC0+IHgyKSwgLi4uXSAtPiAoYSAtPiBiIC0+IC4uLiAtPiB6KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFuc2Zvcm1lcnMgQSBsaXN0IG9mIHRyYW5zZm9ybWVyIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmNvbnZlcmdlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51c2VXaXRoKE1hdGgucG93LCBbUi5pZGVudGl0eSwgUi5pZGVudGl0eV0pKDMsIDQpOyAvLz0+IDgxXG4gKiAgICAgIFIudXNlV2l0aChNYXRoLnBvdywgW1IuaWRlbnRpdHksIFIuaWRlbnRpdHldKSgzKSg0KTsgLy89PiA4MVxuICogICAgICBSLnVzZVdpdGgoTWF0aC5wb3csIFtSLmRlYywgUi5pbmNdKSgzLCA0KTsgLy89PiAzMlxuICogICAgICBSLnVzZVdpdGgoTWF0aC5wb3csIFtSLmRlYywgUi5pbmNdKSgzKSg0KTsgLy89PiAzMlxuICogQHN5bWIgUi51c2VXaXRoKGYsIFtnLCBoXSkoYSwgYikgPSBmKGcoYSksIGgoYikpXG4gKi9cbnZhciB1c2VXaXRoID0gLyojX19QVVJFX18qL19jdXJyeTIoZnVuY3Rpb24gdXNlV2l0aChmbiwgdHJhbnNmb3JtZXJzKSB7XG4gIHJldHVybiBjdXJyeU4odHJhbnNmb3JtZXJzLmxlbmd0aCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgd2hpbGUgKGlkeCA8IHRyYW5zZm9ybWVycy5sZW5ndGgpIHtcbiAgICAgIGFyZ3MucHVzaCh0cmFuc2Zvcm1lcnNbaWR4XS5jYWxsKHRoaXMsIGFyZ3VtZW50c1tpZHhdKSk7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgdHJhbnNmb3JtZXJzLmxlbmd0aCkpKTtcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHVzZVdpdGg7IiwiaW1wb3J0IF9tYXAgZnJvbSAnLi9pbnRlcm5hbC9fbWFwJztcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL2lkZW50aXR5JztcbmltcG9ydCBwaWNrQWxsIGZyb20gJy4vcGlja0FsbCc7XG5pbXBvcnQgdXNlV2l0aCBmcm9tICcuL3VzZVdpdGgnO1xuXG4vKipcbiAqIFJlYXNvbmFibGUgYW5hbG9nIHRvIFNRTCBgc2VsZWN0YCBzdGF0ZW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgW2tdIC0+IFt7azogdn1dIC0+IFt7azogdn1dXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gcHJvamVjdFxuICogQHBhcmFtIHtBcnJheX0gb2JqcyBUaGUgb2JqZWN0cyB0byBxdWVyeVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBqdXN0IHRoZSBgcHJvcHNgIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFiYnkgPSB7bmFtZTogJ0FiYnknLCBhZ2U6IDcsIGhhaXI6ICdibG9uZCcsIGdyYWRlOiAyfTtcbiAqICAgICAgdmFyIGZyZWQgPSB7bmFtZTogJ0ZyZWQnLCBhZ2U6IDEyLCBoYWlyOiAnYnJvd24nLCBncmFkZTogN307XG4gKiAgICAgIHZhciBraWRzID0gW2FiYnksIGZyZWRdO1xuICogICAgICBSLnByb2plY3QoWyduYW1lJywgJ2dyYWRlJ10sIGtpZHMpOyAvLz0+IFt7bmFtZTogJ0FiYnknLCBncmFkZTogMn0sIHtuYW1lOiAnRnJlZCcsIGdyYWRlOiA3fV1cbiAqL1xudmFyIHByb2plY3QgPSAvKiNfX1BVUkVfXyovdXNlV2l0aChfbWFwLCBbcGlja0FsbCwgaWRlbnRpdHldKTsgLy8gcGFzc2luZyBgaWRlbnRpdHlgIGdpdmVzIGNvcnJlY3QgYXJpdHlcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiaW1wb3J0IF9jdXJyeTMgZnJvbSAnLi9pbnRlcm5hbC9fY3VycnkzJztcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBwcm9wZXJ0eSBzYXRpc2ZpZXMgdGhlIGdpdmVuXG4gKiBwcmVkaWNhdGU7IGBmYWxzZWAgb3RoZXJ3aXNlLiBZb3UgY2FuIHRlc3QgbXVsdGlwbGUgcHJvcGVydGllcyB3aXRoXG4gKiBbYFIud2hlcmVgXSgjd2hlcmUpLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBTdHJpbmcgLT4ge1N0cmluZzogYX0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLndoZXJlLCBSLnByb3BFcSwgUi5wcm9wSXNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3BTYXRpc2ZpZXMoeCA9PiB4ID4gMCwgJ3gnLCB7eDogMSwgeTogMn0pOyAvLz0+IHRydWVcbiAqL1xudmFyIHByb3BTYXRpc2ZpZXMgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MyhmdW5jdGlvbiBwcm9wU2F0aXNmaWVzKHByZWQsIG5hbWUsIG9iaikge1xuICByZXR1cm4gcHJlZChvYmpbbmFtZV0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBwcm9wU2F0aXNmaWVzOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5cbi8qKlxuICogQWN0cyBhcyBtdWx0aXBsZSBgcHJvcGA6IGFycmF5IG9mIGtleXMgaW4sIGFycmF5IG9mIHZhbHVlcyBvdXQuIFByZXNlcnZlc1xuICogb3JkZXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFtrXSAtPiB7azogdn0gLT4gW3ZdXG4gKiBAcGFyYW0ge0FycmF5fSBwcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gZmV0Y2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcyBvciBwYXJ0aWFsbHkgYXBwbGllZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3BzKFsneCcsICd5J10sIHt4OiAxLCB5OiAyfSk7IC8vPT4gWzEsIDJdXG4gKiAgICAgIFIucHJvcHMoWydjJywgJ2EnLCAnYiddLCB7YjogMiwgYTogMX0pOyAvLz0+IFt1bmRlZmluZWQsIDEsIDJdXG4gKlxuICogICAgICB2YXIgZnVsbE5hbWUgPSBSLmNvbXBvc2UoUi5qb2luKCcgJyksIFIucHJvcHMoWydmaXJzdCcsICdsYXN0J10pKTtcbiAqICAgICAgZnVsbE5hbWUoe2xhc3Q6ICdCdWxsZXQtVG9vdGgnLCBhZ2U6IDMzLCBmaXJzdDogJ1RvbnknfSk7IC8vPT4gJ1RvbnkgQnVsbGV0LVRvb3RoJ1xuICovXG52YXIgcHJvcHMgPSAvKiNfX1BVUkVfXyovX2N1cnJ5MihmdW5jdGlvbiBwcm9wcyhwcywgb2JqKSB7XG4gIHZhciBsZW4gPSBwcy5sZW5ndGg7XG4gIHZhciBvdXQgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIG91dFtpZHhdID0gb2JqW3BzW2lkeF1dO1xuICAgIGlkeCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcHJvcHM7IiwiaW1wb3J0IGludm9rZXIgZnJvbSAnLi9pbnZva2VyJztcblxuLyoqXG4gKiBTcGxpdHMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzIGJhc2VkIG9uIHRoZSBnaXZlblxuICogc2VwYXJhdG9yLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyAoU3RyaW5nIHwgUmVnRXhwKSAtPiBTdHJpbmcgLT4gW1N0cmluZ11cbiAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gc2VwIFRoZSBwYXR0ZXJuLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGludG8gYW4gYXJyYXkuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGFycmF5IG9mIHN0cmluZ3MgZnJvbSBgc3RyYCBzZXBhcmF0ZWQgYnkgYHN0cmAuXG4gKiBAc2VlIFIuam9pblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBwYXRoQ29tcG9uZW50cyA9IFIuc3BsaXQoJy8nKTtcbiAqICAgICAgUi50YWlsKHBhdGhDb21wb25lbnRzKCcvdXNyL2xvY2FsL2Jpbi9ub2RlJykpOyAvLz0+IFsndXNyJywgJ2xvY2FsJywgJ2JpbicsICdub2RlJ11cbiAqXG4gKiAgICAgIFIuc3BsaXQoJy4nLCAnYS5iLmMueHl6LmQnKTsgLy89PiBbJ2EnLCAnYicsICdjJywgJ3h5eicsICdkJ11cbiAqL1xudmFyIHNwbGl0ID0gLyojX19QVVJFX18qL2ludm9rZXIoMSwgJ3NwbGl0Jyk7XG5leHBvcnQgZGVmYXVsdCBzcGxpdDsiLCJpbXBvcnQgX2N1cnJ5MiBmcm9tICcuL19jdXJyeTInO1xuaW1wb3J0IF94ZkJhc2UgZnJvbSAnLi9feGZCYXNlJztcblxudmFyIFhUYXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBYVGFwKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWFRhcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhUYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWFRhcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbiAocmVzdWx0LCBpbnB1dCkge1xuICAgIHRoaXMuZihpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gIH07XG5cbiAgcmV0dXJuIFhUYXA7XG59KCk7XG5cbnZhciBfeHRhcCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIF94dGFwKGYsIHhmKSB7XG4gIHJldHVybiBuZXcgWFRhcChmLCB4Zik7XG59KTtcbmV4cG9ydCBkZWZhdWx0IF94dGFwOyIsImltcG9ydCBfY3VycnkyIGZyb20gJy4vaW50ZXJuYWwvX2N1cnJ5Mic7XG5pbXBvcnQgX2Rpc3BhdGNoYWJsZSBmcm9tICcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnO1xuaW1wb3J0IF94dGFwIGZyb20gJy4vaW50ZXJuYWwvX3h0YXAnO1xuXG4vKipcbiAqIFJ1bnMgdGhlIGdpdmVuIGZ1bmN0aW9uIHdpdGggdGhlIHN1cHBsaWVkIG9iamVjdCwgdGhlbiByZXR1cm5zIHRoZSBvYmplY3QuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBhcyBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIChhIC0+ICopIC0+IGEgLT4gYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCBgeGAuIFRoZSByZXR1cm4gdmFsdWUgb2YgYGZuYCB3aWxsIGJlIHRocm93biBhd2F5LlxuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJuIHsqfSBgeGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHNheVggPSB4ID0+IGNvbnNvbGUubG9nKCd4IGlzICcgKyB4KTtcbiAqICAgICAgUi50YXAoc2F5WCwgMTAwKTsgLy89PiAxMDBcbiAqICAgICAgLy8gbG9ncyAneCBpcyAxMDAnXG4gKiBAc3ltYiBSLnRhcChmLCBhKSA9IGFcbiAqL1xudmFyIHRhcCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKCAvKiNfX1BVUkVfXyovX2Rpc3BhdGNoYWJsZShbXSwgX3h0YXAsIGZ1bmN0aW9uIHRhcChmbiwgeCkge1xuICBmbih4KTtcbiAgcmV0dXJuIHg7XG59KSk7XG5leHBvcnQgZGVmYXVsdCB0YXA7IiwiaW1wb3J0IGludm9rZXIgZnJvbSAnLi9pbnZva2VyJztcblxuLyoqXG4gKiBUaGUgbG93ZXIgY2FzZSB2ZXJzaW9uIG9mIGEgc3RyaW5nLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gbG93ZXIgY2FzZS5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGxvd2VyIGNhc2UgdmVyc2lvbiBvZiBgc3RyYC5cbiAqIEBzZWUgUi50b1VwcGVyXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50b0xvd2VyKCdYWVonKTsgLy89PiAneHl6J1xuICovXG52YXIgdG9Mb3dlciA9IC8qI19fUFVSRV9fKi9pbnZva2VyKDAsICd0b0xvd2VyQ2FzZScpO1xuZXhwb3J0IGRlZmF1bHQgdG9Mb3dlcjsiLCJpbXBvcnQgaW52b2tlciBmcm9tICcuL2ludm9rZXInO1xuXG4vKipcbiAqIFRoZSB1cHBlciBjYXNlIHZlcnNpb24gb2YgYSBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byB1cHBlciBjYXNlLlxuICogQHJldHVybiB7U3RyaW5nfSBUaGUgdXBwZXIgY2FzZSB2ZXJzaW9uIG9mIGBzdHJgLlxuICogQHNlZSBSLnRvTG93ZXJcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRvVXBwZXIoJ2FiYycpOyAvLz0+ICdBQkMnXG4gKi9cbnZhciB0b1VwcGVyID0gLyojX19QVVJFX18qL2ludm9rZXIoMCwgJ3RvVXBwZXJDYXNlJyk7XG5leHBvcnQgZGVmYXVsdCB0b1VwcGVyOyIsImltcG9ydCBfcmVkdWNlIGZyb20gJy4vaW50ZXJuYWwvX3JlZHVjZSc7XG5pbXBvcnQgX3h3cmFwIGZyb20gJy4vaW50ZXJuYWwvX3h3cmFwJztcbmltcG9ydCBjdXJyeU4gZnJvbSAnLi9jdXJyeU4nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGEgdHJhbnNkdWNlciB1c2luZyBzdXBwbGllZCBpdGVyYXRvciBmdW5jdGlvbi4gUmV0dXJucyBhIHNpbmdsZVxuICogaXRlbSBieSBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgbGlzdCwgc3VjY2Vzc2l2ZWx5IGNhbGxpbmcgdGhlIHRyYW5zZm9ybWVkXG4gKiBpdGVyYXRvciBmdW5jdGlvbiBhbmQgcGFzc2luZyBpdCBhbiBhY2N1bXVsYXRvciB2YWx1ZSBhbmQgdGhlIGN1cnJlbnQgdmFsdWVcbiAqIGZyb20gdGhlIGFycmF5LCBhbmQgdGhlbiBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIG5leHQgY2FsbC5cbiAqXG4gKiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gcmVjZWl2ZXMgdHdvIHZhbHVlczogKihhY2MsIHZhbHVlKSouIEl0IHdpbGwgYmVcbiAqIHdyYXBwZWQgYXMgYSB0cmFuc2Zvcm1lciB0byBpbml0aWFsaXplIHRoZSB0cmFuc2R1Y2VyLiBBIHRyYW5zZm9ybWVyIGNhbiBiZVxuICogcGFzc2VkIGRpcmVjdGx5IGluIHBsYWNlIG9mIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uLiBJbiBib3RoIGNhc2VzLCBpdGVyYXRpb25cbiAqIG1heSBiZSBzdG9wcGVkIGVhcmx5IHdpdGggdGhlIFtgUi5yZWR1Y2VkYF0oI3JlZHVjZWQpIGZ1bmN0aW9uLlxuICpcbiAqIEEgdHJhbnNkdWNlciBpcyBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHRyYW5zZm9ybWVyIGFuZCByZXR1cm5zIGFcbiAqIHRyYW5zZm9ybWVyIGFuZCBjYW4gYmUgY29tcG9zZWQgZGlyZWN0bHkuXG4gKlxuICogQSB0cmFuc2Zvcm1lciBpcyBhbiBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhIDItYXJpdHkgcmVkdWNpbmcgaXRlcmF0b3JcbiAqIGZ1bmN0aW9uLCBzdGVwLCAwLWFyaXR5IGluaXRpYWwgdmFsdWUgZnVuY3Rpb24sIGluaXQsIGFuZCAxLWFyaXR5IHJlc3VsdFxuICogZXh0cmFjdGlvbiBmdW5jdGlvbiwgcmVzdWx0LiBUaGUgc3RlcCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBpdGVyYXRvclxuICogZnVuY3Rpb24gaW4gcmVkdWNlLiBUaGUgcmVzdWx0IGZ1bmN0aW9uIGlzIHVzZWQgdG8gY29udmVydCB0aGUgZmluYWxcbiAqIGFjY3VtdWxhdG9yIGludG8gdGhlIHJldHVybiB0eXBlIGFuZCBpbiBtb3N0IGNhc2VzIGlzXG4gKiBbYFIuaWRlbnRpdHlgXSgjaWRlbnRpdHkpLiBUaGUgaW5pdCBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGFuXG4gKiBpbml0aWFsIGFjY3VtdWxhdG9yLCBidXQgaXMgaWdub3JlZCBieSB0cmFuc2R1Y2UuXG4gKlxuICogVGhlIGl0ZXJhdGlvbiBpcyBwZXJmb3JtZWQgd2l0aCBbYFIucmVkdWNlYF0oI3JlZHVjZSkgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSB0cmFuc2R1Y2VyLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChjIC0+IGMpIC0+ICgoYSwgYikgLT4gYSkgLT4gYSAtPiBbYl0gLT4gYVxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24uIFJlY2VpdmVzIGEgdHJhbnNmb3JtZXIgYW5kIHJldHVybnMgYSB0cmFuc2Zvcm1lci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGFjY3VtdWxhdG9yIGFuZCB0aGVcbiAqICAgICAgICBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuIFdyYXBwZWQgYXMgdHJhbnNmb3JtZXIsIGlmIG5lY2Vzc2FyeSwgYW5kIHVzZWQgdG9cbiAqICAgICAgICBpbml0aWFsaXplIHRoZSB0cmFuc2R1Y2VyXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgaW5pdGlhbCBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7Kn0gVGhlIGZpbmFsLCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBzZWUgUi5yZWR1Y2UsIFIucmVkdWNlZCwgUi5pbnRvXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bWJlcnMgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgIHZhciB0cmFuc2R1Y2VyID0gUi5jb21wb3NlKFIubWFwKFIuYWRkKDEpKSwgUi50YWtlKDIpKTtcbiAqICAgICAgUi50cmFuc2R1Y2UodHJhbnNkdWNlciwgUi5mbGlwKFIuYXBwZW5kKSwgW10sIG51bWJlcnMpOyAvLz0+IFsyLCAzXVxuICpcbiAqICAgICAgdmFyIGlzT2RkID0gKHgpID0+IHggJSAyID09PSAxO1xuICogICAgICB2YXIgZmlyc3RPZGRUcmFuc2R1Y2VyID0gUi5jb21wb3NlKFIuZmlsdGVyKGlzT2RkKSwgUi50YWtlKDEpKTtcbiAqICAgICAgUi50cmFuc2R1Y2UoZmlyc3RPZGRUcmFuc2R1Y2VyLCBSLmZsaXAoUi5hcHBlbmQpLCBbXSwgUi5yYW5nZSgwLCAxMDApKTsgLy89PiBbMV1cbiAqL1xudmFyIHRyYW5zZHVjZSA9IC8qI19fUFVSRV9fKi9jdXJyeU4oNCwgZnVuY3Rpb24gdHJhbnNkdWNlKHhmLCBmbiwgYWNjLCBsaXN0KSB7XG4gIHJldHVybiBfcmVkdWNlKHhmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IF94d3JhcChmbikgOiBmbiksIGFjYywgbGlzdCk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHRyYW5zZHVjZTsiLCJpbXBvcnQgX2N1cnJ5MSBmcm9tICcuL2ludGVybmFsL19jdXJyeTEnO1xuXG52YXIgd3MgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICsgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4JyArICdcXHUyMDI5XFx1RkVGRic7XG52YXIgemVyb1dpZHRoID0gJ1xcdTIwMGInO1xudmFyIGhhc1Byb3RvVHJpbSA9IHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnRyaW0gPT09ICdmdW5jdGlvbic7XG4vKipcbiAqIFJlbW92ZXMgKHN0cmlwcykgd2hpdGVzcGFjZSBmcm9tIGJvdGggZW5kcyBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjYuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm4ge1N0cmluZ30gVHJpbW1lZCB2ZXJzaW9uIG9mIGBzdHJgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudHJpbSgnICAgeHl6ICAnKTsgLy89PiAneHl6J1xuICogICAgICBSLm1hcChSLnRyaW0sIFIuc3BsaXQoJywnLCAneCwgeSwgeicpKTsgLy89PiBbJ3gnLCAneScsICd6J11cbiAqL1xudmFyIF90cmltID0gIWhhc1Byb3RvVHJpbSB8fCAvKiNfX1BVUkVfXyovd3MudHJpbSgpIHx8ICEgLyojX19QVVJFX18qL3plcm9XaWR0aC50cmltKCkgPyBmdW5jdGlvbiB0cmltKHN0cikge1xuICB2YXIgYmVnaW5SeCA9IG5ldyBSZWdFeHAoJ15bJyArIHdzICsgJ11bJyArIHdzICsgJ10qJyk7XG4gIHZhciBlbmRSeCA9IG5ldyBSZWdFeHAoJ1snICsgd3MgKyAnXVsnICsgd3MgKyAnXSokJyk7XG4gIHJldHVybiBzdHIucmVwbGFjZShiZWdpblJ4LCAnJykucmVwbGFjZShlbmRSeCwgJycpO1xufSA6IGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIudHJpbSgpO1xufTtcbnZhciB0cmltID0gLyojX19QVVJFX18qL19jdXJyeTEoX3RyaW0pO1xuZXhwb3J0IGRlZmF1bHQgdHJpbTsiLCJpbXBvcnQgX2lkZW50aXR5IGZyb20gJy4vaW50ZXJuYWwvX2lkZW50aXR5JztcbmltcG9ydCBjaGFpbiBmcm9tICcuL2NoYWluJztcblxuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGBSLmNoYWluKFIuaWRlbnRpdHkpYCwgd2hpY2ggcmVtb3ZlcyBvbmUgbGV2ZWwgb2YgbmVzdGluZyBmcm9tXG4gKiBhbnkgW0NoYWluXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2NoYWluKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIENoYWluIGMgPT4gYyAoYyBhKSAtPiBjIGFcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5mbGF0dGVuLCBSLmNoYWluXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51bm5lc3QoWzEsIFsyXSwgW1szXV1dKTsgLy89PiBbMSwgMiwgWzNdXVxuICogICAgICBSLnVubmVzdChbWzEsIDJdLCBbMywgNF0sIFs1LCA2XV0pOyAvLz0+IFsxLCAyLCAzLCA0LCA1LCA2XVxuICovXG52YXIgdW5uZXN0ID0gLyojX19QVVJFX18qL2NoYWluKF9pZGVudGl0eSk7XG5leHBvcnQgZGVmYXVsdCB1bm5lc3Q7IiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5cbmNvbnN0IFRFWFRfRE9DVU1FTlQgPSAnVEVYVF9ET0NVTUVOVCc7XG5cbmNvbnN0IGlzTGlzdGVuZXIgPSBuYW1lID0+IG5hbWUuc3RhcnRzV2l0aCgnb24nKTtcbmNvbnN0IGlzQXR0cmlidXRlID0gbmFtZSA9PiAhaXNMaXN0ZW5lcihuYW1lKSAmJiBuYW1lICE9ICdjaGlsZHJlbic7XG5cbmNvbnN0IGFkZEV2ZW50SGVscGVyID0gUi5jdXJyeSgocGFyZW50LCBwcm9wcywgbmFtZSkgPT5cbiAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgUi5jb21wb3NlKFxuICAgICAgUi5zbGljZSgwLCAyKSxcbiAgICAgIFIudG9Mb3dlcixcbiAgICApKG5hbWUpLFxuICAgIFIucHJvcHMobmFtZSwgcHJvcHMpLFxuICApLFxuKTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lclRvRG9tID0gUi5jdXJyeSgoZWxlbWVudCwgcGFyZW50KSA9PlxuICBSLmNvbXBvc2UoXG4gICAgUi5mb3JFYWNoKGFkZEV2ZW50SGVscGVyKHBhcmVudCwgUi5wcm9wcygncHJvcHMnLCBlbGVtZW50KSkpLFxuICAgIFIuZmlsdGVyKGlzTGlzdGVuZXIpLFxuICAgIFIua2V5cyxcbiAgICBSLnByb3AoJ3Byb3BzJyksXG4gICkoZWxlbWVudCksXG4pO1xuXG5jb25zdCBhZGRBdHRyaWJ1dGVUb0RvbSA9IFIuY3VycnkoKGVsZW1lbnQsIHBhcmVudCkgPT5cbiAgUi5jb21wb3NlKFxuICAgIFIuZm9yRWFjaCh2YWwgPT4gKHBhcmVudFt2YWxdID0gUi5wYXRoKFsncHJvcHMnLCB2YWxdLCBlbGVtZW50KSkpLFxuICAgIFIuZmlsdGVyKGlzQXR0cmlidXRlKSxcbiAgICBSLmtleXMsXG4gICAgUi5wcm9wKCdwcm9wcycpLFxuICApKGVsZW1lbnQpLFxuKTtcblxuY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSBSLmN1cnJ5KChlbGVtZW50LCBkb20pID0+XG4gIFIuY29tcG9zZShcbiAgICBSLmZvckVhY2goUi5mbGlwKHJlbmRlcikoZG9tKSksXG4gICAgUi5wYXRoT3IoWydwcm9wcycsICdjaGlsZHJlbiddKSxcbiAgKShlbGVtZW50KSxcbik7XG5cbmNvbnN0IHJlbmRlciA9IChlbGVtZW50LCBwYXJlbnREb20pID0+XG4gIFIuY29tcG9zZShcbiAgICBSLmJpbmQocGFyZW50RG9tLmFwcGVuZENoaWxkLCBwYXJlbnREb20pLFxuICAgIFIudGFwKHJlbmRlckNoaWxkcmVuKGVsZW1lbnQpKSxcbiAgICBSLnRhcChhZGRBdHRyaWJ1dGVUb0RvbShlbGVtZW50KSksXG4gICAgUi50YXAoYWRkRXZlbnRMaXN0ZW5lclRvRG9tKGVsZW1lbnQpKSxcbiAgICBSLmlmRWxzZShcbiAgICAgIFIucHJvcFNhdGlzZmllcyhSLmVxdWFscyhURVhUX0RPQ1VNRU5UKSwgJ3R5cGUnKSxcbiAgICAgICgpID0+IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSxcbiAgICAgIFIuY29tcG9zZShcbiAgICAgICAgUi5iaW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQsIGRvY3VtZW50KSxcbiAgICAgICAgUi5wcm9wKCd0eXBlJyksXG4gICAgICApLFxuICAgICksXG4gICkoZWxlbWVudCk7XG5cbmNvbnN0IHN0b3JpZXMgPSBbXG4gIHsgbmFtZTogJ0RpZGFjdCBpbnRyb2R1Y3Rpb24nLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJwWDdITm4nIH0sXG4gIHsgbmFtZTogJ1JlbmRlcmluZyBET00gZWxlbWVudHMgJywgdXJsOiAnaHR0cDovL2JpdC5seS8ycUNPZWpIJyB9LFxuICB7IG5hbWU6ICdFbGVtZW50IGNyZWF0aW9uIGFuZCBKU1gnLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJxR2J3OFMnIH0sXG4gIHsgbmFtZTogJ0luc3RhbmNlcyBhbmQgcmVjb25jaWxpYXRpb24nLCB1cmw6ICdodHRwOi8vYml0Lmx5LzJxNEE3NDYnIH0sXG4gIHsgbmFtZTogJ0NvbXBvbmVudHMgYW5kIHN0YXRlJywgdXJsOiAnaHR0cDovL2JpdC5seS8yckUxNm5oJyB9LFxuXTtcblxuY29uc3Qgc3RvcnlFbGVtZW50ID0gKHsgbmFtZSwgdXJsIH0pID0+IHtcbiAgY29uc3QgbGlrZXMgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgcHJvcHM6IHtcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgdHlwZTogVEVYVF9ET0NVTUVOVCwgcHJvcHM6IHsgbm9kZVZhbHVlOiBsaWtlcyB9IH0sXG4gICAgICAgIHsgdHlwZTogVEVYVF9ET0NVTUVOVCwgcHJvcHM6IHsgbm9kZVZhbHVlOiAn4p2k77iPJyB9IH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG4gIGNvbnN0IGxpbmtFbGVtZW50ID0ge1xuICAgIHR5cGU6ICdhJyxcbiAgICBwcm9wczoge1xuICAgICAgaHJlZjogdXJsLFxuICAgICAgY2hpbGRyZW46IFt7IHR5cGU6IFRFWFRfRE9DVU1FTlQsIHByb3BzOiB7IG5vZGVWYWx1ZTogbmFtZSB9IH1dLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnbGknLFxuICAgIHByb3BzOiB7XG4gICAgICBjaGlsZHJlbjogW2J1dHRvbkVsZW1lbnQsIGxpbmtFbGVtZW50XSxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgYXBwRWxlbWVudCA9IHtcbiAgdHlwZTogJ2RpdicsXG4gIHByb3BzOiB7XG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3VsJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBjaGlsZHJlbjogc3Rvcmllcy5tYXAoc3RvcnlFbGVtZW50KSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbnJlbmRlcihhcHBFbGVtZW50LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJuYW1lcyI6WyJjdXJyeSIsImtleXMiLCJ0b1N0cmluZyIsIlIuY3VycnkiLCJwcm9wcyIsIlIuY29tcG9zZSIsIlIuc2xpY2UiLCJSLnRvTG93ZXIiLCJSLnByb3BzIiwiUi5mb3JFYWNoIiwiUi5maWx0ZXIiLCJSLmtleXMiLCJSLnByb3AiLCJSLnBhdGgiLCJSLmZsaXAiLCJSLnBhdGhPciIsIlIuYmluZCIsIlIudGFwIiwiUi5pZkVsc2UiLCJSLnByb3BTYXRpc2ZpZXMiLCJSLmVxdWFscyJdLCJtYXBwaW5ncyI6Ijs7O0FBQWUsU0FBUyxjQUFjLENBQUMsQ0FBQyxFQUFFO09BQ25DLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLEtBQUssSUFBSSxDQUFDOzs7QUNDM0Y7Ozs7Ozs7O0FBUUEsQUFBZSxTQUFTLE9BQU8sQ0FBQyxFQUFFLEVBQUU7RUFDbEMsT0FBTyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDcEIsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDL0MsT0FBTyxFQUFFLENBQUM7S0FDWCxNQUFNO01BQ0wsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNsQztHQUNGLENBQUM7OztBQ2ZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLElBQUksTUFBTSxnQkFBZ0IsT0FBTyxDQUFDLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtFQUNyRCxPQUFPLFlBQVk7SUFDakIsT0FBTyxHQUFHLENBQUM7R0FDWixDQUFDO0NBQ0gsQ0FBQyxDQUFDLEFBQ0g7O0FDeEJBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxJQUFJLENBQUMsZ0JBQWdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUNuQzs7QUNoQkE7Ozs7Ozs7Ozs7Ozs7OztBQWVBLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEFBQ2xDOztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRyxBQUNIOztBQ3ZCQTs7Ozs7Ozs7QUFRQSxBQUFlLFNBQVMsT0FBTyxDQUFDLEVBQUUsRUFBRTtFQUNsQyxPQUFPLFNBQVMsRUFB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T0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztPQUNsQyxDQUFDO0lBQ0osS0FBSyxDQUFDO01BQ0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUMvQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO09BQ2xDLENBQUM7SUFDSixLQUFLLENBQUM7TUFDSixPQUFPLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNuQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO09BQ2xDLENBQUM7SUFDSixLQUFLLENBQUM7TUFDSixPQUFPLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDdkMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztPQUNsQyxDQUFDO0lBQ0osS0FBSyxDQUFDO01BQ0osT0FBTyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUMzQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO09BQ2xDLENBQUM7SUFDSixLQUFLLENBQUM7TUFDSixPQUFPLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUMvQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO09BQ2xDLENBQUM7SUFDSixLQUFLLENBQUM7TUFDSixPQUFPLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFF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
