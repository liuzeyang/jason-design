'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/dist/antd.css');
var React = require('react');
var KeyCode = require('rc-util/lib/KeyCode');
var antd = require('antd');
var utils = require('@jason-design/utils');
var configProvider = require('antd/lib/config-provider');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var KeyCode__default = /*#__PURE__*/_interopDefaultLegacy(KeyCode);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "";
styleInject(css_248z);

var PopUp = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _useState = React.useState(props.visible || false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  React.useEffect(function () {
    if ('defaultVisible' in props) {
      setVisible(props.defaultVisible);
    }
  }, [props.defaultVisible]);

  var settingVisible = function settingVisible(value, e) {
    if (!('visible' in props)) {
      setVisible(value);
    }

    if (props.onVisibleChange) {
      props.onVisibleChange(value, e);
    }
  };

  var _onKeyDown = function onKeyDown(e) {
    if (e.keyCode === KeyCode__default['default'].ESC && visible) {
      settingVisible(false, e);
    }
  };

  var onVisibleChange = function onVisibleChange(value) {
    settingVisible(value);
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    var title = props.title;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "".concat(prefixCls, "-message-title")
    }, utils.getRenderPropValue(title)));
  };

  var _React$useContext = React__default['default'].useContext(configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      placement = props.placement,
      children = props.children,
      overlayClassName = props.overlayClassName,
      restProps = _objectWithoutProperties(props, ["prefixCls", "placement", "children", "overlayClassName"]);

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var prefixClsConfirm = getPrefixCls('popconfirm', customizePrefixCls);
  var overlayClassNames = classNames__default['default'](prefixClsConfirm, overlayClassName);
  return /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    placement: placement,
    onVisibleChange: onVisibleChange,
    visible: visible,
    overlay: renderOverlay(prefixCls),
    overlayClassName: overlayClassNames,
    ref: ref
  }), utils.cloneElement(children, {
    onKeyDown: function onKeyDown(e) {
      if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
        var _children$props$onKey, _children$props;

        children === null || children === void 0 ? void 0 : (_children$props$onKey = (_children$props = children.props).onKeyDown) === null || _children$props$onKey === void 0 ? void 0 : _children$props$onKey.call(_children$props, e);
      }

      _onKeyDown(e);
    }
  }));
});
PopUp.defaultProps = {
  transitionName: 'zoom-big',
  placement: 'top',
  trigger: 'click'
};

exports.PopUp = PopUp;
