import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/constants";
import SplashScreen from "./src/screens/Splash";
import Welcome from "./src/screens/Welcome";
import Forgot from "./src/screens/Forgot";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Browse from "./src/screens/Browse";
import Explore from "./src/screens/Explore";
import Settings from "./src/screens/Settings";


const Stack = createStackNavigator();

const UnShowHeader = {
  headerShown: false,
};

const UnShowHeaderTitle = {
  title: '',
}

const StackOptions = {
  headerStyle: {
    height: theme.sizes.base * 4,
    backgroundColor: theme.colors.white,
    borderBottomColor: "transparent",
    elevation: 0,
  },
  headerBackImage: () => <Image source={require('./src/icons/back.png')} />,
  headerBackTitle: null,
  headerLeftContainerStyle: {
    alignItems: 'center',
    marginLeft: theme.sizes.base * 2,
    paddingRight: theme.sizes.base,
  },
  headerRightContainerStyle: {
    alignItems: 'center',
    paddingRight: theme.sizes.base,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={StackOptions} >
        <Stack.Screen name="Splash" component={SplashScreen} options={UnShowHeader} />
        <Stack.Screen name="Welcome" component={Welcome} options={UnShowHeader} />
        <Stack.Screen name="Login" component={Login} options={UnShowHeaderTitle} />
        <Stack.Screen name="Forgot" component={Forgot} options={UnShowHeaderTitle} />
        <Stack.Screen name="SignUp" component={SignUp} options={UnShowHeaderTitle} />
        <Stack.Screen name="Browse" component={Browse} options={UnShowHeaderTitle} />
        <Stack.Screen name="Settings" component={Settings} options={UnShowHeaderTitle} />
        <Stack.Screen name="Explore" component={Explore} options={UnShowHeaderTitle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
