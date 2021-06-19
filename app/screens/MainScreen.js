//ProfileHomeScreen screen
import React from 'react';
import { Button } from 'react-native';
import { ScreenContainer } from "../components/ui/index";

const MainScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Button
        title="Pantry List with Quantities"
        onPress={() => navigation.push('ViewPantry', { showQuantities: true })}
      />
      <Button
        title="Pantry List WITHOUT Quantities"
        onPress={() => navigation.push('ViewPantry', { showQuantities: false })}
      />
    </ScreenContainer>
  );
}

export default MainScreen;
