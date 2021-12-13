import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { BookDetails } from "./src/screens";
import Tabs from "./src/navigations/tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            {/* Tabs */}
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="BookDetails" component={BookDetails} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </>
    );
  }
}
