import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";
import { Font, AppLoading, Asset, Permissions } from "expo";
import { Feather } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import MainFlow from "./routes/";
import { BG_COLOR } from "./tools";
// J9ZJXLJMGZ;

const store = createStore(reducers);

class MainProcess extends Component {
  state = {
    isReady: false,
    mounted: false,
    database: null
  };
  _loadfonts = (...fonts) => fonts.map(font => Font.loadAsync(font));

  _loadImages = (...images) =>
    images.map(image => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status == "granted") {
      console.log("granted");
    }
    console.log(`[Mounted]`);
  }

  _loadAssets = async () => {
    const fontAssets = this._loadfonts(
      { MyIcon: require("../assets/Icons/fonts/piAutoBox.ttf") },
      { Roboto: require("native-base/Fonts/Roboto.ttf") },
      { Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf") },
      { font_light: require("../assets/Fonts/Raleway/Raleway-Light.ttf") },
      { font: require("../assets/Fonts/Raleway/Raleway-Regular.ttf") },
      { font_medium: require("../assets/Fonts/Raleway/Raleway-Medium.ttf") },
      { font_bold: require("../assets/Fonts/Raleway/Raleway-Bold.ttf") },
      { font_black: require("../assets/Fonts/Raleway/Raleway-Black.ttf") },
      Feather.font
    );

    const imgAssets = this._loadImages(
      require("../assets/icon.png"),
      require("../assets/splash.png"),
      require("../assets/Images/1.jpeg"),
      require("../assets/Images/2.jpeg"),
      require("../assets/Images/3.jpeg"),
      require("../assets/Images/4.jpeg"),
      require("../assets/Images/5.jpeg")
    );

    await Promise.all([...fontAssets, ...imgAssets])
      .then(() => console.log("done"))
      .catch(err => console.warn(err));
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssets}
          onError={console.warn}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.mainProcessStyle}>
            <MainFlow />
          </View>
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  mainProcessStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BG_COLOR
  }
});

export default MainProcess;
