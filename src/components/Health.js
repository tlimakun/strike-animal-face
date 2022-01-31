import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

// colors
import colors from "../resources/color-info";

// component that show player health left
const Health = ({ level, health }) => {
  // render number of hearts, depending on player max health and health left
  const renderHealth = () => {
    return Array.from(Array(level.maxHealth)).map((item, i) => {
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

const mapStatetoProps = function ({ level, health }) {
  return { level: level, health: health };
};

export default connect(mapStatetoProps, null)(Health);
