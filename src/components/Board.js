import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

import Animal from "./Animal";

const NUMBER_OF_ANIMALS = 20;

// component that render animals and control board behaviour
const Board = ({
  level,
  round,
  coin,
  health,
  deactivateRound,
  addTotalCoin,
  setTimeLeft,
  setIsGameOverModalVisible,
}) => {
  // random time between each animal appear
  const randomTimeBtwAppear = () => {
    return (
      Math.random() * (level.timeBtwAppear[1] - level.timeBtwAppear[0]) +
      level.timeBtwAppear[0]
    ).toFixed(2);
  };

  // random index of animal to be appear
  const randomIndex = () => {
    return Math.floor(Math.random() * (NUMBER_OF_ANIMALS + 1));
  };

  const [timeBtwAppear, setTimeBtwAppear] = useState(randomTimeBtwAppear());
  const [index, setIndex] = useState(randomIndex());

  useEffect(() => {
    if (!round.isRoundActivate) return;

    if (health.healthLeft <= 0 || round.timeLeft <= 0) {
      deactivateRound();
      addTotalCoin(coin.coin);
      setTimeLeft(0);
      setIsGameOverModalVisible(true);
      return;
    }

    if (timeBtwAppear <= 0) {
      setTimeBtwAppear(randomTimeBtwAppear());
      setIndex(randomIndex());
    }

    const timer = setInterval(() => {
      setTimeBtwAppear((timeBtwAppear - 0.06).toFixed(2));
    }, 10);

    return () => clearInterval(timer);
  }, [timeBtwAppear, round]);

  // render animals on board, the number of animals depending on NUMBER_OF_ANIMALS constant
  const renderAnimals = () => {
    return Array.from(Array(NUMBER_OF_ANIMALS)).map((item, i) => {
      return <Animal key={i} activate={index === i ? true : false} />;
    });
  };
  return <View style={styles.container}>{renderAnimals()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

const mapStatetoProps = function ({ level, round, coin, health }) {
  return { level: level, round: round, coin: coin, health: health };
};

export default connect(mapStatetoProps, actions)(Board);
