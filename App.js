// Nathaniel Rowe nbrowe@brandeis.edu
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  Home,
  Details,
  Search,
  Search2,
} from './Screens';

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Main Screen' component={Home} />
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

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name='Home' component={HomeStackScreen} />
    <Tabs.Screen name='Search' component={SearchStackScreen} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name='App' component={TabsScreen} />
  </RootStack.Navigator>
)

export default () => {
  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
