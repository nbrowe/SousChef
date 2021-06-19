import React from 'react';
import {
  Button,
  Text,
  TextInput
} from 'react-native';
import { ScreenContainer } from '../components/ui/index';

const UpdateEmailScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Change your email here</Text>
      <TextInput/>
      <Button title="Change it" />
    </ScreenContainer>
  );
}

export default UpdateEmailScreen;
