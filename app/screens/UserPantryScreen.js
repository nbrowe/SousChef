//UserPantryScreen screen
import React from 'react';
import { Text } from 'react-native';
import { ListBuilder, ScreenContainer } from "../components/ui/index";

const UserPantryScreen = ({ navigation, route }) => {
  return (
    <ScreenContainer>
      <ListBuilder showQuantities={route.params.showQuantities} />
      <Text>To be implemented later!!</Text>
    </ScreenContainer>
  );
}

export default UserPantryScreen;
