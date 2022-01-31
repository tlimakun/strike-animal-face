import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LevelModal from "../components/LevelModal";

// colors
import colors from "../resources/color-info";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [isLevelModalVisible, setIsLevelModalVisible] = useState(false);
  const Button = ({ name, onPress }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={colors.underlayColor}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={isLevelModalVisible}
        transparent={true}
        onRequestClose={() => setIsLevelModalVisible(false)}
      >
        <LevelModal
          navigation={navigation}
          setIsLevelModalVisible={setIsLevelModalVisible}
        />
      </Modal>
      <View style={styles.titleContainer}>
        <Text style={styles.strikeText}>STRIKE</Text>
        <View style={styles.animalFaceContainer}>
          <Text style={styles.animalText}>ANIMAL </Text>
          <Text style={styles.faceText}>FACE</Text>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Button name="PLAY" onPress={() => setIsLevelModalVisible(true)} />
        <Button name="SHOP" onPress={() => navigation.navigate("Shop")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  menuContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  animalFaceContainer: {
    flexDirection: "row",
  },
  strikeText: {
    fontFamily: "VtcAle",
    fontSize: 90,
    color: colors.heart,
  },
  animalText: {
    fontFamily: "MarkerFelt",
    fontSize: 40,
  },
  faceText: {
    fontFamily: "MarkerFelt",
    fontSize: 40,
  },
  button: {
    width: SCREEN_WIDTH * 0.5,
    height: 60,
    borderWidth: 3,
    borderRadius: 7,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "MarkerFelt",
    fontSize: 30,
  },
});

export default HomeScreen;
