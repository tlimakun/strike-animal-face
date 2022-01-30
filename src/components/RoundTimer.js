import React from "react";
import { View, Text, StyleSheet } from "react-native";

// colors
import colors from "../resources/color-info";

const RoundTimer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>30</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  timerText: {
    fontFamily: "MarkerFelt",
    fontSize: 30,
  },
});

export default RoundTimer;
