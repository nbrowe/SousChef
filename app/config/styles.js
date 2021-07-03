import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    bottom: 10,
    elevation: 3,
    height: 70,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    width: 70,
  },
  h1: {
    color: 'red',
    fontSize: 32
  },
  h2: {
    color: 'grey',
    fontSize: 16
  },
  header: {
    padding: 60,
    textAlign: 'center',
    backgroundColor: '#ccc05c',
    color: 'white',
    fontSize: 30,
  },
  button: {
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderColor: '#f0f0f0',
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    margin: 10,
    padding: 10,
  }
});

export default styles;