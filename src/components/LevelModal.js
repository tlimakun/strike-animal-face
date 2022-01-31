import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import levels from "../resources/level-info";

import * as actions from "../redux/actions";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;

const LevelModal = ({
  deactivateRound,
  resetCoin,
  setHealth,
  setTimeLeft,
  selectLevel,
  navigation,
  setIsLevelModalVisible,
}) => {
  const Button = ({ name, level }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={colors.underlayColor}
        style={styles.button}
        onPress={() => {
          selectLevel(level);
          deactivateRound();
          resetCoin();
          setHealth(level.maxHealth);
          setTimeLeft(level.roundTime);
          setIsLevelModalVisible(false);
          navigation.navigate("Play");
        }}
      >
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Button name={levels.easy.name} level={levels.easy} />
        <Button name={levels.normal.name} level={levels.normal} />
        <Button name={levels.hard.name} level={levels.hard} />
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor={colors.underlayColor}
          style={[styles.button, { width: 50, height: 50 }]}
          onPress={() => setIsLevelModalVisible(false)}
        >
          <Icon name="home" type="entypo" size={30} />
        </TouchableHighlight>
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
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.9,
    borderRadius: SCREEN_WIDTH * 0.05,
    borderWidth: 4,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: SCREEN_WIDTH * 0.05,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: SCREEN_WIDTH * 0.4,
    height: 60,
    borderWidth: 4,
    borderRadius: 7,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "VtcAle",
    fontSize: 30,
  },
});

const mapStatetoProps = function ({ coin }) {
  return { coin: coin };
};

export default connect(mapStatetoProps, actions)(LevelModal);
