import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//// import styles from '../../config/styles';
// Don't import. We'll manage locally

const localStyles = StyleSheet.create({
  container: { // For the container itself
    backgroundColor: '#fcf',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16
  },
  description: { // aka subheading, details, etc.
    fontSize: 16,
    color: '#444'
  },
  title: { // Main identifier of the ListItem
    fontSize: 32,
    color: 'red'
  }
})

const ListItem = ({ title, description }) => (
  <View style={localStyles.container}>
    <Text style={localStyles.title}>{title}</Text>
    <Text style={localStyles.description}>{description}</Text>
  </View>
);

export default ListItem;