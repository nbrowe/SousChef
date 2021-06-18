import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  mainTitle: {
    color: 'red',
  },
  button: {
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  horizContainer: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10
  },
  bigPic: {
    height: 200,
    resizeMode: 'contain',
    width: '100%'
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10
  }
});

export default styles;