function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const React = require('react');
const ReactNative = require('react-native');
const {
  TouchableNativeFeedback,
  View
} = ReactNative;
const Button = props => {
  return /*#__PURE__*/React.createElement(TouchableNativeFeedback, _extends({
    delayPressIn: 0,
    background: TouchableNativeFeedback.SelectableBackground() // eslint-disable-line new-cap
  }, props), props.children);
};
module.exports = Button;
//# sourceMappingURL=Button.android.js.map