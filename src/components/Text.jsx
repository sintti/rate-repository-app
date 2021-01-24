import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme.js';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
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