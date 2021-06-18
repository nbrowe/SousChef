import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {
  ProfileHomeScreen,
  UpdateEmailScreen
} from '../screens/index'

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='ProfileHome' component={ProfileHomeScreen} />
    <Stack.Screen name='UpdateEmail' component={UpdateEmailScreen} />
  </Stack.Navigator>
);

// Not yet sure what other screens would need to be configured here...

export default ProfileNavigator;