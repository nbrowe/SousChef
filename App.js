// from Tim Hickey
// 2021-06-03 09:12:00
import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';

//Below from reactnative.dev
const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Hoe"
//           component={HomeScreen}
//           options={{ title: 'WelcomeToMars' }}
//         />
//         <Stack.Screen name="Profie" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
//End copy

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      color='blue'
      title="go to bobby profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Bobby'})
      }
    />
  );
}

//Header template
const Header = (props) => {
  return (
    <View>
      <Text style={styles.helloText}>
      {props.text}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hoe"
          component={HomeScreen}
          options={{ title: 'WelcomeToMars' }}
        />
        <Stack.Screen name="Profie" component={ProfileScreen} />
      </Stack.Navigator>
      <View style={styles.container}>
        <Header text='Hola world!! '/>
        <Text>
          This shows how to use a custom component!
        </Text>
        <View style={styles.rowContainer}>
          <Text> Here is NO red button </Text>
          <Button
            color='blue'
            title='blue button.'
          />
        </View>
        <Text>
          Copyright Nathaniel Rowe 2021
        </Text>
      </View>
    </NavigationContainer>
  );
};

export default App;

// ################ STYLESHEET ###################

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection:'row',
  },
  helloText: {
    fontSize: 48,
    backgroundColor: '#afa'
  }
});
