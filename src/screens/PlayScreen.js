import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";

// components
import Coin from "../components/Coin";
import Health from "../components/Health";
import RoundTimer from "../components/RoundTimer";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PlayScreen = () => {
  return (
    <SafeAreaView style={mainStyles.container}>
      <View style={headerStyles.container}>
        <View style={headerStyles.leftContainer}>
          <RoundTimer />
        </View>
        <View style={headerStyles.middleContainer}>
          <Text style={headerStyles.levelText}>NORMAL</Text>
        </View>
        <View style={headerStyles.rightContainer}>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={colors.underlayColor}
            style={headerStyles.button}
            onPress={() => console.log("Pause a game")}
          >
            <Icon name="controller-paus" type="entypo" size={25} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={bodyStyles.container}>
        <View style={bodyStyles.boardContainer}></View>
        <View style={bodyStyles.uiContainer}>
          <View style={bodyStyles.leftUIContainer}>
            <Coin />
          </View>
          <View style={bodyStyles.middleUIContainer}></View>
          <View style={bodyStyles.rightUIContainer}>
            <Health />
          </View>
        </View>
      </View>
      <View style={footerStyles.container}></View>
    </SafeAreaView>
  );
};

// styles for main Container
const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// styles for header components
const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  leftContainer: {
    flex: 2.5,
  },
  middleContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 2.5,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  levelText: {
    fontFamily: "VtcAle",
    fontSize: 25,
  },
  button: {
    width: 36,
    height: 36,
    borderWidth: 3,
    borderRadius: 7,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

// styles for body components
const bodyStyles = StyleSheet.create({
  container: {
    flex: 7,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  boardContainer: {
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#000000",
    flex: 9,
  },
  uiContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftUIContainer: {
    flex: 3,
  },
  middleUIContainer: {
    flex: 4,
    justifyContent: "center",
  },
  rightUIContainer: {
    flex: 3,
    justifyContent: "center",
  },
});

// styles for footer components
const footerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayScreen;
