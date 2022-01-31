import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Start = ({ setIsStarted }) => {
  const [countdown, setCountdown] = useState(5);
  const [isCountdown, setIsCountdown] = useState(false);

  useEffect(() => {
    if (!isCountdown) return;

    if (countdown <= 0) {
      setIsStarted(true);
      setIsCountdown(false);
      setCountdown(5);
      return;
    }

    const timer = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isCountdown, countdown]);

  return (
    <View style={styles.container}>
      {isCountdown ? (
        <Text style={styles.countdownText}>{countdown}</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setIsCountdown(true)}
        >
          <Text style={styles.startText}>START</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startText: {
    fontFamily: "VtcAle",
    fontSize: 80,
  },
  countdownText: {
    fontFamily: "VtcAle",
    fontSize: 150,
    color: "red",
  },
});

export default Start;
