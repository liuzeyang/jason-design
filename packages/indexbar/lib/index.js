"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachPropertiesToComponent = attachPropertiesToComponent;
exports.default = void 0;

require("./IndexBar/index.less");

var _IndexBar = require("./IndexBar");

var _panel = require("./IndexBar/panel");

function attachPropertiesToComponent(component, properties) {
  var ret = component;

  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }

  return ret;
}

var _default = attachPropertiesToComponent(_IndexBar.IndexBar, {
  Panel: _panel.Panel
});

exports.default = _default;