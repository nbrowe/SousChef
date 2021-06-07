import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SignIn, CreateAccount, Search, Home, Details, Search2 } from './Screens';

// const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />
    <HomeStack.Screen name='Details' component={Details} options={({ route }) => ({
      title: route.params.name
    })} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name='Search' component={Search} />
    <SearchStack.Screen name='Search2' component={Search2} />
  </SearchStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={HomeStackScreen} />
      <Tabs.Screen name='Profile' component={SearchStackScreen} />
    </Tabs.Navigator>
    {/* <AuthStack.Navigator>
      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <AuthStack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{ title: 'Create Account' }}
      />
  </AuthStack.Navigator> */}
  </NavigationContainer >
)
