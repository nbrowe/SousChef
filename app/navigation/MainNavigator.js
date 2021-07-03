import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  MainScreen,
  UserPantryScreen,
  AddPantryItemScreen,
  ShoppingListScreen
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
      options={{ title: "My Pantry" }} // How can we set this per view?
    />
    <Stack.Screen
      name='ViewShoppingList'
      component={ShoppingListScreen}
      options={{ title: "My Shopping List" }} // How can we set this per view?
    />
    <Stack.Screen
      name='AddPantryItem'
      component={AddPantryItemScreen}
      options={{ title: "New Entry" }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
