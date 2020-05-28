// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/comp/textBox.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Elm(el) {
  return document.createElement(el);
}

function FormElm(el) {
  return document.createElement(el);
}

var textBox = /*#__PURE__*/function (_HTMLElement) {
  _inherits(textBox, _HTMLElement);

  var _super = _createSuper(textBox);

  function textBox() {
    _classCallCheck(this, textBox);

    return _super.call(this);
  }

  _createClass(textBox, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var label = this.getAttribute("label");
      var val = this.getAttribute("val");
      var instyle = this.getAttribute("instyle");
      var cover = Elm("div");
      cover.classList.add("textBox");
      cover.setAttribute("style", instyle);
      var labelBox = Elm("label");
      var textCont = Elm("div");
      textCont.classList.add("textContainer");
      var textInput = FormElm("input");
      textInput.setAttribute("type", "number");
      var mes = Elm("div");
      mes.textContent = "px";
      this.mes = mes;
      cover.appendChild(labelBox);
      labelBox.textContent = label;
      cover.appendChild(textCont);
      textCont.appendChild(textInput);
      textInput.value = val;
      textCont.appendChild(mes);
      this.input = textInput;
      var style = ".textBox {\n\t\t\t\t\t\t  margin: 10px;\n\t\t\t\t\t\t  position: relative;\n\t\t\t\t\t\t  border-radius: 5px;\n\t\t\t\t\t\t  width: max-content;\n\t\t\t\t\t\t  background: white;\n\t\t\t\t\t\t  padding: 10px;\n\t\t\t\t\t\t  box-shadow: #271c3e 0 8px 20px -8px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox .textContainer {\n\t\t\t\t\t\t  display: flex;\n\t\t\t\t\t\t  flex-direction: row;\n\t\t\t\t\t\t  justify-content: space-between;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox .textContainer input {\n\t\t\t\t\t\t  border: none;\n\t\t\t\t\t\t  background: none;\n\t\t\t\t\t\t  width: 80%;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox .textContainer div {\n\t\t\t\t\t\t  display: table;\n\t\t\t\t\t\t  padding: 3px;\n\t\t\t\t\t\t  margin: 0;\n\t\t\t\t\t\t  text-transform: uppercase;\n\t\t\t\t\t\t  font-size: 10px;\n\t\t\t\t\t\t  height: 100%;\n\t\t\t\t\t\t  border: solid 1px #271c3e;\n\t\t\t\t\t\t  color: #271c3e;\n\t\t\t\t\t\t  background: none;\n\t\t\t\t\t\t  border-radius: 5px;\n\t\t\t\t\t\t  width: max-content;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox .textContainer div:hover {\n\t\t\t\t\t\t  background-color: #271c3e;\n\t\t\t\t\t\t  color: white;\n\t\t\t\t\t\t  transition: 0.3s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox label {\n\t\t\t\t\t\t  color: white;\n\t\t\t\t\t\t  background: #271c3e;\n\t\t\t\t\t\t  height: max-content;\n\t\t\t\t\t\t  font-size: 10px;\n\t\t\t\t\t\t  text-transform: uppercase;\n\t\t\t\t\t\t  position: absolute;\n\t\t\t\t\t\t  top: -5px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox:hover {\n\t\t\t\t\t\t  background: #e7e6ec;\n\t\t\t\t\t\t  box-shadow: #271c3e 0 8px 10px -8px inset, white 0 -8px 10px 0px inset;\n\t\t\t\t\t\t  transition: 0.3s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t";
      var stylEl = cover.appendChild(Elm("style"));
      stylEl.innerHTML = style;
      var shadow = this.attachShadow({
        mode: "closed"
      });
      shadow.appendChild(cover);
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value + this.mes.textContent;
    }
  }]);

  return textBox;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.textBox = textBox;
},{}],"C:/Users/fmt/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/fmt/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/fmt/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"js/comp/elems/elems.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/fmt/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/comp/elems/elems.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./elems.css");

function Elm(el) {
  return document.createElement(el);
}

function FormElm(el) {
  return document.createElement(el);
} /////div


var div = Elm('div'); ////////textInput

function txt_input() {
  var input = FormElm('input');
  input.setAttribute("type", "text");
  return input;
}

exports.txt_input = txt_input;

function num_input() {
  var input = FormElm('input');
  input.setAttribute("type", "number");
  return input;
} /////////////////cover


function cover() {
  var div = Elm('div');
  div.classList.add("cover");
  return div;
}

exports.cover = cover;

function label(lab) {
  var label = Elm('label');
  label.innerHTML = lab;
  return label;
}

exports.label = label; //////////////container

function container() {
  var div = Elm('div');
  div.classList.add("container");
  return div;
}

exports.container = container; ///////////head

function head(heading) {
  var head = Elm('div');
  head.classList.add('head');
  var head_text = head.appendChild(Elm('div'));
  head_text.innerHTML = heading;
  return head;
}

exports.head = head; ///////////////content

function cont() {
  var div = Elm("div");
  div.classList.add("cont");
  return div;
}

exports.cont = cont;
},{"./elems.css":"js/comp/elems/elems.css"}],"js/comp/container.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elems = __importStar(require("./elems/elems"));

var container = /*#__PURE__*/function (_HTMLElement) {
  _inherits(container, _HTMLElement);

  var _super = _createSuper(container);

  function container() {
    _classCallCheck(this, container);

    return _super.call(this);
  }

  _createClass(container, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var label = this.getAttribute("label");
      var html = this.innerHTML;
      var container = elems.container();
      var head = elems.head(label);
      var cont = elems.cont();
      container.appendChild(head);
      container.appendChild(cont);
      cont.innerHTML = html;
      this.innerHTML = "";
      this.appendChild(container);
    }
  }]);

  return container;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.container = container;
},{"./elems/elems":"js/comp/elems/elems.js"}],"js/comp/slider.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Elm(el) {
  return document.createElement(el);
}

function FormElm(el) {
  return document.createElement(el);
}

function toPer(total, wa) {
  var oneP = total / 100;
  return wa / oneP;
}

function fromPer(total, wa) {
  var oneP = total / 100;
  return wa * oneP;
}

var slider = /*#__PURE__*/function (_HTMLElement) {
  _inherits(slider, _HTMLElement);

  var _super = _createSuper(slider);

  function slider() {
    _classCallCheck(this, slider);

    return _super.call(this);
  }

  _createClass(slider, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      var label = this.getAttribute("label");
      var val = this.getAttribute("val");
      var min = this.getAttribute("min");
      var max = this.getAttribute("max");
      var instyle = this.getAttribute("instyle"); //this.value = val;

      var cover = Elm("div");
      cover.classList.add("textBox");
      cover.setAttribute("style", instyle);
      var labelBox = Elm("label");
      var rangeContainer = Elm("div");
      rangeContainer.classList.add("rangeContainer");
      var range = Elm("div");
      range.classList.add("range");
      var trig = Elm("div");
      trig.classList.add("trigger");
      this.trig = trig;
      var path = Elm("div");
      path.classList.add("edPath");
      this.path = path;
      cover.appendChild(labelBox);
      labelBox.textContent = label;
      cover.appendChild(rangeContainer);
      rangeContainer.appendChild(range);
      range.appendChild(trig);
      range.appendChild(path); //initialValueSetting

      var InValue = toPer(Number(max) - Number(min), Number(val) - Number(min));
      trig.style.left = InValue + "px";
      path.style.width = InValue + "px";
      var style = "\n\t\t\t\t\t\t.textBox {\n\t\t\t\t\t\t  margin: 10px;\n\t\t\t\t\t\t  position: relative;\n\t\t\t\t\t\t  border-radius: 5px;\n\t\t\t\t\t\t  width: max-content;\n\t\t\t\t\t\t  background: white;\n\t\t\t\t\t\t  padding: 10px;\n\t\t\t\t\t\t  box-shadow: #271c3e 0 8px 20px -8px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.textBox label {\n\t\t\t\t\t\t  color: white;\n\t\t\t\t\t\t  background: #271c3e;\n\t\t\t\t\t\t  height: max-content;\n\t\t\t\t\t\t  font-size: 10px;\n\t\t\t\t\t\t  text-transform: uppercase;\n\t\t\t\t\t\t  position: absolute;\n\t\t\t\t\t\t  top: -5px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.rangeContainer {\n\t\t\t\t\t\t  padding: 10px 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.rangeContainer .range {\n\t\t\t\t\t\t  display: flex;\n\t\t\t\t\t\t  position: relative;\n\t\t\t\t\t\t  width: 100%;\n\t\t\t\t\t\t  height: 5px;\n\t\t\t\t\t\t  background: #e7e6ec;\n\t\t\t\t\t\t  box-shadow: white 0 0 5px 5px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.rangeContainer .range .trigger {\n\t\t\t\t\t\t  position: absolute;\n\t\t\t\t\t\t  height: 10px;\n\t\t\t\t\t\t  width: 10px;\n\t\t\t\t\t\t  border-radius: 50%;\n\t\t\t\t\t\t  background: #271c3e;\n\t\t\t\t\t\t  top: -2.5px;\n\t\t\t\t\t\t  z-index: 5;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.rangeContainer .range .trigger:hover {\n\t\t\t\t\t\t  border: #bb87ae 3px solid;\n\t\t\t\t\t\t  top: -4px;\n\t\t\t\t\t\t  box-sizing: content-box;\n\t\t\t\t\t\t  transition: 0.1s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.rangeContainer .range .edPath {\n\t\t\t\t\t\t  position: absolute;\n\t\t\t\t\t\t  height: 5px;\n\t\t\t\t\t\t  background: #271c3e;\n\t\t\t\t\t\t  z-index: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t";
      var stylEl = cover.appendChild(Elm("style"));
      stylEl.innerHTML = style;
      var shadow = this.attachShadow({
        mode: "closed"
      });
      shadow.appendChild(cover);
      var rangeWidth = window.getComputedStyle(range).width;
      var mouseX, mouseY;
      var elLeft;
      var elTop;
      var trigged = false;

      trig.onmousedown = function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        elLeft = range.getBoundingClientRect().left;
        elTop = range.getBoundingClientRect().top;
        trigged = true; //console.log(mouseX, mouseY)
      };

      range.onmousedown = function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var elLeft = range.getBoundingClientRect().left;
        var elTop = range.getBoundingClientRect().top;

        var _width = Number(rangeWidth.replace("px", ""));

        var mes = toPer(_width, e.clientX - elLeft);

        if (mes >= 0 && mes < 101) {
          _this.mes = mes;
          trig.style.left = "calc(" + Math.round(mes) + "% - 5px)";
          path.style.width = "calc(" + Math.round(mes) + "% - 5px)";
        }
      };

      document.onmouseup = function () {
        trigged = false;
      };

      document.onmousemove = function (e) {
        if (trigged) {
          var _width = Number(rangeWidth.replace("px", ""));

          var mes = toPer(_width, e.clientX - elLeft); //console.log(mes, _width)

          if (mes >= 0 && mes <= 101) {
            _this.mes = mes;
            trig.style.left = "calc(" + Math.round(mes) + "% - 5px)";
            path.style.width = "calc(" + Math.round(mes) + "% - 5px)";
          }
        }
      };
    }
  }, {
    key: "value",
    get: function get() {
      var tot = Number(this.getAttribute("max")) - Number(this.getAttribute("min"));
      return Number(this.getAttribute("min")) + Math.round(fromPer(tot, Math.round(this.mes)));
      ;
    },
    set: function set(value) {
      var min = Number(this.getAttribute("min"));
      var max = Number(this.getAttribute("max"));

      if (value >= min && value <= max) {
        var InValue = toPer(max - min, value - min);
        this.trig.style.left = "calc(" + InValue + "% - 5px)";
        this.path.style.width = "calc(" + InValue + "% - 5px)";
      } else {
        console.error("enter a possible value");
      }
    }
  }]);

  return slider;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.slider = slider;
},{}],"js/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var textBox_1 = require("./comp/textBox");

var container_1 = require("./comp/container");

var slider_1 = require("./comp/slider");

window.customElements.define("txt-box", textBox_1.textBox);
window.customElements.define("cont-in", container_1.container);
window.customElements.define("slid-in", slider_1.slider);
},{"./comp/textBox":"js/comp/textBox.js","./comp/container":"js/comp/container.js","./comp/slider":"js/comp/slider.js"}],"C:/Users/fmt/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49157" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/fmt/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/comp.js"], null)
//# sourceMappingURL=/comp.49920e85.js.map