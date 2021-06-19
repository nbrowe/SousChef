import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  MainScreen,
  UserPantryScreen,
  AddPantryItemScreen
} from '../screens/index';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Main'
      component={MainScreen}
      options={{ title: "Main Screen" }}
    />
    <Stack.Screen
      name='ViewPantry'
      component={UserPantryScreen}
      options={{ title: "My Pantry" }}
    />
    <Stack.Screen
      name='Add'
      component={AddPantryItemScreen}
      options={{ title: "New Entry" }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
