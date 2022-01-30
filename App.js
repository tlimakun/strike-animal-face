import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
          initialRouteName="Home"
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
  return <App />;
};
