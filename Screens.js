import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

// export const Home = () => (
//   <ScreenContainer>
//     <Text>Master List Screen</Text>
//     <Button title='React Native by Example'
//     //finish this
// )

export const Details = () => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);

// export const Search

// search2
