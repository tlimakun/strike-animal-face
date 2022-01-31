import React from "react";
import { View, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;

// this modal appear when player click on pause button
const PauseModal = ({ resumeGame, navigation, resetGame }) => {
  const Button = ({ name, onPress }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={colors.underlayColor}
        style={styles.button}
        onPress={onPress}
      >
        <Icon name={name} type="entypo" size={40} />
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Button name="reply" onPress={resumeGame} />
        <Button
          name="retweet"
          onPress={() => {
            resetGame();
          }}
        />
        <Button
          name="home"
          onPress={() => {
            resetGame();
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.modalBackground,
  },
  mainContainer: {
    flexDirection: "row",
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.4,
    borderRadius: SCREEN_WIDTH * 0.05,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: SCREEN_WIDTH * 0.05,
    elevation: 8,
  },
  button: {
    width: 60,
    height: 60,
    borderWidth: 4,
    borderRadius: 7,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PauseModal;
