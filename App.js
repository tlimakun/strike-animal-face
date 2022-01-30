import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// screen
import HomeScreen from "./src/screens/HomeScreen";
import PlayScreen from "./src/screens/PlayScreen";
import ShopScreen from "./src/screens/ShopScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Play"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#FFFFFF" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Play" component={PlayScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => {
  const [fontsLoaded] = useFonts({
    MarkerFelt: require("./src/fonts/MarkerFelt.ttf"),
    NeonGlow: require("./src/fonts/NeonGlow.ttf"),
    VtcAle: require("./src/fonts/vtcsupermarkets-ale.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <App />;
};
