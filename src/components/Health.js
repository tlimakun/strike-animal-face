import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

// colors
import colors from "../resources/color-info";

// this constant is dummy constant
// TODO: Remove this constant when there is max health and health left in redux
const health = {
  maxHealth: 3,
  healthLeft: 2,
};

// component that show player health left
const Health = () => {
  // render number of hearts, depending on player max health and health left
  const renderHealth = () => {
    return Array.from(Array(health.maxHealth)).map((item, i) => {
      return (
        <Icon
          key={i}
          name={i < health.healthLeft ? "heart" : "heart-outlined"}
          type="entypo"
          size={25}
          color={colors.heart}
        />
      );
    });
  };

  return <View style={styles.container}>{renderHealth()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Health;
