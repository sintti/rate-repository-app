import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    letterSpacing: 0.4,
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main
    })
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextPrimary: {
    color: theme.colors.textPrimary,
  },
  colorTextAppBar: {
    color: theme.appBar.textColor
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeMainheading: {
    fontSize: theme.fontSizes.mainheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textPrimary' && styles.colorTextPrimary,
    color === 'primary' && styles.colorPrimary,
    color === 'appBar' && styles.colorTextAppBar,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'mainheading' && styles.fontSizeMainheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];
  
  return <NativeText style={textStyle} {...props} />;
};

export default Text;