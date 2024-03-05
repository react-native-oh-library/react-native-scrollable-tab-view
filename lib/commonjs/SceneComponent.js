"use strict";

const React = require('react');
const ReactNative = require('react-native');
const {
  Component
} = React;
const {
  View,
  StyleSheet
} = ReactNative;
const StaticContainer = require('./StaticContainer');
const SceneComponent = Props => {
  const {
    shouldUpdated,
    ...props
  } = Props;
  return /*#__PURE__*/React.createElement(View, props, /*#__PURE__*/React.createElement(StaticContainer, {
    shouldUpdate: shouldUpdated
  }, props.children));
};
module.exports = SceneComponent;
//# sourceMappingURL=SceneComponent.js.map