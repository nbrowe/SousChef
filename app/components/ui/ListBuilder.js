//Main screen
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  ListItem,
  ScreenContainer
} from "./index";
import styles from '../../config/styles';

const ListBuilder = ( props ) => {
  let [list, setList] = useState([]);
  let [inputItemTitle, setItemTitle] = useState('');
  let [inputItemDesc, setItemDesc] = useState('');

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title || 'No title'}
      description={item.description}
    />
  );

  function subtitleArea(showQuantities) {
    if (showQuantities) {
      return (
        <Text style={styles.h2}>
          Specify a quantity if needed
        </Text>
      )
    }
  }

  function showDescription(s) {
    if (s) {
      return (
        <TextInput
          style={styles.input}
          placeholder='Description'
          onChangeText={setItemDesc}
          value={inputItemDesc}
        />
      );
    }
  }

  return (
    <ScreenContainer>
      <Text style={styles.h1}>
        Build My Pantry
      </Text>
      {subtitleArea(props.showQuantities)}
      <View>
        <TextInput
          style={styles.input}
          placeholder='Item'
          onChangeText={setItemTitle}
          value={inputItemTitle}
        />
        {showDescription(props.showQuantities)}
        <Button
          style={styles.button}
          onPress={e => {
            console.log(list.length, toString(list.length + 1));
            setList(list.concat({
              id: 'no' + list.length,
              title: inputItemTitle,
              description: inputItemDesc
            }));
            setItemTitle(''); // clear textinput
            setItemDesc('');  // clear this too
          }
          }
          title='Add to list'
        />
      </View>
      {/* <Text>{inputItemTitle}::{inputItemDesc}</Text> */}
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScreenContainer>
  );
}

export default ListBuilder;
