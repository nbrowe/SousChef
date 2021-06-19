import { StatusBar, StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
    container: {
      alignItems: "center",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      marginTop: StatusBar.currentHeight || 0  //does this work without SB?
    },
    h1: {
      color: 'red',
      fontSize: 32
    },
    h2: {
      color: 'grey',
      fontSize: 16
    },
    button: {
      borderRadius: 5,
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      height: 40,
      margin: 12,
      padding: 10
    }
  });

export default styles;