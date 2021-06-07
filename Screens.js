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

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading/-\+</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation}) => {
  return (
    <ScreenContainer>
      <Text>Sign IN SCREEN</Text>
      <Button title="Sign OON" onPress={() => alert('todo!')} />
      <Button title='Create ACCount' onPress={() => alert('todo!')} />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  return (
    <ScreenContainer>
      <Text>Create Account Screeeeen</Text>
      <Button title='Sign Upp' onPress={() => alert('todo!')} />
    </ScreenContainer>
  );
};
