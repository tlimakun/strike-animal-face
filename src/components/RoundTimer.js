import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

// colors
import colors from "../resources/color-info";

const RoundTimer = ({ round, reduceTimeLeft }) => {
  const [isLowTimeLeft, setIsLowTimeLeft] = useState(false);

  useEffect(() => {
    if (!round.isRoundActivate) return;

    if (round.timeLeft > 0) {
      setIsLowTimeLeft(round.timeLeft <= 5 ? true : false);

      const timer = setInterval(reduceTimeLeft, 1000);

      return () => clearInterval(timer);
    }
  }, [round]);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.timerText,
          { color: isLowTimeLeft ? colors.heart : "#000000" },
        ]}
      >
        {round.timeLeft}
      </Text>
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

const mapStatetoProps = ({ round, health }) => {
  return { round: round, health, health };
};

export default connect(mapStatetoProps, actions)(RoundTimer);
