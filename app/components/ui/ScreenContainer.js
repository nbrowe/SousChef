//ScreenContainer component
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight || 0, //does this work without SB?
    width: '100%',
  },
})

export default ScreenContainer;
