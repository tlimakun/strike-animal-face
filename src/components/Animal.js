import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ANIMAL_SIZE = SCREEN_WIDTH * 0.15;

// component that render animal and control animal behaviour
const Animal = ({
  level,
  round,
  coin,
  health,
  activate,
  addTimeLeft,
  addCoin,
  setBestCoin,
  reduceHealth,
}) => {
  const randomAppearTime = () => {
    return (
      Math.random() * (level.appearTime[1] - level.appearTime[0]) +
      level.appearTime[0]
    ).toFixed(2);
  };

  const [appearTime, setAppearTime] = useState(null);
  const [isAppear, setIsAppear] = useState(false);
  const [isExtraTime, setIsExtraTime] = useState(false);

  useEffect(() => {
    if (activate) {
      setAppearTime(randomAppearTime());

      if (Math.random() <= level.extraTimePercent) {
        setIsExtraTime(true);
      }

      setIsAppear(true);
    }
  }, [activate]);

  useEffect(() => {
    if (!round.isRoundActivate) {
      setIsAppear(false);
      return;
    }

    if (!isAppear) return;

    if (appearTime <= 0) {
      setIsAppear(false);
      if (health.healthLeft > 0) {
        reduceHealth();
      }
      return;
    }

    const timer = setInterval(() => {
      setAppearTime((appearTime - 0.06).toFixed(2));
    }, 10);

    return () => clearInterval(timer);
  }, [round, appearTime, isAppear]);

  return (
    <View>
      {isAppear ? (
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            addCoin(level.obtainedCoin);
            if (isExtraTime) {
              addTimeLeft(level.extraTime);
            }
            if (level.obtainedCoin + coin.coin > coin.bestCoin) {
              setBestCoin(level.obtainedCoin);
            }
            setIsAppear(false);
          }}
        >
          <View style={[styles.animal, { backgroundColor: "red" }]} />
        </TouchableOpacity>
      ) : (
        <View style={[styles.animal, { backgroundColor: "#000000" }]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  animal: {
    width: ANIMAL_SIZE,
    height: ANIMAL_SIZE,
    margin: SCREEN_WIDTH * 0.03,
  },
});

const mapStatetoProps = function ({ level, round, coin, health }) {
  return { level: level, round: round, coin: coin, health: health };
};

export default connect(mapStatetoProps, actions)(Animal);
