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
} from "../components/ui/index";
import styles from '../config/styles';

const MainScreen = () => {
  let [list, setList] = useState([]);
  let [inputItemTitle, setItemTitle] = useState('');
  let [inputItemDesc, setItemDesc] = useState('');

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title || 'No title'}
      description={item.description}
    />
  );

  return (
    <ScreenContainer>
      <Text style={styles.h1}>
        My Shopping List
      </Text>
      <Text style={styles.h2}>
        Specify a quantity if needed
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Item'
          onChangeText={setItemTitle}
          value={inputItemTitle}
        />
        <TextInput
          style={styles.input}
          placeholder='Description'
          onChangeText={setItemDesc}
          value={inputItemDesc}
        />
        <Button
          style={styles.button}
          onPress={e => {
            setList(list.concat({
              id: list.length + 1,
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

export default MainScreen;
