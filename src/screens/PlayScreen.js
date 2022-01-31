import React, { useState, useEffect } from "react";
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
import { connect } from "react-redux";

import * as actions from "../redux/actions";

// components
import Coin from "../components/Coin";
import Health from "../components/Health";
import RoundTimer from "../components/RoundTimer";
import PauseModal from "../components/PauseModal";
import Board from "../components/Board";
import Start from "../components/Start";
import GameOverModal from "../components/GameOverModal";
import BestCoin from "../components/BestCoin";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PlayScreen = ({
  level,
  navigation,
  activateRound,
  deactivateRound,
  setTimeLeft,
  setHealth,
  resetCoin,
}) => {
  const [isPauseModalVisible, setIsPauseModalVisible] = useState(false);
  const [isGameOverModalVisible, setIsGameOverModalVisible] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      activateRound();
      return;
    }
  }, [isStarted]);

  const resumeGame = () => {
    setIsPauseModalVisible(false);
    if (isStarted) {
      activateRound();
    }
  };

  const resetGame = () => {
    setIsStarted(false);
    if (isPauseModalVisible) {
      setIsPauseModalVisible(false);
    }
    if (isGameOverModalVisible) {
      setIsGameOverModalVisible(false);
    }
    deactivateRound();
    resetCoin();
    setHealth(level.maxHealth);
    setTimeLeft(level.roundTime);
  };

  return (
    <SafeAreaView style={mainStyles.container}>
      <Modal
        visible={isPauseModalVisible}
        transparent={true}
        onRequestClose={resumeGame}
      >
        <PauseModal
          resumeGame={resumeGame}
          navigation={navigation}
          resetGame={resetGame}
        />
      </Modal>
      <Modal visible={isGameOverModalVisible} transparent={true}>
        <GameOverModal resetGame={resetGame} navigation={navigation} />
      </Modal>
      <View style={headerStyles.container}>
        <View style={headerStyles.leftContainer}>
          <RoundTimer />
        </View>
        <View style={headerStyles.middleContainer}>
          <Text style={headerStyles.levelText}>{level.name}</Text>
        </View>
        <View style={headerStyles.rightContainer}>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={colors.underlayColor}
            style={headerStyles.button}
            onPress={() => {
              setIsPauseModalVisible(true);
              deactivateRound();
            }}
          >
            <Icon name="controller-paus" type="entypo" size={25} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={bodyStyles.container}>
        <View style={bodyStyles.boardContainer}>
          {isStarted ? (
            <Board setIsGameOverModalVisible={setIsGameOverModalVisible} />
          ) : (
            <Start setIsStarted={setIsStarted} />
          )}
        </View>
        <View style={bodyStyles.uiContainer}>
          <View style={bodyStyles.leftUIContainer}>
            <Coin />
          </View>
          <View style={bodyStyles.middleUIContainer}>
            <BestCoin />
          </View>
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
    justifyContent: "center",
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

const mapStatetoProps = function ({ level }) {
  return { level: level };
};

export default connect(mapStatetoProps, actions)(PlayScreen);
