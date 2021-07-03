//List builder
import React, { useState, useEffect } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import ScreenContainer from './ScreenContainer';
import styles from '../../config/styles';

const ListBuilder = (props) => {
  const [list, setList] = [props.listGetter, props.listSetter];
  const [dbSaved, setDbSaved] = useState(false); // Check if a DB write operation has occurred
  const [inputItemTitle, setItemTitle] = useState('');
  const [inputContent, setContent] = useState('');

  // We need to update the displayed list...
  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem(props.databaseTarget)
        if (jsonValue != null) {
          let data = JSON.parse(jsonValue)
          setList(data.list)
        } else {
          setList([])
        }
      } catch (e) {
        alert('Error on data lookup');
        console.dir(e)
      }
    }
    getData(); // (do the update here)
  }, [dbSaved]); // ...because the database was updated.

  const updateDatabase = async () => {
    let entry = {
      key: uuidv4(),
      title: inputItemTitle,
      content: inputContent,
    };
    let newList = list.concat(entry);
    const jsonValue = JSON.stringify({ list: newList });
    try {
      await AsyncStorage.setItem(props.databaseTarget, jsonValue);
      setItemTitle('');
      setContent('');
      setDbSaved(!dbSaved);
    } catch (e) {
      alert("error during list update");
      console.dir(e);
    }
  }

  const clearData = async () => {
    try {
      await AsyncStorage.multiRemove([props.databaseTarget]);
      setDbSaved(!dbSaved);
    } catch (e) {
      alert("error in clearData ");
      console.dir(e);
    }
  }

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title || 'No title'}
      content={item.content}
    />
  );

  const ListItem = ({ title, content }) => (
    <View style={localStyles.listItem}>
      <Text style={localStyles.cardTitle}>{title}</Text>
      <Text style={localStyles.cardContent}>{content}</Text>
    </View>
  );

  return (
    <ScreenContainer>
      <View style={localStyles.listTop}>
        <Text style={styles.h1}>
          {props.listHeader}
        </Text>
        <Text style={styles.h2}>
          {props.listSubheader}
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
            placeholder='Content'
            onChangeText={setContent}
            value={inputContent}
          />
          <View style={localStyles.buttonHolder}>
            <Button
              style={localStyles.builderButton}
              onPress={({ pressed }) => {
                console.log(list.length, toString(list.length + 1));
                updateDatabase();
              }}
              title='Add to list'
            />
            <Text style={{ width: 20 }}></Text>
            <Button
              style={localStyles.builderButton}
              onPress={() => {
                clearData();
              }}
              title='Clear my list'
            />
          </View>
        </View>
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={localStyles.listContainerStyle}
        numColumns='2'
        style={{width: '100%'}}
      />
    </ScreenContainer>
  );
}

const localStyles = StyleSheet.create({
  buttonHolder: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  builderButton: {
    margin: 10,
    padding: 10,
  },
  listContainerStyle: { // For flatlist
    borderWidth: 1,
    borderColor: '#dec6c3',
    backgroundColor: '#eed6d3',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  listItem: { // For the item itself
    borderWidth: 1,
    borderColor: '#d8a4a8',
    alignItems: 'stretch',
    backgroundColor: '#e8b4b8',
    padding: '2%',
    marginVertical: '1%',
    marginHorizontal: '2%',
    width: '46%',
  },
  cardContent: { // aka subheading, details, etc.
    fontSize: 16,
    color: '#a49393'
  },
  cardTitle: { // Main identifier of the ListItem
    fontSize: 24,
    color: '#67595e'
  },
  listAdderButton: {},
  listTop: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  }
})


export default ListBuilder;
