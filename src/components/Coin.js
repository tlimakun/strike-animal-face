import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

// colors
import colors from "../resources/color-info";

// component that show player obtained coin in current round
const Coin = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../resources/coin.png")}
        style={styles.coinImage}
      />
      <Text style={styles.coinText}>999</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  coinImage: {
    width: 25,
    height: 25,
  },
  coinText: {
    fontFamily: "MarkerFelt",
    fontSize: 20,
    color: colors.coin,
    paddingLeft: 5,
  },
});

export default Coin;
