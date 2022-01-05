"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexBar = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _panel = require("./panel");

var _sidebar = require("./sidebar");

var _utils = require("./utils");

var _ahooks = require("ahooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var classPrefix = "jason-index-bar";
var defaultProps = {
  sticky: true
};
var IndexBar = /*#__PURE__*/(0, _react.forwardRef)(function (p, ref) {
  var props = (0, _utils.mergeProps)(defaultProps, p);
  var bodyRef = (0, _react.useRef)(null);
  var indexes = [];
  var panels = [];

  _react.default.Children.forEach(props.children, function (child) {
    if (! /*#__PURE__*/_react.default.isValidElement(child)) {
      return;
    }

    if (child.type !== _panel.Panel) {
      console.error('The children of `IndexBar` must be `IndexBar.Panel` components.');
      return;
    }

    indexes.push(child.props.index);
    panels.push( /*#__PURE__*/_react.default.createElement("div", {
      key: child.props.index,
      "data-index": child.props.index,
      className: "".concat(classPrefix, "-anchor")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(classPrefix, "-anchor-title")
    }, child.props.title || child.props.index), child.props.children));
  });

  var _useState = (0, _react.useState)(indexes[0]),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      scrollTo: scrollTo
    };
  });

  function scrollTo(index) {
    var body = bodyRef.current;
    if (!body) return;
    var children = body.children;

    for (var i = 0; i < children.length; i++) {
      var panel = children.item(i);
      if (!panel) continue;
      var panelIndex = panel.dataset['index'];

      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop;
        setActiveIndex(index);
        return;
      }
    }
  }

  var _useThrottleFn = (0, _ahooks.useThrottleFn)(function () {
    var body = bodyRef.current;
    if (!body) return;
    var scrollTop = body.scrollTop;
    var elements = body.getElementsByClassName("".concat(classPrefix, "-anchor"));

    for (var i = 0; i < elements.length; i++) {
      var panel = elements.item(i);
      if (!panel) continue;
      var panelIndex = panel.dataset['index'];
      if (!panelIndex) continue;

      if (panel.offsetTop + panel.clientHeight - 35 > scrollTop) {
        setActiveIndex(panelIndex);
        return;
      }
    }
  }, {
    wait: 50,
    trailing: true,
    leading: true
  }),
      checkActiveIndex = _useThrottleFn.run;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(classPrefix), _defineProperty({}, "".concat(classPrefix, "-sticky"), props.sticky))
  }, /*#__PURE__*/_react.default.createElement(_sidebar.Sidebar, {
    indexes: indexes,
    activeIndex: activeIndex,
    onActive: function onActive(index) {
      scrollTo(index);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classPrefix, "-body"),
    ref: bodyRef,
    onScroll: checkActiveIndex
  }, panels));
});
exports.IndexBar = IndexBar;