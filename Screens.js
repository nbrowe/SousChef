// Nathaniel Rowe 2021
// nbrowe@brandeis.edu
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput
} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  mainTitle: {
    color: 'red',
  },
  button: {
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  horizContainer: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10
  },
  bigPic: {
    height: 200,
    resizeMode: 'contain',
    width: '100%'
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(12);

  return (
    <ScreenContainer>
      <Text
        id='homeHeader'
        style={[styles.mainTitle, {fontSize: parseInt(number) || 12 }]}  // Using array op to combine
      >
        Lorem ipsum, change my font size
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder='type font size (Default: 12)' />
      <Image
        source={require('./assets/images/one.png')}
      />
      <View style={styles.horizContainer}>
        <Button
          style={styles.button}
          title="Inspect Image 1"
          onPress={() =>
            navigation.push("Details", {
              name: "Image 1",
              image: require('./assets/images/one.png')
            })
          }
        />
        <Button
          style={styles.button}
          title="Inspect Image 2"
          onPress={() =>
            navigation.push("Details", {
              name: "Image 2",
              image: require('./assets/images/two.png')
            })
          }
        />
      </View>
      {/* <Button
      style={styles.button}
      title="Open Drawer"
      onPress={() => navigation.toggleDrawer()}
    /> */}
    </ScreenContainer>
  );
}

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
    {route.params.image && <Image
      style={styles.bigPic}
      source={route.params.image}
    />}

  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="DummyNavigator"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "screen not implemented" }
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen for later implementation</Text>
  </ScreenContainer>
);

// export const Splash = () => (
//   <ScreenContainer>
//     <Text>Loading</Text>
//   </ScreenContainer>
// );
