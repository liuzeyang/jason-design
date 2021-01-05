'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd/dist/antd.css');
var React = require('react');
var antd = require('antd');
var classNames = require('classnames');
var KeyCode = require('rc-util/lib/KeyCode');
var useMergedState = require('rc-util/lib/hooks/useMergedState');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var KeyCode__default = /*#__PURE__*/_interopDefaultLegacy(KeyCode);
var useMergedState__default = /*#__PURE__*/_interopDefaultLegacy(useMergedState);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

var css_248z = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-sider-small .ant-sider-tab-btn {\n  padding: 8px 0;\n  font-size: 14px;\n}\n.ant-sider-large .ant-sider-tab-btn {\n  padding: 16px 0;\n  font-size: 16px;\n}\n.ant-sider {\n  display: flex;\n  overflow: hidden;\n}\n.ant-sider > .ant-sider-nav,\n.ant-sider > div > .ant-sider-nav {\n  position: relative;\n  display: flex;\n  flex: none;\n  align-items: center;\n}\n.ant-sider > .ant-sider-nav .ant-sider-nav-wrap,\n.ant-sider > div > .ant-sider-nav .ant-sider-nav-wrap {\n  position: relative;\n  display: inline-block;\n  display: flex;\n  flex: auto;\n  align-self: stretch;\n  overflow: hidden;\n  white-space: nowrap;\n  transform: translate(0);\n}\n.ant-sider > .ant-sider-nav .ant-sider-nav-wrap::before,\n.ant-sider > div > .ant-sider-nav .ant-sider-nav-wrap::before,\n.ant-sider > .ant-sider-nav .ant-sider-nav-wrap::after,\n.ant-sider > div > .ant-sider-nav .ant-sider-nav-wrap::after {\n  position: absolute;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.3s;\n  content: '';\n  pointer-events: none;\n}\n.ant-sider > .ant-sider-nav .ant-sider-nav-list,\n.ant-sider > div > .ant-sider-nav .ant-sider-nav-list {\n  position: relative;\n  display: flex;\n  transition: transform 0.3s;\n}\n.ant-sider > .ant-sider-nav .ant-sider-nav-operations,\n.ant-sider > div > .ant-sider-nav .ant-sider-nav-operations {\n  display: flex;\n  align-self: stretch;\n}\n.ant-sider > .ant-sider-nav .ant-sider-nav-operations-hidden,\n.ant-sider > div > .ant-sider-nav .ant-sider-nav-operations-hidden {\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n}\n.ant-sider-extra-content {\n  flex: none;\n}\n.ant-sider-tab {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  margin: 0 32px 0 0;\n  padding: 12px 0;\n  font-size: 14px;\n  background: transparent;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\n.ant-sider-tab-btn:focus,\n.ant-sider-tab-remove:focus,\n.ant-sider-tab-btn:active,\n.ant-sider-tab-remove:active {\n  color: #096dd9;\n}\n.ant-sider-tab-btn {\n  outline: none;\n  transition: all 0.3s;\n}\n.ant-sider-tab:hover {\n  color: #40a9ff;\n}\n.ant-sider-tab.ant-sider-tab-active .ant-sider-tab-btn {\n  color: #1890ff;\n  font-weight: 500;\n}\n.ant-sider-tab.ant-sider-tab-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-sider-tab.ant-sider-tab-disabled .ant-sider-tab-btn:focus,\n.ant-sider-tab.ant-sider-tab-disabled .ant-sider-tab-remove:focus,\n.ant-sider-tab.ant-sider-tab-disabled .ant-sider-tab-btn:active,\n.ant-sider-tab.ant-sider-tab-disabled .ant-sider-tab-remove:active {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-sider-content {\n  display: flex;\n  width: 100%;\n}\n.ant-sider-content-holder {\n  flex: auto;\n  min-width: 0;\n  min-height: 0;\n}\n.ant-sider-content-animated {\n  transition: margin 0.3s;\n}\n.ant-sider-tabpane {\n  flex: none;\n  width: 100%;\n  outline: none;\n}\n.sider-drawe {\n  position: absolute;\n  top: 240px;\n  z-index: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  text-align: center;\n  border-radius: 4px 0 0 4px;\n  cursor: pointer;\n  pointer-events: auto;\n}\n";
styleInject(css_248z);

var isReactFragment = function isReactFragment(child) {
  try {
    return child.type.toString() === React__default['default'].Fragment.toString();
  } catch (e) {
    return false;
  }
};

function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  React__default['default'].Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isReactFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

var SiderTabsContext = /*#__PURE__*/React.createContext({});

function TabNode(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      active = _ref.active,
      _ref$tab = _ref.tab,
      key = _ref$tab.key,
      tab = _ref$tab.tab,
      disabled = _ref$tab.disabled,
      closeIcon = _ref$tab.closeIcon,
      renderWrapper = _ref.renderWrapper,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onFocus = _ref.onFocus;
  var tabPrefix = "".concat(prefixCls, "-sider-tab");
  React.useEffect(function () {
    return onRemove;
  }, []);
  var nodeStyle = {};

  function onInternalClick(e) {
    if (disabled) return;
    onClick && onClick(e);
  }

  var node = /*#__PURE__*/React.createElement("div", {
    key: key,
    ref: ref,
    className: classNames__default['default'](tabPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(tabPrefix, "-active"), active), _defineProperty(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: nodeStyle,
    onClick: onInternalClick
  }, /*#__PURE__*/React.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-sider-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode__default['default'].SPACE, KeyCode__default['default'].ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, tab));

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

var TabNode$1 = /*#__PURE__*/React.forwardRef(TabNode);

var ExtraContent = function ExtraContent(_ref) {
  var position = _ref.position,
      prefixCls = _ref.prefixCls,
      extra = _ref.extra;
  if (!extra) return null;
  var content;
  var assertExtra = extra;

  if (position === 'right') {
    content = assertExtra.right || !assertExtra.left && assertExtra || null;
  }

  if (position === 'left') {
    content = assertExtra.left || null;
  }

  return content ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-sider-extra-content")
  }, content) : null;
};

function SiderTabNav(props, ref) {
  var _React$useContext = React.useContext(SiderTabsContext),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var className = props.className,
      style = props.style,
      id = props.id,
      activeKey = props.activeKey,
      extra = props.extra,
      children = props.children,
      onTabClick = props.onTabClick;
  var tabListRef = React.useRef();
  var tabNodes = tabs ? tabs.map(function (tab) {
    var key = tab.key;
    return /*#__PURE__*/React.createElement(TabNode$1, {
      id: id || key,
      prefixCls: prefixCls,
      key: key,
      tab: tab,
      closable: tab.closable,
      active: key === activeKey,
      renderWrapper: children,
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {},
      onFocus: function onFocus() {}
    });
  }) : [];
  /* eslint-disable jsx-a11y/interactive-supports-focus */

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "tablist",
    className: classNames__default['default']("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {// No need animation when use keyboard
    }
  }, /*#__PURE__*/React.createElement(ExtraContent, {
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-sider-nav-list")
  }, tabNodes), /*#__PURE__*/React.createElement(ExtraContent, {
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  }));
  /* eslint-enable */
}

var SiderTabNav$1 = /*#__PURE__*/React.forwardRef(SiderTabNav);

var DrawerWrp = function DrawerWrp(props) {
  return /*#__PURE__*/React__default['default'].createElement(antd.Drawer, Object.assign({}, props));
};

function parseTabList(children) {
  return toArray(children).map(function (node) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return _objectSpread2(_objectSpread2({
        key: key
      }, node.props), {}, {
        node: node
      });
    }

    return null;
  }).filter(function (tab) {
    return tab !== null;
  });
}

var SiderTabs = function SiderTabs(props) {
  var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      activeKey = props.activeKey,
      defaultActiveKey = props.defaultActiveKey,
      tabBarExtraContent = props.tabBarExtraContent,
      onChange = props.onChange,
      onTabClick = props.onTabClick,
      tabBarStyle = props.tabBarStyle,
      _props$width = props.width,
      width = _props$width === void 0 ? 300 : _props$width,
      getContainer = props.getContainer,
      children = props.children,
      destroyInactiveTabPane = props.destroyInactiveTabPane,
      drawerProps = _objectWithoutProperties(props, ["prefixCls", "className", "style", "size", "activeKey", "defaultActiveKey", "tabBarExtraContent", "onChange", "onTabClick", "tabBarStyle", "width", "getContainer", "children", "destroyInactiveTabPane"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var tabs = parseTabList(children);

  var _useContext = React.useContext(antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls(customizePrefixCls); // ====================== Active Key ======================

  var _useMergedState = useMergedState__default['default'](function () {
    var _tabs$;

    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];

  var _useState3 = React.useState(function () {
    return tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1]; // Reset active key if not exist anymore


  React.useEffect(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });

    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;

      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }

    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]); // =====================处理mask为false时，ant-drawer-content-wrapper的width导致的问题==============

  React.useEffect(function () {
    if (!drawerProps.mask) {
      var dom = document.querySelector('#sider-drawer .ant-drawer-content-wrapper');

      if (dom) {
        dom.style.width = "".concat(width, "px");
      }
    }

    return function () {};
  }, [drawerProps.mask, width]);

  function onInternalTabClick(key, e) {
    !visible && setVisible(true);
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    setMergedActiveKey(key);
    onChange === null || onChange === void 0 ? void 0 : onChange(key);
  }

  var tabNavBarProps = {
    activeKey: mergedActiveKey,
    onTabClick: onInternalTabClick,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: children
  };
  console.log(getContainer);
  return /*#__PURE__*/React__default['default'].createElement(SiderTabsContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/React__default['default'].createElement(DrawerWrp, Object.assign({
    visible: visible,
    width: width,
    onClose: function onClose() {
      return setVisible(false);
    },
    placement: "right",
    getContainer: getContainer
  }, drawerProps, {
    handler: /*#__PURE__*/React__default['default'].createElement("div", {
      className: classNames__default['default']('sider-drawe', _defineProperty({}, "".concat(prefixCls, "-sider-").concat(size), size), "".concat(prefixCls, "-sider"), className),
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        right: "".concat(width, "px")
      })
    }, /*#__PURE__*/React__default['default'].createElement(SiderTabNav$1, Object.assign({}, tabNavBarProps))),
    style: {
      zIndex: 999
    },
    id: 'sider-drawer'
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classNames__default['default']("".concat(prefixCls, "-sider-content"), {})
  }, tabs.map(function (tab) {
    return /*#__PURE__*/React__default['default'].cloneElement(tab.node, {
      key: tab.key,
      prefixCls: prefixCls,
      tabKey: tab.key,
      active: tab.key === mergedActiveKey,
      destroyInactiveTabPane: destroyInactiveTabPane
    });
  }))));
};

exports.SiderTabs = SiderTabs;
