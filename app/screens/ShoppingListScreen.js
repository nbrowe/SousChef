//ShoppingListScreen screen
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../config/styles';
import { ListBuilder, ScreenContainer } from '../components/ui/index';

const ShoppingListScreen = ({ navigation, route }) => {
  const [pantry, setPantry] = useState([]);
  const DBTARGET = route.params.dataTarget;

  return (
    <ScreenContainer>
      <Pressable
        onPress={() => navigation.push('AddPantryItem')}
        style={({ pressed }) => [styles.actionButton,
        {
          borderColor: '#995f2633',
          backgroundColor: pressed ? '#999926' : '#995f26'
        }]}
      >
        <Icon name='plus' size={30} color='white' />
      </Pressable>
      <ListBuilder
        listHeader="My Shopping List"
        listSubheader="Keep track of what you need to buy"
        listGetter={pantry}
        listSetter={setPantry}
        databaseTarget={DBTARGET}
      />
    </ScreenContainer>
  );
}

// layout:
// float an Add New button in bottom right
// thin list of items, separated by section
// backend data structure: general category, subcategory


export default ShoppingListScreen;
