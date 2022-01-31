import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Icon } from "react-native-elements";
import { Image } from "react-native-elements";
import { connect } from "react-redux";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;

// this modal appear when player lose the game
const GameOverModal = ({ coin, resetGame, navigation }) => {
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
        <View style={styles.textContainer}>
          <View style={styles.gameOverContainer}>
            <Text style={styles.gameText}>GAME </Text>
            <Text style={styles.overText}>OVER</Text>
          </View>
          <View style={styles.coinContainer}>
            <Text style={styles.coinText}>{coin.coin}</Text>
          </View>
          <View style={styles.bestCoinContainer}>
            <Image
              source={require("../resources/crown.png")}
              style={styles.coinImage}
            />
            <Text style={styles.bestCoinText}>{coin.bestCoin}</Text>
            <Image
              source={require("../resources/crown.png")}
              style={styles.coinImage}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
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
  },
  textContainer: {
    flex: 6,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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
  gameOverContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gameText: {
    fontFamily: "VtcAle",
    fontSize: 45,
  },
  overText: {
    fontFamily: "VtcAle",
    fontSize: 45,
    color: colors.heart,
  },
  coinImage: {
    width: 30,
    height: 30,
  },
  bestCoinContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  coinContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  coinText: {
    fontFamily: "MarkerFelt",
    fontSize: 80,
    color: colors.heart,
  },
  bestCoinText: {
    fontFamily: "MarkerFelt",
    fontSize: 20,
    color: colors.coin,
  },
});

const mapStatetoProps = function ({ coin }) {
  return { coin: coin };
};

export default connect(mapStatetoProps, null)(GameOverModal);
