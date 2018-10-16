import React from "react";
import { StyleSheet, View } from "react-native";
import MainProcess from "./src";
import { BG_COLOR } from "./src/tools";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainProcess />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center"
  }
});
