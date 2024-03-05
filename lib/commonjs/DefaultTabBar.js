"use strict";

const React = require('react');
const ReactNative = require('react-native');
const DeprecatedPropTypes = require('deprecated-react-native-prop-types');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
const {
  StyleSheet,
  Text,
  View,
  Animated
} = ReactNative;
const Button = Platform.OS === 'ios' || Platform.OS === 'harmony' ? require('./Button.ios.js') : require('./Button.android.js');
const DefaultTabBar = createReactClass({
  displayName: "DefaultTabBar",
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: DeprecatedPropTypes.TextPropTypes.style,
    tabStyle: DeprecatedPropTypes.ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: DeprecatedPropTypes.ViewPropTypes.style
  },
  getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null
    };
  },
  renderTabOption(name, page) {},
  renderTab(name, page, isTabActive, onPressHandler) {
    const {
      activeTextColor,
      inactiveTextColor,
      textStyle
    } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    return /*#__PURE__*/React.createElement(Button, {
      style: {
        flex: 1
      },
      key: name,
      accessible: true,
      accessibilityLabel: name,
      accessibilityTraits: "button",
      onPress: () => onPressHandler(page)
    }, /*#__PURE__*/React.createElement(View, {
      style: [styles.tab, this.props.tabStyle]
    }, /*#__PURE__*/React.createElement(Text, {
      style: [{
        color: textColor,
        fontWeight
      }, textStyle]
    }, name)));
  },
  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0
    };
    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    });
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.tabs, {
        backgroundColor: this.props.backgroundColor
      }, this.props.style]
    }, this.props.tabs.map((name, page) => {
      const isTabActive = this.props.activeTab === page;
      const renderTab = this.props.renderTab || this.renderTab;
      return renderTab(name, page, isTabActive, this.props.goToPage);
    }), /*#__PURE__*/React.createElement(Animated.View, {
      style: [tabUnderlineStyle, {
        transform: [{
          translateX
        }]
      }, this.props.tabBarUnderlineStyle]
    }));
  }
});
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc'
  }
});
module.exports = DefaultTabBar;
//# sourceMappingURL=DefaultTabBar.js.map