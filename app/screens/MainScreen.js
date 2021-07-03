//ProfileHomeScreen screen
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ScreenContainer } from '../components/ui/index';
import styles from '../config/styles';

const MainScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={localStyles.mainView}>
        <Text style={[{ width: '100%' }, styles.header]}>
          SousChef.
        </Text>
      </View>
      <View style={localStyles.mainView}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#9fcc5b' : '#cc855b', },
            localStyles.button,
          ]}
          onPress={() => navigation.push('ViewPantry', {
            title: 'My Pantry',
            dataTarget: '@userPantry',
          })}>
          <Text style={localStyles.buttonText}>
            View My Pantry
          </Text>
        </Pressable>
        {/* Note that I can make these components later */}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#9fcc5b' : '#cc855b',
            },
            localStyles.button,
          ]}
          onPress={() => navigation.push('ViewShoppingList', {
            title: 'My Shopping List',
            dataTarget: '@userShoppingList',
          })}>
          <Text style={localStyles.buttonText}>
            View My Shopping List
          </Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const localStyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    minWidth: '48%',
    marginHorizontal: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  mainView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
    width: '100%',
  },
})

export default MainScreen;
