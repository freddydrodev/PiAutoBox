import React, { Component } from "react";
import { View, Text } from "native-base";
import { Font, AppLoading, Asset } from "expo";
import { Feather } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

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
    console.log(`[Mounted]`);
  }

  _loadAssets = async () => {
    const fontAssets = this._loadfonts(
      { Roboto: require("native-base/Fonts/Roboto.ttf") },
      { Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf") },
      { krub: require("../assets/Fonts/Krub/Krub-Regular.ttf") },
      { krub_light: require("../assets/Fonts/Krub/Krub-Light.ttf") },
      { krub_bold: require("../assets/Fonts/Krub/Krub-Bold.ttf") },
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
          <View>
            <Text style={{ fontFamily: "krub" }}>MainProcess</Text>
          </View>
        </Provider>
      );
    }
  }
}

export default MainProcess;
